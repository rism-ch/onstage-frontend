import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { createMarkup } from '../../model/markdownHelper';
import GlobalContext from '../../context/globalContext';

const MarkdownRenderer = ({ filename }) => {
    const { language } = useContext(GlobalContext);

    return (
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {createMarkup({ filename, language })}
        </ReactMarkdown>
    );
};

export default MarkdownRenderer;