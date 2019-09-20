<?php
include_once 'headAdmin.php';
?>

<!-- contenido-w de las cosas -->
<div id="contenido-w" style="overflow-y: auto; height: 90vh;">

    <!-- a partir de aqui se agregan cosas -->

    <!-- container-fluid -->
    <div class="container-fluid">
    <div class="row mt-2 mb-4">
        <button class="ui green button" id="btnAgregarNuevo" onclick="mostrarformaprendiz(true)">
                        <i class="fa fa-plus-circle"></i> Agregar nuevo
                    </button>
                    </div>
       <div id="listadoregistros">
            <table id="tbllistado" class="mb-2 mt-3 table table-bordered text-center display responsive table-hover nowrap"
                style="width:100%">
                <thead>
                    <th>Opciones</th>
                   <th>Aprendiz</th>
                    <th>Documento</th>
                    <th>Tipo de beneficio</th>
                    <th>Dirección</th>
                    <th>Telefono</th>
                    <th>Correo</th>


                </thead>
                <tbody>
                </tbody>
                <tfoot>
                 <th>Opciones</th>
                    <th>Aprendiz</th>
                    <th>Documento</th>
                    <th>Tipo de beneficio</th>
                     <th>Dirección</th>
                    <th>Telefono</th>
                    <th>Correo</th>

                </tfoot>
            </table>
        </div>

         <div id="formularioregistros" class="mt-4" style="display: none;">

        <form name="formulario" id="formulario" method="POST" class="row">

             <div class="col-lg-4">
                <div class="form-group">
                    <label for="" class="font-weight">1. Nombres</label>
                     <input type="hidden" id="idaprendiz" name="idaprendiz" class="form-control" >
                        <input type="text" id="name" name="name" class="form-control" >
                         <small class="text-muted">Ingresar Nombres.</small>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="form-group">
                    <label for="" class="font-weight">2. Apellidos</label>
                       <input type="text" id="apellidos" name="apellidos" class="form-control" >
                    <small class="text-muted">Ingresar Apellidos.</small>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="form-group">
                    <label for="" class="font-weight">3. Tipo de documento</label>
                         <select name="tipodoc" id="tipodoc" class="form-control " data-size="5" required>
                        <option value="1">Tarjeta de identidad</option>
                                    <option value="2">Cédula de ciudadanía</option>
                                    <option value="3">Cédula de Extranjería</option>
                                      <option value="4">Pasaporte</option>
                    </select>
                    <small class="text-muted">Seleccione el tipo documento.</small>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="form-group">
                    <label for="" class="font-weight">4. Número de documento:</label>
                       <input type="number" id="documento" name="documento" class="form-control" >
                    <small class="text-muted">Ingresar número de documento.</small>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="form-group ">
                    <label for="" class="font-weight">5. Genero</label>

                    <select name="sexo" id="sexo" class="form-control">
                        <option value="1">Masculino</option>
                                    <option value="2">Femenino</option>
                    </select>
                    <small class="text-muted">Genero.</small>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="form-group ">
                    <label for="" class="font-weight">6. Beneficio</label>

                    <select name="beneficio" id="beneficio" class="form-control">

                    </select>
                    <small class="text-muted">Seleccione el beneficio.</small>
                </div>
            </div>

           <div class="col-lg-4">
                <div class="form-group">
                    <label for="" class="font-weight">7. Dirección</label>
                       <input type="text" id="dir" name="dir" class="form-control" >
                    <small class="text-muted">Ingresar dirección.</small>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="form-group">
                    <label for="" class="font-weight">8. Telefono</label>
                        <input type="number" id="tel" name="tel" class="form-control" >
                    <small class="text-muted">Ingrese el numero telefonico.</small>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="form-group">
                    <label for="" class="font-weight">9. Correo</label>
                        <input type="email" id="email" name="email" class="form-control" >
                    <small class="text-muted">Ingrese el Correo electronico.</small>
                </div>
            </div>


            <div class="col-md-12 mt-4 text-center">
                <div class="ui buttons">

                     <button class="ui  red button" onclick="mostrarformaprendiz(false)" type="button">Cancelar y volver</button>
                        <div class="or"></div>
                    <button class="ui green button" type="submit" id="btnGuardar">Registrar Aprendiz</button>
                </div>
            </div>



        </form>
        </div>


    </div>
    <!-- fin container-fluid-->

</div>
<!-- fin contenido-w de las cosas -->


<?php

include_once 'footerAdmin.php';

?>

<script src="../../public/js/script/aprendiz.js"></script>
