import { Request, Response } from "express";
import { UserModel } from "../models/UserModel";

export const registerUsers = async (req:Request
    ,res:Response):Promise<any> =>{
        try {
            //Administradores no puedesn crear clientes 
            if(req.user?.rol === "client"){
                return res.status(400).json({msg:"Los"})
            }
            //Primero validamos los datos que necesitamos existen 
            const name = req.body.name
            const email = req.body.email
            const lastName = req.body.lastName
            const password = req.body.password
            const rol = req.body.rol

            //Administradores no puedesn crear clientes 
            if(req.user?.rol === "administrador" && rol === "client"){
                return res.status(400).json({msg:"Los administradores no pueden crear clientes"})
            }
            if (!name || !email || !lastName || !password || !rol){
                return res.status(400).json({
                    msg:"Faltan datos para crear un usuario"
                })
            }
            //Validar que el usuario sea administrador si el usuario a craer es administrador
            if(rol === "administrador" && req.user?.rol !="administrador"){
                return res.status(400).json({
                    msg:"No puedes crear un nuevo administrador si no eres uno"
                })
            }
            await UserModel.create({
                name,
                lastName,
                email,
                password,
                rol:rol
            })
            
            return res.status(200).json({msg:"Usuario registrado con exito!"})
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Hubo un error al crear el usuario"})
            
        }

}