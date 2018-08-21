import React from 'react';

const msLogoStyle = {
    width: "10em"
}

class Description extends React.Component {
    render(){
        return(
            <div className="jumbotron text-center">
                <h1><strong>VALUTA</strong> project RESTful service provided by <img src="img/microstrategy.png" alt="MicroStrategy logo" style={msLogoStyle} /></h1>
            </div>
        );
    }
}

export default Description;