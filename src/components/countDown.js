import { useState, useEffect } from "react"

const MyTimer=props=>{

    const caculateTimeLeft=()=>{
        const difference = new Date("2024-06-20") - new Date()

        let timeLeft = {}

        if(difference > 0){
            timeLeft = {
                Days: Math.floor(difference/ (1000*60*60*24)),
                Hours: Math.floor(difference/ (1000*60*60)%24),
                Minutes: Math.floor((difference/ 1000/60)%60),
                Seconds: Math.floor((difference/ 1000)%60),
            }
        }

        return timeLeft
    }

    const [timeData, updateTimeData] = useState(caculateTimeLeft())

    useEffect(()=>{
        const my_timer = setInterval(()=>{
            updateTimeData(caculateTimeLeft())
        },1000)

        return ()=>{
            clearInterval(my_timer)
        }

    },[])

    const timerComponent = []

    Object.keys(timeData).forEach(interval => {
        if(timeData[interval] < 0){
            return
        }
        timerComponent.push(
            <div className="time" key={interval}>
                <div className="time-value">
                    {timeData[interval].toString().padStart(2,'0')}
                </div>
                <div className="time-label">{interval}</div>
            </div>
        )
    });

    return(
        <div id="timer">
            {timerComponent.length? timerComponent:<h6>times up</h6>}
        </div>
    )
}

export default MyTimer