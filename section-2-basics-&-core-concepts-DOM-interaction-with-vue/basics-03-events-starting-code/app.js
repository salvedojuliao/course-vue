const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    add(num){
       this.counter = this.counter + num;
    },
    reduce(num){
      this.counter = this.counter - num;
    },
    setName(event, secondName){
      this.name = event.target.value + ' ' + secondName;
    },
    submitForm(){
      //event.preventDefault(); // This is a native function of JS and not exclusive of VUE;
    },
    confirmInput(){
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
