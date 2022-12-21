const app = Vue.createApp({
    data(){
        return{
            taskEntered: '',
            taskList: [],  
            name: '',
            password: '',
            userData: []
        };
    },
    methods:{
        setTask(e){
            this.taskEntered = e.target.value;
        },
        addTask(){
            this.taskList.push(this.taskEntered);
        },
        setName(e){
            this.name = e.target.value;
        },
        setPassword(e){
            this.password = e.target.value;
        },
        saveUserData(){
            this.userData.push({
                name: this.name,
                password: this.password
            });
        }

    }
}).mount("#events")

{/* <input type="text" v-on:input="setName($event, 'Batista')" v-on:keyup.enter="confirmInput"><br> */}



  // let li = document.createElement("li");
            // li.innerHTML = 
            // "Nome: " + this.userData[0] + " " +
            // "Senha: " + this.userData[1];
            // let formResults = document.getElementById("formResults");
            // formResults.appendChild(li);