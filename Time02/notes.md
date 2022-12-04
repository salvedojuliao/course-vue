# SECTION 1: Getting Started 

## 2. What is "Vue.js"?
- It is as JavaScript framework that makes building interactive and reactive web frontends (= browswer-side web applications) easier.

- Framework: It is a (trhid-party) library that exposes utility functionalities AND 'a set of rules' (a clear guidance) on how to build your Javascript application.

- Reactive: Your app is able to react to user input, update the screen dynamically (e.g to show overlays or input validation erros) -> Look and feel of mobile apps.

* HOWEVER: Using 'vanilla' JavaScript I need to write all code by my own ('re-invent the wheel'), that's here vue helps us, I can work better in a team, where everyone knows the structure.
    - In short: When I use a framewor, I can make mobile apps and desktop apps feel very 'reacive': Things happen instantly, you don't wait for new pages to load or actions to start.

## 3. Different Ways of Using Vue
* I can vue in TWO MAIN WAYS
    1) Vue can be used to CONTROL PARTS of HTML pages or entire pages ('Widget approach')
    2) Vue can also be used to CONTROL THE ENTIRE FRONTEND of a web application (Single-Page-Application (SPA) approach), here Vue tales over and contols the UI.

## 4. Exploring Vue Alternatives
* React.js: Certain features (e.g. routing) are added via community packages.
* Vue.js: Complete component-based UI framework, includes most core features. 
* Angular: Complete componnet-based UI framework, packed with features. Uses TypeScript. Can be overkill for smaller projects.

## 5. Building A First App With Just JavaScript
* To to this app, I needed 13 lines of code.
<script>
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
</script>