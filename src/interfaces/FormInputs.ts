export interface signupI {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    terms: boolean;
}   


export interface login {
    email: string;
    password: string;
}