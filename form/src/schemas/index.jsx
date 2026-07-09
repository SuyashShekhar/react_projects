import  * as Yup from "yup";

export const  signUpSchema = Yup.object({
    name: Yup.string().min(3).max(15).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).required("please enter your password"),
})
