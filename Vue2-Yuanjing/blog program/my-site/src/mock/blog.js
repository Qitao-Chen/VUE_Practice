import Mock, {
    Random
} from "mockjs";

Mock.mock("/api/blogtype", "get", {
    code: 0,
    msg: "",
    'data|15-20': [{
        'id|+1': 1,
        name: 'category @id',
        'articleCount|0-300': 1, //该分类下文章的数量
        'order|+1': 1,
    }, ]
})

Mock.mock(/^\/api\/blog(\?.+)?$/, "get", function (options) {
    //get the limit value from url
    const urlData = options.url.split('&')
    const obj = {};
    urlData.forEach(element => {
        const value = element.split('=');
        obj[value[0]] = value[1];
    });
    return Mock.mock({
        code: 0,
        msg: "",
        data: {
            'total|500-9999': 500,
            [`rows|${obj.limit}`]: [{
                id: "@guid",
                title: '@title(3, 7)',
                description: '@paragraph(1, 3)',
                category: {
                    'id|1-10': 0,
                    name: "category@id",
                },
                'scanNumber|0-3000': 0,
                'commentNumber|0-300': 0,
                'thumb|1': [Random.image('300x250', '#033672', '#FFFFFF', 'Random Img'), null],
                createDate: '@date(dd-MM-yyyy)',
            }],
        }
    });

})