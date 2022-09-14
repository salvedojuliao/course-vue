const app = Vue.createApp({
    data(){ // data is a key property name that HAVE TO USE
        return {// it aways return an object
            courseGoalA: 'Finish the course and learn Vue!', // the name here it's up to me;
            courseGoalB: '<h2>Master Vue and build amazing apps!',
            // courseGoalB: '<h2>Master Vue and build amazing apps!</h2>',
            vueLink: 'https://vuejs.org/'
        }; 
    },
    methods:{ 
        outputGoal(){
            const randomNumber = Math.random();
            if (randomNumber < 0.5){
                return this.courseGoalA;
            }else{
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal'); 

// More:
// Data owns a function as a value