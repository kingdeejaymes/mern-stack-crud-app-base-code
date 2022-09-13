import authService from "./auth.service";

// We append 'x-access-token' to the header
export default function authHeader() {
    const user = authService.getCurrentUser();
    if (user && user.token) {
        // for Node.js Express back-end
        return { 'x-access-token': user.token };
        // OTHER OPTION: Can be 'Autorization' Header
        // return { Authorization: 'Bearer ' + user.token };
    } else {
        return {};
    }
}