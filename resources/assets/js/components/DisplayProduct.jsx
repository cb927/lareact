import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TableRow from './TableRow';
import MyGlobalSettings from './MyGlobalSettings';

class DisplayProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', products: '' };
    }

    componentMounted() {
        axios.get(MyGlobalSettings.url + "/products")
            .then((response) => {
                this.setState({ products: this.data });
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    tabRow() {
        if (this.state.products instanceof Array) {
            return this.state.products.map(function (object, i) {
                return <TableRow obj={object} key={i} />
            });
        }
    }

    render() {
        return (
            <div>
                <h1>Products</h1>
                <div className="row">
                    <div className="col-md-10"></div>
                    <div className="col-md-2">
                        <Link to="/add-item">Create Product</Link>
                    </div>
                </div>

                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Title</th>
                            <th>Product Body</th>
                            <th width="200px">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default DisplayProduct;