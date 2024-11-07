<script>
    document.getElementById('searchInput').addEventListener('input', function() {
        // Obtener el valor de búsqueda
        const searchValue = this.value.toLowerCase();
        
        // Seleccionar todos los contenedores de las islas
        const islands = document.querySelectorAll('.image-containerislands');

        islands.forEach(island => {
            // Obtener el nombre de la isla en minúsculas
            const islandName = island.querySelector('p').textContent.toLowerCase();

            // Mostrar u ocultar la isla dependiendo de si coincide con la búsqueda
            if (islandName.includes(searchValue)) {
                island.style.display = 'block'; // Mostrar si coincide
            } else {
                island.style.display = 'none'; // Ocultar si no coincide
            }
        });
    });
</script>
