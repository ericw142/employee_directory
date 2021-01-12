import React from "react";

function Result(props) {
    return(
        <tbody>
            {props.results.map(result => (
                <tr key={result.name.first}>
                    <td><img src={result.picture.medium} alt={result.name.first}/></td>
                    <td>{result.name.first +" "+ result.name.last}</td>
                    <td>{result.phone}</td>
                    <td>{result.email}</td>
                    <td>{(result.dob.date).substring(0, 10)}</td>
                </tr>
            ))}
        </tbody>
    )
}

export default Result;