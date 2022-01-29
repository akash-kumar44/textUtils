import PropTypes from 'prop-types' ;
export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} id ="nav">
                <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/"s>{props.navItem1}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">{props.navItem2}</a>
                </li>
                </ul>
                    </div>
                        <div className="form-check form-switch" >
                            <input className=" form-check-input" onClick = {props.changeMode} type="checkbox" id="boldSwitch"/>
                            <label className={`form-check-label container  text-${props.textColor}`} htmlFor="flexSwitchCheckDefault">{props.modeText}</label>
                        </div>
                    </div>
            </nav>
        </div>
    )
}
// Used to set PropTypes:
Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    navItem1 : PropTypes.string.isRequired,
    navItem2 : PropTypes.string.isRequired
}

// Default PropTypes if there is no value given to props:
Navbar.defaultProps ={
    title : 'Requires a title',
    navItem1 : 'Home',
    navItem2 : 'About'
}