import React, { useState, useEffect } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import useStyles from './styles';

import { searchMovie } from '../../features/currentGenreOrCategory';

const Search = () => {
  const [query, setQuery] = useState('');
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log('Testing for:', query);
      dispatch(searchMovie(query));
    }
  };
  return (
    <div className={classes.searchContainer}>
      <SearchIcon />
      <TextField
        onKeyPress={handleKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        InputProps={{
          className: classes.input,
        }}
      />
    </div>
  );
};

export default Search;
