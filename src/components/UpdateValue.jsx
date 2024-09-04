import {useContext, useState} from 'react';
import { CurrentUserContext } from '../contexts/LevelContext';
import {Form, Button } from './Form';

export default function UpdateValue(){
    const [currUser, setCurrUser]= useState(null);

    return (
        <CurrentUserContext.Provider value={{
            currUser, setCurrUser
        }}>
            <Form><LoginButton/></Form>
        </CurrentUserContext.Provider>
    )
}

function LoginButton(){
    const {
        currUser, setCurrUser
    }=useContext(CurrentUserContext);

    if(currUser !==null){
        return <p>You logged in as {currUser.name}.</p>;
    }

    return (
        <Button onClick ={()=>{
            setCurrUser({
                name: 'Ash'
            })
        }}>
            Log in as Ash
        </Button>
    );
}