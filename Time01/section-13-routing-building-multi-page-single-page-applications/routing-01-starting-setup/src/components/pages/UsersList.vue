<template>
<button @click="confirmInput">Confirm</button>
<button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data(){
    return {changesSaved: false};
    
  },
  methods:{
    confirmInput(){
      // do something
      this.$router.push('/teams');
    },
    saveChanges(){
      this.changesSaved = true;
    },
  },
  beforeRouteEnter(to, from, next){
    console.log('UserList Cmp beforeRunteEnter');
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next){
    console.log('UsersList Cmp beforeRouteLeave');
    console.log(to, from);
    if (this.changesSaved){
      next();
    }else{
      const userWantsToLeave = confirm('Are you sure? You got unsaved changes!');
      next(userWantsToLeave);
    }
  },
  unmounted(){
    console.log('unmouted');
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>