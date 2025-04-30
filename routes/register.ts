import express from "express";
import registerController from '../controllers/register-controller';
import {validatorParams, validator} from '../middleware/register-validator';

const router = express.Router();


router.post('/', validatorParams, validator, registerController);


export default router;