import {Schema, model} from "mongoose"

interface IUser {
    name:String
    email:String
    lastNames:String
    password:String
    rol: "administrador" | "client";
}

const UserSchema = new Schema<IUser>({
    name:{
        type:String,
        requiered:true
    },
    lastNames:{
        type:String,
        requiered:true
    },
    email:{
        type:String,
        requiered:true
    },
    password:{
        type:String,
        requiered:true
    },
    rol:{
        type:String,
        enum:["administrador","client"],
        default:"client"
    }
})

export const UserModel = model("user",UserSchema)