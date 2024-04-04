import React from "react"
import BookCard from "./BookCard"
export default function SearchResults ({books, search}){

    return(

        <>
        
        <section>
        {/*basert på søkeordet blir bøkene filtrert, der etter mappes hver bok til et BookCard-komponent*/ }
            {books.filter(book => book.title.toLowerCase().includes(search.toLowerCase()))
                  .map(book => (
                    // for hver bok som passer til søket, vis et bokkort/BookCard med bokinformasjonen
                      <BookCard key={book.key} book={book} />
                  ))}
        </section>

        </>
    )
}