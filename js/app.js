
class Input {
    constructor (parentID, type){
        this.parentID = parentID;
        this.type = type;
    }
    render(){
        let newInput = document.getElementById(this.parentID)
        const myInputHTML = newInput.innerHTML + "<input type=" + this.type + ">";
        
        newInput.innerHTML = myInputHTML; //Vamos a escribir en HTML para que se dibuje un boton con el texto de this.text
    }
}

function RenderInput(type) {

    let input_type = "none" /* Creamos la variable para asignar el type ams adelante */

    switch (type) {
        case "Password": /* En caso de que el elemento del array sea... */
            input_type = "password" /* el type pasa a ser */
            break;
        case "E-mail":
            input_type = "email";
            break;
        default: /* Por defecto será */
            input_type = "text"
            break;
    }

    let myInput = new Input("app", input_type);
    myInput.render();
}

let myArrayInput = ["Name", "Lastname", "E-mail", "Password"]

let FilterArray = myArrayInput.filter(element => element != "Password")

FilterArray.forEach(function (element) {
    RenderInput(element);
});

/* Un campo Input que se dibuje a partir de un array de elementos.
 Usar filter para reducir la cantidad de elementos del array a dibujar. */