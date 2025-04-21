import { useState } from "react";
import "../styles/components/StopLight.css"

const StopLight = () =>{

    const [counter, setCounter] = useState("red");



    return (
        <>
        <div className="stoplight-support d-flex align-items-center"></div>
        <div className="stoplight-container d-flex align-items-center">
            <div className="stoplight rounded-3">
                <div className={"light red m-1" + (counter === "red" ? " glow": "")} onClick={() => setCounter("red")}></div>
                <div className={"light yellow m-1" + (counter === "yellow" ? " glow": "")} onClick={() => setCounter("yellow")}></div>
                <div className={"light green m-1" + (counter === "green" ? " glow": "")} onClick={() => setCounter("green")}></div>
            </div>
        </div>
        </>
    )


}

export default StopLight;