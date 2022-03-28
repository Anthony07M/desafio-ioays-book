import { Button } from "../Button"
import { Input } from "../Input"
import { Container, Error } from "./styles"
import { useForm } from "react-hook-form"
import { useAuth } from "../../providers/Auth"
export const FormLogin = () => {

    //refatorar e fazer o redirect

    const { register, handleSubmit } = useForm()
    const { signIn, errorMessage, loading } = useAuth()

    const onSubmit = (data: any) => {
       signIn(data)
    }
    return(
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    name="Email"
                    placeholder="digite seu email..."
                    type="text"
                    registerName="email"
                    register={register}
                    />

                <Input
                    name="Senha"
                    placeholder="digite sua senha..."
                    type="password"
                    registerName="password"
                    register={register}
                >
                    <Button name="Entrar" type="submit" loading={loading}/>
                </Input>
            </form>
            {
                errorMessage && <Error>{errorMessage}</Error>
            }
            
        </Container>
    )
}