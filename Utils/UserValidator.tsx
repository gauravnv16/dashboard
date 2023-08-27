import z from 'zod';

export const userValidator = z.object({
    username: z.string().min(3,{
        message: "Username must be at least 3 characters long"
    }).max(20,{
        message: "Username must be at most 20 characters long"
    }).optional(),
    email: z.string().email().min(6,{
        message: "Email must be at least 6 characters long"
    }).max(50,{
        message: "Email must be at most 50 characters long"
    }).regex(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,{
        message: "Email must be a valid email address"
    }),
    password: z.string().min(6,{
        message: "Password must be at least 6 characters long"
    }).max(20,{
        message: "Password must be at most 20 characters long"
    }).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,{
        message: "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    }),
    confirmPassword: z.string().min(6,{
        message: "Password must be at least 6 characters long"
    }).max(20,{
        message: "Password must be at most 20 characters long"
    }).optional(),
    img_url: z.string().optional(),
});