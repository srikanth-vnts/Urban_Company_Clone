

import MidPart from "./MidPart";

export default function Appliances() {

    const data = ["Appliances", "Service, Repair, Installation & Uninstallation"]
    const url = [
        "homepageImages/bestOffers/appliances1.svg",
        "homepageImages/bestOffers/appliances2.svg",
        "homepageImages/bestOffers/appliances3.svg",
        "homepageImages/bestOffers/appliances4.svg"
    ];
    const top = "2253px";

    return (

        <div className="AppliancesMainDiv">

            <MidPart data={data} url={url} top={top} />

        </div>



    )
}