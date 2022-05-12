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
        this.getDetailedData = this.getDetailedData.bind(this);
        this.getFoodPairing = this.getFoodPairing.bind(this);
        this.getMethod = this.getMethod.bind(this);
        this.getIngredients = this.getIngredients.bind(this);
        this.getHops = this.getHops.bind(this)
        this.getMalts = this.getMalts.bind(this)
    }
    
    // Gets the keys of the data, in this context it means to get the data categories. The keys we obtain are the first the which correspond to:
    // 0: id, 1: beer name, 2: Beer's tagline
    // An improvement would be to make this dynamic and dependent on user choice, there are about 30 other variables to choose from in the Punk API.
    getKeys = function(){
        var temp = Object.keys(this.props.data[0]);
      //  console.log(this.props.data[0])
        var keys = Object.keys(this.props.data[0]).slice(0, 3);
      //  console.log(`Truth test: ${this.props.tags[0]} `);
        if(this.props.tags[0]) {
            keys.push(temp[6])
        }
        if(this.props.tags[1]) {
            keys.push(temp[7])
        }
        if(this.props.tags[2]) {
            keys.push(temp[5])
        }
        if(this.props.tags[3]) {
            keys.push(temp[13])
        }
        if(this.props.tags[4]) {
            keys.push(temp[3])
        }
        if(this.props.tags[5]){
            keys.push(temp[10])
        }
        return keys;
    }
    
    // Get table headers using keys from the key-value pairs.
    getHeader = function(){
        var keys = this.getKeys();
      //  console.log("~~~~~KEY LOGGING~~~~~~")
        return keys.map((key, index)=>{
            var headtitle = key;
            headtitle = headtitle.replace(/_+/g, ' ');
       //     console.log(headtitle);
            return <th key={key}>{headtitle.toUpperCase()}</th>
        })
    }
    
    // Obtain data for the rows uses the RenderRow component for rendering the row.
    getRowsData = function(){
        var items = this.props.data;
        var keys = this.getKeys();
      //  console.log("~~~~~INDEX LOGGING~~~~~~")
        return items.map((row, index)=>{
           
       //      console.log(index);
       //     console.log(items[index]);
            return <tr key={index} onClick={() => this.getDetailedData(items[index])}><RenderRow key={index} data={row} keys={keys}/></tr>
        })
    }

    getFoodPairing = (beer) => {
        var result = "";
        var count = 0
        beer["food_pairing"].map((index) => {
            if(count > 0) {
                result += ", or " + index;
            }
            else{ 
                count++;
                result += index; 
            }
        });
     //   console.log(result);
        return result;
    }

    getMethod = (method) => {
        var ferment = "Ferments at: " + method["fermentation"]["temp"]["value"] + " " + method["fermentation"]["temp"]["unit"];
        var twist = "Twist: " + (typeof method["fermentation"]["twist"] === 'undefined' ? "N/A" : method["fermentation"]["twist"]);
        var mash_temp = "Mash temperature: " + method["mash_temp"]["0"]["temp"]["value"] + " " +   method["mash_temp"]["0"]["temp"]["unit"];

        var result = mash_temp + " <br/> " + (twist.length < 10 ? " " : twist) + " <br/> " + ferment + " <br/> ";
        return result;
    }

    getMalts = (malts) => {
        var result = "Malts: <br/>";
        malts.map((item, index) => {
            if(index > 0) {
                result += "<br/>- " + item["amount"]["value"] + " " + item["amount"]["unit"] + " of " + item["name"];
            }
            else {result += "<br/>- " + item["amount"]["value"] + " " + item["amount"]["unit"] + " of " + item["name"];}
            
        });
        result += ""
        return result;
    }

    getHops = (hops) => {
        var result = "\tHops: <br/>";
        var start = "";
        var middle = "";
        var end = "";
        var other = "";
        hops.map((item, index) => {
            if(item["add"] === "start") {
                start += "<br/>- " + item["amount"]["value"] + " " + item["amount"]["unit"] + " of " + item["name"] + ". Used for " + item["attribute"];
            }
            else if (item["add"] === "middle"){
                middle += "<br/>- " + item["amount"]["value"] + " " + item["amount"]["unit"] + " of " + item["name"] + ". Used for " + item["attribute"];
            }
            else if (item["add"] === "end"){
                end += "<br/>- " + item["amount"]["value"] + " " + item["amount"]["unit"] + " of " + item["name"] + ". Used for " + item["attribute"];
            }
            else {
                other += "<br/>- " + item["amount"]["value"] + " " + item["amount"]["unit"] + " of " + item["name"] + ". Used for " + item["attribute"];
            }
        });
        start += "<br/>**Used at the start.";
        middle += "<br/>**Used in the middle.";
        end += "<br/>**Used at the end.";
        other += "<br/>";
        result += start + "<br/>" + middle + "<br/>" + end + " <br/> " + other + " <br/> ";
        return result;
    }

    getIngredients = (beer) => {
        
        var hops = this.getHops(beer["ingredients"]["hops"]);
        var malts = this.getMalts(beer["ingredients"]["malt"]);
        var yeast = beer["ingredients"]["yeast"];
        var result = this.getHops(beer["ingredients"]["hops"]) + this.getMalts(beer["ingredients"]["malt"]) + " <br/> " + " <br/> " + "Yeast: " + beer["ingredients"]["yeast"];
        return result;
    }

    getDetailedData = function(beer){
        console.log(beer);

        var parent =  document.getElementById('Detail-section');
        document.getElementById('title_header').hidden = false;


        const beerName = beer["name"];
        document.getElementById('beer_name').innerHTML = beerName + "<br/>";

        const img_url = beer["image_url"];
        document.getElementById('beer_image').innerHTML = "<img src=" + img_url + " width=100px height=500px/>";

        const desc_info = beer["description"];
        document.getElementById('description').innerHTML = "Description: " + desc_info;

        const ph_level = beer["ph"];
        document.getElementById('ph').innerHTML = "<p> pH level: " + ph_level + " </p>";

        const brewery_tips = beer["brewers_tips"];
        document.getElementById('brewerytips').innerHTML = "Brewery tips: " + brewery_tips;

        const volume = "Volume: " +  beer["volume"]["value"] + " " + beer["volume"]["unit"];
        document.getElementById('volume').innerHTML = "<br /><p>" + volume + "</p>";

        const ingredients = "<br/> " + this.getIngredients(beer);
        document.getElementById('ingredient-list').innerHTML = ingredients;

        const method = this.getMethod(beer["method"]);
        document.getElementById('mash').innerHTML = "<br/> " + method + " <br/> ";

        const food_pairing = this.getFoodPairing(beer);
        document.getElementById('foodpair').innerHTML = "<br /><p> Food Pairing: " + food_pairing + " </p>";
    }

    
    // Returns the Table in HTML form.
    render() {
        
        return (
            <div>
                <div className="table-wrapper">
                    <table className="fl-table">
                    <thead>
                    <tr>{this.getHeader()}</tr>
                    </thead>
                    <tbody>
                    {this.getRowsData()}
                    </tbody>
                    </table>
                </div>
                <center>
                <div id='Detail-section' style={{color : "#45f5f5"}} className="detailed">
                        <h1 id='title_header' hidden={true}><p style={{color : "#FFFF00"}}>🍺 Highlighted Beer Report 🍺</p></h1>
                        <h2 id='beer_name' style={{color : "#FFFF00"}}></h2>
                        <div id='beer_image'></div>
                        <p id="description"></p>
                        <div id='volume'></div>
                        <div id='ph'></div>
                        <p id="foodpair"></p>
                        <p id="brewerytips"></p>
                        <p id="ingredient-list"></p>
                        <p id="mash"></p>
                        
                    </div>
                </center>
            </div>
        
        );
    }
   }
   // Returns the Row's data in TableData (td) entries. 
   const RenderRow = (props) =>{
   // console.log("~~~~ROW LOGGING~~~~");
    return props.keys.map((key, index)=>{
     //   console.log("index: " + index);
     //   console.log(props.data[key])
     //   console.log(key)
        if(key === "image_url") {
            
            return <td key={props.data[key] + 25 + index}><img src={props.data[key]} className="photo"/></td>
        }
        else if(key === "name") {
            return <td key={props.data[key] + 25 + index}><ul>{props.data[key]}</ul></td>
        }
        else if(key == "ebc") {
            return <td key={props.data[key] + 30 + index}><ul>{(!props.data[key] ? "N/A" : props.data[key])}</ul></td>
        }
        return <td key={props.data[key] + 25 + index}><ul>{props.data[key]}</ul></td>
    })
   }
