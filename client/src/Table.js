import React from 'react';
import ReactDOM from 'react-dom' 
import './Table.css'

// All console.log()s are simply for debugging
// Table React Component. Used to create tables with headers from JSON data. Currently does NOT support elements with sub-arrays/nested arrays.
export default class Table extends React.Component {
 
    constructor(props){
    super(props);
    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getKeys = this.getKeys.bind(this);
    }
    
    // Gets the keys of the data, in this context it means to get the data categories. The keys we obtain are the first the which correspond to:
    // 0: id, 1: beer name, 2: Beer's tagline
    // An improvement would be to make this dynamic and dependent on user choice, there are about 30 other variables to choose from in the Punk API.
    getKeys = function(){
        console.log(this.props.data)
        console.log(this.props.data[0])
        return Object.keys(this.props.data[0]).slice(0, 3);
    }
    
    // Get table headers using keys from the key-value pairs.
    getHeader = function(){
        var keys = this.getKeys();
        console.log("~~~~~KEY LOGGING~~~~~~")
        return keys.map((key, index)=>{
            
            console.log(key);
            return <th key={key}>{key.toUpperCase()}</th>
        })
    }
    
    // Obtain data for the rows uses the RenderRow component for rendering the row.
    getRowsData = function(){
        var items = this.props.data;
        var keys = this.getKeys();
        console.log("~~~~~INDEX LOGGING~~~~~~")
        return items.map((row, index)=>{
           
            console.log(index);
            return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
        })
    }
    
    // Returns the Table in HTML form.
    render() {
        return (
            <div>
            <table>
            <thead>
            <tr>{this.getHeader()}</tr>
            </thead>
            <tbody>
            {this.getRowsData()}
            </tbody>
            </table>
            </div>
        
        );
    }
   }
   // Returns the Row's data in TableData (td) entries. 
   const RenderRow = (props) =>{
    console.log("~~~~ROW LOGGING~~~~");
    return props.keys.map((key, index)=>{
        console.log(props.data[key])
        console.log(key)
        return <td key={props.data[key] + 25}><ul>{props.data[key]}</ul></td>
    })
   }