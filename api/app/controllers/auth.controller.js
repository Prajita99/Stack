const AuthSErvice = require("../services/auth.services");
const auth_svc = new AuthSErvice();

class AuthController {
    constructor() {
        this.auth_svc = new AuthSErvice();
    }
    login = (req, res, next) => {
        //
        let data = req.body;
        let validation_msg = this.auth_svc.loginValidate(data);

        if(validation_msg){
            next({
                status: 422,
                msg: validation_msg
            })
         }else{
            res.json({
                result: data
            })
         } 
    }
}

export default AuthController;