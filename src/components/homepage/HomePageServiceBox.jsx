import RectangularBox from "./RectangularBox"


export default function HomepageServiceBox() {

    const data = [
         { "imageURL": "homepageImages/servicesSVGs/electrician.svg", "textData": "Electricians", "altData": "electrician" },
        { "imageURL": "homepageImages/servicesSVGs/ac.svg", "textData": "Ac Service & Repair ", "altData": "ac" },
        { "imageURL": "homepageImages/servicesSVGs/repair.svg", "textData": "Appliance Repair", "altData": "repair" },
        { "imageURL": "homepageImages/servicesSVGs/painters.svg", "textData": "Painters", "altData": "painters" },
        { "imageURL": "homepageImages/servicesSVGs/relocation.svg", "textData": "Relocation Ready Home", "altData": "relocation" },
        { "imageURL": "homepageImages/servicesSVGs/cleaning.svg", "textData": "Cleaning & Disinfection", "altData": "cleaning" },
       


    ]

    const data2 = [
        { "imageURL": "homepageImages/servicesSVGs/plumber.svg", "textData": "Plumber ", "altData": "Plumber" },
        { "imageURL": "homepageImages/servicesSVGs/pestcontrol.svg", "textData": "Pest Control", "altData": "Pest Control" },
        { "imageURL": "homepageImages/servicesSVGs/women.svg", "textData": "Salon For Women", "altData": "Salon For Women" },
        { "imageURL": "homepageImages/servicesSVGs/men.svg", "textData": "Salon For Men", "altData": "Salon For Men" },
        { "imageURL": "homepageImages/servicesSVGs/spa.svg", "textData": "Spa", "altData": "spa" },
        { "imageURL": "homepageImages/servicesSVGs/massage.svg", "textData": "Massage", "altData": "Massage" }


    ]
    let techinicianPage=(e)=>{
        console.log(e.target);
    }
    return (


        <div class="serviceBoxMainDiv" >

            <div class="Hp-RectangularBox-1 flex-c" >

                {
                    data.map((e) => (

                        <RectangularBox imageURL={e.imageURL} textData={e.textData} altData={e.altData} onClick={techinicianPage} />

                    ))
                }


            </div>{/* Hp-RectangularBox-1 */}


            <div class="Hp-RectangularBox-2 flex-c" >

                {
                    data2.map((e) => (

                        <RectangularBox imageURL={e.imageURL} textData={e.textData} altData={e.altData} />

                    ))
                }


            </div>{/* Hp-RectangularBox-2 */}




        </div>






    )
}
