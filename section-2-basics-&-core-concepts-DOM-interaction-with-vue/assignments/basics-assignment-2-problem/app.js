const app = Vue.createApp({
    data() {
        return{
            userInput: '',
            confirmedName: ''
        };
    },
    methods:{
        showAlert(){
            alert("Alert to user");
        },
        saveInput(event){
            this.userInput = event.target.value;
        },
        setName(event){
            this.confirmedName = event.target.value;
        }
    }
})

app.mount("#assignment");