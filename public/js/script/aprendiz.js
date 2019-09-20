var tabla;

//funcion que se ejecuta al inicio
function init()
{


     // mostrarform(false);
    listar();
    // listadoniveles();
  

    $("#formulario").on("submit", function(e){
        guardarAprendiz(e);
    });

   

    // //cargamos los items al select 
    // $.post("../../ajax/asignar.php?op=selectEntidad", function(r){
    //     $("#entidad").html(r);
        
    // })
     
    //cargamos los items al select 
    $.post("../../app/Controlador/controlAprendiz.php?op=selectbeneficio", function(r){
        $("#beneficio").html(r);
        
    });

    // $("#imagenmuestra").hide();
}

function limpiar()
{
    $("#tipodoc").val("");
    $("#documento").val("");
    $("#name").val("");
    $("#apellidos").val("");
    $("#sexo").val("");
     $("#email").val("");
     $("#tel").val("");
     $("#dir").val("");
      $("#beneficio").val("");
       $("#idaprendiz").val("");                             
   
}

function mostrarformaprendiz(flag)
{
    limpiar();
    if(flag)
    {
    
       
        $("#formularioregistros").show();
        $("#btnGuardar").prop("disabled",false);
        $("#listadoregistros").hide();
        $("#btnAgregarNuevo").hide();
        
    }
    else
    {  
    
        $("#formularioregistros").hide();
        $("#listadoregistros").show();
        $("#btnAgregarNuevo").show();
         
        
    }
}

function listar()
{
    
   tabla = $('#tbllistado').dataTable({
        "aProcessing": true, //activamos el procesamiento del datables
        "aServerSide": true, //paginacion y filtrado realizados por el servidor
        dom: 'Bfrtip', //Definimos los elementos del control de la tabla
        buttons: [
            'copyHtml5',
            'excelHtml5',
            'pdf'
        ],
        "ajax": 
        {
           url: '../../app/Controlador/controlAprendiz.php?op=listaraprendiz',
           type: "get",
           dataType: "json",
           error: function(e){
               console.log(e.responseText);
           } 
        },
        "bDestroy": true,
        "iDisplayLength": 10, //paginacion
        "order": [[ 0, "desc" ]] //ordenar (columna, orden)

    }).dataTable();
}

function eliminaraprendiz(valor){
    bootbox.confirm("¿Estas seguro de querer eliminar este Aprendiz?", function(result){
        if(result){
            $.post("../../app/Controlador/controlAprendiz.php?op=eliminaraprendiz", {valor : valor}, function(e){
               
                bootbox.alert(e);
                var tabla = $('#tbllistado').DataTable();  
                tabla.ajax.reload();
                listar();
            });
        }
    });
}

function guardarAprendiz(e){

    e.preventDefault(); //no se activara la accion predeterminada del evento
    $("#btnGuardar").prop("disabled", true); //deshabilito el boton
    var formData = new FormData($("#formulario")[0]);

    $.ajax({
        url: "../../app/Controlador/controlAprendiz.php?op=guardarAprendiz",
        type: "POST",
        data: formData,
        contentType: false,
        processData: false,
        dataType: "json",

        success: function(datos){ 
            // alert(datos.status);

            $("#btnGuardar").prop("disabled", false); //vuelvo a habilitar el boton

            //validamos la respuesta del servidor 'datos'.
            //como es un json, entonces lo validamos de la siguiente manera:
            if(datos.status == "existente"){

                //aqui es cuando el usuario ya esta en la base de datos

                bootbox.alert('Este Aprendiz ya se encuentra registrado.');

                 // cancelarform();

            }

            else if(datos.status == "registro"){
                bootbox.alert('Se registro con exito!'); 

                mostrarformaprendiz(!true);
                // val= document.getElementById("listadocursos").value;
                // alert(val);
                listar();
                 // tabla.ajax.reload();
                 // location.reload();
                // window.location ='cursos.php';    

            }
            else if(datos.status == "editado"){
                bootbox.alert('Aprendiz editado con exito!'); 

                mostrarformaprendiz(!true);
                // val= document.getElementById("listadocursos").value;
                // alert(val);
                listar();
                 // tabla.ajax.reload();
                 // location.reload();
                // window.location ='cursos.php';    

            }

            else{
                bootbox.alert('Ocurrio un error inesperado');
            }
            
        }
    });

    // limpiar();
}

function editaraprendiz(id){
        
    $.post("../../app/Controlador/controlAprendiz.php?op=veraprendiz",{id : id}, function(data, status)
    {
        var data = JSON.parse(data);
        mostrarformaprendiz(true);         
                  
        $("#name").val(data.nombre);
         $("#idaprendiz").val(data.id_aprendiz);      
        $("#apellidos").val(data.apellidos);
        $("#tipodoc").val(data.tipo_documento);
       $("#documento").val(data.documento);
         $("#sexo").val(data.sexo);
        $("#beneficio").val(data.tipo_beneficio); 
         $("#dir").val(data.direccion); 
          $("#tel").val(data.telefono); 
           $("#email").val(data.email);   
        
    });
}



//ejecutamos init
init();