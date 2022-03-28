import { IProviderProps } from "../@types"
import { AuthProvider } from "./Auth"
import { BookProvider } from "./Books"

export const Providers = ({ children }: IProviderProps) => {
    return(
        <AuthProvider>
            <BookProvider>
                {children}
            </BookProvider>
        </AuthProvider>
    )
}