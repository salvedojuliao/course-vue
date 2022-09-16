# Section 1:
* What is vue?
- It is a JS framework that makes building interactive and reactive web frontends
    - JS: A programming language;
    - Framework: is a third-party library taht exposes utility functionalities AND a 'set of rules' (a clear guidance) on how to build your JS application (Functions + Rules);
    - Reactive: Your app is able to react to user input, update the screen dynamically (e.g. to show overlays or input validation erros) -> Look and feel of mobile apps.
    - Web frontends: What the user sees (HTML + CSS + JS, running in the browser of your user)
    - Mobile app and desktop app feel very "reactive": things happen instantly, you don't wait for new pages to load or actiosn to star.
        - Trandicionally, in web apps, you click a link and wait for a new page to load. You click a button and wait for some action to complete.
        - JS is used to helps us make it reactive "Behind the scenes"
            * But "Just JS" may not be ideal!
    - Different Ways of Using Vue (In two main ways):
    - 1) Control parts of HTML pages or entire pages, some pages only.
    - 2) Controle EVERYTHING (teh entite frontend) of a web application. (Single-Page-Application - SPA).
        * The goal of the course: start first approach then move to the second one.
        * Obs: "VanillaJS is a name to refer to using plain JavaScript without any additional libraries like jQuery back in the days.
            
    * CONCLUSION: Using Vue makes everybody be in the same page!

# Section 2:

