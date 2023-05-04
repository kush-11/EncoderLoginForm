import axios from 'axios'

const API_URL = '/api/'

// Register user
const register = async (userData) => {
  // console.log("react rgister ");
  const response = await axios.post(API_URL+'Register', userData)
  if(response.status!==200)
  {
    return Promise.reject(response.message);
  }
  else if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData)

  if(response.status!==200)
  {
    return Promise.reject(response.message);
  }
  else if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const AuthService = {
  register,
  logout,
  login,
}

export default AuthService