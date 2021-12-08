function validar (){
    let form = document.form;
    let persons = document.form.persons.value;
    let hours = document.form.hours.value;

    if(hours==""){
        alert("Por favor selecciona la hora de tu reservación")
        form.hours.focus();
        return false;
    }
    if(persons==""){
        alert("Por favor indica el número de personas")
        form.persons.focus();
        return false;
    }
    if (form.name.value==0){
        alert("El campo nombre está vacio");
        form.name.value="";
        form.name.focus();
        return false;
    }
    if (form.phone.value==0){
        alert("El campo teléfono está vacio");
        form.phone.value="";
        form.phone.focus();
        return false;
    }

    alert('Registro realizado con éxito')
    form.submit();
}