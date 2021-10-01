import BookProfessional from "./BookProfessional";
import CoverPageTop from "./CoverPageTop";
import MidPart from "./MidPart";

export default function Coverpage() {



    return (

        <div className="coverpageMainDiv">

            <CoverPageTop />

            <MidPart />
            <div className="divider cp-divider"></div>
            <BookProfessional />

        </div>



    )
}