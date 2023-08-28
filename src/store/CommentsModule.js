export const PostModule = {
    state: () => ({
        comments: [],
    }),
    mutations: {
        setComments(state, comments) {
            state.comments = comments;
        },
        ADD_COMMENT_METADATA(state) {
            const currentDate = new Date();
            const options = {
                dateStyle: "medium",
                timeStyle: "short",
            };
            state.comments.forEach((comment) => {
                comment.time = currentDate.toLocaleString("ru", options);
            });
        },
    },
    actions: {
        async getAllComments({ commit }) {
            try {
                let response = await fetch(
                    `https://jsonplaceholder.typicode.com/comments`
                );
                if (!response.ok) {
                    throw new Error("Errorrrrr");
                } else {
                    commit("setComments", await response.json());
                    commit("ADD_COMMENT_METADATA");
                }
            } catch (error) {
                console.error(error, "im here");
            }
        },
    },
    namespaced: true,
};
