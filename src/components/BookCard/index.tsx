import { IBookCard } from "../../@types"
import { useBook } from "../../providers/Books"
import { Container } from "./styles"

export const BookCard = ({
    imageUrl,
    pageCount,
    published,
    publisher,
    authors,
    title,
    id,
    onClose
}: IBookCard) => {

    const { getBookById } = useBook()

    const getBook = (id: string) => {
        getBookById(id)
        onClose()
    }

    return(
        <Container onClick={() => getBook(id as string)} >
            <img src={imageUrl} alt="image_book"/>
            <div className="main">
                <div className="a details-title">
                    <h2>{title}</h2>
                    <h3>{authors}</h3>
                </div>
                <div className="a details-bady">
                    <p>{pageCount} páginas</p>
                    <p>Editora {publisher}</p>
                    <p>Publicado em {published}</p>
                </div>
            </div>
        </Container>
    )
}