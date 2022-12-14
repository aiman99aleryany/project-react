import { nanoid } from 'nanoid';
import React, { ReactElement, useState } from 'react';
import NavBar from './NavBar';
import { initStore, getStore, setStore } from '../store/store';

const QUOTES_STORE_KEY = 'quotes';

interface quote {
    id: string;
    timeStamp: number;
    content: string;
    isEdited: boolean;
}

const INIT_QUOTES: quote[] = [
    {
        id: nanoid(),
        timeStamp: Date.now(),
        content: 'First Quote',
        isEdited: false,
    },
];
initStore(QUOTES_STORE_KEY, INIT_QUOTES);

const Home = (): ReactElement => {
    const [newQuote, setNewQuote]: [string, any] = useState('');
    const [editQuote, setEditQuote]: [string, any] = useState('');
    const [quotes, setQuotes] = useState(INIT_QUOTES);

    const handleNewQuote = (e: any): void => setNewQuote(e.target.value);

    const handleEditQuote = (e: any): void => setEditQuote(e.target.value);

    const postQuote = (): void => {
        if (newQuote === '') return;
        setQuotes((oldQuotes: quote[]): quote[] => {
            const brandQuote: quote = {
                id: nanoid(),
                timeStamp: Date.now(),
                content: newQuote,
                isEdited: false,
            };
            return [...oldQuotes, brandQuote];
        });
        setNewQuote('');
    };

    const toggleQuoteEdition = (quoteId: string): void => {
        setQuotes((oldQuotes: quote[]) =>
            oldQuotes.map((currentQuote: quote) => {
                setEditQuote(currentQuote.content);
                const brandQuote: quote = { ...currentQuote, isEdited: !currentQuote.isEdited };
                return currentQuote.id === quoteId ? brandQuote : currentQuote;
            })
        );
    };

    const deleteQuote = (quoteId: string): void => {
        setQuotes((oldQuotes: quote[]) =>
            oldQuotes.filter((currentQuote: quote) => currentQuote.id !== quoteId)
        );
    };

    const editQuoteContent = (quoteId: string): void => {
        setQuotes((oldQuotes: quote[]) =>
            oldQuotes.map((currentQuote: quote): quote => {
                const brandQuote: quote = {
                    ...currentQuote,
                    content: editQuote ? editQuote : currentQuote.content,
                    timeStamp: Date.now(),
                };
                return currentQuote.id === quoteId ? brandQuote : currentQuote;
            })
        );
        toggleQuoteEdition(quoteId);
        setEditQuote('');
    };

    setStore(QUOTES_STORE_KEY, quotes);
    return (
        <div>
            <NavBar></NavBar>
            <div className="home">
                <textarea
                    cols={30}
                    rows={10}
                    value={newQuote}
                    onChange={handleNewQuote}
                    placeholder="What's in your mind?"
                ></textarea>
                <button onClick={postQuote}>Post</button>
                {/*Create a component to pass data it and represent it*/}
                <ul>
                    {quotes.map(({ id, content, timeStamp, isEdited }: quote) =>
                        isEdited ? (
                            <li key={id}>
                                <textarea
                                    cols={30}
                                    rows={10}
                                    value={editQuote}
                                    onChange={handleEditQuote}
                                ></textarea>
                                <button onClick={() => toggleQuoteEdition(id)}>Unedit</button>
                                <button onClick={() => editQuoteContent(id)}>Confirm</button>
                            </li>
                        ) : (
                            <li key={id}>
                                <time>{timeStamp}</time>
                                <span>{content}</span>
                                <button onClick={() => toggleQuoteEdition(id)}>Edit</button>
                                <button onClick={() => deleteQuote(id)}>Delete</button>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Home;
