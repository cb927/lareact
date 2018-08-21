import React from 'react';
import { Link } from 'react-router-dom';
import Description from './Description';

const navbarStyle = {
    backgroundColor: "#057c48"
};

const logoStyle = {
    width: "10em"
}

const brandStyle = {
    backgroundColor: "white",
    padding: "0.5em",
    borderRadius: "15px"
}

class Master extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light" style={navbarStyle}>
                    <a href="#" className="navbar-brand" style={brandStyle}><img src="img/logo.png" alt="NBU Logo" style={logoStyle} /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNav" aria-controls="myNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="myNav">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="add-item">Create Product</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="display-item">Products</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Description />
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Master;