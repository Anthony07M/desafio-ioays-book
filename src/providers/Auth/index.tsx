import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { IAuthProviderData, IProviderProps, ISignIn } from "../../@types";
import { api } from "../../services/api";


export const AuthContext = createContext<IAuthProviderData>({} as IAuthProviderData)

export const AuthProvider = ({ children }: IProviderProps) => {

    const [ errorMessage, setErrorMessage ] = useState('')
    const [ token, setToken ] = useState<any>(() => localStorage.getItem('@books:authorization') || '')
    const [ loading, setLoading] = useState(false)
    
    const signIn = async ( data: ISignIn) => {
        try{
            setErrorMessage('')
            setLoading(true)

            const user = await api.post('/auth/sign-in', data)
            const { authorization, } = user.headers

            localStorage.setItem("@books:authorization", authorization)            
            toast.success('Bem vindo!')
            setToken(authorization)
            setLoading(false)
        }catch(e){
            setLoading(false)
            setErrorMessage('Usuário ou senha inválida.')
        }
    }

    const exitAplication = () => {
        localStorage.clear()
        setToken(localStorage.getItem('@books:authorization'))
      }

    return (
        <AuthContext.Provider value={{ signIn, errorMessage, token, loading, exitAplication}}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () =>  useContext(AuthContext);