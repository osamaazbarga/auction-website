import React, { useState,useEffect} from 'react'

export default function Timerview({productInfo}) {

    const [isRunningTime, setIsRunningTime] = useState(true);
    let difference = new Date(productInfo.finishdate) - new Date();
    // let timefinish=getFinishDate(productInfo.finishdate)
    

    useEffect(() => {
        // console.log(isRunningTime);
        if(difference>0){
            const timer=setInterval(()=>{
                //console.log(isRunningTime);
                setTimeLeft(calculateTimeLeft());
            },1000)
            return (()=>clearInterval(timer))
        }
            // const timer = setTimeout(() => {
            //     setTimeLeft(calculateTimeLeft());
            //   }, 1000);
              //return () => clearTimeout(timer);

    });
    useEffect(() => {
        // console.log(isRunningTime);
        if(difference>0){
            const timer=setInterval(()=>{
                // console.log(isRunningTime);
                setTimeLeft(calculateTimeLeft());
            },1000)
            return (()=>clearInterval(timer))
        }
            // const timer = setTimeout(() => {
            //     setTimeLeft(calculateTimeLeft());
            //   }, 1000);
              //return () => clearTimeout(timer);

      });
      const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        // console.log(productInfo.finishdate);
        
        // let difference = new Date(productInfo.finishdate) - new Date();

        // console.log(difference);
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
              d: Math.floor(difference / (1000 * 60 * 60 * 24)),
              h: Math.floor((difference / (1000 * 60 * 60)) % 24),
              m: Math.floor((difference / 1000 / 60) % 60),
              s: Math.floor((difference / 1000) % 60)
            };
        }
        if(timeLeft == null){
            setIsRunningTime(false)
            // console.log("here");
        }
        // else setIsRunningTime(false)
        // console.log(timeLeft);
        return timeLeft;
    }
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

   
    


      const timerComponents = [];

        Object.keys(timeLeft).forEach((interval) => {
            // console.log(timeLeft['d']);
            if(timeLeft['d']<=0&&timeLeft['h']<=0&&timeLeft['m']<=0&&timeLeft['s']<=0 && isRunningTime==true){

                setIsRunningTime(false)
                // console.log(isRunningTime);
            }
            
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span>
            {timeLeft[interval]} {interval}{" "}
            </span>
        );
        });

    // const renderAuctionsPayments=()=>{
    //     return productAuctions.map((act)=>{
    //         console.log(act);
    //     })
    // }



    return (
        <div>
            Time left:  <span class="h5 font-weight-bold">
            {
                timerComponents.length ? timerComponents  : <span style={{color:"red"}}>Ended</span>
            }
            </span>
            <div class="h6">Finish Date: {productInfo.finishdate}</div>
        </div>
    )

}
