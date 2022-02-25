import { useNavigate } from "react-router-dom";

const Colors = ({ formData, setFormData, handleSubmit }) => {
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(
            {[name]: value}
        )
    }

    const navigate = useNavigate();

    return (
        <form className='form-control' onSubmit={handleSubmit}>
            <input 
                type='color' 
                name='backgroundColor' 
                value={formData.backgroundColor} 
                onChange={handleChange} 
            />
            <button onClick={() => navigate(-1)}>Add Color!</button>
        </form>
    )
}

export default Colors;