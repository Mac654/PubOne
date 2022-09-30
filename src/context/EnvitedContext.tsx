import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EnvitedContextType, FormInterface } from '../Interface/FormInterface';

interface Props {
    children:React.ReactNode;
}

export const EnvitedContext = createContext<EnvitedContextType>({
    onFormSubmit:(data:FormInterface)=>{},
    myEventData:{ name:"",
    eventName:"",
    date:"",
    startTime:"",
    endTime:"",
    address:'',
    },
})

const EnvitedContextProvider: React.FC<Props> = ({children}) => {
    const navigate = useNavigate()
    const [myEventData, setMyEventData] = useState({
        name:"",
        eventName:"",
        date:"",
        startTime:"",
        endTime:"",
        address:'',
    })

    function onFormSubmit(formObject:any) {
        setMyEventData(formObject)
        navigate("event")
    }

    return (
       <EnvitedContext.Provider value={{onFormSubmit,myEventData}}>{children}</EnvitedContext.Provider>
    );
};

export default EnvitedContextProvider;