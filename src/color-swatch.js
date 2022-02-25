const ColorSwatch = ({ style, info }) => {
    return (
        <div className="swatch" style={style}>
            <h3>{info}</h3>
        </div>

    )
}

export default ColorSwatch;