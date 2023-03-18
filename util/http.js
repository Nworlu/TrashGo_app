import axios from 'axios'

let apiUrl = "https://trashgo.onrender.com"


export async function signup(fullName, email, phoneNumber,password, passwordConfirm){
   const response = await axios.post(`${apiUrl}/api/v1/user/auth/signup`,{fullName, email, phoneNumber,password, passwordConfirm},{headers:{"Content-Type":"application/json"}})
//    const response = await axios.post(`${apiUrl}/api/v1/user/auth/signup`,data)

   const token = response.data
   return token
}
// signup('h')

export async function generateOtp(email){
    // const response = await axios.post(`${apiUrl}/api/v1/user/auth/generatotp/verifyemail`, {email}, {headers:{"Content-Type":"application/json"}})
    const response = await axios.post(`${apiUrl}/api/v1/user/auth/generatotp/verifyemail`, JSON.stringify(email), {headers:{"Content-Type":"application/json"}})

    const otp = response.data
    return otp
}
export async function verifyOtp(otpCode){
    const response = await axios.post(`${apiUrl}/api/v1/user/auth/verifyotp`, JSON.stringify(otpCode), {headers:{"Content-Type":"application/json"}})

    const otp = response.data
    return otp
}

export async function login(email,password){
    const response = await post(`${apiUrl}/api/v1/user/auth/login`, {email,password} ,{headers:{"Content-Type":"application/json"}})

    const token = response.data
   return token
}
