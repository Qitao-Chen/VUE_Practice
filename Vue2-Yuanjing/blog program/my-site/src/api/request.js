import axios from "axios";
import showMessage from "@/utils/showMessage";

//將異常響應抽離出來
const instance = axios.create();
instance.interceptors.response.use(function (res) {

    if (res.data.code !== 0) {
        showMessage({
            content: res.data.msg,
            type: "error",
            duration: 2000,
        })
        return null;
    } else {
        return res.data.data
    }
})

export default instance;