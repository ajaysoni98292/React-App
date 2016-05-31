import React from 'react';

class Refresh extends React.Component {

    constructor() {
        super();
        this.state = {
            data : [
                {
                    "id" : 1,
                    "name" : "Ajay",
                },
                {
                    "id" : 2,
                    "name" : "Vishu",
                },
                {
                    "id" : 3,
                    "name" : "Rishu",
                }
            ]
        }
    }

    render() {

        return (
            <div>
                <table >
                    <tbody>
                        {this.state.data.map((emp, i) => <TableRow key={i} data={emp}/>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

class TableRow extends React.Component {
    render() {
        return(
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
            </tr>
        );
    }
}

export default Refresh;