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
    registerValidate = (data) => {
        let msg = null;
        if(!data.name) {
            msg['name'] = "Name is required"
        } else {
            delete msg['name']
        }
        if(!data.email) {
            msg['email'] = "Email is required"
        } else {
            delete msg['email']
        }
        if(!data.password) {
            msg['password'] = "Password is required"
        } else {
            delete msg['password']
        }
        if(!data.role) {
            msg['role'] = "Role is required"
        } 
        if(data.role !== 'admin' || data.role !== 'seller' || data.role !== 'customer'){
            msg['role'] = "Admin, seller or customer can only be role values"
        } else{
            delete msg['role']
        }
        // if(msg){
        //     return msg
        // }else{
        //     return null;
        // }
            return msg;
        }
    }


module.exports = AuthSercice;