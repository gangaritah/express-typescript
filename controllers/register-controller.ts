import { Request, Response } from "express";
import User from '../Dto/UserDto';
import UserService from '../services/UserServices';


let register = async (req: Request, res: Response) => {
  
    const {
      email,
      password,
      nombres,
      apellidos,
      telefono
    } = req.body;    
    const registerUser = await UserService.register(new User(email, nombres, apellidos, telefono, password))
    return res.status(201).json(
      { status: 'register ok'}
    );
 
}


export default register;