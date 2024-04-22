import headerComponent from "../Header/header.js";


const headerHtml = headerComponent();


function renderHtml(app) {
    app.innerHTML = headerHtml;
}

export default renderHtml;