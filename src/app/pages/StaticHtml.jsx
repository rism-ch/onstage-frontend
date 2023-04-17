import React from 'react';

import { useParams } from 'react-router-dom';

import Template from '../components/template/Template.jsx';
import MarkdownRenderer from '../components/wrappers/MarkdownRenderer.jsx';

const StaticHtmlPage = () => {
    const { filename } = useParams();

    return (
        <Template>
            <MarkdownRenderer filename={filename} />
        </Template>
    );

};

export default StaticHtmlPage;