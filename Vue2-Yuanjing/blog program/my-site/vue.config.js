module.exports = {
    devServer: {
        proxy: {
            "/j": {
                target: "https://movie.douban.com",
            },
            "/ajax": {
                target: "https://au.j-son.cloud",
            }
        }
    }
}