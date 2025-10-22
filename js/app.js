// Aplicación Vue.js para la galería
const { createApp } = Vue;

createApp({
    data() {
        return {
            dibujos: [
                {
                    id: 1,
                    titulo: "Retrato Digital",
                    descripcion: "Retrato mona china",
                    imagen: "assets/images/boots.jpg",
                    categoria: "digital",
                    tecnica: "Tableta Gráfica",
                    fecha: "2025-01-15"
                },
                {
                    id: 2,
                    titulo: "Bill Cipher baby",
                    descripcion: "Bill Cipher en versión bebé",
                    imagen: "assets/images/Billchikito.jpg",
                    categoria: "digital",
                    tecnica: "Tableta Gráfica",
                    fecha: "2025-01-10"
                },
                {
                    id: 3,
                    titulo: "Sketch de cositas turbias",
                    descripcion: "Diseño conceptual para videojuego",
                    imagen: "assets/images/Ilustración58.jpg",
                    categoria: "sketch",
                    tecnica: "Lápiz Digital",
                    fecha: "2025-01-08"
                }
            ],
            obraSeleccionada: {}
        }
    },
    mounted() {
        this.cargarDatosGuardados();
    },
    methods: {
        verDetalles(dibujo) {
            this.obraSeleccionada = dibujo;
            const modal = new bootstrap.Modal(document.getElementById('modalDetalles'));
            modal.show();
        },
        
        cargarDatosGuardados() {
            const datosGuardados = localStorage.getItem('galeriaObras');
            if (datosGuardados) {
                const obrasGuardadas = JSON.parse(datosGuardados);
                // Combinar con las imágenes por defecto
                this.dibujos = [...this.dibujos, ...obrasGuardadas];
            }
        }
    }
}).mount('#app');

