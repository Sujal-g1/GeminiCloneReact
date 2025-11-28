import { createContext, useState } from "react";
import  runGenerativeModel from '../config/Gemini'

export const Context = createContext();

const ContextProvider = (props) =>{

    const [input , setInput] = useState('')
    const [recentprompt , setRecentprompt] = useState('')
    const [prevprompt , setPrevprompt] = useState([])
    const [showresult , setShowresult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultdata, setResultdata] = useState('')
 
    const delayPara = (index ,nextWord) =>{
            setTimeout(() => {
                setResultdata(prev => prev+nextWord)
            },75*index );
    }

    const onSent = async(prompt) =>{
        setResultdata('')
        setLoading(true)
        setShowresult(true)
        setRecentprompt(input)
        const response = await runGenerativeModel(input)
        let resposneArray = response.split("**")
        let newResponse;
        for(let i=0; i<resposneArray.length; i++){
             if(i===0 || i%2 !==1){
                newResponse += resposneArray[i];
             }
             else{
                newResponse += "<b>" + resposneArray[i] + "</b>"
             }
        }

        let newResponse2 = newResponse.split("*").join("</br>")
       let newResponseArray = newResponse2.split(" ");
       for(let i =0; i< newResponseArray.length ; i++){
            const nextWord = newResponseArray[i];
            delayPara(i , nextWord + " ")
       }
        setLoading(false)
        setInput('')

    } 
 
    // onSent('what is react.js' )
    const contextValue = {
        prevprompt,
        setPrevprompt,
        onSent,
        setRecentprompt,
        recentprompt,
        showresult,
        loading,
        resultdata,
        input,
        setInput
    }


    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider