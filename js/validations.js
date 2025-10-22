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
                accept: "Solo archivos de imagen (JPG, PNG, GIF, etc.)"
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
            // La función de submit ahora está manejada por el event listener
            return false;
        }
    });

    // Validación en tiempo real
    $('input, select').on('blur', function() {
        $(this).valid();
    });

    // Preview de imagen seleccionada
    $('#imagen').on('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                // Mostrar preview si quieres agregar esa funcionalidad
                console.log('Imagen cargada:', file.name);
            };
            reader.readAsDataURL(file);
        }
    });
});