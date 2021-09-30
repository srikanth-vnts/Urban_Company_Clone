import BannerContainer from "./BannerContainer";
import BestOffers from "./BestOffers";
import CleaningandPestControl from "./CleaningandPestControl";
import HomepageServiceBox from "./HomePageServiceBox";
import TCBottomPart from "./TCBottomPart";


export default function Homepage() {



    return (
        <div className="homePageMainDiv">

            {/* ////////////////// Top ////////////////////// */}
            <div className="topContainer">

                <BannerContainer />

                <HomepageServiceBox />

                <TCBottomPart />

            </div > {/* topContainer */}


            {/* //////////////////////// Mid part ////////////////////// */}
            <div className="divider"></div>
            <div className="midContainer">

                <BestOffers />
                <div className="divider d1"></div>
                <CleaningandPestControl />
                <div className="divider d2"></div>
                <div className="divider d3"></div>
                <div className="divider d4"></div>
                <div className="divider d5"></div>
                <div className="divider d6"></div>
                <div className="divider d7"></div>


            </div>{/* midContainer */}





        </div > /* homePageMainDiv */
    )
}