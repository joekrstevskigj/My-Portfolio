import { Link } from "react-router-dom";
function NavigationMenu() {
    return (
        <nav className="navbar navbar-expand-sm bg-body-tertiary">
            <div className="container-fluid ">
                <Link className="navbar-brand" to="/">Gjorgji Krstevski</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <Link aria-current="page" className="nav-link active" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/gameprojects">Game Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavigationMenu;