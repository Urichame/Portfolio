document.addEventListener("DOMContentLoaded", function() {
  const btnCv = document.getElementById("download-cv");
  const cvanalytics = document.getElementById("cvanalytics-link");

  if(btnCv){
    btnCv.addEventListener("click", () => {
      console.log("Descargar CV clickeado — revisá href en index.html");
    });
  }

  if(cvanalytics){
    cvanalytics.addEventListener("click", () => {
      console.log("Ver más CVanalytics clickeado — revisá href en index.html");
    });
  }
});
