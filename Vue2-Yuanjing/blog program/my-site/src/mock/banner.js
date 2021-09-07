import Mock from "mockjs";

Mock.mock("/api/banner", "get", {
    code: 0,
    msg: "system test error message!",
    data: [{
            id: '1',
            midImg: "http://mdrs.yuanjin.tech/img/20201031141507.jpg",
            bigImg: "http://mdrs.yuanjin.tech/img/20201031141350.jpg",
            title: "凜冬將至",
            description: "人唯有恐懼的時候方能勇敢",
        },
        {
            id: '2',
            midImg: "http://mdrs.yuanjin.tech/img/20201031205550.jpg",
            bigImg: "http://mdrs.yuanjin.tech/img/20201031205551.jpg",
            title: "血火同源",
            description: "如果我回頭，一切都完了",
        },
        {
            id: "3",
            midImg: "http://mdrs.yuanjin.tech/img/20201031204401.jpg",
            bigImg: "http://mdrs.yuanjin.tech/img/20201031204403.jpg",
            title: "听我怒吼",
            description: "兰尼斯特有债必偿",
        },
        {
            id: "4",
            midImg: "https://i.ibb.co/dbYp6Cp/Pngtree-a-white-david-sculpture-4532792.png",
            bigImg: "https://i.ibb.co/xmTgG9g/Pngtree-a-white-david-sculpture-4532792.png",
            title: "Michelangelo David",
            description: " masterpiece of Renaissance sculpture",
        }
    ],
});