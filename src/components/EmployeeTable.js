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

        this.setState((state) => {
            return { search: value };
        });

        this.handleSearch();
    };

    handleSearch = () => {
        let key = this.state.search;

        let currentArr = this.state.results;
        console.log(key);

        let newArr = currentArr.filter(employee => {
            return employee.name.first.includes(key)
        });
        
        this.setState((state) => {
            return {results: newArr};
        });
    }

    render() {
        return(
            <div id="EmployeeTable" className="container">

                <Searchbar 
                search={this.state.search}
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