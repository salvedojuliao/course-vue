<template>
    <div>
        <active-user :username="user.name" :userage="user.age"></active-user>
        <user-data @set-data="setUserData"></user-data>
    </div>
</template>

<script>
export default {
    data(){
        return{
            user: {
                name: 'Júlio César',
                age: 21,
            }
        };
    }, 
    methods: {
        setUserData(name, age){
            this.user = {
                name: name,
                age: +age // it '+' converts to a number
            };
        }
    },
};
</script>


<style>
    html{
        font-family: sans-serif;
    }
    section{
        margin: 2rem auto;
        max-width: 40rem;
        border-radius: 12px;
        border: 1px solid #ccc;
        padding: 1rem;
    }
</style>

