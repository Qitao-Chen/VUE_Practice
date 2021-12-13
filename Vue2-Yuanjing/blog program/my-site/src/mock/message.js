import Mock from "mockjs";

function format(options) {
    //get the limit value from url
    const urlData = options.url.split('&')
    const obj = {};
    urlData.forEach(element => {
        const value = element.split('=');
        obj[value[0]] = value[1];
    });
    return obj;
}
Mock.mock("/api/message", "post", {
    code: 0,
    msg: "",
    data: {
        id: "@guid",
        nickname: "@cname",
        content: "@cparagraph(1, 10)",
        createDate: Date.now(),
        "avatar|1": [
            "https://image.shutterstock.com/image-illustration/3d-rendering-cartoon-character-boy-260nw-1654587841.jpg",
            "https://image.shutterstock.com/image-illustration/cartoon-character-little-boy-points-260nw-1550040197.jpg",
            "https://image.shutterstock.com/image-illustration/cartoon-character-little-boy-showing-600w-1576879552.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBy3Ewh-7ukiFhpNc5MsLaToTAX7bp1vpOZBDkLU-4ZRqF6ThvM4CKKELb4beyG2obBHs&usqp=CAU",
        ],
    }
});

Mock.mock(/^\/api\/message\/?(\?.+)?$/, "get", function (options) {
    const obj = format(options);
    return Mock.mock({
        code: 0,
        msg: "",
        data: {
            total: 52,
            [`rows|${obj.limit || 10}`]: [{
                id: "@guid",
                nickname: "@cname",
                content: "@cparagraph(1, 10)",
                createDate: Date.now(),
                "avatar|1": [
                    "https://image.shutterstock.com/image-illustration/3d-rendering-cartoon-character-boy-260nw-1654587841.jpg",
                    "https://image.shutterstock.com/image-illustration/cartoon-character-little-boy-points-260nw-1550040197.jpg",
                    "https://image.shutterstock.com/image-illustration/cartoon-character-little-boy-showing-600w-1576879552.jpg",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBy3Ewh-7ukiFhpNc5MsLaToTAX7bp1vpOZBDkLU-4ZRqF6ThvM4CKKELb4beyG2obBHs&usqp=CAU",
                ]
            }]

        }
    })
})