let checkboxes = document.querySelectorAll(".checkbox");

for(let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change",($event) => {
        filter($event.target.value, $event.target.checked);
        console.log($event.target.value);
        console.log($event.target.checked);
    });
}

function filter(value, checked) {

    console.log("filter called");
    
    let arbres = document.querySelectorAll(".icone");

    arbres.forEach(
        (arbre) => {
            arbre.className = "icone";
            if (value === "Tous" && checked === true) {
                arbre.className = "icone";
            }
            else if (value === "Tous" && checked === false) {
                arbre.className = "icone hidden";
            }
        
            else {
                let espece = arbre.querySelector("p.espece").textContent;
                for(let u = 0; u < checkboxes.length; u++) {
                    console.log(espece + " vs " + checkboxes[u].value)
                    if(checkboxes[u].value === espece && checkboxes[u].checked === false) {
                        arbre.className = "icone hidden";
                    }
                }
            }
        }
    );
};

document.querySelector("#fileForm").addEventListener("submit", ($event) => {
    $event.preventDefault();

    let valeur = document.querySelector("#fileImput").files[0];
    console.log(valeur);

    let fileReader = new FileReader();
    fileReader.onload = function(event) {
        console.log(fileReader.result)
        let tableauArbres = fileReader.result.split("\r\n");
        
        let carte = document.querySelector(".carte");
        tableauArbres.forEach(
            (arbre) => {
                let arbreData = arbre.split(";");
                carte.innerHTML +=
                    "<div class='icone' style='top:"
                    + arbreData[0]
                    + ";left: "
                    + arbreData[1]
                    + "'><img src='icone_arbre.png' />"
                    + "<div class='text'>"
                    + "<ul>"
                    + "<h2>Espèce</h2>"
                    + "<p class='espece'>" + arbreData[2]  + "</p>"
                    + "<h2>Hauteur</h2>"
                    + "<p class='hauteur'>"  + arbreData[3] + "</p>"
                    + "<h2>Arrondissement</h2>"
                    + "<p>7ème</p>"
                    + "</ul>"
                    + "</div>"
                    + "</div>";
                console.log(carte.innerHTML)               
            }
        )
        console.log(tableauArbres);
    };
    fileReader.readAsText(valeur);
});