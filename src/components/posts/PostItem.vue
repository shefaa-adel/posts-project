<template>
  <li>
    <h3>{{ title }}</h3>
    <h6>{{ body }}</h6>
    <p>By: {{ userName }}</p>
    <div class="actions">
      <base-button link :to="postDetailsLink">View Post</base-button>
    </div>
  </li>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["id", "title", "body", "userId"],
  data(){return{
    userName:'',
  }},
  computed: {
    ...mapGetters("users", ["getUserById"]),
    postDetailsLink() {
      return this.$route.path + "/" + this.id;
    },
  
  }, created(){
    this.userName=this.getUserById(this.userId)?.name;
  
  }
  
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
