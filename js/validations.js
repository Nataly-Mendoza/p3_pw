// Validaciones para formularios
$(document).ready(function() {
    // Validación formulario alta
    $('#form-alta-obra').validate({
        rules: {
            titulo: {
                required: true,
                minlength: 3
            },
            categoria: {
                required: true
            },
            imagen: {
                required: true,
                accept: "image/*"
            },
            precio: {
                number: true,
                min: 0
            }
        },
        messages: {
            titulo: {
                required: "El título es obligatorio",
                minlength: "Mínimo 3 caracteres"
            },
            categoria: "Selecciona una categoría",
            imagen: {
                required: "Selecciona una imagen",
                accept: "Solo archivos de imagen"
            },
            precio: {
                number: "Solo números válidos",
                min: "El precio no puede ser negativo"
            }
        },
        errorElement: 'div',
        errorClass: 'invalid-feedback',
        highlight: function(element) {
            $(element).addClass('is-invalid').removeClass('is-valid');
        },
        unhighlight: function(element) {
            $(element).addClass('is-valid').removeClass('is-invalid');
        },
        submitHandler: function(form) {
            // Simular envío exitoso
            alert('¡Obra agregada correctamente!');
            form.reset();
            $('.form-control').removeClass('is-valid');
            return false; // Prevenir envío real para la práctica
        }
    });

    // Validación en tiempo real
    $('input, select').on('blur', function() {
        $(this).valid();
    });
});