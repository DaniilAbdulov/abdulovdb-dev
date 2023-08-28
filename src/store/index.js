import { createStore } from "vuex";
import { PostModule } from "@/store/PostModule";
export default createStore({
    modules: {
        post: PostModule,
    },
});
