import { Success, Secondary, Primary, Error, Info, Warning, Show } from "../Actions/Massege/MassegeTyps";


function MassegeReducer(state, action) {
    switch (action.type) {
        case Success:
            return action.payload;

        case Secondary:
            return action.payload;

        case Primary:
            return action.payload

        case Error:
            return action.payload

        case Info:
            return action.payload

        case Warning:
            return action.payload

        case Show:
            return {...action.payload,isOpen:true,someText:"some random text"}

        default:
            return state;
    }

}
export default MassegeReducer;