const express = require("express");


const UserRouteHandler = express.Router();

const {CreateUserAcc,loginingUserAcc,LogoutHandle} = require('./utilities/UserHandeler')

UserRouteHandler.post("/register", CreateUserAcc)
UserRouteHandler.post("/login", loginingUserAcc )
UserRouteHandler.post("/logout", LogoutHandle )




module.exports = UserRouteHandler