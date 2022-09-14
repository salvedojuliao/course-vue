const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    outputFullname(){
      if (this.name === ''){
        return '';
      }
      return this.name + ' ' + 'Batista';
    },
    add(num){
       this.counter = this.counter + num;
    },
    reduce(num){
      this.counter = this.counter - num;
    },
    setName(event){
      this.name = event.target.value;
      // this.name = event.target.value + ' ' + secondName (it comnes as argument);
    },
    submitForm(){
      //event.preventDefault(); // This is a native function of JS and not exclusive of VUE;
    },
    confirmInput(){
      this.confirmedName = this.name;
    },
    resetInput(){
      this.name = '';
    }
  }
});

app.mount('#events');
