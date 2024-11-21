interface IUser {
    name:String
    email:String
    lastNames:String
    password:String
    rol: "administrador" | "client";
}

declare namespace Express{
    export interface Request{
        user?:IUser
    }
}