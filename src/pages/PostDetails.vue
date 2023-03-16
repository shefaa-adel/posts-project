<template>
  <section>
    <base-card>
      <h3>{{ selectedPost.title}}</h3>
      <h6>{{ selectedPost.body }}</h6>
    </base-card>
  </section>
 <section>
    <base-card>
     <h3>By: {{ user.name }}</h3>
     <h4>{{ user.phone }}</h4>
     <h4>{{ user.company.name }}</h4>
    </base-card>
  </section>
  <section>
    <base-card>
     <h3>Comments:</h3>
   
     <form @submit.prevent="sendComment">
    
    <div class="form-control">
      <label for="newComment">Your Message</label>
      <textarea id="newComment" rows="3" v-model.trim="newComment"></textarea>
    </div>
    <p class="errors" v-if="!formIsValid">
      Please enter a non empty comment
    </p>
    <div class="actions">
      <base-button>Send</base-button>
    </div>
  </form>
  <ul>
    <li v-for="comment in comments">{{ comment.userName }} : {{comment.txt }}</li>
  </ul>
    </base-card>
  </section>
</template>

<script>
import { mapGetters,mapActions } from "vuex";

export default {
  props: ["id"],
  data() {
    return {
      selectedPost: "",
      user:'',
      comments:'',
      newComment:'',
      formIsValid:true,
    };
  },
  computed: {
    ...mapGetters( ['isLogedIn','currentUser']),
    ...mapGetters("posts", ['getPostById','getPostComments']),   
    ...mapGetters("users", ["allUsers",'getUserById']),
  },
  methods:{
    ...mapActions('posts',['saveComment','getAllComments']),
    validateForm() {
      if(this.newComment==''){
        this.formIsValid = false;
      }
    },
    sendComment() {
      this.formIsValid = true;
      this.validateForm();
      if (!this.formIsValid) return;
      if(this.isLogedIn){
        this.saveComment({
          userName:this.currentUser.firstName+' '+this.currentUser.lastName,
       txt:this.newComment,
        postId:this.id
      })
      this.newComment='';
      this.comments=this.getPostComments(this.id)
      }else{
        this.$router.push('/login')
      }
      
    },
  },
  
  created(){
    this.selectedPost=this.getPostById(this.id),
    this.user=this.getUserById(this.selectedPost.userId);
    this.getAllComments();
    this.comments=this.getPostComments(this.id)
    
 
  }
  
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
ul{
  list-style-type: none;
}
li{
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}
</style>
