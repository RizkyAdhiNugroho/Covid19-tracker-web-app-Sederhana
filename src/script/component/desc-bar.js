class DescBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <style>
            main {
                max-width: 1000px;
                margin: 0 auto;
            }
            
            h2 {
                    text-align: left;
            }
            
            p {
                    text-align: justify;
                    font-size: 20px;
            }
        </style>
        <div id= "informasi" >
            <h2>Apa itu Covid?</h2>
            <p background>Coronavirus merupakan keluarga besar virus 
                yang menyebabkan penyakit pada manusia dan hewan. Pada manusia biasanya 
                menyebabkan penyakit infeksi saluran pernapasan, mulai flu biasa hingga 
                penyakit yang serius seperti Middle East Respiratory Syndrome (MERS) dan 
                Sindrom Pernafasan Akut Berat / Severe Acute Respiratory Syndrome (SARS). 
                Coronavirus jenis baru yang ditemukan pada manusia sejak kejadian luar biasa
                muncul di Wuhan Cina, pada Desember 2019, kemudian diberi nama Severe Acute 
                Respiratory Syndrome Coronavirus 2 (SARS-COV2), dan menyebabkan penyakit 
                Coronavirus Disease-2019 (COVID-19).
            </p>            
        </div>
        `;
    }
 }
 customElements.define("desc-bar", DescBar);