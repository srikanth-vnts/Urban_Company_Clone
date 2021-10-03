import MidPart from "../CoverPage/MidPart";
import Footer from "../Footer/Footer";
import Appliances from "./Appliances";
import BannerContainer from "./BannerContainer";
import BestOffers from "./BestOffers";
import CleaningandPestControl from "./CleaningandPestControl";
import CustomerReview from "./CustomerReview";
import HomepageServiceBox from "./HomePageServiceBox";
import Insurance from "./Insurance";
import LiveBest from "./LiveBest";
import Refer from "./Refer";
import SkillIndia from "./SkillIndia";
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
            <div className="midContainer">

                <div className="divider d1"></div>
                <BestOffers />
                <div className="divider d2"></div>
                <CleaningandPestControl />
                <div className="divider d3"></div>
                <Appliances />
                <div className="divider d4"></div>
                <CustomerReview />
                <div className="divider d5"></div>
                <LiveBest />
                <div className="divider d6"></div>
                <Insurance />
                <div className="divider d7"></div>
                <SkillIndia />
                <div className="divider d8"></div>
                <Refer />

            </div>{/* midContainer */}


            <div className="HP-Footer">

                <Footer />
            </div>


        </div > /* homePageMainDiv */
    )
}