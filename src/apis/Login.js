import Myaxios from "./static/MyAxios"
// import MesSnackbar from "../components/Modal";
const Login = (user, callback) => {
    console.log(user)
    return Myaxios.post('/auth/signin', user).then(
        res => {
            // console.log(res)
            const data = res.data
            Storage.prototype.setExpire = (key, value, expire) => {
                let obj = {
                    data: value,
                    time: Date.now(),
                    expire: expire
                };
                localStorage.setItem(key, JSON.stringify(obj));
            }
            localStorage.setExpire("token", data.token, 24 * 60 * 1000);
            callback();
            return res.status;
        }
    ).catch(
        err => {return err.response.status}
    );
}

export default Login;