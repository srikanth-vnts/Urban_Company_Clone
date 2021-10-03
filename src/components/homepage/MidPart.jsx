export default function MidPart({ data, url, top }) {




    return (
        <div className="midpartMainDiv">



            <h1>{data[0]}</h1>
            <p>{data[1]}</p>

            <div className="midpartImageContainer" style={{ top: top }}>
                {
                    url.map((e) => (
                        <img src={e} alt="brokenimage" />

                    ))
                }
            </div>












        </div>

    )
}