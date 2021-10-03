import Location from "../Location";
import StateLocation from "../StateLocation";

export default function CoverPageTop({ setIsCover }) {



    return (

        <div className="coverpageTopMainDiv">


            <img className="doctorImage" src="coverpageImages/doctor.svg" alt="doctor" />




            <div className="coverpageRightDiv">

                <p>URBAN COMPANY</p>
                <p>Quality homeservices , on demand</p>

                <p>Experienced, hand-picked Professionals to serve you at your doorstep</p>


                <div className="CP-ServiceBox">




                    {/* <Location /> */}
                    {/* <select>
                        <option value="">Select your city</option>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Jaipur">Jaipur</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Mumbai">Mumbai</option>

                    </select> */}

                    {/* <div className="locationDiv">

                        <Location />
                    </div> */}
                </div>
                <p id="whereNeedSevice"> Where do you need a service?
                </p>

                <div className="stateLocationDiv">

                    <StateLocation setIsCover={setIsCover} />
                </div>

            </div>









        </div>


    )
}