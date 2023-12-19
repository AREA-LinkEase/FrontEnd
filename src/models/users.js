import { getHeader, getUserId } from "./authUtils";
import { sendRequest } from "./sendRequest";

export async function getLogin() {
    const opts = {
        headers: getHeader()
    };
    return sendRequest('/users/login', opts);
}
