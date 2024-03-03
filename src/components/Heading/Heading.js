
import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { ThemeContext } from "../../App";

export default function Heading() {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme} fixed-top ${theme === 'light' ? 'border-bottom' : ''}`} style={{ marginBottom: '' }}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <a className="navbar-brand" href="/" style={{fontWeight:"bold"}}>
                    Resort Timeshare
                </a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/"
                                className={`nav-link ${({ isActive, isPending }) =>
                                    isPending ? " pending" : isActive ? "active" : ""}`}
                                style={{
                                    
                                }}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about"
                                className={`nav-link ${({ isActive, isPending }) =>
                                    isPending ? " pending" : isActive ? "active" : ""}`}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/news"
                                className={`nav-link ${({ isActive, isPending }) =>
                                    isPending ? " pending" : isActive ? "active" : ""}`}
                            >
                                News
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact"
                                className={`nav-link ${({ isActive, isPending }) =>
                                    isPending ? " pending" : isActive ? "active" : ""}`}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    )
}

{/* <div className="form-check form-switch me-2">
                        <input className="form-check-input" type="checkbox" id="mySwitch" name="darkmode" value="dark" 
                        
                            onClick={toggleTheme}
                            defaultChecked 
                        />
                            <label className={`form-check-label text-${theme === 'dark' ? 'light' : 'dark'}`} for="mySwitch">{theme} </label>
                    </div> */}