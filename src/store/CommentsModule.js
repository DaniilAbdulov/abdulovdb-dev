export const CommentsModule = {
    state: () => ({
        comments: [],
        dataFromComments: false,
    }),
    mutations: {
        setComments(state, comments) {
            state.comments = comments;
        },
        CREATE_COMMENT(state, newComment) {
            state.comments.unshift(newComment);
        },
        REMOVE_COMMENT(state, commentToRemove) {
            state.comments = state.comments.filter(
                (comment) => comment.id !== commentToRemove.id
            );
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
        createComment({ commit }, comment) {
            commit("CREATE_COMMENT", comment);
        },
        removeComment({ commit }, comment) {
            commit("REMOVE_COMMENT", comment);
        },
    },
    namespaced: true,
};
