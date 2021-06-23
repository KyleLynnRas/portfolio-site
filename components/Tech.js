const Tech = (props) => {
    return ( 
        <div className="tech-container">
            <h1 className="tech-icon">{<props.icon />}</h1>
            <p className="tech-label">{props.label}</p>
        </div>
     );
}
 
export default Tech;