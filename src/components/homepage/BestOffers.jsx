import MidPart from "./MidPart";

export default function BestOffers() {

    const data = ["Best Offers", "Hygienic & single-use products | low-contact services"]
    const url = [
        "homepageImages/bestOffers/bestoffers1.svg", "homepageImages/bestOffers/bestoffers2.svg", "homepageImages/bestOffers/bestoffers3.svg", "homepageImages/bestOffers/bestoffers4.svg"
    ];
    const top = "1275px";

    return (

        <div className="bestOffersMainDiv ">

            <MidPart data={data} url={url} top={top} />

        </div>



    )
}