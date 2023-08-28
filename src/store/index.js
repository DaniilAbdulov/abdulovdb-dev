import { createStore } from "vuex";
import { PostModule } from "@/store/PostModule";
import { CommentsModule } from "@/store/CommentsModule";
export default createStore({
    modules: {
        post: PostModule,
        comments: CommentsModule,
    },
});
