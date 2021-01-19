
import jwt from  'jsonwebtoken';

export default class Token {

    private static seed: string = 'seed-secreto-de-la-app';
    private static caducidad: string ='30d';

    constructor() {}

    static getJwtToken( payload: any){

        return jwt.sign({usuario: payload},
                         this.seed,
                        { expiresIn: this.caducidad});
    }

    static comprobarToken( userToken: string ){

        return new Promise( (resolve, reject) => {

            jwt.verify( userToken, this.seed, (err, decoded) => {

                if(err){
                    reject();
                }else {
                    resolve( decoded );
                }


            })


        });
    }




}