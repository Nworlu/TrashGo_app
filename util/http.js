import axios from 'axios'

let apiUrl = "https://trashgo.onrender.com"


export async function signup(fullName, email, phoneNumber,password, passwordConfirm){
   const response = await axios.post(`${apiUrl}/api/v1/user/signup`,{fullName, email, phoneNumber,password, passwordConfirm},{headers:{"Content-Type":"application/json"}})
//    const response = await axios.post(`${apiUrl}/api/v1/user/auth/signup`,data)

   const token = response.data
   return token
}
// signup('h')

export async function generateOtp(email){
    // const response = await axios.post(`${apiUrl}/api/v1/user/auth/generatotp/verifyemail`, {email}, {headers:{"Content-Type":"application/json"}})
    const response = await axios.post(`${apiUrl}/api/v1/user/resendverification`, JSON.stringify(email), {headers:{"Content-Type":"application/json"}})

    const otp = response.data
    return otp
}
export async function verifyOtp(otpCode){
    const response = await axios.post(`${apiUrl}/api/v1/user/verify`, JSON.stringify(otpCode), {headers:{"Content-Type":"application/json"}})

    const otp = response.data
    return otp
}

export async function login(email,password){
    // const response = await post(`${apiUrl}/api/v1/user/login`, {email,password} ,{headers:{"Content-Type":"application/json"}})

    const token = response.data
   return token
}

export async function forgotPass(email){
    // const response = await axios.post(`${apiUrl}/api/v1/user/auth/generatotp/verifyemail`, {email}, {headers:{"Content-Type":"application/json"}})
    const response = await axios.post(`${apiUrl}/api/v1/user/forgotPassword`, JSON.stringify(email), {headers:{"Content-Type":"application/json"}})

    const otp = response.data
    return otp
}
export async function resetPassword({password,passwordConfirm}){
    // const response = await axios.post(`${apiUrl}/api/v1/user/auth/generatotp/verifyemail`, {email}, {headers:{"Content-Type":"application/json"}})
    const response = await axios.post(`${apiUrl}/api/v1/user/resetpassword`, JSON.stringify({password,passwordConfirm}), {headers:{"Content-Type":"application/json"}})

    const otp = response.data
    return otp
}
