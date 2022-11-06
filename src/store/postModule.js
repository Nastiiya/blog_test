import axios from "axios";

export const postModule = {
    state: () => ({
        posts: [],
        isPostsLoading: false,
        searchQuery: "",
        selectedSort: "",
        currentPage: 1,
        limitPosts: 10,
        totalPage: 0,

        sortOptions: [
            {value: "title", name: "Sort by name"},
            {value: "body", name: "Sort by body"}
        ]

    }),

    getters: {
        sortedPost(state) {
            return [...state.posts].sort((post1, post2)=>post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]))
        },

        searchAndSortedPost(state, getters) {
            return getters.sortedPost.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
    },
    mutations: {
        setPosts(state, posts){
            state.posts = posts
        },
        setIsPostsLoading(state, bool){
            state.isPostsLoading = bool
        },
        setSearchQuery(state, searchQuery){
            state.searchQuery = searchQuery
        },
        setSelectedSort(state, selectedSort){
            state.selectedSort = selectedSort
        },
        setCurrentPage(state, currentPage){
            state.currentPage = currentPage
        },
        setTotalPage(state, totalPage){
            state.totalPage = totalPage
        },

    },
    action: {
        async fetchPosts({state, commit}) {
            try {
                commit('setIsPostsLoading', true);
                setTimeout(async () => {
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                        params:{
                            _page: state.currentPage,
                            _limit: state.limitPosts,
                        }
                    });
                    commit('setTotalPage', Math.ceil(response.headers['x-total-count']/this.limitPosts));
                    commit('setPosts', response.data)

                    commit('setIsPostsLoading', false);
                }, 1000)
            } catch (e) {
                alert("Error")
            }
        },

        async loadMorePosts({state, commit}) {
            try {
                commit('setCurrentPage', state.currentPage + 1);
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                        params:{
                            _page: state.currentPage,
                            _limit: state.limitPosts,
                        }
                    });
                commit('setTotalPage', Math.ceil(response.headers['x-total-count']/this.limitPosts));
                commit ('setCurrentPage',  ([...state.posts,...response.data]))
                }
                catch (e) {
                alert("Error")
            }
        },
    },


}