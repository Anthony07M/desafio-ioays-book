import { FormLogin } from "../../components/FormLogin"
import { Container } from "./styles"
import logo from '../../assets/Logo.png'


export const Login = () => {

    return (
        <Container>
            <div className="main">
                <span className="header">
                    <img src={logo} alt="logo"/>
                    <h2>Books</h2>
                </span>
                <FormLogin/>
            </div>
        </Container>
    )
}