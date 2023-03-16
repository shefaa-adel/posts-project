<template>
    <base-card>
      <h2>Find Your Favourite Users' Posts</h2>
      <span class="filter-option" v-for="user in allUsers" :key="user.id">
        <input type="checkbox" :id="user.id"  @change="setFilters" />
        <label :for="user.id">{{ user.name }}</label>
      </span>
    </base-card>
  </template>
  
<script>

import { mapGetters } from "vuex";
  export default{
      emits: ['filter-change'],
      computed:{
        ...mapGetters("users", ["allUsers"]),
      },
      data(){
      return{
          filters:''
      }
  },
  methods:{
      setFilters(event){
          const eventId=event.target.id;
          const isActive=event.target.checked;
          this.filters={
              ...this.filters,
              [eventId]:isActive
          }
          
          this.$emit('filter-change',this.filters);
      }
  },
  mounted(){
    this.allUsers.forEach(user => this.filters={...this.filters, [user.id]:false})
  }
  }
  
  </script>
  
  <style scoped>
  h2 {
    margin: 0.5rem 0;
  }
  
  .filter-option {
    margin-right: 1rem;
  }
  
  .filter-option label,
  .filter-option input {
    vertical-align: middle;
  }
  
  .filter-option label {
    margin-left: 0.25rem;
  }
  
  .filter-option.active label {
    font-weight: bold;
  }
  </style>
  