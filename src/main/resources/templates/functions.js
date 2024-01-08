$(document).ready(function() {
    loadUsers();
    //Añadir nuevo usuario
    $("#addNewUser").submit(function(event) {
    event.preventDefault();
    var cedula = $("#cedula").val();
    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val();
    var direccion = $("#direccion").val();
    var telefono = $("#telefono").val();
    var data = {
    "nombre": nombre,
    "apellido": apellido,
    "direccion": direccion,
    "telefono": telefono
    };
        $.ajax({
        url: "http://localhost:4444/rest/save/" + cedula,
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function(data) {
         loadUsers();
        }
        });
    });
    //Cargar datos para editar al usuario
    $("#tblUsers").on('click', '.btnEdit', function(){
        var currentRow = $(this).closest("tr");

        $('#ecedula').val(currentRow.find("td:eq(0)").text());
        $('#enombre').val(currentRow.find("td:eq(1)").text());
        $('#eapellido').val(currentRow.find("td:eq(2)").text());
        $('#edireccion').val(currentRow.find("td:eq(3)").text());
        $('#etelefono').val(currentRow.find("td:eq(4)").text());
    });

    //Editar usuario
    $("#editUserForm").submit(function(event) {
        event.preventDefault();
        var cedula = $("#ecedula").val();
        var nombre = $("#enombre").val();
        var apellido = $("#eapellido").val();
        var direccion = $("#edireccion").val();
        var telefono = $("#etelefono").val();
        var data = {
        "nombre": nombre,
        "apellido": apellido,
        "direccion": direccion,
        "telefono": telefono
        };
            $.ajax({
            url: "http://localhost:4444/rest/edit/" + cedula,
            type: "PUT",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(data),
            success: function(data) {
             loadUsers();
            }
            });
        });

    //Eliminar usuario
    $("#tblUsers").on('click', '.btnDel', function(){
        var currentRow = $(this).closest("tr");

        var cedula = currentRow.find("td:eq(0)").text();
        $.ajax({
            url: "http://localhost:4444/rest/delete/" + cedula,
            type: "DELETE",
            success: function(data) {
             loadUsers();
            }
            });
    });

});

function loadUsers() {
    $.ajax({
    url: "http://localhost:4444/rest/all",
    type: "GET",
    dataType: "json",
    success: function(data) {
    console.log(data);
        var html = '';
    for (var i = 0; i < data.length; i++) {
    html += '<tr>';
    html += '<td>' + data[i].cedula + '</td>';
    html += '<td>' + data[i].nombre + '</td>';
    html += '<td>' + data[i].apellido + '</td>';
    html += '<td>' + data[i].direccion + '</td>';
    html += '<td>' + data[i].telefono + '</td>';
    html += '<td>' +
        "<button type='button' class='btn btn-primary btnEdit' data-bs-toggle='modal' data-bs-target='#editUser'>Editar Usuario</button>" +
        "<button type='button' class='btn btn-warning btnDel'>Eliminar Usuario</button>" +
    '</td>';
    html += '</tr>';
    }
    $("#tblUsers tbody").html(html);
    }
    });
}
