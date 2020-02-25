import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import LogoHome from '../../components/Logo';
import SearchHome from '../../components/SearchBar';

import './styles.css';

export default function Home({ history }) {
    const [ term, setTerm ] = useState('');

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            handleSearch(term);
        }
    }

    function handleSearch(term) {
        if (term.trim() !== '') {
            history.push(`/search/${term}`);
        }
    }

    return (
        <div className="container">
            <LogoHome />
            <SearchHome 
                term={term}
                setTerm={setTerm}
                styles={useStyles} 
                search={handleSearch}
                handleKeyPress={handleKeyPress}
            />
        </div>
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