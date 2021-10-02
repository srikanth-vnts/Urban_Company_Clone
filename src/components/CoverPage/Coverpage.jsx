import Footer from "../Footer/Footer";
import BookProfessional from "./BookProfessional";
import CoverPageTop from "./CoverPageTop";
import MidPart from "./MidPart";

export default function Coverpage({ setIsCover }) {



    return (

        <div className="coverpageMainDiv">

            <CoverPageTop setIsCover={setIsCover} />

            <MidPart />
            <div className="divider cp-divider"></div>
            <BookProfessional />

            <div className="CP-Footer">
                <Footer />
            </div>

        </div>



    )
}