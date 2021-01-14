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
        let value = event.target.value;

        this.setState({ search: value }, () => {
            this.handleSearch();
        });

        
    };

    handleSearch = () => {
        let key = this.state.search;
        let currentArr = this.state.results;

        let newArr = currentArr.filter(employee => {
            return employee.name.first.toLowerCase().includes(key.toLowerCase());
        });
        
        this.setState((state) => {
            return {results: newArr};
        });
    }
    refresh = () => {
        this.setState({ search: "" });
        API.searchEmployee()
        .then(res => this.setState({ results: res.data.results }))
    }

    render() {
        return(
            <div id="EmployeeTable" className="container">

                <Searchbar 
                search={this.state.search}
                handleInputChange={this.handleInputChange}
                />

                <table className="table">
                    <thead className="thead-dark">
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
                <button className="btn btn-info" onClick={this.refresh}>Refresh</button>
            </div>
        )
    }
}

export default EmployeeTable;