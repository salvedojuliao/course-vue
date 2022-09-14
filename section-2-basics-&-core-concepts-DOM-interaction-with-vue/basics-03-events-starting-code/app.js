const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: ''
      // fullname: '',
    };
  },
  watch: {
    counter(value){
      if (value > 50){
        this.counter = 0;
      }
    }
    // name(value){
    //   if (value === ''){
    //     this.fullname = '';
    //   }else{
    //     this.fullname = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value){
    //   if (value === ''){
    //     this.fullname = '';
    //   }else{
    //     this.fullname = this.name + ' ' + value;
    //   }
    // }
  },
  computed: {
    fullname(){
      if (this.name === '' || this.lastName === ``){
        return '';
      } 
      return this.name + ' ' + this.lastName; 
    },
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
    setName(event){ // vinha 'Batista' como argumento tmb;
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
