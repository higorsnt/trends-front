import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

import './styles.css';

export default function Home() {

    const [ term, setTerm ] = useState('');
    const styles = useStyles();

    function handleSearch() {
        console.log(term);
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <div className="container">
            <div id="logo">
                <p>trends</p>
            </div>
            <div className="search-area">
                <div id="search-bar">
                    <input 
                        type="text"
                        id="term"
                        placeholder="Insira o termo desejado para a pesquisa"
                        value={term}
                        onChange={event => setTerm(event.target.value)}
                        onKeyPress={handleKeyPress} 
                    />
                    <IconButton 
                        className={styles.button} 
                        onClick={handleSearch}
                    >
                        <SearchIcon />
                    </IconButton>
                </div>
            </div>
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
        width: "5%",
        minWidth: 40
    }
});