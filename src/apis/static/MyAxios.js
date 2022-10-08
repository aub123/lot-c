import axios from "axios";
axios.defaults.baseURL = "https://api.qiaolian.co/api/v1.dev/"
axios.interceptors.request.use();
const Myaxios = axios.create()
//设置请求头
Myaxios.interceptors.request.use(
    // 给请求头加token的字段,值为token
    config => {
        // 在发送请求前做些什么
        config.headers.token = window.localStorage.getItem('token') ?? null
        // console.log('suc')
        return config;
    }
)

//导出
export default Myaxios;