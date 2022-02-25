import { useNavigate } from "react-router-dom";

const Color = ({info}) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="color-display" style={info} >
                <h2>{info.backgroundColor}</h2>
            </div>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </>
    )
}

export default Color;