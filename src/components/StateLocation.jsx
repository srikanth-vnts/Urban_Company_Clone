import React, { useState } from 'react';



export default function StateLocation({ setIsCover }) {




    const handleRedirect = () => {
        window.location.pathname='./homepage'
    }


    return (
        <div className="StateLocationMainDiv">


            <select name="city" id="city" class="city" size="1" onChange={handleRedirect}>

                <option class="selectCity" value="">Select your city</option>
                <option class="selectCity" value="Ahmedabad">Ahmedabad</option>
                <option class="selectCity" value="Bangalore">Bangalore</option>
                <option class="selectCity" value="Chennai">Chennai</option>
                <option class="selectCity" value="Delhi">Delhi</option>
                <option class="selectCity" value="Jaipur">Jaipur</option>

                <option class="selectCity" value="Hyderabad">Hyderabad</option>

            </select>



            {/*  
            <li class="">Bangalore</li>
            <li class="">Chennai</li>
            <li class="">Delhi</li>
            <li class="">Chandigarh Tricity</li>
            <li class="">Jaipur</li>
            <li class="">Hyderabad</li>
            <li class="">Kolkata</li>
            <li class="">Mumbai</li>
            <li class="">Pune</li>
            <li class="">Nagpur</li>
            <li class="">Ludhiana</li>
            <li class="">Visakhapatnam</li>
            <li class="">Vadodara</li>
            <li class="">Lucknow</li>
            <li class="">Kochi</li>
            <li class="">Bhubaneswar</li>
            <li class="">Kanpur</li>
            <li class="">Surat</li>
            <li class="">Indore</li>
            <li class="">Agra</li>
            <li class="">Bhopal</li>
            <li class="">Guwahati</li>
            <li class="">Vijayawada</li>
            <li class="">Varanasi</li>
            <li class="">Coimbatore</li>
            <li class="">Thiruvananthapuram</li>
            <li class="">Patna</li>
            <li class="">Raipur</li>
            <li class="">Nashik</li>
            <li class="">Jabalpur</li>
            <li class="">Jamshedpur</li>
            <li class="">dehradun</li>
            <li class="">Meerut</li>
            <li class="">Ranchi</li>
            <li class="">Prayagraj</li>

            {/* </ul> */}
            {/* </option> */}

            {/*  */}

            {/* </select> */}




        </div >
    )
}
