import React from 'react';
import { Link } from 'react-router-dom';
import MyGlobalSettings from './MyGlobalSettings';

class TableRow extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let resource = MyGlobalSettings.url + "/products/" + this.props.obj.id;
        axios.delete(resource);
        this.props.history.push("/display-item");
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.id}</td>
                <td>{this.props.obj.title}</td>
                <td>{this.props.obj.body}</td>
                <td>
                    <Link to={"edit/" + this.props.obj.id} className="btn btn-sm btn-info">Edit</Link>
                </td>
                <td>
                    <form onSubmit={this.handleSubmit}>
                        <input type="submit" className="btn btn-danger" value="Delete" />
                    </form>
                </td>
            </tr>
        );
    }
}

export default TableRow;