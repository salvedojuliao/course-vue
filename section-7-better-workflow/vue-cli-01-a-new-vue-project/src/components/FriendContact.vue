<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)': ''}}</h2>
    <button @click="toggleFavorite">Toogle Favorite</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
  
</template>

<script>
export default {
  // props: ['name', 'phoneNumber','emailAddress','isFavorite'], 
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }, 
    phoneNumber: {
      type: Number,
      required: true
    }, 
    emailAddress: {
      type: String,
      required: true
    }, 
    isFavorite: {
      type: Boolean,
      required: false,
      default: false
    }, 
  }, 
  emits: ['toggle-favorite', 'delete'],
  // emits: {
  //   'toggle-favorite': function(id){
  //     if(id){
  //       return true;
  //     }else{
  //       return(false);
  //     }
  //   }
  // },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods:{
    toggleDetails(){
        this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite(){
      this.$emit('toggle-favorite', this.id);
    },
  }
};
</script>
