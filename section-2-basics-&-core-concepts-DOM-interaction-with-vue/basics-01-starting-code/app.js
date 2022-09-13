const app = Vue.createApp({
    data(){ // data is a key property name that HAVE TO USE
        return {// it aways return an object
            courseGoal: 'Finish the course and learn Vue!', // the name here it's up to me;
            vueLink: 'https://vuejs.org/'
        }; 
    },
    methods:{ 
        outputGoal(){
            const randomNumber = Math.random();
            if (randomNumber < 0.5){
                return 'Learn Vue!';
            }else{
                return 'Master Vue!';
            }
        }
    }
});

app.mount('#user-goal'); 

// More:
// Data owns a function as a value