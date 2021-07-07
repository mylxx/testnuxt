
import { Message } from 'element-ui'  //引用饿了么UI消息组件
import axios from 'axios' //引用axios
var md5 = require('js-md5');
// create an axios instance
const service = axios.create({
  baseURL: 'https://bbs-api.kbit.kmzscc.com', // 所有异步请求都加上/api,nginx转发到后端Springboot
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000
})

// request interceptor
service.interceptors.request.use(
  config => {
    let secretKey = "r83JqAqb4cLUS85E";
    // let token = uni.getStorageSync("h_tokens");
    let appId = "bXLllFayNLa4fmar";
    let timestamp = Math.round(new Date().valueOf() / 1000);
    let md5_str = md5(appId + secretKey + timestamp);
    config.headers["system"] = "web";
    config.headers["appid"] = appId;
    config.headers["currenttime"] = timestamp;
    config.headers["timestamp"] = timestamp;
    config.headers["encryptstring"] = md5_str;
    // config.headers["token"] = token;
    config.headers["crossDomain"] = true;
    config.headers["Access-Control-Allow-Origin"] = "*";
    config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    return config

  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code === 0) {
      return res
    } else {
      Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 2 * 1000
      })
      return Promise.reject(new Error(res.msg || 'Error'))
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service //导出封装后的axios
