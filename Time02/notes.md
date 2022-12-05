# SECTION 1: Getting Started

## 2. What is "Vue.js"?

- It is as JavaScript framework that makes building interactive and reactive web frontends (= browswer-side web applications) easier.

- Framework: It is a (trhid-party) library that exposes utility functionalities AND 'a set of rules' (a clear guidance) on how to build your Javascript application.

- Reactive: Your app is able to react to user input, update the screen dynamically (e.g to show overlays or input validation erros) -> Look and feel of mobile apps.

* HOWEVER: Using 'vanilla' JavaScript I need to write all code by my own ('re-invent the wheel'), that's here vue helps us, I can work better in a team, where everyone knows the structure.
  - In short: When I use a framewor, I can make mobile apps and desktop apps feel very 'reacive': Things happen instantly, you don't wait for new pages to load or actions to start.

## 3. Different Ways of Using Vue

- I can vue in TWO MAIN WAYS
  1. Vue can be used to CONTROL PARTS of HTML pages or entire pages ('Widget approach')
  2. Vue can also be used to CONTROL THE ENTIRE FRONTEND of a web application (Single-Page-Application (SPA) approach), here Vue takes over and contols the UI.

## 4. Exploring Vue Alternatives

- React.js: Certain features (e.g. routing) are added via community packages.
- Vue.js: Complete component-based UI framework, includes most core features.
- Angular: Complete componnet-based UI framework, packed with features. Uses TypeScript. Can be overkill for smaller projects.

## 5. Building A First App With Just JavaScript

**_NOTE:_** To make this app, I needed 13 lines of code

    const buttonEl = document.querySelector('button');
    const inputEl = document.querySelector('input');
    const listEl = document.querySelector('ul');

        function addGoal (){
            const enteredValue = inputEl.value;
            const listItemEl = document.createElement('li');
            listItemEl.textContent = enteredValue;
            listEl.appendChild(listItemEl);
            inputEl.value = '';
        }

    buttonEl.addEventListener('click', addGoal);

## 7. Re-building the App with Vue

- V-MODEL: With it I can connect/access the value of an input e.g.
  - input type="text" id="goal" v-model="enteredValue"
- Within 'methods' I add functions/methods that should be called from inside the HTML code.
  **_NOTE:_** With Vue we define the final result, not how we get there.

## 9. Setting Up the Course Development Environment

## 10. Course Outline & What's In The Course

- Basics: Core Syntax, Templates. Directives, Data, Methods, Computed, Properties, Watchers.
- Intermediate: Components, Component, Communication, Behind the Scenes, Forms, Http, Routing, Animations.
- Advanced: Vuex, Authentication, Deployment, & Optimization API, Re-using Code.

## 11. How To Get The Most Out Of This Course

- Watch the Videos, Code Along, Repeat Concepts, Google and Stackoverflow, Try to help other students.

# SECTION 2: Basic & Core Concepts - DOM Interacion with Vue

## 14. Creating and Connecting Vue App Instances

**_NOTE:_** If I control a HTML element with Vue, I also control all child elements of that element!

- DATA aways return an OBJECT!

## 15. Interpolation and Data Binding

- Interpolation is when I can reference properties that are part of the object I return in 'data':

app.file:
const app = Vue.createApp({
    data() {
        return {
            courseGoal: "Finish the course and learn Vue!",
        };
    },
});
app.mount("#user-goal");

html.file:
<p> {{ courseGoal }}</p>
