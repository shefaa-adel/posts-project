<template>
  <section>
    <base-card>
      <h3>{{ selectedPost.title}}</h3>
      <h6>{{ selectedPost.body }}</h6>
    </base-card>
  </section>
 <section>
    <base-card>
     <h2>By: {{ user.name }}</h2>
     <h4>{{ user.phone }}</h4>
     <h4>{{ user.company.name }}</h4>
    </base-card>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["id"],
  data() {
    return {
      selectedPost: "",
      user:'',
    };
  },
  computed: {
    ...mapGetters("posts", ['getPostById']),   
    ...mapGetters("users", ["allUsers",'getUserById']),
  },
  
  created(){
    this.selectedPost=this.getPostById(this.id),
    this.user=this.getUserById(this.selectedPost.userId);
 
  }
  
};
</script>
