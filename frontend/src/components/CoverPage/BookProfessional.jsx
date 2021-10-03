import MobileInput from "../MobileInput";

export default function BookProfessional() {

    return (
        <div className="BookProfessionalMainDiv">



            <h1>Book professionals from your phone</h1>
            <p>Enter  your mobile number to get he App download link</p>

            {/* <div className="BP-InputBoxDiv">

                <div className="flag">
                    <span src="homepageImages/flag1" />
                    <span src="homepageImages/flag2" />
                    <span src="homepageImages/flagCircle" />
                    <span src="homepageImages/flag3" />
                </div>


                <input placeholder="Enter number">
                </input>
                <button><span>Send</span></button>


            </div> */}

            <img className="bookWithMobile" src="coverpageImages/bookWithMobile.svg" alt="" />

            <div className="CP-googleStore"  >

                <img alt="google" src="homepageImages/googlestoreIcon.svg"></img>
            </div>
            <div className="CP-appleStore" >

                <img alt="apple" src="homepageImages/applestoreIcon.svg" ></img>
            </div>

            <div className="Cp-mobile1"  >

                <img src="coverpageImages/mobile1.svg" alt="mobile1" />
            </div>
            <div className="Cp-mobile2">

                <img src="coverpageImages/mobile2.svg" alt="mobile2" />
            </div>


            {/* <div className="selectNumber">

                <MobileInput />
            </div> */}






        </div >


    )
}