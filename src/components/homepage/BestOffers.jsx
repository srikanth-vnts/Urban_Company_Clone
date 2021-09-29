
export default function BestOffers() {

    const data = [
        "homepageImages/bestOffers/bestoffers1.svg",
        "homepageImages/bestOffers/bestoffers2.svg",
        "homepageImages/bestOffers/bestoffers3.svg",
        "homepageImages/bestOffers/bestoffers4.svg"

    ];

    return (

        <div className="bestOffersMainDiv">

            <h1>Best Offers</h1>
            <p>Hygienic & single-use products | low-contact services</p>

            <div className="bestOffersImageContainer">
                {
                    data.map((e) => (
                        <img src={e} alt="bestOffers" />

                    ))
                }
            </div>






        </div>



    )
}