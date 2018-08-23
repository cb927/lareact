import React from 'react';
import { Link } from 'react-router-dom';
import TableRow from './TableRow';
import MyGlobalSettings from './MyGlobalSettings';

class DisplayProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', products: '' };
    }

    componentDidMount() {
        axios.get(MyGlobalSettings.url + "/products")
            .then(response => {
                this.setState({ products: response.data })
            })
            .catch(error => {
                console.log(error);
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
                <Link to="/add-item" className="btn btn-primary">Create Product</Link>
                <br/>

                <table className="table table-striped table-dark table-responsive">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Title</th>
                            <th>Product Body</th>
                            <th>Actions</th>
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