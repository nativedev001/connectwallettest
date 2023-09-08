import { BUY_CAKE } from "./cakeTypes"

const initialeState = {
    numOfcakes: 20,
}

const reducer = (state = initialeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfcakes: state.numOfcakes - action.payload,
            }

        default: return state;
    }
}


export default reducer