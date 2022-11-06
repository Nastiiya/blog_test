<!--<template>-->
<!--  <div>-->
<!--    <h1>{{ $store.getters.doubleLikes }}</h1>-->
<!--    <div>-->
<!--      <my-button v-on:click="$store.commit('incrementLikes')">Likes</my-button>-->
<!--      <my-button v-on:click="$store.commit('decrementLikes')">Dislike</my-button>-->
<!--    </div>-->
<!--    <h3>Page with posts</h3>-->
<!--    <my-input-->
<!--        placeholder="Searing..." v-model="searchQuery"/>-->
<!--    <div class="app__btn">-->
<!--      <my-button @click="showDialog">-->
<!--        Create post-->
<!--      </my-button>-->
<!--      <my-select v-bind:options="sortOptions" v-model:optionValue="selectedSort"/>-->
<!--    </div>-->

<!--    <my-dialog v-model:show="dialogVisible">-->
<!--      <post-form v-on:createPostEvent="createPost"/>-->
<!--    </my-dialog>-->
<!--    <post-list v-if="!isPostsLoading" v-bind:posts="searchAndSortedPost" @remove-post="removePost"/>-->
<!--    <div v-else>Loading...</div>-->
<!--    <div v-intersection="loadMorePosts" class="observer"></div>-->
<!--    &lt;!&ndash;    <div class="page__wrapper">&ndash;&gt;-->
<!--    &lt;!&ndash;      <div v-bind:class="{'currentPage': currentPage === pageNumber}" class="page"&ndash;&gt;-->
<!--    &lt;!&ndash;           v-for="pageNumber in totalPage" v-bind:key="pageNumber" v-on:click="changePage(pageNumber)">&ndash;&gt;-->
<!--    &lt;!&ndash;        {{pageNumber}}&ndash;&gt;-->
<!--    &lt;!&ndash;      </div>&ndash;&gt;-->
<!--    &lt;!&ndash;    </div>&ndash;&gt;-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->

<!--import PostForm from "@/components/PostForm";-->
<!--import PostList from "@/components/PostList";-->
<!--import axios from "axios"-->
<!--import MyButton from "@/components/UI/MyButton";-->
<!--import MySelect from "@/components/UI/MySelect";-->
<!--import router from "@/router/router";-->


<!--export default {-->
<!--  components: {-->
<!--    MySelect,-->
<!--    MyButton,-->
<!--    PostList, PostForm,-->
<!--  },-->

<!--  data() {-->
<!--    return {-->

<!--    }-->
<!--  },-->

<!--  methods: {-->
<!--    createPost(post) {-->
<!--      this.posts.push(post)-->
<!--      this.dialogVisible = false;-->
<!--    },-->
<!--    removePost(post) {-->
<!--      this.posts = this.posts.filter(p => p.id !== post.id)-->
<!--    },-->

<!--    showDialog() {-->
<!--      this.dialogVisible = true-->
<!--    },-->

<!--    // changePage (pageNumber) {-->
<!--    //   this.currentPage =pageNumber-->
<!--    // },-->




<!--  },-->


<!--  mounted() {-->
<!--    this.fetchPosts()-->

<!--    console.log(this.$refs.observer)-->
<!--    // const options = {-->
<!--    //   rootMargin: '0px',-->
<!--    //   threshold: 1.0-->
<!--    // }-->
<!--    // const callback = (entries, observer)=>{-->
<!--    //   if (entries[0].isIntersecting && this.currentPage < this.totalPage) {-->
<!--    //     console.log("crossed")-->
<!--    //     this.loadMorePosts()-->
<!--    //   }-->
<!--    //   /* Content excerpted, show below */-->
<!--    // };-->
<!--    // const observer = new IntersectionObserver(callback, options);-->
<!--    // observer.observe(this.$refs.observer)-->
<!--  },-->

<!--  watch: {-->
<!--    selectedSort(value){-->
<!--      console.log(value)-->
<!--    },-->

<!--    // currentPage () {-->
<!--    //   this.fetchPosts()-->
<!--    // }-->
<!--  },-->

<!--  computed: {-->

<!--  }-->
<!--}-->

<!--</script>-->


<!--<style>-->

<!--.app__btn {-->
<!--  display: flex;-->
<!--  justify-content: space-between;-->
<!--  margin: 15px 0;-->
<!--}-->

<!--.page__wrapper{-->
<!--  display: flex;-->
<!--  margin-top: 15px;-->
<!--}-->
<!--.page{-->
<!--  border: 1px solid teal;-->
<!--  padding: 10px;-->
<!--}-->
<!--.currentPage{-->
<!--  border: 2px solid teal;-->
<!--}-->

<!--.observer{-->
<!--  height: 30px;-->
<!--  background: rosybrown;-->
<!--}-->
<!--</style>-->