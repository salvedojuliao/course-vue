const app = Vue.createApp({
    data() {
        return{
            name: '',
            confirmedName: ''
        };
    },
    methods:{
        setName(event){
            this.confirmedName = event.target.value;
        },
        showName(event){
            this.name = event.target.value;
        },
        showAlert(){
            alert("Alert to user");
        }
    }
})

app.mount("#assignment");