import { io } from "socket.io-client";
import { URL } from "url";

export const baseUrlNestApi = process.env.NEST_API_DOMAIN || "http://localhost:3000"

export const fetchNestApi = (path: string, init?: RequestInit) => {
    const url = new URL(`${baseUrlNestApi}/${path}`)

    return fetch(url, init);
}

export const socket = io(baseUrlNestApi, {
    autoConnect: false
})