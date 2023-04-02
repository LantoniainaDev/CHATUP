import axios from "axios";

export default function isconnected(token) {
    return axios.get(process.env.REACT_APP_BASE_URI+"/user",{
        params:{token}
    }).then(({data})=>data)
}