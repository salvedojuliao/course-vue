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

    - app.js file:

            const app = Vue.createApp({
                    data() {
                           return {
                            courseGoal: "Finish the course and learn Vue!",
                        };
                    },
                });
            app.mount("#user-goal");

    - html.file:

            <p> {{ courseGoal }}</p>

## 16. Binding Attributes with the "v-bind" Directive
**_NOTE:_** An directive is basicaly an instruction, an instruction we give to Vue to do something.
- v-bind: is a reserved name that tells Vue 'to bind', 'to set' the value of something (something here is AN ATTRIBUTE on an HTML element). In this video of thhe class the attribute was 'href'
- v-bind = ':'

## 17. Understanding "methods" in Vue Apps
- Methods allows you to define functions which should execute when something happens.
    - Different of Data (that was a funcion, a method), 'methods' takes an object, which will be full of methods/functions.

- I can point to a methods inside of HTML just like 'interpolation'

## 18. Working with Data inside of a Vue App
- **_NOTE:_** 'courseGoalA/courseGoalB' is not a constant or variable, it is a property of an object. That is why when I need to connect to it, I need to use 'this', refering to a property of an object, e.g


- Object:

        data() {
            return {
                courseGoalA: "Finish the course and learn Vue!",
                courseGoalB: "Master Vue and build amazing apps!",
                vueLink: 'https://vuejs.org/'
            }
        };

- Methods:

        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5){
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }

- **_NOTE:_** Vue takes all the data that I return in data object and merges it into a global vue instance object (into your Vue app object). So behind the scenes there is a sea of objects. That's why I can have access to anything stored in that global object through the key word 'this'.

## 9. Outputting Raw HTML Content with v-html
- Namely Interpolation and v-bind directive = All most important features and functionalities that are related to outputting data.

- v-html: I set the CONTENT between opening and closing text of an element, but now I tell Vue that the CONTENT should be interpreted as HTML, so it should not be output as text as it is with double curly braces '{{ }}


        courseGoalB: "<h3>Master Vue and build amazing apps!</h3>",
        <p v-html="outputGoal()"></p> 

- In the example above, v-html outputs with the tag "< h3 >".
- Tip: Try to avoid v-hmtl.

## First Summary: 
- When I controll a part of HTML, I automatically contrtoll its childs
- In this Vue controlled HTML code, I can use special features (like interpolation, v-bind or v-html.)
- Therefore, when we work with Vue, we use a declarative approach (we define a goal/template we wanna have and mark the parts we want and the vue does the rest for us).


## 21. Understanding Event Binding
- v-on: it is the directive that react on 'some event'

     **_NOTE:_** I just declare where I wanna have event listeners and where I wanna output values (which value I should be aware of) and Vue does the rest for me. It means I don't need to code - to make it happens (that is made by Vue, Vue does it for). That's the core feature of the framework. 

     - I declare the goal, Vue manage the rest behidn the scen

     - I'm gonna use methods more with events.

## 23. Working with Event Arguments
    - 

## 22. Events & Methods
    - The methods created in this video don't want to return anything, the click listener doesn't a return value.
    - I can use the name of the (function or method) on tha HTML tag without using parenthesis around it 




    - PAY ATTANTION ON 'this'



    




























### During coding:
* About v-bind:
    **_NOTE:_** Using V-BIND I'll always receive an object! It means I can not use an awways on HTML tag like this:

        <!-- WRONG! -->
        <div v-bind:class="[classState]"> 

        <!-- RIGHT! -->
        <div v-bind:class="classState"> 

    - The variable I use inside data() wants an String (If I want to add a CSS class) e.g

    app.file:

        data(){
            return {
                class: 'classA',
            };
        },

    css.file:

        .classA{
            background-color: blue;
            height: 60px;
        }


    html.file:
    
        <div :class="class">