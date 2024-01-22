"use client"
import { useEffect, useState } from 'react'
import data from "../public/data.json"

const TimeSchedule = () => {

   const [currentDay, setCurrentDay] = useState('');

   useEffect(() => {
     const currentFrenchDay = new Date().toLocaleString('fr-FR', { weekday: 'long' });
     setCurrentDay(currentFrenchDay);
   }, []);


  return (
    <div>
      <ul>
        {data.timeSchedule.map((schedule, index) => (
          <li className={`text-light ${schedule.day === currentDay ? 'text-red' : ''}`} key={index}>
            {schedule.day === currentDay && <span className="text-red">➤</span>}
            {`${schedule.day}: ${schedule.time}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeSchedule;
