// import axios from "axios"
// import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
// import { useNavigate } from "react-router-dom"
// import { useDispatch } from "react-redux"
// import { fetchFail, fetchStart, loginSuccess } from "../features/authSlice"

// // //? Bir hook sadece bir react component ve bir custom hook icersinde cagrilabilir. Bir Js fonksiyonu icerisinde hook cagiralamaz.

// export const login = async (userData) => {
//   const navigate = useNavigate()
//   const dispatch = useDispatch()

//   const BASE_URL = "https://10001.fullstack.clarusway.com"

//   dispatch(fetchStart())
//   try {
//     const { data } = await axios.post(
//       `${BASE_URL}/account/auth/login/`,
//       userData
//     )
//     dispatch(loginSuccess(data))
//     toastSuccessNotify("login islemi basarili")
//     navigate("/stock")
//   } catch (error) {
//     console.log(error)
//     dispatch(fetchFail())
//   }
// }

import axios from "axios"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice"

const useAuthCall = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const login = async (userData) => {
    // const BASE_URL = "https://10001.fullstack.clarusway.com"

    // console.log(import.meta.env.VITE_API_KEY)
    // console.log(import.meta.env.VITE_API_KEY_PROD)

    dispatch(fetchStart())
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/account/auth/login/`,
        userData
      )
      dispatch(loginSuccess(data))
      toastSuccessNotify("login islemi basarili")
      navigate("/stock")
    } catch (error) {
      console.log(error.message)
      dispatch(fetchFail())
      toastErrorNotify(error.response.data.non_field_errors[0])
    }
  }

  const logout = async () => {
    dispatch(fetchStart())
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/account/auth/logout/`)
      dispatch(logoutSuccess())
      toastSuccessNotify("logout islemi basarili")
      navigate("/")
    } catch (error) {
      console.log(error)
      dispatch(fetchFail())
      toastErrorNotify("Logout islemi basarisiz")
    }
  }

  const register = async (userData) => {
    dispatch(fetchStart())
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/account/register/`,
        userData
      )
      dispatch(registerSuccess(data))
      toastSuccessNotify("kayit islemi basarili")
      navigate("/stock")
    } catch (error) {
      console.log(error)
      dispatch(fetchFail())
      toastErrorNotify("Kayit islemi basarisiz olmustur.")
    }
  }

  return { login, logout, register }
}

export default useAuthCall
