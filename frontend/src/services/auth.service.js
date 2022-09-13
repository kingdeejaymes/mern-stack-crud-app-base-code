import http from "../http-common";

class AuthService {

    login(data) {
        return http.post("/auth/login", data);
    }
    //   login(username, password) {
    //     return axios
    //       .post(API_URL + "signin", {
    //         username,
    //         password
    //       })
    //       .then(response => {
    //         if (response.data.accessToken) {
    //           localStorage.setItem("user", JSON.stringify(response.data));
    //         }
    //         return response.data;
    //       });
    //   }
    logout() {
        //return http.post("/auth/logout", data);
        localStorage.removeItem("user");
    }
    register(data) {
        return http.post("/auth/signup", data);
    }
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }
}
export default new AuthService();