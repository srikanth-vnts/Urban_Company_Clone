import BannerContainer from "./BannerContainer";
import HomepageServiceBox from "./HomePageServiceBox";
import TCBottomPart from "./TCBottomPart";


export default function Homepage() {



    return (
        <div className="homePageMainDiv">

            {/* <h1>Testing Homepage</h1> */}

            {/* ////////////////// Top ////////////////////// */}
            <div className="topContainer">

                <BannerContainer />

                <HomepageServiceBox />

                <TCBottomPart />

            </div > {/* topContainer */}


            {/* //////////////////////// Mid part ////////////////////// */}







        </div > /* homePageMainDiv */
    )
}