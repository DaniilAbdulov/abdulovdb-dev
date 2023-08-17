import { onMounted, ref } from "vue";
export function getComments(value) {
    const comments = ref([]);
    const fetching = async () => {
        try {
            // console.log(value);
            let response;
            if (value) {
                response = await fetch(
                    `https://jsonplaceholder.typicode.com/comments?postId=${value}`
                );
            } else {
                response = await fetch(
                    `https://jsonplaceholder.typicode.com/comments`
                );
            }
            if (!response.ok) {
                throw new Error("Errorrrrr");
            } else {
                comments.value = await response.json();
            }
        } catch (error) {
            console.error(error);
        }
    };
    onMounted(fetching);
    return {
        comments,
    };
}
