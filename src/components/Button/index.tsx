import { IButton } from "../../@types"
import { ButtonStyle } from "./styles"
import { PulseLoader } from 'react-spinners'

export const Button = ({ name, type, loading, ...rest }: IButton) => {
    return(
        <ButtonStyle
            {...rest}
            type='submit'
        >   
            {loading ? <PulseLoader color="#B22E6F" size={8}/> :name}
        </ButtonStyle>
    )
}