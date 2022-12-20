import NavBar from '../../navbar/NavBar';
import NewContent from '../deps/NewContent';
import { useState, ReactElement } from 'react';
import { QuotesContext, ContentContext } from '../../../context/Context';

const Home = (): ReactElement => {
    const [quotes, setQuotes] = useState([]);
    const [newContent, setNewContent] = useState('');

    return (
        <div>
            <NavBar />
            <QuotesContext.Provider value={{ quotes, setQuotes }}>
                <ContentContext.Provider value={{ newContent, setNewContent }}>
                    <NewContent />
                </ContentContext.Provider>
            </QuotesContext.Provider>
        </div>
    );
};

export default Home;
