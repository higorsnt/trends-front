import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

export default function Header({ styles, search }) {
    const [ term, setTerm ] = useState('');
    const stylesheet = styles();


    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            search(term);
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
                        className={stylesheet.button} 
                        onClick={() => search(term)}
                    >
                        <SearchIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}