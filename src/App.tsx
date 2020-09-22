import React, { useState, useEffect } from 'react';
import './App.css';
import FilterBar from './components/filterBar';
import GridContainer from './components/gridContainer';

function App() {
  const [apiData, setApiData] = useState([]);
  const [languageSelection, setLanguageSelection] = useState('All');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch('https://api.github.com/search/repositories?q=stars:%3E10000&sort=stars')
      .then(res => res.json())
      .then(json => setApiData(json.items));
    }
    fetchData();
  }, [])

  useEffect(() => {
    const executeFilter = () => {
      let filterResults = [];
      if (languageSelection === 'All') {
        filterResults = apiData;
      } else if (languageSelection === 'No language specified') {
        filterResults = apiData.filter(repo => !repo['language'])
      } else {
        filterResults = apiData.filter(repo => repo['language'] === languageSelection)
      }
      setFilteredData(filterResults);
    }
    executeFilter();
  }, [languageSelection])

  const updateLanguageSelection = (language: any) => {
    setLanguageSelection(language);
  }


  return (
    <div className="app-wrapper">
      <FilterBar data={apiData} updateLanguageSelection={updateLanguageSelection} selectedLanguage={languageSelection} />
      <GridContainer data={filteredData.length > 0 ? filteredData: apiData} />
    </div>
  );
}

export default App;
