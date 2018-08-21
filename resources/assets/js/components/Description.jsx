import React from 'react';

const msLogoStyle = {
    width: "10em"
}

const descStyle = {
    backgroundColor: "#8d9dd0",
    borderRadius: "20px",
    color: "white",
    padding: "3em"
}

class Description extends React.Component {
    render() {
        return (
            <div>
                <div className="jumbotron text-center">
                    <h1><strong>VALUTA</strong> project RESTful service provided by <img className="rounded" src="img/microstrategy.png" alt="MicroStrategy logo" style={msLogoStyle} /></h1>
                    <h2>Департамент інформаційних технологій</h2>
                    <h3>Національний банк України</h3>
                    <hr/>
                    {this.props.view}
                </div>
            </div >
        );
    }
}

export default Description;