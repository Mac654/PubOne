import { Dayjs } from "dayjs";

export interface FormInterface {
    name:string,
    eventName:string,
    date:string,
    startTime: Dayjs | null | string | React.ReactNode,
    endTime: Dayjs | null | string | React.ReactNode,
    address:string,
}

export interface EnvitedContextType {
    onFormSubmit:(data:FormInterface)=>void;
    myEventData:FormInterface
}
