const {validationResult,check}=require('express-validator')
const bcrypt=require('bcryptjs')
const User=require('../models/User.model')
const jwt=require('jsonwebtoken')
const config=require('config')

const JWT_SECRET=config.get('jwtSecret')
function Test(word){
    const capitalWord=word.toLowerCase()
    return capitalWord===word
}
async function register(req,res){
    try {
        const {email,password}=req.body
        const errors=validationResult(req)
        console.log(errors)
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors:errors.array(),
                message:"Nekorrektniye danniye"
            })
        }        
        if(Test(password)){
            return res.status(400).json({
                messaje:"1 capital"
            })
        }
        
        const candidate=await User.findOne({email})
        if(candidate){
           return res.status(400).json({
                message:"Такой пользователь уже существует"
            })
        }
        const hashedPassword=await bcrypt.hash(password,12);

        const user=new User({
            email,
            password:hashedPassword
        })
        await user.save()
        res.status(201).json({
            message:"Пользователь успешно создан."
        })


    } catch (error) {
        res.status(500).json({
            message:" Чтото пошло не так, попробуйте снова.",
            error:error.message
        })
    }
}

async function login(req,res){
    try {
        const {email,password}=req.body
        const errors=validationResult(req)
        console.log(errors)
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors:errors.array(),
                message:"Nekorrektniye danniye"
            })
        }        
        if(Test(password)){
            return res.status(400).json({
                messaje:"1 capital"
            })
        }
        const user=await User.findOne({email})

        if(!user){
            return res.status(400).json({
                message:"Такого пользователя нет в базе"
            })
        }

        const isMatch=await bcrypt.compare(password,user.password)

        if(!isMatch){
            return res.status(400).json({
                message:"Wrong Password"
            })
        }

        const token=jwt.sign(
            {userID:user.id},   
            JWT_SECRET,
            {expiresIn:"1h"}

        )

        res.json({
            token,
            userID:user.id,
            message:"Авторизация произошла успешно"
        })
        
       
        
        
    } catch (error) {
        
    }
}

module.exports={register,login}

