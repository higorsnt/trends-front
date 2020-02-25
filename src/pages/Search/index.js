/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import api from '../../services/api';
import Header from '../../components/Header';

import './styles.css';

export default function Search({ match, history }) {

    const [ hashtags, setHashtags ] = useState([]);
    const [ term , setTerm ] = useState(match.params.term);
    
    useEffect(() => {
        async function getResults() {
            const response = await api.post(`/search/${term}`);
            setHashtags(response.data);
            console.log(hashtags);
        }

        getResults();
    }, [term, hashtags]);

    function handleSearch(term) {
      if (term.trim() !== '') {
          history.push(`/search/${term}`);
      }
    }

    return (
        <>
          <p>{term}</p>
        </>
    );
}

const useStyles = makeStyles({
  button: {
      padding: 5,
      color: "black",
      borderRadius: 0,
      backgroundColor: "white",
      height: 40,
      width: 40,
  }
});