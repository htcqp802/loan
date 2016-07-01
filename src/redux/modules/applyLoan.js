const LOAD = 'applyLoan/LOAD';
const LOAD_SUCCESS = 'applyLoan/LOAD_SUCCESS';
const LOAD_FAIL = 'applyLoan/LOAD_FAIL';
const CACULATE = 'applyLoan/CACULATE';

const initialState = {
    loading: false,
    loadError: null
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case CACULATE:
            const {values:{payWay, cAmount, loanTime, cNll, payedYear, payedMounth}} = action;
            let result;
            switch (Number(payWay)) {
                case 1:
                    result = cAmount*10000 * (1 - (payedYear * 12 + payedMounth) / (loanTime * 12));
                    break;
                case 2:
                    result = cAmount*10000 * (1 - (Math.pow(1 + (cNll/100) / 12, (payedYear * 12 + payedMounth)) - 1) / (Math.pow(1 + (cNll/100) / 12, loanTime * 12) - 1));
                    break;
                case 3:
                    result = (payedYear * 12 + payedMounth) < loanTime * 12 ? cAmount*10000 : 0;
                    break;
                default:
                    return state;
            }
            return {
                ...state,
                result:result.toFixed(2)
            }
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

export function caculate(values) {
    return {
        type: CACULATE,
        values
    }
}