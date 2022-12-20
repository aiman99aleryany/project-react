import { ReactElement, useState } from 'react';
import { stateString } from '../../../types/useStateTypes';
import { ContentContext } from '../../../context/Context';
import { useContext } from 'react';

const NewContent = (): ReactElement => {
    const { newContent, setNewContent } = useContext(ContentContext);

    const handleNewContent = (e: any): void => setNewContent(e.target.value);

    return (
        <div>
            <textarea
                cols={30}
                rows={10}
                value={newContent}
                onChange={handleNewContent}
                placeholder="What's in your mind?"
            ></textarea>
        </div>
    );
};

export default NewContent;
