import { useContext, createContext, useState } from "react";
import { IBookCard, IProviderProps, IBookProvider, IBookModal } from "../../@types";
import { api } from "../../services/api";
import { useAuth } from "../Auth";

export const BookContext = createContext<IBookProvider>({} as IBookProvider)

export const BookProvider = ({ children }: IProviderProps) => {

    const [ listBooks, setListBooks ] = useState<IBookCard[]>([])
    const [ book, setBook ] = useState<IBookModal>({} as IBookModal)
    const [ totalPages, setTotalPage ] = useState<number>(0)

    const [ loadingBook, setLoadingBook ] = useState<boolean>(false)

    const { token } = useAuth()
    

    const getBooks = async (page: number, amount: number) => {

        const response = await api.get('/books', {
          headers:{ 
            Authorization: `Bearer ${token}`
          },
          params: {
            page: page,
            amount: amount
          }
        })
        setListBooks(response.data.data)
        setTotalPage(response.data.totalPages)
      }


      const getBookById = async (bookId: string) => {
        setLoadingBook(true)
        const response = await api.get(`/books/${bookId}`, {
          headers:{ 
            Authorization: `Bearer ${token}`
          },
        })
        setBook(response.data)
        setLoadingBook(false)
      }
    return(
        <BookContext.Provider value={{getBooks, listBooks, totalPages, getBookById, book, loadingBook, setLoadingBook}}>
            {children}
        </BookContext.Provider>
    )
}


export const useBook = () => useContext(BookContext)