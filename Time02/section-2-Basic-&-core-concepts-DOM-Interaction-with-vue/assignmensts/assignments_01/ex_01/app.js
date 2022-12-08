const app = Vue.createApp({
  data(){
    return{
      todoTittle: 'TO DO LIST',
      todoSubtittle: '<h3> Subtittle in H3</h3>',
      tasks: [],
      enteredValue: '',
      vueLink: 'https://vuejs.org/'
    };
  },
  methods:{
    outputH3(){
      return this.todoSubtittle;
    },
    addTask(){
      this.tasks.push(this.enteredValue);
      this.enteredValue = '';
    }
  }
})

app.mount('#app');