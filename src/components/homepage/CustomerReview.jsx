

import MidPart from "./MidPart";

export default function CustomerReview() {

    const data = ["Customer safety is our priority", "What customers are saying about our safety standards"]
    const url = [
        "homepageImages/bestOffers/customer1.svg",
        "homepageImages/bestOffers/customer2.svg",
        "homepageImages/bestOffers/customer3.svg",
        "homepageImages/bestOffers/customer4.svg"
    ];
    const top = "2749px";

    return (

        <div className="CustomerReviewMainDiv">

            <MidPart data={data} url={url} top={top} />

        </div>



    )
}