

export default function Homepage() {



    return (
        <div className="homePageMainDiv">

            {/* <h1>Testing Homepage</h1> */}

            {/* ////////////////// Top ////////////////////// */}
            <div className="topContainer">
                <div className="bannerContainer">
                    <img src="../../homepageImages/topBanner.png" alt="banner" />
                </div>

                <div className="HP-TC-dataContainer">

                    <div className="HP-TC-HeaderDiv">
                        <h1>Home Services, on demand.</h1>
                    </div>

                    <div className="HP-AddressSearchContainer">

                        <div className="HP-ASC-LocationBox">

                            <span className="HP-ASC-icon">
                                <img src="locationIcon.svg" alt="locationPNG" />
                            </span>
                            <span>
                                <select id="city" name="city">
                                    <option value="current Location">current Location</option>
                                    <option value="input box">Input Box</option>
                                </select>
                            </span>

                        </div>  {/* HP-ASC-LocationBox */}
                        <div className="HP-ASC-LocationSearchBox">

                            <span className="HP-ASC-searchIcon">
                                <img src="searchIcon.svg" alt="searchPNG" />
                            </span>
                            <span>
                                <input type="text" placeholder="Search for a service"></input>
                            </span>

                        </div>{/* HP-ASC-LocationSearchBox */}


                    </div> {/* HP-AddressSearchContainer */}

                    <div className="HP-TC-LinkPara">
                        <h3>

                            <a href=""> Salon for Men</a>, <a href="">Massage for Men</a>, <a href="">Spa for Women</a> etc
                        </h3>

                    </div> {/* HP-TC-LinkPara */}

                </div>{/* HP-TC-dataContainer */}



            </div>  {/* topContainer */}




        </div> /* homePageMainDiv */
    )
}