import request from "./request";
export async function getBlogs(page = 1, limit = 100, categoryid = -1) {
    const resp = await request.get("/api/blog", {
        params: {
            page,
            limit,
            categoryid,
        }
    });
    return resp;
}

export async function getBlogTypes() {
    const resp = await request.get("/api/blogtype");
    return resp;
}