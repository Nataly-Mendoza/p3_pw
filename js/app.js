// Aplicación Vue.js para la galería
const { createApp } = Vue;

createApp({
    data() {
        return {
            dibujos: [
                {
                    id: 1,
                    titulo: "Retrato Digital",
                    descripcion: "Retrato estilo anime creado en Photoshop",
                    imagen: "https://via.placeholder.com/400x300/667eea/white?text=Retrato+Digital",
                    categoria: "digital",
                    tecnica: "Tableta Gráfica",
                    fecha: "2025-01-15"
                },
                {
                    id: 2,
                    titulo: "Paisaje Nocturno",
                    descripcion: "Paisaje urbano con efectos de luz",
                    imagen: "https://via.placeholder.com/400x300/764ba2/white?text=Paisaje+Nocturno",
                    categoria: "digital",
                    tecnica: "Procreate",
                    fecha: "2025-01-10"
                },
                {
                    id: 3,
                    titulo: "Sketch de Personaje",
                    descripcion: "Diseño conceptual para videojuego",
                    imagen: "https://via.placeholder.com/400x300/f093fb/white?text=Sketch+Personaje",
                    categoria: "sketch",
                    tecnica: "Lápiz Digital",
                    fecha: "2025-01-08"
                }
            ],
            obraSeleccionada: {}
        }
    },
    mounted() {
        // Cargar datos del localStorage si existen
        const datosGuardados = localStorage.getItem('galeriaObras');
        if (datosGuardados) {
            this.dibujos = JSON.parse(datosGuardados);
        }
    },
    methods: {
        verDetalles(dibujo) {
            this.obraSeleccionada = dibujo;
            const modal = new bootstrap.Modal(document.getElementById('modalDetalles'));
            modal.show();
        },
        
        guardarDatos() {
            localStorage.setItem('galeriaObras', JSON.stringify(this.dibujos));
        }
    }
}).mount('#app');