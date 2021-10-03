import MobileInput from "../MobileInput";

export default function Refer() {

    return (

        <div className="referMainDiv">

            <h1>Refer and get free services</h1>
            <p>Invite your friends to UrbanCompany services. They get Rs. 100 off. You win upto Rs. 5000</p>

            <div className="referInputBoxDiv">

                <img src="coverpageImages/bookWithMobile.svg" alt="" />


            </div>
            {/* <div className="referInputBoxDiv">

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

            <img className="googleStore" alt="google" src="homepageImages/googlestoreIcon.svg"></img>
            <img className="appleStore" alt="apple" src="homepageImages/applestoreIcon.svg" ></img>
            <img src="homepageImages/referMobilePic.svg" className="referMobile" alt="mobileIcon" />








        </div>


    )
}