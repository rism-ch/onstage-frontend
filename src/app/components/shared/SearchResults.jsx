import React from 'react';

import { t } from '../../i18n';

import SearchResultsItem from '../template/components/SearchResultsItem.jsx';

import ActionLink from '../template/components/ActionLink.jsx';
import { PrimaryButtonSmall } from '../template/components/Buttons.jsx';
import FlexWrapper from '../template/components/FlexWrapper.jsx';
import { PinIcon } from '../template/components/Icons.jsx';

import {normalizeDates} from '../../model/Solr';

const SearchResults = ({ searchResults, setSearchSelected, togglePinnedDocument, isPinned }) => searchResults.results.map(element => (
    <SearchResultsItem key={element.id}>
        <FlexWrapper justifyContent="space-between" alignItems="center">
            <FlexWrapper style={{ width: '70%' }}>
                <ActionLink action={() => setSearchSelected(element)}>
                    <img src={`https://iiif.rism.digital/image/lausanne/${element.images_ss[0]}/full/40,/0/default.jpg`} />
                </ActionLink>
                <div style={{ marginLeft: '1.5em', flex: '1', overflow: 'hidden' }}>
                    <ActionLink action={() => setSearchSelected(element)}>{element.title_s}</ActionLink>
                    {element.place_ss ? element.place_ss.join(" - ") : "[s.l.]"}
                    <br />
                    <span className="small">{normalizeDates(element.fulldate_ss)}</span>
                </div>
            </FlexWrapper>
            <PrimaryButtonSmall action={() => togglePinnedDocument(element)}>
                {isPinned(element) ? t('search.actions.unpin') : t('search.actions.pin')}
            </PrimaryButtonSmall>
            <PinIcon className="icon" fill={isPinned(element) ? '#00b5d6' : '#ccc'} />
        </FlexWrapper>
    </SearchResultsItem>
));

export default SearchResults;