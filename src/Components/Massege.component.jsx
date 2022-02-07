import { useContext } from 'react';
import { msgContex } from '../Context/MassegeContex';

import React from 'react';
import Alert from '@mui/material/Alert';



const Massege = () => {
    const { state } = useContext(msgContex);
    console.log(state);
    if (state.isOpen === true) {
        return (
            <div>
                <h1>THIS IS MASSEGE</h1>
                <h3>{state.someText}</h3>
            </div>
        )
    }
    else {
        return <Alert severity="warning">This is a warning alert — check it out!</Alert>
    }
}
export default Massege;