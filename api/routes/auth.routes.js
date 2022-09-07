const router = require('express').Router();
const AuthController = require("../app/controllers/auth.controller").default
const auth_ctrl = new AuthController();

router.post('/login', auth_ctrl.login)

module.exports = router;