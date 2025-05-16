import {z} from 'zod';

export const usernameValidation= z
.string()
.min(3, 'username is required')
.max(20,"username must be between 3 and 30 characters")
.regex(/^[a-zA-Z0-9_]+$/, 'username must be alphanumeric and between 3 and 30 characters')

export const emailValidation = z
.string()
.email('Invalid email')
.max(20, 'Email must be less than 50 characters')
  
export const validatePassword = z.string().min(6, 'Password must be at least 6 characters long');

export const signUpSchema = z.object({
    username: usernameValidation,
    email:emailValidation ,
    password: validatePassword,
    veifyCode : z.string().min(6, 'Verification code must be at least 6 characters long')
    
})