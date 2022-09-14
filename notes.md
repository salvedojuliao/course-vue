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
