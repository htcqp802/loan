const LOAD = 'test/LOAD';
const LOAD_SUCCESS = 'test/LOAD_SUCCESS';
const LOAD_FAIL = 'test/LOAD_FAIL';

const initialState = {
    loaded:false,
    text:"hello redux"
}

export default function reducer(state=initialState,action={}) {
    switch (action.type){
        case LOAD:
            console.log('loading......')
            return {
                ...state,
                loading:true,
                loaded:false
            }
        case LOAD_SUCCESS:
            console.log('success......')
            return {

                ...state,
                loading:false,
                loaded:true,
                data:action.result
            }
        case LOAD_FAIL:
            console.log('fail......')
            return {
                ...state,
                loading:false,
                loaded:false,
                data:action.error
            }
        default:
            return state
    }
}

export function load(){
    return {
        types:[LOAD,LOAD_SUCCESS,LOAD_FAIL],
        promise:(client)=>client.get('/api/v2/home/crowdFundingScroll')
    }
}
