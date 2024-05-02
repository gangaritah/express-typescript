import { Request, Response } from "express";
import UserRepository from '../repositories/UserRepository';
import Auth from '../Dto/AuthDto';
import generateToken from '../Helpers/generateToken';
import dotenv from "dotenv";
dotenv.config();


let auth = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const login = await UserRepository.login(new Auth(email, password));
    if (login.logged) {
      return res.status(200).json({
        status: login.status,
        token: generateToken({id: 34}, process.env.KEY_TOKEN, 5)
      });
    }
    return res.status(401).json({
      status: login.status
    });
  } catch (error) {
    console.log(error);
  }
}


export default auth;