<template>
  <div>
    <h3>Page with posts</h3>
    <my-input
        placeholder="Searing..." v-model="searchQuery"/>
    <div class="app__btn">
      <my-button @click="showDialog">
        Create post
      </my-button>
      <my-select v-bind:options="sortOptions" v-model:optionValue="selectedSort"/>
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form v-on:createPostEvent="createPost"/>
    </my-dialog>
    <post-list v-if="!isPostsLoading" v-bind:posts="searchAndSortedPost" @remove-post="removePost"/>
    <div v-else>Loading...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
    <!--    <div class="page__wrapper">-->
    <!--      <div v-bind:class="{'currentPage': currentPage === pageNumber}" class="page"-->
    <!--           v-for="pageNumber in totalPage" v-bind:key="pageNumber" v-on:click="changePage(pageNumber)">-->
    <!--        {{pageNumber}}-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script>

import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import axios from "axios"
import MyButton from "@/components/UI/MyButton";
import MySelect from "@/components/UI/MySelect";
import router from "@/router/router";


export default {
  components: {
    MySelect,
    MyButton,
    PostList, PostForm,
  },

  data() {
    return {
      posts: [],
      dialogVisible: false,
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
    }
  },

  methods: {
    createPost(post) {
      this.posts.push(post)
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },

    showDialog() {
      this.dialogVisible = true
    },

    // changePage (pageNumber) {
    //   this.currentPage =pageNumber
    // },


    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        setTimeout(async () => {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params:{
              _page: this.currentPage,
              _limit: this.limitPosts,
            }
          });
          this.totalPage = Math.ceil(response.headers['x-total-count']/this.limitPosts)
          this.posts = response.data;
          this.isPostsLoading = false;
        }, 1000)
      } catch (e) {
        alert("Error")
      }
    },

    async loadMorePosts() {
      try {
        this.currentPage +=1;
        setTimeout(async () => {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params:{
              _page: this.currentPage,
              _limit: this.limitPosts,
            }
          });
          this.totalPage = Math.ceil(response.headers['x-total-count']/this.limitPosts)
          this.posts = [...this.posts,...response.data]
        }, 1000)
      } catch (e) {
        alert("Error")
      }
    },

  },


  mounted() {
    this.fetchPosts()

    console.log(this.$refs.observer)
    // const options = {
    //   rootMargin: '0px',
    //   threshold: 1.0
    // }
    // const callback = (entries, observer)=>{
    //   if (entries[0].isIntersecting && this.currentPage < this.totalPage) {
    //     console.log("crossed")
    //     this.loadMorePosts()
    //   }
    //   /* Content excerpted, show below */
    // };
    // const observer = new IntersectionObserver(callback, options);
    // observer.observe(this.$refs.observer)
  },

  watch: {
    selectedSort(value){
      console.log(value)
    },

    // currentPage () {
    //   this.fetchPosts()
    // }
  },

  computed: {
    sortedPost(newValue) {
      return [...this.posts].sort((post1, post2)=>post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },

    searchAndSortedPost() {
      return this.sortedPost.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  }
}

</script>


<style>

.app__btn {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}

.page__wrapper{
  display: flex;
  margin-top: 15px;
}
.page{
  border: 1px solid teal;
  padding: 10px;
}
.currentPage{
  border: 2px solid teal;
}

.observer{
  height: 30px;
  background: rosybrown;
}
</style>