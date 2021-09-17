/**
 * 
 * @param {*} defaultValue depend on what u give. default value is null
 * @returns 
 * 公共的获取远程数据的代码
 * 具体的组件中，需要在methods里面提供一个远程获取数据的方法 => fetchData
 * first time used in mixins => fetchData.js
 */
export default function (defaultValue = null) {
    return {
        data() {
            return {
                isLoading: true,
                data: defaultValue,
            }
        },
        async created() {
            this.data = await this.fetchData();
            this.isLoading = false;
        }
    }
}