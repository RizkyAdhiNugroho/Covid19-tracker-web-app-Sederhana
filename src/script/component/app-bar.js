class AppBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `<h2>Kawal COVID-19</h2>`;
    }
 }
 customElements.define("app-bar", AppBar);