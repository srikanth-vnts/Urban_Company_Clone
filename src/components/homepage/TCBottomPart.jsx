
export default function TCBottomPart() {

    const data = [
        "homepageImages/offers/offer1.svg",
        "homepageImages/offers/offer2.svg",
        "homepageImages/offers/offer3.svg",
        "homepageImages/offers/offer4.svg"
    ]
    return (


        <div className="TC-BottomPartMainDiv">
            {

                data.map((e) => (

                    <img src={e} alt="offer" />



                ))
            }







        </div>
    )
}