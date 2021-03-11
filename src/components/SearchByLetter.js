import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import MealList from '../containers/MealList';
import '../styles/SearchByLetter.css';

const ALPHABETS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const useQuery = () => new URLSearchParams(useLocation().search);

const SearchByLetter = () => {
  const query = useQuery();
  let search = query.get('f');
  if (!search) {
    search = 'a';
  }
  return (
    <>
      <div className="search-letter-container">
        <h3>Browse Meal By Name:</h3>
        <ul className="list-alphabetical">
          {ALPHABETS.map(character => (
            <li key={`${character}-1`}>
              <Link to={`/search?f=${character}`} className="alphabetical-links">{character.toUpperCase()}</Link>
            </li>
          )) }
        </ul>
      </div>
      <MealList search={search} />
    </>
  );
};

export default SearchByLetter;
