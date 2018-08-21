import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import MyGlobalSettings from './MyGlobalSettings';

const history = createBrowserHistory();

class CreateProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = { productTitle: '', productBody: '' };

        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange1(event) {
        this.setState({
            productTitle: event.target.value
        });
    }

    handleChange2(event) {
        this.setState({
            productBody: event.target.value
        });
    }
    
    handleSubmit(event) {
        e.preventDefault();
        const products = {
            title: this.state.productTitle,
            body: this.state.productBody
        }

        let resource = "localhost:8000" + "/products";
        axios.post(resource, products)
            .then((response) => {
                console.log("Hello, World!")
            })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <h1>Create New Product</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Product Title:</label>
                                    <input type="text" className="form-control" onChange={this.handleChange1} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Product Body: </label>
                                    <textarea className="form-control" onChange={this.handleChange2}></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-outline-primary" value="Create Product" />
                        </div>
                    </form>
                </div>
                <div className="col-md-4"></div>
            </div>
        );
    }
}

export default CreateProduct;