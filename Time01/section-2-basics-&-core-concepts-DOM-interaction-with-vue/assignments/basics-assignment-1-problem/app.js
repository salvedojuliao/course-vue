const app = Vue.createApp({
    data(){
        return{
            myName: 'Júlio César',
            myAge: 22,
            imageLink: 'https://i.pinimg.com/originals/82/5d/1f/825d1feb6e802a5ff6b93d2bd3c50768.jpg'
        };
    },
    methods:{
        calculateAge(){
            return this.myAge + 5;
        },
        myFavoriteNumber(){
            return Math.random().toFixed(2);
        }
    }
});

app.mount('#assignment');

