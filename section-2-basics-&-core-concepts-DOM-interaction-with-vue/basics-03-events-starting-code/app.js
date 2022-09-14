const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
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
    }
  }
});

app.mount('#events');
