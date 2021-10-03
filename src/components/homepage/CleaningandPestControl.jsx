import MidPart from "./MidPart";

export default function CleaningandPestControl() {

    const data = ["CleaningandPestControl", "Removes hard stains & more"]
    const url = [
        "homepageImages/bestOffers/cleaning1.svg", "homepageImages/bestOffers/cleaning2.svg", "homepageImages/bestOffers/cleaning3.svg", "homepageImages/bestOffers/cleaning4.svg"
    ];
    const top = "1764px";

    return (

        <div className="CleaningMainDiv">

            <MidPart data={data} url={url} top={top} />

        </div>



    )
}