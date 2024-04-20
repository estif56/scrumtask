function markTaskAsCompleted(taskId) {
    fetch(`/api/tasks/${taskId}/complete`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al marcar tarea como completada');
        }
        return response.json();
    })
    .then(data => {
        // Actualizar la interfaz de usuario según sea necesario
        console.log(data.message);
    })
    .catch(error => {
        console.error(error);
        // Manejar el error según sea necesario
    });
}

// JavaScript para obtener y mostrar el resumen del progreso
window.onload = function() {
    fetch('/api/progress')
        .then(response => response.json())
        .then(data => {
            // Actualizar los elementos HTML con la información del progreso
            document.getElementById('total-tasks').textContent = data.totalTasks;
            document.getElementById('completed-tasks').textContent = data.completedTasks;
            document.getElementById('progress').textContent = data.progress.toFixed(2);
            document.getElementById('progress-bar').value = data.progress;
        })
        .catch(error => console.error('Error al obtener el progreso:', error));
};
