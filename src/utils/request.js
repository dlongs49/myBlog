import axios from 'axios'
const request = axios.create({
  timeout: 50000  //请求超时时间
})
// 请求拦截器
request.interceptors.request.use(config => {
  // 请求拦截
  const token = window.localStorage.getItem("USERTOKEN");
  if(token){
    config.headers['Authorization'] = `${token}`;
  }
  return config
}, error => {
  return Promise.reject(error)
})
// 响应拦截器
request.interceptors.response.use(response => {
  if(response.data.ErrorCode == 401){
    window.localStorage.removeItem("USERTOKEN")
  }
  return response
}, error => {
  return Promise.reject(error)
})
export default request 

