import RestClient from '../service/RestClient';

export const normalizeFacetsResults = list => {
    let normalized = [];

    list.forEach((value, index) => {
        if (index % 2 === 0) {
            normalized.push({ label: value });
        } else {
            Object.assign(normalized[(index - 1) / 2], {
                count: value
            });
        }
    });

    normalized.sort(function(a, b) {
        return a.label.toLowerCase().localeCompare(b.label.toLowerCase());
    })

    // Collate all the results
    
    var collator = new Intl.Collator("fr");
    normalized.sort(function(a, b) {
        return collator.compare(a.label[0], b.label[0])
    })
    return normalized;
};

const debug = query => {
    if (DEBUG) {
        console.log(query.url, query.config && query.config.params);
    }

    return query;
};

export const search = ({ facets = {}, filters = [], collections = [], ...params }) => {

    const query = debug({
        url: `${SOLR_BASE_SERVER}/api/search`,
        config: {
            params: {
                ...params,
                facets,
                filters,
                collections
            }
        }
    });

    return RestClient.get(query).then(r => r);
};

export const browse = params => {

    const query = debug({
        url: `${SOLR_BASE_SERVER}/api/browse`,
        config: { params }
    });

    return RestClient.get(query).then(r => r.terms && r.terms[params.index]);
};

export default {
    search,
    browse,
    normalizeFacetsResults
};