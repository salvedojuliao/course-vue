const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      nameTwo: '',
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
    setName(event, lastName){
      this.name = event.target.value + ' ' + lastName;
    },
    confirmInput(){
      this.confirmedName = this.name;
    },
    setNameTwo(e){
      this.nameTwo = e.target.value;
    },
    submitForm(){
      alert('Submitted!');
    }

    // Vanilla JS:
    // submitForm(event){
    //   event.preventDefault();
    //   alert('Submitted!');
    // }
  }
});

app.mount('#events');
