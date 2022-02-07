import Massege from "./Massege.component";
import { useContext } from "react";
import { msgContex } from "../Context/MassegeContex";
import {success,secondary, primary, error, info, warning, show} from '../Actions/Massege/MassegeActions';


const Home = ()=>{
    const {dispatch} = useContext(msgContex);
    return(
        <div>
            <h1>THIS IS HOME PAGE</h1>
            <button onClick={()=>dispatch(show({isOpen:true}))}>Button</button>

            <Massege></Massege>
        </div>
    )
}
export default Home;