- To start:
    - I need to create a Vue App, this is aways the first sep: I control a part of HTML using a vue app;
    - Important: If we control a HTML element with Vue, we'll also control all child elements ofthat element!.
    - Data has to be Data, it is a property key of vue;
    - Interpolation: I can reference properties that makes part of my data in HTML, outpputing the value of the propety;
    - v- (words with this at the begging are reserved words by vue)
    - Methods: allows to define functions
        * IMPORTANT: Data itsef was a function a method, and Method takes an object full of methods (tose are tottaly up to me);
    - Data and Interpolation (I'll aways use it)

        * Summary: Vue uses declarative approach: we definine the templates, We mark the part that are dynamic and Vue does the rest for us behind the scenes on our behalf; We just declare our goal and don't care about the spets fo getting there. This is the opposite of imperative approacth (with only JS);

        - Important: EVERY APP can be connected ONLY to one part of HTML, that's why we use Id as the CSS selector;
- Events & Methods: 
    - I don't need to ruturn something when I use eventListener;
- Using native event objects:
    - Read about the property value of input (used in event.target.value of the class's exemple);
    - I can use $event as argument with eventListener
- Event modifier:
    - Using dot after v-on:eventName + '.' + modifiter;
    - I can have more than one v-on in a line of HTML;
- Locking Content with v-once:
    - v-once: a directive the prevent the starting content of something(v-once)
- What is the difference between 'keydown' and 'keyup'? Because both work when I use 'enter' soon after them, just like this:
v-on:keydown.enter or v-on:keyuo.enter. However, they alone don't work.
  * Answer:
    - keyup: register the caracter in the same time;
    - keydown: register the caracter after the second one (ther is a delay)
    * Discord: You have the javascript events
        keydown - Key down first multiple keyboard events for as long as a key is down
        keyup - Key up fires one keyboard event when a key is released
        keypress - Key press fires one keyboard event when a key is touched

    And you are using a modifier meaning you only want to capture when the enter key is down. Although I'm not sure if I answered your question. 
- v-model (shortcut for v-mind:value and v-on:input)
    - v-model is two-way binding (Data binding + Event Handling)
    - <!-- 
      v-model="name"
      V-model = v-bind:value="name" AND
      v-on:input="setName($event, 'Batista')" -->
- (Methods used for Data Binding: How it workds): Vue can't know if I'm using a function outputFullname(). It loads everytime anything changes on screen;
- Computer properties: are essentially like methods but one difference: Vue will be aware of thir dependecies and only reexecute them if of the dependecies changes. Now: data, methos and computed(I have to use this name).
    - I should name computer property just as I name data (cuz it is not a method). We use them like ariable,s like properties; It caches the dependency and recaculate it ONLY when it changes. For performance this is BETTER!
- Working with Watchers: Watcher is a function that I can call when something changes (yes it can places computed property)
    - I repeat another data or computed name as a method name inside then i be executed automatically whenere a property of that name changes;and 
    - IMPORTANT: It's better using computed property when I have two dependecies;
    - Watcher is better when I have two kind on intent in mind. It is better to update something;
    - Conclusion: 
        - Change dynamically? Use computed property
        - Update something? Use watcher

- About this and that (from assignment 3) from Discord (WhiteLotus):
    - You still have the wrong idea. this refers to the context of the component in Vue.
    It's true that the setTimeout function normally creates its own this context but only if it is executing with the traditional function syntax function() {}. The difference is that an arrow function will always use the parent context of this, which in this case is the component.
    This is the same with javascript

- Methods vs Computed vs Watch?
    - Methods: Use for events or data that really needs to be re-evaluated all the time;
    - Computed: Use for data that depends on other data;
    - Watch: Use for any non-data update you want to make;
    - ObsK Checkout this class to remember!
- Shorthands:
    - v-on = @
    - v-bind = :

- Dynamic Styling: I can use arrat syntax to populate classes (and they can be objects too)


    - Summary:
    - DOM and Templates: Vue can be used to define the goal instead of the steps (declarative approach).
    - Connect Vue to HTML via "mount": Vue then renders the real DOM based on the connected template

    - Data and Event Bindings: You can bind data via interpolation ({{}}) or the v-bind (":") directive;
    - You liste for events via v-on ("@")

    - Reactivity: Vue updates the real DOM for you when bound data changes
    - Computed properties and watchers allow to react to data changes

    - Styling: Dynamic CSS class and inline style bindings are supported by Vue;
    - Vue offers multiple special syntaxes (objects-based, array-based) for efficient bindings.



# Section 3

- I can ONLy use v-else rigth after a element that uses v-if
- An alternative to v-f is v-show:
    - v-if: it infacts remove items from DOM (It can cost performance)
    - v-show: it just change the visibility: I should use it when an element changes a lot

- v-for: it is like the for structure (repetition)
    - Remember: We loop, through an array, with the in keyword when using v-for
    - Index: v-for="(goal, index) in goals" (it shows the index);
    - Loop thougth objects: 
    <!-- <li v-for="(value, key) in {Name: 'Max', Age: 21}">{{ key }}: {{ value }</li> -->
    <!-- <li v-for="value in {name: 'Max', age: 21}">{{ value }}</li> -->
    - Loop throught numbers:
     <!-- <li v-for="num in 10">{{num}}</li> -->
     - Other examples:
     <!-- <li v-for="goal in goals">{{ goal }}</li> -->
     <!-- <ul>
        <li v-for="(value, key) in {Name: 'Max', Age: 21}">{{ key }}: {{ value }}</li>
        <li v-for="value in {name: 'Max', age: 21}">{{ value }}</li>
      </ul>
      <ul>
        <li v-for="num in 10">{{num}}</li>
      </ul> -->
      - Key is a non HTML atribute, it is undestood by vue, it is good for using with v-for;

      - Summary:

        - Conditional Content: 
            - v-if (and v-show) allows you to render a content only if a certain contition is met
            - v-if can be combined with v-else and v-else-if (only on diret sibling elements!)

        - Lists: 
            - v-for can be used to render multiple elements dynamically
            - v-for can be used with arrays, objects and ranges (numbers).

        - v-for Variations:
            - You can extact values, values and indexes or values, keys and indexes
            - if you need v-for and v-if, DON'T use them on the same element. Use a wrapper with v-if instead


        - Keys:
            - Vue re-uses DOM elements to optimize performance -> This can lead to bugs if elements contain state
            - Bind the jey attribute to an unique value to help Vue identify elements that belong to list content


# Project:
- Remember: Everthing is merged (data, methods, computed...)into a behind the scenes managed global object. Therefore I can access methods...everthing.


# Section 5
- Vue turns your data object into a reactive data object by essentialy wrapping your properties with a JS feature called Proxies.
    - Proxy is used under the hood by Vue. It needs to be notified about new assignments;

- Proxy:
 - Obs: Js by default IS NOT REACTIVE;
 - Exemple of Proxy (this is how Vue works, creating 'a lot of' proxies):
    <!-- const data = {
    message: 'Hello!',
    longMessage: 'Hello! Worold!'
    };

    const handler = {
    set(target, key, value){
        if (key === 'message'){
        target.longMessage = value + 'World!';
        }
        target.message = value;
    }
    };

    const proxy = new Proxy(data, handler);

    proxy.message = 'Hello!!!';

    console.log(proxy.longMessage);  -->
 
 - One App vs Multiple Apps:
  - Each app work ALONE! It's all one HTML part per app;

- Understanding Templates: HTML = Template

- Working with Refs: refs is a object full of keys that I can use;

- How Vue updates the Dom:
    - Vue app sortes data... and browser Dom influenced by its template.
    - Virtual DOM: It basically has a copy of DOM. JS-based DOM witch xsist only in memory: Updatesare made to virtual DOM first, only diferences are then rendered to the real DOM

- Vue Instance(app) Lifecyle: Slide is better to see!

# Section 6: Introducing Components
- Component is a Vue app(mini app) insed other Vue app (the main one)
- You might recall lecture 3 ("Different Ways of Using Vue"): You can use Vue.js to control parts of (possibly multiple HTML) pages OR you use it to build so-called "Single Page Applications" (SPAs).

If you control multiple, independent parts of HTML pages, you will often work with multiple Vue apps (i.e. you create multiple apps by calling createApp() more than once).

On the other hand, if you're building a SPA, you typically work with just one "root app" (i.e. createApp() is only used once in your entire codebase) and you instead build up a user interface with multiple components.

You absolutely are allowed to also use components in cases where you have multiple Vue apps but you typically won't use multiple Vue apps if you build one big connected user interface.

Why?

Because Vue apps are independent from each other - they can't really communicate with each other. You might find "hacks" to make it work but there's no great "official" way of sharing data between apps, updating something in app A in case something happens in app B etc.

Components on the other hand - as you will learn soon - DO offer certain communication mechanisms that allow you to exchange data between them. Hence you can build one connected UI if you work with one root app that holds multiple components.

You'll see that in the lectures and throughout the entire course, especially in the course projects of course!

# Section 7: Moving to a better Development Setup & Workflow with the Vue cli
- A better propper (development) web server includes the possibility of using some (modern JS or Brownser) features.
- CLI allows us to develop projetcs more realistic and with fundamental resources.
- About Files of Vue (CLI):
    - npm run serve: execute it aways make changes;
    - Node_Models: it has everything the app needs;

-
