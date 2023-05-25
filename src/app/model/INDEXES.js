import { t } from '../i18n';

export const renderFacetLabel = key => t(`common.indexes.${key}`) || key;
export const renderCollectionLabel = key => t(`common.collections.${key}`) || key;

export const generateSearchIndexes = () => [
    { label: renderFacetLabel('composer_ss'), value: 'composer_txt' },
    { label: renderFacetLabel('interpreter_ss'), value: 'interpreter_txt' },
    { label: renderFacetLabel('place_ss'), value: 'place_txt' },
    { label: renderFacetLabel('series_s'), value: 'series_txt' },
];

export const generateBrowseIndexes = () => [
    { label: renderFacetLabel('composer_ss'), value: 'composer_ss' },
    { label: renderFacetLabel('interpreter_ss'), value: 'interpreter_ss' },
    { label: renderFacetLabel('place_ss'), value: 'place_ss' },
    { label: renderFacetLabel('series_s'), value: 'series_s' },
    { label: renderFacetLabel('year_is'), value: 'year_is' },
];

export const DEFAULT_FACETS = [
    'composer_ss',
    'interpreter_ss',
    'place_ss',
    'collection_s',
    'series_s',
    'year_is'
];

export const generateCollections = () => [
    { field: 'ch_gc', label: renderCollectionLabel('ch_gc') },
    { field: 'ch_gm', label: renderCollectionLabel('ch_gm') },
    { field: 'ch_lac', label: renderCollectionLabel('ch_lac') },
    { field: 'ch_famb', label: renderCollectionLabel('ch_famb') }
];

export const collectionByURL = (url) => {
    const match = {
        'CH-Gc': 'ch_gc',
        'CH-Gmu': 'ch_gm',
        'CH-LAc': 'ch_lac',
        'FAMB': 'ch_famb',

    };

    return match[url] || false;
};

export default {
    generateSearchIndexes,
    generateBrowseIndexes,
    DEFAULT_FACETS,
    generateCollections
};