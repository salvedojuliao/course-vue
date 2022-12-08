const app = Vue.createApp({

  data(){
    return {
      navItems: ['Products', 'Doubts', 'About'],
      test: 'titulo',
      logoImg: 'assets/img/logo_full.png',
      classType: 'classA',
      control: true,
      portalLink: 'https://portaldotrader.com.br/',
      enteredValue: '',
      listProducts: [],
      produtctsA: ['Vacuum cleaner','Microfiber cloths','Bucket'],
      produtctsB: ['Cutting Board','Can Opener','Measuring Cups']
    };
  },
  methods:{
    changeClass(){
      this.control = !this.control;
      if (this.control){
        this.classType = 'classA';
      }else{
        this.classType = 'classB';
      }
    },
    addProduct(){
      if(this.enteredValue === ''){
        alert('Please, add at least one product')
        return;
      }else{
      this.listProducts.push(this.enteredValue);
      this.enteredValue = '';
      }
    }
  }

})

app.mount('#app');