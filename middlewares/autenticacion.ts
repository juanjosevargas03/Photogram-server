import { NextFunction, Response } from "express";
import Token from "../classes/token";


export const verificaToken = (req: any, res: Response, next: NextFunction) => {

    const userToken = req.get('x-token') || ''; //si el header es null asigna ''

    Token.comprobarToken( userToken )
    .then( (decoded: any) => {

        console.log('Decoded',decoded);
        req.usuario = decoded.usuario;
        next();
    })
    .catch( err => {

        res.json({
            ok: false,
            mensaje: 'Token no es correcto'
        });
    });




}