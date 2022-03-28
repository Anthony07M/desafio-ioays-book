import { ReactChild, ReactNode } from "react";

export interface InputProps{
    name: string
    placeholder: string
    type: string
    children?: ReactChild
    registerName: string
    register: (string: string) => void;
}

export interface IButton {
    name: string
    loading: boolean
    type: "button" | "submit" | "reset"
}

export interface ISignIn {
    email: string
    password: string
}

export interface IAuthProviderData {
    errorMessage: string
    token: string
    loading: boolean
    exitAplication: () => void
    signIn: (data: ISignIn) => void 
}

export interface IProviderProps{
    children: ReactNode
}

export interface IBookCard {
    id?: string
    imageUrl: string
    title: string
    authors: Array<string>
    pageCount: number
    publisher: string
    published: number
    totalPages?: number
    page?: number
    onClose: () => void
}

export interface IBookModal extends IBookCard {
    isbn10: string
    isbn13: string
    language: string
    description: string
    onClose: () => void
}


export interface IBookProvider {
    getBooks: (page: number, amount: number) => void
    getBookById: (bookId: string) => void
    listBooks: IBookCard[]
    totalPages: number
    book: IBookModal
    loadingBook: boolean
    setLoadingBook: (loadingBook: boolean) => void
}


export interface IControllerPage {
    page: number
    totalPages: number
    nextPage: () => void
    backPage: () => void
}