import { IControllerPage } from "../../@types"
import { Container } from "./styles"
import { MdOutlineArrowBackIosNew, } from 'react-icons/md'
import { GrNext } from 'react-icons/gr'
export const ControllerPage = ({ page, totalPages, backPage, nextPage}: IControllerPage) => {
    return(
        <Container>
            {page <= 1?(
                <span className="icon icon-disable">
                    <GrNext/>
                </span>
            ):(
                <span className="icon" onClick={backPage}>
                    <GrNext/>
                </span>
            )}
            Página <span className="number">{page}</span> de <span className="number">{totalPages}</span> 
            {totalPages === page ?(
                <span className="icon icon-disable">
                    <MdOutlineArrowBackIosNew/>
                </span> 
            ):(
                <span className="icon" onClick={nextPage}>
                    <MdOutlineArrowBackIosNew/>
                </span>
            )}
        </Container>
    )
}