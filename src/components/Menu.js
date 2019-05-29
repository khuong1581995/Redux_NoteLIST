import React from 'react';


class Menu extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark" style={{ backgroundColor: "#009933" }}>
                <a className="navbar-brand" href="http://teamdk.net" style={{ color: "#990000" }}>TEAM DK</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"></button>
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                    <ul className="navbar-nav mt-2 mt-lg-0 ">
                        <li className="nav-item active">
                            <a className="nav-link" href="http://teamdk.net">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://teamdk.net">Course</a>
                        </li>
                    </ul>
                    <input className="form-control mr-sm-2" type="text" placeholder="Tìm kiếm từ khóa" />
                    <button className=" my-2 my-sm-0" type="submit">Search</button>
                </div>
            </nav>
        );
    }
}


export default Menu;
