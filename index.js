// const API_URL = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";

// const HTMLResponse = document.querySelector("#app");

const info = async() =>{  //await solo funciona para funciones asincronas asi que se le agrega "async"

        const respuesta = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales'); // fetch devuelve una promesa 
        console.log(respuesta);

        if(respuesta.status ===200){ //si la respuesta es correcta
            const datos = await respuesta.json();
console.log(datos);

            datos.forEach(dato => {
                if(dato.casa.nombre=="Dolar Blue"){
                document.getElementById("valorCompra").innerHTML=dato.casa.compra;
                document.getElementById("valorVenta").innerHTML=dato.casa.venta;
                }
            });
            datos.forEach(dato => {
                if(dato.casa.nombre=="Dolar Oficial"){
                document.getElementById("valorCompraOf").innerHTML=dato.casa.compra;
                document.getElementById("valorVentaOf").innerHTML=dato.casa.venta;
                }
            });

            

            
        }
    }
   
    

info();





// const xhr = new XMLHttpRequest();

// function onRequestHandler(){
//     if(this.readyState == 4 && this.status ==200){
//        const data= JSON.parse(this.response);
//        const HTMLResponse = document.querySelector('#app');


//     }
// }
// xhr.addEventListener("load",onRequestHandler);
// xhr.open("GET",`{API_URL}`);
// xhr.send();





// fetch(`${API_URL}/dolarblue`).then((response) => response.json()).then((precio)=>{
//     const tpl = precio.map(precio =>`<span>${precio}</span>`)
// HTMLResponse.innerHTML = `<span>${tpl}</span>`;
// });