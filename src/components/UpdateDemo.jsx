import { ThemeContext } from "../contexts/LevelContext";
import { useState } from "react";
import { Form } from "./Form";

export default function UpdateDemo(){
    const [theme, setTheme]= useState('light');

    return (
        <ThemeContext.Provider value={theme}>
            <Form/>
            <label htmlFor="">
                    <input type="checkbox" 
                    checked={theme==='dark'}
                    onChange={(e)=>{
                        setTheme(e.target.checked? 'dark': 'light')
                    }}
                    />
                    Dark Mode
                </label>
        </ThemeContext.Provider>
    );
}