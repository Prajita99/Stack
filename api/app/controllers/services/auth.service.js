class AuthService {
    loginValidate = (data) => {
        let msg = null;
        if(!data.email || !data.password){
            msg: "Credentials are required"
        }else{
            msg = null;
        }
        return msg;
    }
}

module.exports = AuthSercice;