const {Router}=require('express')
const {login,register}=require('../controllers/auth.controller')
const {validationResult,check}=require('express-validator')
const User=require('../models/User.model')
const bcrypt=require('bcryptjs')
const router=Router()


//  /api/auth/register
router.post(
'/register',
[ check('email','Некорректный email').isEmail(),
check('password','Минимальная длина пароля 6 символов').isLength(6)],
register
)

//  /api/auth/login
router.post(
    '/login',
    [ check('email','Некорректный email').isEmail(),
check('password','Минимальная длина пароля 6 символов').isLength(6)],
    login)

module.exports=router