import React, { useContext } from 'react';
import { FaCalendarDay } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { EnvitedContext } from '../context/EnvitedContext';

interface Props {}

const Event: React.FC<Props> = (props) => {
    const {myEventData} = useContext(EnvitedContext)
    

    return (
        <div className="Event">
            <div className='createImgDiv'>
                <img src="../cakeImg.png" alt="cakeImg" className='birthdayImg'/>
            </div>
            <div className='container mt-3'>
                <div className='eventDivLeft'>
                    <h2 className='eventName'>{myEventData.eventName}</h2>
                    <p className='hostName'>Hosted by <span style={{fontWeight:'bold'}}>{myEventData.name}</span></p>
                </div>
            </div>
           
            <div className="calendarDate">
                <FaCalendarDay className='iconCalendar col-2'/>
                <div className="innerClendarDate col-10">
                    <p style={{color:"#240D57",fontWeight:'bold',textAlign:'left',margin:0}}>{myEventData.startTime?.toLocaleString()}</p>
                    <p style={{color:"#4F4F4F",textAlign:'left'}}>{myEventData.endTime?.toLocaleString()}</p>
                </div>
            </div>
            <div className="calendarDate">
                <GoLocation className='iconCalendar col-2'/>
                <div className="innerClendarDate col-10">
                 <p style={{color:"#240D57",fontWeight:'bold',textAlign:'left',margin:0}}>Street name </p>
                 <p style={{color:"#4F4F4F",textAlign:'left'}}>{myEventData.address} </p>
                </div>
            </div>
        </div>
    );
};

export default Event;