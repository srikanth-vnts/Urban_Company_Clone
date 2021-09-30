
export default function BookProfessional() {

    return (
        <div className="BookProfessionalMainDiv">



            <h1>Book professionals from your phone</h1>
            <p>Enter  your mobile number to get he App download link</p>

            <div className="BP-InputBoxDiv">

                <div className="flag">
                    <span src="homepageImages/flag1" />
                    <span src="homepageImages/flag2" />
                    <span src="homepageImages/flagCircle" />
                    <span src="homepageImages/flag3" />
                </div>


                <input placeholder="Enter number">
                </input>
                <button><span>Send</span></button>


            </div>

            <img className="googleStore" alt="google" src="homepageImages/googlestoreIcon.svg"></img>
            <img className="appleStore" alt="apple" src="homepageImages/applestoreIcon.svg" ></img>


            <img src="coverpageImages/mobile1.svg" className="referMobile" alt="mobileIcon" />

            <img src="coverpageImages/mobile2.svg" className="referMobile" alt="mobileIcon" />









        </div >


    )
}