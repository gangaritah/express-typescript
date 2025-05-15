import { check, validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express'; // Necesitas los tipos de Express

export const validatorParams: ValidationChain[] = [
  check('email').isEmail(),
  check('telefono').isLength({ min: 8, max: 15 }),
  check('nombres').isLength({ min: 1, max: 255 }),
  check('apellidos').isLength({ min: 1, max: 255 }),
  check('password').isLength({ min: 1, max: 255 })
];

export function validator(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
}