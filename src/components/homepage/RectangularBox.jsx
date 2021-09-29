
export default function RectangularBox(props) {

    const imageURL = props.imageURL;
    const textData = props.textData;
    const altData = props.altData;


    return (

        <div class="Hp-RectangularBox" >
            <div class="Hp-RB-img">
                <img src={imageURL} alt={altData} itemscope="" itemprop="image" />
            </div>

            <div class="Hp-RB-txt">
                <span>{textData}</span>
            </div>
        </div>




    )
}