import BannerContainer from "./BannerContainer";
import BestOffers from "./BestOffers";
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
                <div className="divider"></div>
                <BestOffers />
                <div className="divider"></div>


            </div>{/* midContainer */}





        </div > /* homePageMainDiv */
    )
}