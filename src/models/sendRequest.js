import { API_LINK } from "./config";

export async function sendRequest(url, opts) {
    const result = await fetch(API_LINK + url, opts)
    if (result.status >= 400)
        throw "error " + result.status;
    return result.json();
}

export async function sendRequestImage(url, opts) {
    const result = await fetch(API_LINK + url, opts)
    if (result.status >= 400)
        throw "error " + result.status;
    return result;
}