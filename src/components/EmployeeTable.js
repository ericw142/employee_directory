import React, { Component } from "react";
import Searchbar from "./Searchbar";

class EmployeeTable extends Component {
    state = {
        search: ""
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    render() {
        return(
            <div id="EmployeeTable" className="container">
                <p>{this.state.search}</p>

                <Searchbar 
                handleInputChange={this.handleInputChange}
                />

                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>DOB</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        )
    }
}

export default EmployeeTable;