import { Request, Response } from "express";
import UserRepository from '../repositories/UserRepository';
import Auth from '../Dto/AuthDto';


let auth = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const login = await UserRepository.login(new Auth(email, password));
    if (login.logged) {
      return res.status(200).json({
        status: login.status
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