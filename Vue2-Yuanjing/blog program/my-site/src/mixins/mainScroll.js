/**
 * 
 * @param {string} refValue 
 * @returns Object
 *从BlogList 和 Detail中提取的代码。
 */
export default function (refValue) {
    return {
        mounted() {
            this.$refs[refValue].addEventListener("scroll", this.handleMainScroll); //添加滚动条监听事件
            this.$bus.$on('setMainScroll', this.handleSetMainScroll);
        },
        beforeDestroy() {
            this.$bus.$emit('mainScroll'); //重新抛出"mainScroll"事件，无赋值。
            this.$bus.$off('setMainScroll', this.handleSetMainScroll);
            this.$refs[refValue].removeEventListener('scroll', this.handleMainScroll)
        },
        methods: {
            handleSetMainScroll(topPosition) {
                this.$refs[refValue].scrollTop = topPosition
            },
            handleMainScroll() {
                this.$bus.$emit('mainScroll', this.$refs[refValue]) //发出"mainScroll" 事件
            },
        }
    }
}