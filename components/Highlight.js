const HighLight = (props) => {
    return ( 
        <div className="highlight-container">
            <h1 className="highlight-icon">{props.icon}</h1>
            <p className="highlight-par">{props.par}</p>
        </div>
     );
}
 
export default HighLight;