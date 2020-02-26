import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import api from '../../services/api';

import { LogoHeader } from '../../components/Logo';
import { SearchHeader } from '../../components/SearchBar';
import { HashtagResult } from '../../components/Hashtag';

import './styles.css';

export default function Search() {

    const [ hashtags, setHashtags ] = useState([]);
    
    useEffect(() => { getResults(); }, []);

    async function getResults() {
      const term = sessionStorage.getItem('term');

      const response = await api.get(`/search/${term}`);
      setHashtags(response.data);
    }

    function handleKeyPress(event, term) {
      if (event.key === 'Enter') {
          handleSearch(term);
      }
    }

    async function handleSearch(term) {
      if (term.trim() !== '') {
        sessionStorage.setItem('term', term);
        getResults();
      }
    }

    return (
        <>
          <header>
            <LogoHeader />
            <SearchHeader 
                styles={useStyles}
                handleSearch={handleSearch}
                handleKeyPress={handleKeyPress}
            />
          </header>
          <main>
            <p>A busca por <strong>{sessionStorage.getItem('term')}</strong> retornou nos resultados:</p>
            <div className="hashtags">
              {
                hashtags.map(item => (
                  <HashtagResult key={item.name} hashtag={item.name} occurrences={item.value} />
                ))
              }
            </div>
          </main>
        </>
    );
}

const useStyles = makeStyles({
  button: {
      padding: 5,
      color: "black",
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      backgroundColor: "#A4A4A4",
      height: 40,
      width: 40,
      "&:hover": {
        backgroundColor: '#848484',
      }
  }
});