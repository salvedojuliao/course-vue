const app = Vue.createApp({
    data(){
        return{
            counter: 0
        }
    },
    methods:{
        addFive(value){
            this.counter = this.counter + value;
        },
        addOne(value){
            this.counter = this.counter + value;
        }
    },
    computed: {
        message(){
            let message = '';
            if(this.counter < 37){
                return message = 'Not there yet';
            }else{
                return message = 'Too much!';
            }
        },
    },
    watch: {
        counter(value){
            const that = this; // this can be tricky
            console.log(this.addFive) // eu acho que ele assiste todas as propriedades do watch
            console.log(that)
            if (value > 0){
                setTimeout(() => {
                    that.counter = 0;
                }, 5000)
            }

        }
    }
})

app.mount('#assignment');