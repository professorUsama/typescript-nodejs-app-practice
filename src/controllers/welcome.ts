import { Request, Response } from "express";

const Message = (req:Request, res:Response) =>{
    return res.status(200).json("welcome")
}

export default Message;