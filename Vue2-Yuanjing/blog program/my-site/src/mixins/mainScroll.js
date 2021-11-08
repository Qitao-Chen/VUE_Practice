/**
 * 
 * @param {string} refValue 
 * @returns Object
 *从BlogList 和 Detail中提取的代码。
 */
export default function (refValue) {
    return {
        mounted() {

            this.$refs[refValue].addEventListener("scroll", this.handleScroll);
            this.$bus.$on('setMainScroll', this.handleSetMainScroll);
        },
        beforeDestroy() {
            this.$bus.$emit('mainScroll');
            this.$bus.$off('setMainScroll', this.handleSetMainScroll);
            this.$refs[refValue].removeEventListener('scroll', this.handleScroll)
        },
        methods: {
            handleSetMainScroll(topPosition) {
                this.$refs[refValue].scrollTop = topPosition
            },
            handleScroll() {
                this.$bus.$emit('mainScroll', this.$refs[refValue])
            },
        }
    }
}