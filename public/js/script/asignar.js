var tabla;

//funcion que se ejecuta al inicio
function init()
{


    
    listar();
    
}

function mostrarform(flag)
{
    if(flag)
    {
         $("#listadohistorial").show();
        $("#listadoregistros").hide();
                
    }
    else
    {  
      listar();
          $("#listadohistorial").hide();
        $("#listadoregistros").show();
               
        
    }
}

function historialcompleto(flag)
{
    if(flag)
    {
      listarhistorial();
         $("#listadohistorial").show();
        $("#listadoregistros").hide();
                
    }
    else
    {  
      listar();
          $("#listadohistorial").hide();
        $("#listadoregistros").show();
               
        
    }
}



function listar()
{
   tabla = $('#tbllistado').dataTable({
        "aProcessing": true, //activamos el procesamiento del datables
        "aServerSide": true, //paginacion y filtrado realizados por el servidor
        dom: 'Bfrtip', //Definimos los elementos del control de la tabla
        buttons: [
            // 'copyHtml5',
            // 'excelHtml5',
            // 'pdf'
        ],
        "ajax": 
        {
           url: '../../app/Controlador/controlAsignar.php?op=listaraprendiz',
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

function asignar(valor,valor2){
  if(valor2=='1'){
     bootbox.alert("Ya ha sido entregado su bono del dia de hoy");
  }else{
    bootbox.confirm("¿Desea imprimir bono?", function(result){
        if(result){
            $.post("../../app/Controlador/controlAsignar.php?op=imprimirticket", {valor : valor}, function(e){
               
                bootbox.alert(e);
                var tabla = $('#tbllistado').DataTable();  
                tabla.ajax.reload();
                listar();
            });
        }
    });
  }

    
}

function verhistorialaprendiz(valor){
  mostrarform(true);
tabla = $('#tbllistadohistorial').dataTable({
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
           url: '../../app/Controlador/controlAsignar.php?op=verhistorialaprendiz',
           type: "POST",
        data:{valor:valor},
           error: function(e){
               console.log(e.responseText);
           } 
        },
        "bDestroy": true,
        "iDisplayLength": 5, //paginacion
        "order": [[ 0, "desc" ]] //ordenar (columna, orden)

    }).dataTable();
}

function listarhistorial()
{
   tabla = $('#tbllistadohistorial').dataTable({
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
           url: '../../app/Controlador/controlAsignar.php?op=listarhistorial',
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





//ejecutamos init
init();