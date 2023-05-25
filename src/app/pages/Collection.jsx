import { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import AnalysisContext from '../context/analysisContext';

import { collectionByURL } from '../model/INDEXES';

const Collection = () => {
    const analysisContext = useContext(AnalysisContext);

    const { collection } = useParams();
    const navigate = useNavigate();

    const match = collectionByURL(collection);

    useEffect(() => {
        if (match) {
            analysisContext.changeCollectionsSelectorHandler([match]);
            navigate('/search');
        } else {
            navigate('/');
        }
    }, [match]);

    return null;
};

export default Collection;