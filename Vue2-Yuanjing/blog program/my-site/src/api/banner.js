import request from "./request"

export async function getBanners(){
    const resp = await request.get("/api/banner");
    return resp;
}
getBanners().then((r) => {
    // console.log(r);
});


// import axios from 'axios';
// import showMessage from '@/utils/showMessage';

//將異常響應抽離出來
// const instance = axios.create();
// instance.interceptors.response.use(function(response){
//     console.log(response.data.msg)
//     return response;
// })

// export async function getBanners(){
//     const resp = await instance.get("/api/banner");
      
//     if(resp.data.code ===0){
//         return resp.data.data;
//     }
//     console.log(resp.data.msg);
//     showMessage({
//         content:resp.data.msg,
//         type: "error",
//         duration: 2000,
        
//     })
//     return null;
// }
// getBanners().then((r) => {
//     console.log(r);
// });


// var i = 0;
// async function getNews(){
//     console.log('hi')
//     i++;
//     console.log(i);
// //    const res = await axios.get("https://api.instacloud.io/?count=50&path=%2Fv1%2Fusers%2Flumicosolar%2Fmedia%2Frecent%2F&test_analyze=count_requests");
//    const resDouban = await axios.get("/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0")
//     console.log(resDouban);
// }

// getNews();


