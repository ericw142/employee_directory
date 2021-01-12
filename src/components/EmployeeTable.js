import React, { Component } from "react";
import Searchbar from "./Searchbar";
import Result from "./Result";
import API from "../utils/API";

class EmployeeTable extends Component {
    state = {
        search: "",
        results: []
    }

    componentDidMount() {
        API.searchEmployee()
            .then(res => this.setState({ results: res.data.results }))
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
        
    };

    handleSearch = event => {
        API.searchEmployee()
            .then(res => {
                if (res.error) {
                    throw new Error(res.error);
                }
                this.setState({ results: res.data.results });
                console.log(res);
            })
            .catch(err => console.log("Error"))
    }

    render() {
        return(
            <div id="EmployeeTable" className="container">

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
                    
                        <Result results={this.state.results}/>
                    
                </table>
            </div>
        )
    }
}

export default EmployeeTable;