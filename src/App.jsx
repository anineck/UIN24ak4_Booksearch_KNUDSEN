import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import SearchResults from './components/SearchResults';
import BookCard from './components/BookCard';

import './App.css';



function App() {
  //lager to ulike useStates: en der alle bøkene listes opp, og en annen for søketekst.
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
//her hentes James Bond bøkene fra Open Library APIet
  const fetchBooks = async () => {
    const response = await fetch(`https://openlibrary.org/search.json?title=james+bond`);
    const data = await response.json();
    setBooks(data.docs);// her blir bøkene oppdatert ut ifra APIet
  };

  useEffect(() => {
    fetchBooks();
  }, []); // tomt array tilsvarer at det skal gjøres en gang og ikke uendelig mange ganger

  

  return (

    
    //hva brukeren ser
    <Layout>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)} //hver gang brukeren skriver noe i input feltet oppdateres søketeksten.
          placeholder="Search for James Bond books..." //tekst som vises inni søkefeltet som et hint til brukeren.  
           /> 
          
       
        {search.length >= 3 ? // denne koden sier ifra at søkeresultater vises kun dersom det er 3 eller flere tegn i feltet.
          <SearchResults books={books} search={search} /> //dette er komponenten for søkeresultater og den tar for seg filtrering
          :
          books.map(book => (
            <BookCard key={book.key} book={book} /> 
          ))}
      </Layout>
    
  );
};


export default App
