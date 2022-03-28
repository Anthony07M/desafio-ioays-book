import { InputProps } from "../../@types";
import { Container } from "./styles";
export const Input = ({name, placeholder, type, children ,register, registerName}: InputProps) => {
    return(
        <Container>
            <span className="content">
                <span className="name">{name}</span>
                <input
                    placeholder={placeholder}
                    type={type}
                    {...register(registerName)}
                    autoComplete="on"
                    />
            </span>
            <span className="children">
                {children}
            </span>
        </Container>
    )
}