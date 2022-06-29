let e;

function checkError(element, id)
{
    if (element.value == '') {
        document.getElementById(id).classList.remove("cache");
        e.preventDefault();
    }
    else{
        document.getElementById(id).classList.add("cache");
    }
}

document.querySelector("form").addEventListener("submit", (ev) =>
{
    e = ev;

    checkError(prenom, "fname");
    checkError(nom, "lname")
    checkError (email,"mail")
    checkError(sujet,"subject")
    checkError(com,"mess")
    
});