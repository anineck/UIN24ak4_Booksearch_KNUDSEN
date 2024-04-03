
export default function Layout({children}){

    
    return (
        <>
          <header>
            <h1>James Bond BookSearch</h1>
          </header>
          <main>
            {children}
          </main>
          <footer>
            <p> Arbeidskrav 4 UIN 2024</p>
          </footer>
       </>
      );
    };
    