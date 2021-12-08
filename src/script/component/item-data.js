class ItemData extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    set covidItem(item){
        this._covidItem = item;
        this.render()
    }
  
    render() {
        this.innerHTML = `
        <style>
            .card-stat {
                width: 80%;
                margin: 0 auto;
            }
            
            .card {
                    width: 100%;
                    padding: 10%;
                    margin-bottom: 25px;
                    border-radius: 6px;
                    color: #fff;
                    align-items: center;
            }
            
            h5 {
                    font-size: 0.8em;
                    color: rgb(70, 69, 69);
            }
            
            .card.country {
                    background: rgb(167, 44, 44);
            }
            
            .card.total {
                    background: rgb(255, 123, 0);
            }
            
            .card.active {
                    background: #1d12b4a4;
            }
            
            .card.recovered {
                    background: #10df33d3;
            }
            
            .card.death {
                    background: #cc1313e1;
            }
            
            .card p {
                    margin: 0;
                    font-size: 1.5em;
            }
            
            .card span {
                    font-size: 3rem;
                    font-weight: 700;
                    letter-spacing: 4px;
            }
            
            .card i {
                    font-size: 3rem;
            }
            
            .update-time {
                    padding: 5px;
            }
        </style>
        <div class="card-stat">
            <div class="card country">
                <p>Negara</p>
                <span id="Country"> Indonesia </span>
            </div>
            <div class="card total">
                <p>Total Kasus</p>
                <span id="cases"></span>
            </div>
            <div class="card active">
                <p>Kasus Aktif</p>
                <span id="active"></span>
            </div>
            <div class="card recovered">
                <p>Kasus Sembuh</p>
                <span id="recovered"></span>
            </div>
            <div class="card death">
                <p>Kasus Meninggal</p>
                <span id="death"></span>
            </div>
            <div class="update-time">
                <h5>Tanggal Update Terakhir: </h5>
                <span id="update">
                </span>
            </div>
        </div>
        `;
    }
}
  
customElements.define("item-data", ItemData);