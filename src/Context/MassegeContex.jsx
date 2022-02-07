import { useReducer, createContext } from "react";
import MassegeReducer from '../Reducers/MassegeReducers';


export const msgContex = createContext();

const MassegeProvider = ({children})=>{
    const [state, dispatch] = useReducer(MassegeReducer,{isOpen:false})

    return(
        <msgContex.Provider value={{state, dispatch}}> 
            {children}
        </msgContex.Provider>
    )
}
export default MassegeProvider;