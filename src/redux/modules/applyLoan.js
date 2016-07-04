const LOAD = 'applyLoan/LOAD';
const LOAD_SUCCESS = 'applyLoan/LOAD_SUCCESS';
const LOAD_FAIL = 'applyLoan/LOAD_FAIL';

const initialState = {
    loading: false,
    loadError: null
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD:
            return {
                ...state,
                loading: true,
                loadError: null
            }
        case LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.result,
                loadError: null
            }
        case LOAD_FAIL:
            return {
                ...state,
                loading: false,
                loadError: action.error
            }
        default:
            return state;
    }
}


export function loadCommunity(keyValue) {
    return {
        types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
        promise: (client)=>client.post('/api/v2/house/constructionList', {
            data: {keyword: keyValue}
        })
    }
}
