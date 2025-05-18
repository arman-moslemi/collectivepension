import axios from "axios";
import { apiUrl } from "./inFormTypes";
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";

export const axiosReq = async (url,kind, params, type) => {
    
    const cookies = new Cookies();
    
    // let navigate = useNavigate();
    if (kind=="post") {
        try {
            const response = await axios.post(apiUrl + url, params, {
                headers: {
                    Authorization: `Bearer ${cookies.get('token')}`,
                    "Content-Type": type ? type : "application/json",
                    'X-Frame-Options': 'Deny',
                    'X-Content-Type-Options': "nosniff",
                    'X-XSS-Protection': "1; mode=block",
                    "Referrer-Policy": "same-origin",
                    "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload"
                }
            })
            console.log(777)
            console.log(response)
            if (response.status == 200 || response.status == 201 ||response.status == 204 ) {
                console.log(777)

                const items = response
                return items
            }
            else if (response.status == 401 || response.status == 403) {
                   cookies.remove("role")
                cookies.remove("token")
                console.log(555)
                console.log(response)

                alert("نشست شما به اتمام رسیده است. لطفا دوباره وارد شوید.")
                window.location.href="/admin";
            }
            else {

                return "BadRequest"
            }
        }
        catch (err) {
            if (err.response.status == 401 || err.response.status == 403) {
                cookies.remove("Role")
                 cookies.remove("token")
                alert("نشست شما به اتمام رسیده است. لطفا دوباره وارد شوید.")
                console.log(222)
                window.location.href="/admin";
                console.log(err)
            }
            else {

                // return "BadRequest"
                return err.response
            }
        }
    }
    else if(kind=="get"){
        try {

            const response = await axios.get(apiUrl + url,
                {
                    headers: {
                        Authorization: `Bearer ${cookies.get('token')}`,
                        'X-Frame-Options': 'Deny',
                        'X-Content-Type-Options': "nosniff",
                        'X-XSS-Protection': "1; mode=block",
                        "Referrer-Policy": "same-origin",
                        "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload"

                    }
                }
            )

            if (response.status == 200 || response.status == 201) {

                const items = response.data
                return items
            }
  else if (response.status == 401 || response.status == 403) {
                   cookies.remove("role")
                cookies.remove("token")
                alert("نشست شما به اتمام رسیده است. لطفا دوباره وارد شوید.")
                window.location.href="/admin";
            }
            else {

                return "BadRequest"
            }

        } catch (err) {
            if (err.response.status == 401 || err.response.status == 403) {
                cookies.remove("Role")
                 cookies.remove("token")
                alert("نشست شما به اتمام رسیده است. لطفا دوباره وارد شوید.")
                console.log(222)
                window.location.href="/admin";
                console.log(err)
            }
            else {

                return "BadRequest"
            }


        }

    }
    else if(kind=="delete"){
        try {
            const response = await axios.delete(apiUrl + url, {
                headers: {
                    Authorization: `Bearer ${cookies.get('token')}`,
                    "Content-Type": type ? type : "application/json",
                    'X-Frame-Options': 'Deny',
                    'X-Content-Type-Options': "nosniff",
                    'X-XSS-Protection': "1; mode=block",
                    "Referrer-Policy": "same-origin",
                    "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload"
                }
            })
            console.log(response)
            if (response.status == 200 || response.status == 201 ||response.status == 204 ) {
                const items = response
                return items
            }
            else if (response.status == 401 || response.status == 403) {
                cookies.remove("role")
             cookies.remove("token")
             alert("نشست شما به اتمام رسیده است. لطفا دوباره وارد شوید.")
             window.location.href="/admin";
         }
            else {

                return "BadRequest"
            }
        }
        catch (err) {
            return err?.response?.data;

        }

    }
    else if(kind=="put"){
        try {
           const  response = await axios.put(apiUrl + url, params, {
                headers: {
                    Authorization: `Bearer ${cookies.get('token')}`,
                    "Content-Type": type ? type : "application/json",
                    'X-Frame-Options': 'Deny',
                    'X-Content-Type-Options': "nosniff",
                    'X-XSS-Protection': "1; mode=block",
                    "Referrer-Policy": "same-origin",
                    "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload"
                }
            })
            console.log(response)
            if (response.status == 200 || response.status == 201 ||response.status == 204 ) {
                const items = response
                return items
            }
            else if (response.status == 401 || response.status == 403) {
                cookies.remove("role")
             cookies.remove("token")
             console.log(response)

             alert("نشست شما به اتمام رسیده است. لطفا دوباره وارد شوید.")
             window.location.href="/admin";
         }
            else {
                return response
            }
        }
        catch (err) {
            return err?.response?.data;
        }

    }
}
// export default axiosReq;
