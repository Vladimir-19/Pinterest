export const SEARCH = 'SEARCH';

export const updateSearch = (query, value) => {
    return {
        type: SEARCH,
        query,
        value
    };
};

export const search = (query, vlaue) => (dispatch) => {
    return dispatch(updateSearch(query, value));
}