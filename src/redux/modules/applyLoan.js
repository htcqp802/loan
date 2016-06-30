const STEP = 'applyLoan/STEP';
const LOAD = 'applyLoan/LOAD';
const LOAD_SUCCESS = 'applyLoan/LOAD_SUCCESS';
const LOAD_FAIL = 'applyLoan/LOAD_FAIL';

const initialState = {
    loading:false,
    step:1
}

export default function reducer(state=initialState,action={}) {
    switch (action.type){
        case STEP:
            return {
                ...state,
                step:action.step
            }
        case LOAD:
            console.log(111)
            return{
                ...state,
                loading:true,
                loaded:false
            }
        case LOAD_SUCCESS:
            console.log(222)
            return{
                ...state,
                loading:false,
                loaded:true,
                data:action.result
            }
        case LOAD_FAIL:
            console.log(action)
            return{
                ...state,
                loading:false,
                loaded:false,
                data:action.error
            }
        default:
            return state;
    }
}

export function setStep(step) {
    return{
        type:STEP,
        step:step
    }
}

export function loadCommunity(keyValue) {
    return{
        types:[LOAD,LOAD_SUCCESS,LOAD_FAIL],
        promise:(client)=>client.post('/api/v2/house/constructionList',{
            keyword:keyValue
        })
    }
}