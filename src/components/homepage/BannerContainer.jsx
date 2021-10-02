import { useState } from "react";
import City from "./City";

export default function BannerContainer() {

    const [service, setService] = useState('')


    const handleChange = (e) => {
        if (e == 13)
            alert("hello")
        else {
            console.log("hey")
        }

        setService(...service + e);
    }


    return (


        <div className="bannerContainer">
            <div className="bannerImageContainer">
                <img src="../../homepageImages/topBanner.png" alt="banner" />
            </div>

            <div className="HP-TC-dataContainer">

                <div className="HP-TC-HeaderDiv">
                    <h1>Home services, on demand.</h1>
                </div>

                <div className="HP-AddressSearchContainer">

                    <div className="HP-ASC-LocationBox">

                        {/* <span className="HP-ASC-icon">
                            <img src="locationIcon.svg" alt="locationPNG" />
                        </span> */}


                        <span>
                            <City />

                            {/* <select id="city" name="city">
                                <option value="current Location">current Location</option>
                                <option value="input box">Input Box</option>
                            </select> */}


                        </span>


                    </div>  {/* HP-ASC-LocationBox */}
                    <div className="HP-ASC-LocationSearchBox">

                        {/* <span className="HP-ASC-searchIcon">
                            <img src="searchIcon.svg" alt="searchPNG" />
                        </span> */}

                        <span>
                            <input type="text" placeholder="Search for a service" className="searchInput" onChange={(e) => (handleChange(e))} >

                            </input>
                        </span>


                    </div>{/* HP-ASC-LocationSearchBox */}


                </div> {/* HP-AddressSearchContainer */}

                <div className="HP-TC-LinkPara">
                    <h3>

                        <a href="##" > Salon for Men</a>, <a href="##">Massage for Men</a>, <a href="##">Spa for Women</a> etc
                    </h3>

                </div> {/* HP-TC-LinkPara */}

            </div>{/* HP-TC-dataContainer */}
        </div>




    )
}