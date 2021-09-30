export default function Coverpage() {



    return (

        <div className="coverpageMainDiv">


            <img className="doctorImage" src="coverpageImages/doctor.svg" alt="doctor" />
            <div className="coverpageRightDiv">

                <p>URBAN COMPANY</p>
                <p>Quality homeservices , on demand</p>

                <p>Experienced, hand-picked Professionals to serve you at your doorstep</p>



                <div className="CP-ServiceBox">
                    <p>Where do you need a service?</p>
                    <select>
                        <option value="">Select your city</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Delhi">Delhi</option>


                    </select>

                </div>


            </div>







        </div>



    )
}