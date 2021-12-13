import {
    getAbout
} from "@/api/about";
export default {
    namespaced: true,
    state: {
        loading: false,
        data: "",
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload;
        },
        setData(state, payload) {
            state.data = payload;
        }
    },
    actions: {
        async getAbout(context) {
            if (context.state.data) {
                return;
            }
            context.commit("setLoading", true);
            const resp = await getAbout();
            console.log(resp)
            context.commit("setData", resp);
            context.commit("setLoading", false);
        }
    }

}