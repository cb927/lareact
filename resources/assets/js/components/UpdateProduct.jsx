import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MyGlobalSettings from './MyGlobalSettings';

class UpdateProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '', body: '' };
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentMounted() {
        axios.get(MyGlobalSettings.url + "/products/${this.props.params.id}/edit")
            .then((response) => {
                this.setState({ title: response.data.title, body: response.data.body });
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    handleChange1(event) {
        this.setState({
            title: e.target.value
        });
    }

    handleChange2(event) {
        this.setState({
            body: e.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const products = {
            title: this.state.title,
            body: this.state.body
        }
        let url = MyGlobalSettings.url + "/products/${this.props.params.id}";
        axios.put(uri, products).then((response) => {
            this.props.history.push('/display-item');
        });
    }

    render() {
        return (
            <div>
                <h1>Update Product</h1>

                <div className="alert alert-info">
                    <h3>ID: {this.state.id}</h3>
                    <h3>Title: {this.state.title}</h3>
                    <h3>Body: {this.state.body}</h3>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <Link to="/display-item" className="btn btn-warning">Go Back</Link>
                    </div>
                    <div className="col-md-4">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Product Title:</label>
                                <input type="text" className="form-control" onChange={this.handleChange1} value={this.state.title} />
                            </div>
                            <div className="form-group">
                                <label>Product Body:</label>
                                <textarea className="form-control" onChange={this.handleChange2} value={this.state.body} ></textarea>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-success" type="submit">Update Product</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        );
    }
}

export default UpdateProduct;