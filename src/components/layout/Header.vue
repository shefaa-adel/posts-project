<template>
    <header>
      <nav>
        <h1><router-link to="/">Find a post</router-link></h1>
        <input type="text" id="serchInput" v-model="input" />
        <base-button @click="search">Search</base-button>
        <ul>
          <li><router-link to="/posts">All Posts</router-link></li>   
          <li><router-link to="/users">All Users</router-link></li>   
          <li v-if="!isLogedIn"><router-link to="/regester">Sign up</router-link></li>   
          <li v-if="!isLogedIn"><router-link to="/login">Log in</router-link></li>   
          <li v-if="isLogedIn"><p>{{ currentUser.firstName }} {{ currentUser.lastName }}</p></li>   
          <li v-if="isLogedIn"><base-button @click="logout">Log out</base-button></li>   
        </ul>
      </nav>
    </header>
  </template>
  
<script>
import { mapGetters,mapActions } from "vuex";

export default{
  data(){return{
    input:'',
  }},
computed:{
  ...mapGetters(['isLogedIn','currentUser'])
},
methods:{
  ...mapActions(['logoutUser']),
  logout(){
    this.logoutUser();
  },search(){
    if(this.input!='')
    this.$router.push(`/search/${this.input}`)
    this.input=''
  }
}
}
</script>

  <style scoped>
  header {
    width: 100%;
    height: 5rem;
    background-color: #3d008d;
    display: flex;
    justify-content: center;
    align-items: center;
   
  }
  
  header a {
    text-decoration: none;
    color: #f391e3;
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border: 1px solid transparent;
  }
  header input {
   background-color: whitesmoke;
    border: 1px solid transparent;
  }
  a:active,
  a:hover,
  a.router-link-active {
    border: 1px solid #f391e3;
  }
  
  h1 {
    margin: 0;
  }
  
  h1 a {
    color: white;
    margin: 0;
  }
  
  h1 a:hover,
  h1 a:active,
  h1 a.router-link-active {
    border-color: transparent;
  }
  
  header nav {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  header ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  li {
    margin: 0 0.5rem;
  }
p{
  text-decoration: none;
    color: white;
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border: 1px solid transparent;
}
  </style>
  