import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { LogoHome } from '../../components/Logo';
import { SearchHome } from '../../components/SearchBar';

import './styles.css';

export default function Home({ history }) {

    function handleKeyPress(event, term) {
        if (event.key === 'Enter') {
            handleSearch(term);
        }
    }

    function handleSearch(term) {
        if (term.trim() !== '') {
            sessionStorage.setItem('term', term);
            history.push('/search');
        }
    }

    return (
        <div className="container">
            <LogoHome />
            <SearchHome 
                styles={useStyles}
                handleSearch={handleSearch}
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