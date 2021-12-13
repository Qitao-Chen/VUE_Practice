import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
    code: 0,
    msg: "",
    data: {
        avatar: "https://avatars.githubusercontent.com/u/54574452?v=4",
        siteTitle: "Eric的Blog",
        github: "https://github.com/Qitao-Chen",
        qq: "596298440999",
        qqQrCode: "https://i.ibb.co/9H65N34/5f5a72d6ff04c2ef02a0534ec078644.jpg",
        qqMessage: "tencent://message/?Menu=yes&uin=596298440&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45",
        weixin: "ziyangchen",
        weixinQrCode: "https://i.ibb.co/9H65N34/5f5a72d6ff04c2ef02a0534ec078644.jpg",
        mail: "eric.chen.adl@outlook.com",
        icp: "沪ICP备20211116号",
        githubName: "Qitao-Chen",
        favicon: "https://avatars.githubusercontent.com/u/54574452?v=4",
    },
})