import { body } from 'express-validator'

export const registerValidation = [
    body('email', 'Wrong email format').isEmail(),
    body('password', 'Minimum 5 symbols required for password').isLength({ min: 5 }),
    body('fullName', 'Provide your name').isLength({ min: 3 }),
    body('avatarUrl', 'Incorrect link to avatar').optional().isURL(),
];