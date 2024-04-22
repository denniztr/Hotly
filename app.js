import renderHtml from "./components/renderApp/render.js";

const app = document.getElementById('app');

function appRender() {

    if (app) {
        // app.innerHTML = 'Hello world';
        renderHtml(app)
    }

}

appRender();