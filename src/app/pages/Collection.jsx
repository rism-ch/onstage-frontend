import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import AnalysisContext from '../context/analysisContext';

import { generateCollections } from '../model/INDEXES';

const Collection = () => {
    const analysisContext = useContext(AnalysisContext);

    const { collection } = useParams();
    const navigate = useNavigate();

    if (generateCollections().some(c => c.field == collection)) {
        analysisContext.changeCollectionsSelectorHandler([collection]);
    }

    navigate('/');
};

export default Collection;