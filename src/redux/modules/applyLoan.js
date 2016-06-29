const STEP = 'applyLoan/STEP';

const initialState = {
    step:1
}

export default function reducer(state=initialState,action={}) {
    switch (action.type){
        case STEP:
            return {
                step:action.step
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