import React from 'react';
import TableRow from './TableRow.jsx';

class Content extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [
                {
                    "id": 1,
                    "name": "A",
                    "age": "20"
                },

                {
                    "id": 2,
                    "name": "B",
                    "age": "30"
                },

                {
                    "id": 3,
                    "name": "C",
                    "age": "40"
                }
            ]
        }
    }

    render() {
        var myStyle = {
            border: '1px solid black'
        }
        return (

            <div>
                <p>Showing table content</p>
                <table style={myStyle} >
                    <tbody style={myStyle}  >
                        {this.state.data.map((person, i) => <TableRow key={i} data={person}/>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Content;