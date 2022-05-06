import logo from './logo.svg';
import './Search.css';
import React from 'react';
import ReactDOM from 'react-dom' 
import TableComp from './Table';
import { Link } from "react-router-dom"

function Search() {
  const [word, setWord] = React.useState('IPA');
  const [associations,  setAssociations] = React.useState(null);
  const getAssociations = async () => {
    const response = await fetch('/api/associations/' + word);  // Proxy API call to server back-end.
    const data = await response.json();                         // Response should already be in json but convert it just in case.
    await setAssociations(data);                                // assign the data to the associations variable.
    await console.log(`Length is: ${data.length}`);
    await console.log(`-----SAMPLE ELEMENT-----\n${data[0]}`);  // Debug info, can be found in browser's console.
    // fetch('/api/associations/' + word)
    //   .then(result => result.json())
    //   .then(body => setAssociations(body));
    // console.log(Object.keys(associations).length)
  };
    
  document.title = 'Beer Search';
  // Rendered HTML
  // Sets up a button that grabs whatever is in the search bar and calls the API caller with that data.
  // Then, it creates a table using the returned data, or shows "No results" if nothing is returned.
  // More info on how the table is set up can be found inside the Table Component. (Table.js)
  return (
    <div>
      <div className="HoroscopeLink">
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
        <Link to="/">
          <button variant="outlined">
            Get your Beeroscope!
          </button>
        </Link>
        </nav>
      </div>
    
      <div className="search">
        <h1>Beer Search!</h1>
        <input value={word} onChange={e => setWord(e.target.value)} />
        <button onClick={getAssociations}>Search</button>
        {associations && (
          Object.keys(associations).length === 0
            ? <p>No results</p>
            : <div key={"table list"}>
                <TableComp data={associations}/>
              </div>
        )}
      </div>
      </div>
  );
}

export default Search;
