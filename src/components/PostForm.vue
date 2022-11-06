<template>
  <form v-on:submit.prevent>
    <h4>Create post</h4>
    <my-input v-focus v-model="post.title" type="text" placeholder="Title" @updateInputEvent="updateTitleEvent"/>
    <my-input v-model="post.body"  type="text"
           placeholder="Description"/>
    <my-button style="align-self: flex-end; margin-top: 10px;" v-on:click="createPost">Create</my-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now(),
          this.$emit("createPostEvent", this.post),
          this.post = {
            title: "",
            body: ""
          }
    },
    updateTitleEvent(value){
      console.log(value)
      // this.post.title = value
    }
  }
}
</script>


<style scoped>

form {
  display: flex;
  flex-direction: column;
}




</style>