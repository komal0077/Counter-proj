// import React, { useEffect, useState } from 'react'

// function Clock() {
//     const [Hours,setHours]=useState(0);
//     const[Minutes,setMinutes]=useState(0);
//     const[Seconds,setSeconds]=useState(0);

//     useEffect(()=>{
//         const timer=setInterval(()=>{
//             setSeconds((prevSeconds)=>{
//                 if(prevSeconds===59){
//                     setMinutes((prevMinutes)=>{
//                         if(prevMinutes===59){
//                             setHours((prevHours)=>
//                             (prevHours===23?0:prevHours+1) 
//                             );
//                             return 0;
//                         }
//                         return prevMinutes+1;
//                     });
//                     return 0;
//                 }
//                 return prevSeconds+1;
//             });
//         },1000);
//         return ()=>clearInterval(timer);
//     },[]);
//     const formatTime=(unit)=>(unit<10?`0${unit}`:unit);


//   return (
//     <div className='flex justify-center items-center h-screen'>
//         <div className="flex space-x-8">
//       <div>{formatTime(Hours)}</div>

//       <div>:</div>
//       <div>{formatTime(Minutes)}</div>
      
//       <div>:</div>
//       <div>{formatTime(Seconds)}</div>
//       </div>
//     </div>
//   )
// }

// export default Clock

import React, { useEffect, useState } from 'react';

function Clock() {
  const [Hours, setHours] = useState(0);
  const [Minutes, setMinutes] = useState(0);
  const [Seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (isNaN(prevSeconds)) prevSeconds = 0;
        if (prevSeconds === 59) {
          setMinutes((prevMinutes) => {
            if (isNaN(prevMinutes)) prevMinutes = 0;
            if (prevMinutes === 59) {
              setHours((prevHours) => (isNaN(prevHours) || prevHours === 23 ? 0 : prevHours + 1));
              return 0;
            }
            return prevMinutes + 1;
          });
          return 0;
        }
        return prevSeconds + 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (unit) => (unit < 10 ? `0${unit}` : unit);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex space-x-8 ">
        <div>{formatTime(Hours)}</div>
        <div>:</div>
        <div>{formatTime(Minutes)}</div>
        <div>:</div>
        <div>{formatTime(Seconds)}</div>
      </div>
    </div>
  );
}

export default Clock;

