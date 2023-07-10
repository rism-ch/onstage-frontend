import { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import AnalysisContext from '../context/analysisContext';
import SearchContext from '../context/searchContext';

import { collectionByURL } from '../model/INDEXES';

const Collection = () => {
    const analysisContext = useContext(AnalysisContext);
    const searchContext = useContext(SearchContext); 

    const { collection } = useParams();
    const navigate = useNavigate();

    const match = collectionByURL(collection);

    useEffect(() => {
        if (match) {
            analysisContext.changeCollectionsSelectorHandler([match]);
            searchContext.searchFormSubmitHandler();
            navigate('/search');
        } else {
            navigate('/');
        }
    }, [match]);

    return null;
};

export default Collection;