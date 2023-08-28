export const PostModule = {
    state: () => ({
        posts: [],
        like: 0,
        dialogVisible: false,
        searchQuery: "",
        postPage: 1,
        postLimit: 10,
        totalPage: 0,
    }),
    getters: {
        searchPosts(state) {
            return state.posts.filter(
                (post) =>
                    post.title
                        .toLowerCase()
                        .includes(state.searchQuery.toLowerCase()) ||
                    post.body
                        .toLowerCase()
                        .includes(state.searchQuery.toLowerCase())
            );
        },
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setDialogVisible(state, bool) {
            state.dialogVisible = bool;
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery;
        },
        setPostPage(state, postPage) {
            state.postPage = postPage;
        },
        setTotalPage(state, totalPage) {
            state.totalPage = totalPage;
        },
        CREATE_POST(state, newPost) {
            state.posts.unshift(newPost);
        },
        REMOVE_POST(state, postToRemove) {
            state.posts = state.posts.filter(
                (post) => post.id !== postToRemove.id
            );
        },
        SHOW_DIALOG(state, bool) {
            state.dialogVisible = bool;
        },
        UPDATE_POSTS(state, payload) {
            state.posts = [...state.posts, ...payload];
        },
        ADD_POST_METADATA(state) {
            const currentDate = new Date();
            const options = {
                dateStyle: "medium",
                timeStyle: "short",
            };
            state.posts.forEach((post) => {
                post.like = Math.floor(Math.random() * 10);
                post.time = currentDate.toLocaleString("ru", options);
            });
        },
        INCREMENT_POST_PAGE(state) {
            state.postPage += 1;
        },
    },
    actions: {
        async getPosts({ state, commit }) {
            try {
                let response = await fetch(
                    `https://jsonplaceholder.typicode.com/posts?_page=${state.postPage}&_limit=${state.postLimit}`
                );
                if (!response.ok) {
                    throw new Error("Errorrrrr");
                } else {
                    const totalCount = parseInt(
                        response.headers.get("x-total-count"),
                        10
                    );
                    commit(
                        "setTotalPage",
                        Math.ceil(totalCount / state.postLimit)
                    );
                    commit("setPosts", await response.json());
                    commit("ADD_POST_METADATA");
                }
            } catch (error) {
                console.error(error);
            }
        },
        async loadMorePosts({ state, commit }) {
            try {
                commit("INCREMENT_POST_PAGE");

                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/posts?_page=${state.postPage}&_limit=${state.postLimit}`
                );

                if (!response.ok) {
                    throw new Error("Error");
                }

                const totalCount = parseInt(
                    response.headers.get("x-total-count"),
                    10
                );
                commit("setTotalPage", Math.ceil(totalCount / state.postLimit));
                const data = await response.json();
                commit("UPDATE_POSTS", data);
                commit("ADD_POST_METADATA");
            } catch (error) {
                alert(error);
            }
        },
        createPost({ commit }, post) {
            commit("CREATE_POST", post);
            commit("setDialogVisible", false);
        },
        removePost({ commit }, post) {
            commit("REMOVE_POST", post);
        },
        showDialog({ commit }) {
            commit("SHOW_DIALOG", true);
        },
        hideDialog({ commit }) {
            commit("setDialogVisible", false);
        },
    },
    namespaced: true,
};
