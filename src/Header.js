const Header = () => {
    return (
        <div id = "header" >
            <div id = "logo">
            <img className="course-workzone-logo" src="/image/cwz.png" alt="accessibility menu"/>

           </div>
            <div id = "navbar">
                <div><button className="dropdown">For employers &or;</button></div>
                <div><button className="dropdown">For candidate &or;</button></div>
                <div><button className="case_study">Case studies </button></div>
                <div><button className="dropdown">Resource &or;</button></div>
                <div><button className="dropdown">About us &or;</button></div>    
            </div>
            <div id = "btn"><button id="button">Contact</button></div>
        </div>
    )
}
export default Header