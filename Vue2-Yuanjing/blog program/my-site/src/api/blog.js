import request from "./request";
//get all blogs or specified blogs
//params=>地址栏
export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
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
//get the blog with id
export async function getBlog(id) {
    return await request.get(`/api/blog/${id}`);
}
//submit comment
export async function postComment(commentInfo) {
    return await request.post("/api/comment", commentInfo);
}
//get specified comments 
//params=>地址栏
export async function getComments(blogid, page = 1, limit = 10) {
    return await request.get("/api/comment", {
        params: {
            blogid,
            page,
            limit,

        }
    })
}