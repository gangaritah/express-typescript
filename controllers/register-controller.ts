import bcrypt from 'bcryptjs';
import registerRepository from '../repositories/registerRepository';
import { Request, Response } from "express";


let register = async (req: Request, res: Response) => {
  try {
    const {
      email,
      password,
      name,
      lastName,
      phoneNumber
    } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const result = await registerRepository(email, name, lastName, phoneNumber, hashedPassword);
    return res.status(201).send(
      { status: 'register ok', password_hasheado: hashedPassword }
    );
  } catch (error: any) {
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).send({ errorInfo: error.sqlMessage }
      );
    }
  }
}


export default register;