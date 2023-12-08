import { Request, Response } from "express";


const SignIn = (req: Request, res:Response):Response =>{
    return res.status(200).json("This is the signIn page");
};

export default SignIn;