import React from "react";
import './Main.css';
import "./Image/Bright.jpg"

function Main(props) {

    return(
        <>
        <div className="MainContain">
          <div className="left-contain">

            <div className="top-contain">
                <img src={props.img}></img>
                <div className="heading">
                    <h2>{props.h2}</h2>
                    <p>{props.p}</p>
                    <div className="btn">
                        <button>{props.btn}</button>
                        <p>{props.p1}</p>
                    </div>
                </div>
            </div>
            <p>{props.p2}</p>
            <div className="bottom-contain"></div>

          </div>


          <div className="right-contain">
          <img src={props.img1}></img>
          </div>
          
        </div>
        </>

    );
    
}


export default Main;