import axios from 'axios'

const api = axios.create({
  baseURL: 'https://nc-news-api-6aaq.onrender.com/api',
})

api.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => {
    throw err.response.data
  }
)

export { api }
