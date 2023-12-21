import axios from "axios";

axios.defaults.withCredentials = true

//实例1
const axiosInst = axios.create({
  headers: {

  },
  baseURL: 'http://localhost:8080',
  timeout: 10000,
  withCredentials: false
})
//实例2
// const axiosInst1 = axios.create({
//   headers: {

//   },
//   baseURL: 'http://localhost:8090',
//   timeout: 10000,
//   withCredentials: false
// })

// 请求拦截器
axiosInst.interceptors.request.use(config => {
  // 设置Content-Type、token等等
  if (!config.headers["Content-Type"]) {
    config.headers["Content-Type"] = "application/json";
  }

  // 这里可以添加请求头参数
  // config.headers["authid"] = "123"
  // config.headers["openid"]=localStorage.getItem("openid");  

  return config;
},
  error => {
    //统一错误处理...
    return Promise.reject(error);
  }
)

// 响应拦截器
axiosInst.interceptors.response.use(
  response => {
    if (response.status === 200) {
      if (!response.data.success) {
        console.log("Request error occured...")
      }
      return response.data.data;
    } else {
      // return Promise.reject(error);
    }
  },
  error => {
    //错误处理...
    // return Promise.reject(error);
  }
);

const get = (url, config) => {
  return axiosInst.get(url, config);
}
const post = (url, config) => {
  return axiosInst.post(url, JSON.stringify(config))
}

// 对外暴露方法
export default {
  axiosInst,
  get,
  post
  // ,axiosInst1
}