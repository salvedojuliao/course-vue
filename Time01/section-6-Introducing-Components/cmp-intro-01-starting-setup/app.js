const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'manuela',
                    name: 'Manuela Lorenz',
                    phone: '01234 5471 991',
                    email: 'manuel@localhost.com'
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '9498 5471 991',
                    email: 'julie@localhost.com'
                },
            ],
        };
    },
});

app.component('friend-contact', {
    template: `
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails(friend.id)">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}1</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
    `,
    data() {
        return { 
            detailsAreVisible: false,
            friend: {
                id: 'manuela',
                name: 'Manuela Lorenz',
                phone: '01234 5471 991',
                email: 'manuel@localhost.com'
            }
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
    }
});


app.mount('#app');