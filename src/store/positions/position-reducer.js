import { ADD_POSITION } from "./position-actions";

const positionReducer = (state = [], actions) => {
    switch(actions.type){
        case ADD_POSITION:
            return actions.positions
        default: 
            return state
    }
}

export default positionReducer