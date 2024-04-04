import React from 'react';
import BookCard from './components/BookCard'

export default function BookCards({ books }){

        return (
            // Lager en <div> som holder på alle BookCard-komponentene
            <section>
                {/*.map brukes her for å gå gjennnom hver bok i arrayet 'books' og laget et type bokkort for hver bok*/}
                    {books.map(book => (
                        
        //lager komponent BookCard for hver bok og bruker key som en hjelp til react med å identifisere elementer som blir lagt til, endres på eller er blitt fjernet
                    <BookCard key={book.key} book={book} />
                ))}
            </section>
        );
    }
    

    
