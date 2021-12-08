class NavBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <style>
            nav {
                width: 100%;
                position: -webkit-sticky;
                background: rgb(167, 44, 44) ;
                top: 0;
            }
            
            nav ul {
                    display: flex;
                    align-items: center;
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                    overflow: hidden;
            }
                
            nav ul li {
                    float: center;
            }
                
            nav ul li a {
                    color: white;
                    font-weight: bold;
                    text-align: right;
                    padding: 0px 16px 0px 16px;
                    text-decoration: none;
            }
                
            nav ul li a:hover {
                    text-decoration: underline;
            }
            </style>
            
            <nav>
                <ul>
                    <li><a href="#informasi">INFORMASI</a></li>
                    <li><a href="#data-stat">DATA TERKINI</a></li>
                </ul>
            </nav>
        `;
    }
 }
 customElements.define("nav-bar", NavBar);