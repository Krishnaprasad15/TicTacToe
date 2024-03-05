
const Square= ({value,onClick})=>{
    return(
        <div className="square"
            onClick={onClick}
            style={{
                border: "1px solid",
                height: "130px",
                width: "130px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize:'30px'
            }}
        >
            <h4>{value}</h4>
        </div>
        // <h4>X</h4>
    )
}

export default Square