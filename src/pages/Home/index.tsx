import { Container } from "./styles";
import { BookCard } from "../../components/BookCard";
import { useBook } from "../../providers/Books";
import { useEffect, useState } from "react";
import { ControllerPage } from "../../components/ControllerPage";
import { FiLogOut } from 'react-icons/fi'
import { useAuth } from "../../providers/Auth";
import { ModalBook } from "../../components/ModalDetailsBook";
import logo from '../../assets/Logo2.png'

export const Home = () => {

  const { getBooks, listBooks, totalPages, book, loadingBook } = useBook()
  const { exitAplication } = useAuth()
  const [ page, setPage ] = useState<number>(1)
  const [ visible, setVisible ] = useState(false)
  
  const handleNextPage = () =>  {
    setPage(page + 1)
    getBooks(page, 25)
  }
  const handleBackPage = () =>  {
    setPage(page - 1)
    getBooks(page, 25)
  }

  useEffect( () => {  
    getBooks(page, 25)
  }, [])

  return (
    <Container>
      {
        visible?(
          <>
            { !loadingBook && 
                <ModalBook
                id={book.id}
                title={book.title}
                authors={book.authors}
                description={book.description}
                imageUrl={book.imageUrl}
                isbn10={book.isbn10}
                isbn13={book.isbn13}
                language={book.language}
                pageCount={book.pageCount}
                published={book.published}
                publisher={book.publisher}
                onClose={() => setVisible(false)}
            />
            }
          </>

        ):(
          <>
          <span className="header">
            <span>
              <img src={logo} alt="logo"/>
              <h2>Books</h2>
            </span>
            <span className="circle" onClick={exitAplication}>
              <FiLogOut/>
            </span>
          </span> 
          <div className="list">
              {listBooks.map(book => {
                return (
                    <BookCard
                      authors={book.authors}
                      imageUrl={book.imageUrl}
                      pageCount={book.pageCount}
                      published={book.published}
                      publisher={book.publisher}
                      title={book.title}
                      key={book.id}
                      id={book.id}
                      onClose={() => setVisible(true)}
                      />
                      )
                    })}
           </div>
            <ControllerPage 
              page={page} 
              totalPages={totalPages} 
              nextPage={handleNextPage} 
              backPage={handleBackPage}/>
            </>
      ) 
    }
    </Container>
  );
};
