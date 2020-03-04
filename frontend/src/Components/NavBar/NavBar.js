import React from "react";
import {Component} from "react";
import "../../css/NavBar.css";

class NavBar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className={"row"}>
                    <div className={"col"}>
                        <a className="linkNavBar" href={"https://github.com/maxschau"}>GitHub</a>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col"}>
                        <a className="linkNavBar" target="_blank" href={"https://www.linkedin.com/in/maxtschau/"}>LinkedIn</a>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col"}>
                        <a className="linkNavBar" href={"https://github.com/maxschau"}>GitHub</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;