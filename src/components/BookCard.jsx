import React from "react"
export default function BookCard({book}){ //her tas propen 'book' imot for å da vise bokas detaljer
    
    return(
        <>
    
    <section className="book-card">  {/*laget klasse for å lettere lage styling*/ }
    
      <h2>{book.title}</h2>
            {/* her sjekkes det for om boken har et bildecover og hvis ja, blir det vist på siden.*/}
      {book.cover_i && <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={book.title} />} 
      <p>First Publish Year: {book.first_publish_year}</p>
      <p>Author: {book.author_name}</p>
      <p>Average Rating: {book.ratings_average}</p>
      
      
    </section>

        </>
    )
}
// tar noen sekunder før bokkortene vises, det skyldes  nok APIet 
// knappen til Amazon ble ikke med her fordi jeg ikke fant noe som het amazon_id i APIet.