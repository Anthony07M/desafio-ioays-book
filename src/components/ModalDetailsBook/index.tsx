import { IBookModal } from "../../@types"
import { Container, CircleExit } from "./style"
import aspas from '../../assets/aspas.png'

export const ModalBook = ({
    authors,
    imageUrl,
    isbn10,
    isbn13,
    language,
    pageCount,
    published,
    publisher,
    title,
    description,
    onClose
}: IBookModal) => {
    return(
        <Container>
            <div className="content-icon">
                <CircleExit onClick={onClose}>x</CircleExit>
            </div>

            <div className="content">
                <img src={imageUrl} alt={authors[0]}/>
                <span className="main">
                    <div className="title">
                        <h2>{title}</h2>
                        <h3>{authors}</h3>
                    </div>
                    <div className="informations">
                        <span>INFORMAÇÕES</span> 
                        <p><span className="key">Páginas</span> <span className="value">{pageCount} Páginas</span></p>
                        <p><span className="key">Editora</span> <span className="value">Editora {publisher}</span></p>
                        <p><span className="key">Publicação</span><span className="value">{published}</span></p>
                        <p><span className="key">Idioma</span> <span className="value">{language}</span></p>
                        <p><span className="key">Título Original</span> <span className="value">{title}</span></p>
                        <p><span className="key">ISBN-10</span> <span className="value">{isbn10}</span></p>
                        <p><span className="key">ISBN-13</span> <span className="value">{isbn13}</span></p>
                    </div>
                    <div className="resenha">
                        <span>RESENHA DA EDITORA</span>
                        <p>
                            <img src={aspas} alt="aspas" />
                            {description}
                        </p>
                    </div>
                </span>
            </div>
        </Container>
    )
}