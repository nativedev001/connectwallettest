import { BUY_ICE } from "./actionType";

const InitialIceQuantity = {
    numOfIceCups: 200,
}

const IceReducer = (state = InitialIceQuantity, action) => {
    switch (action.type) {
        case BUY_ICE:
            return {
                ...state,
                numOfIceCups: state.numOfIceCups - 1,
            }
        default: return state;
    }
}

export default IceReducer;