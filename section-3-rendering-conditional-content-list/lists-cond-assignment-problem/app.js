const app = Vue.createApp({
    data(){
        return{
            inputTask: '',
            tasks: [],
            listIsVisible: true,
            messageBtn: ''
        };
    },
    methods:{
        addTasks(){
            this.tasks.push(this.inputTask);
        },
        toogleParagraphVisibility(){
            this.listIsVisible = !this.listIsVisible;
        }
    },
    computed:{
        changeVisibility(){
            return{
                visible: this.listIsVisible,
                hidden: !this.listIsVisible
            }
        },
    }
})

app.mount('#assignment')