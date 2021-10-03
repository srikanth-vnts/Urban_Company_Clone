// import App2 from '../../App2'
import {TechnicianAuthcontext} from "../../store/technician_auth_context"
// import {useContext } from 'react';
import React, { useContext } from 'react';




export default function RectangularBox(props) {
    let {settechpageload}=useContext(TechnicianAuthcontext);


    const imageURL = props.imageURL;
    const textData = props.textData;
    const altData = props.altData;
    let sett=()=>{
        settechpageload(true);
    }

    return (

        // <a style={{textDecoration:"none"}} /*onClick={props.onClick}*/ href="/?category=Electricians&city=Bangalore">
            <div class="Hp-RectangularBox" onClick={sett}>
            <div class="Hp-RB-img">
                <img src={imageURL} alt={altData} itemscope="" itemprop="image" />
            </div>

            <div class="Hp-RB-txt">
                <span>{textData}</span>
            </div>
        </div>
        //  </a>




    )
}

