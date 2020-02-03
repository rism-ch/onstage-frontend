import React, { useContext } from 'react';

import { Link, withRouter } from 'react-router-dom';

import { SearchIcon, BrowseIcon, PinIcon } from './Icons.jsx';
import { ClearButton } from './Buttons.jsx';
import AnalysisContext from '../../../context/analysisContext';

const SidebarWithRoute = props => {

    const isActive = (path) => props.location.pathname.includes(path);

    const { pinnedDocuments } = useContext(AnalysisContext);

    return (
        <div className="sidebar-root">
            <Link to="/search">
                <ClearButton isActive={isActive('search')}>
                    <SearchIcon />
                </ClearButton>
            </Link>

            <Link to="/browse">
                <ClearButton isActive={isActive('browse')}>
                    <BrowseIcon />
                </ClearButton>
            </Link>

            <Link to="/pin">
                <ClearButton isActive={isActive('pin')}>
                    {pinnedDocuments.length > 0 && <span className="badge">{pinnedDocuments.length}</span>}
                    <PinIcon />
                </ClearButton>
            </Link>
        </div>
    );
};

export const Sidebar = withRouter(SidebarWithRoute);