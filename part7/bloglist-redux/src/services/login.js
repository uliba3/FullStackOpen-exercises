import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/login'

const login = async credentials => {
  console.log
  const response = await axios.post(baseUrl, credentials)
  console.log("response login", response)
  return response.data
}

export default { login }