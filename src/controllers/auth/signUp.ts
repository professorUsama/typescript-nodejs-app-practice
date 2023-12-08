import { Request, Response } from "express";

const SignUp = (req: Request, res: Response): Response =>{
    return res.status(200).json("This is the signup page");
};

export default SignUp;