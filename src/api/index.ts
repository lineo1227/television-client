import { Http } from "./request";
const http = new Http("/api/client");
// 最近更新
export const getRecent = () => {
    return http.get("/index/recent");
}
// 正在热播
export const getHotBroadcast = () => {
    return http.get("/index/hotBroadcast");
}
// 高分影视
export const getHotRating = () => {
    return http.get("/index/hotRating");
}
// 每周更新
export const getWeekUpdate = () => {
    return http.get("/index/weekUpdate");
}
export const userLogin = (username: string, password: string) => {
    return http.post("/user/login", {}, { data: { username, password } });
}
// 视频详情
export const getVideoDetail = (id: string) => {
    return http.get(`/video/getById?id=${id}`);
}
// 影视条件分页
export const getVideoPageQuery = (params: any) => {
    return http.get("/video/pageQuery", params);
}
// 电影推荐
export const getRecommendMovie = (userId: string = '') => {
    return http.get(`/index/recommendMovie?userId=${userId}`);
}
// 动漫推荐
export const getRecommendAnime = (userId: string = '') => {
    return http.get(`/index/recommendAnime?userId=${userId}`);
}
// 猜你喜欢
export const getVideoLike = (userId: string = '') => {
    return http.get(`/video/like?userId=${userId}`);
}
// 历史观看
export const getHistoryView = (params: any) => {
    return http.get(`/video/historyView`, { page: params.page, pageSize: params.pageSize }, {
        headers: {
            token: params.token
        }
    });
}
// 点击收藏
export const setCollect = (id: string | number, token: string) => {
    return http.get(`/favorite/collect?id=${id}`, {}, {
        headers: {
            token: token
        }
    });
}
// 发送求片
export const sendRequest = (params: any, token: string) => {
    return http.post(`/requests/send`, params, {
        headers: {
            token: token
        }
    });
}