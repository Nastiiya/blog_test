<template>
  <div v-if="posts.length > 0">
    <h3>List of posts</h3>
    <transition-group name="post-list">
      <post-item v-bind:post="post" v-bind:key="post.id" @remove-post="$emit('removePost', post)"
                 v-for="post in posts"/>
    </transition-group>
  </div>
  <h2 v-else>List empty</h2>
</template>
<script>

import PostItem from "@/components/PostItem";

export default {
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }

}
</script>

<style scoped>
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.post-list-move {
  transition: transform 0.2s ease;
}
</style>