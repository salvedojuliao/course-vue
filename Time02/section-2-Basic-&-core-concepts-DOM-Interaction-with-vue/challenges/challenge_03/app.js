const app = Vue.createApp({
  data() {
    return {
      menuItems: ["Item 1", "Item 2", "Item 3"],
      name: "",
      lastName: "",
      confirmedName: "",
      counter: "",
    };
  },
  methods: {
    setName() {
      this.confirmedName = this.name + " " + this.lastName;
      this.counter += 1;
    },
    resetInputs() {
      this.name = "";
      this.lastName = "";
    },
  },
  watch: {
    counter() {
      if (this.counter > 3) {
        this.counter = 0;
      }
    },
  },
  computed: {
    fullName() {
      if (this.name === "" && this.lastName === "") {
        console.log("vazio");
        return "";
      } else if (this.name !== "" && this.lastName !== "") {
        // console.log("ambos cheios");
        return this.name + " " + this.lastName;
      }
    },
  },
});

app.mount("#events");
