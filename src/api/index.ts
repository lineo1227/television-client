import { Http } from "./request";
const http = new Http("http://localhost:8260");
export const testHttp = () => {
    return http.get("/goods/getGoodsList?page=1&limit=1")
}