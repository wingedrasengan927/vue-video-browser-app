// When we import something, and if it doesn't exist in local folder,
// webpack is automatically going to look inside node_modules folder 
// and import it.
import Vue from 'vue';
// import the 'App' component. 
import App from './App'; // Note that we have to provide the relative path in this case.'

// Create a new Vue Instance and show the app component
new Vue({
    // render is another way of structuring the app
    // it renders an Instance of our 'App' Component
    render: h => h(App),
    // we also have to tell Vue where to render the component inside our HTML
    // we do this by referencing the id of the div inside the HTML to the 'el' property
    // or 'mounting' it to the instance. (both work the same)
}).$mount('#app')