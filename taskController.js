const getProgressSummary = async (req, res) => {
    try {
        // Obtener el resumen del progreso de tareas y sprints
        const tasksCount = await Task.countDocuments();
        const completedTasksCount = await Task.countDocuments({ completed: true });
        const sprintsCount = await Sprint.countDocuments();

        res.status(200).json({
            tasksCount,
            completedTasksCount,
            sprintsCount
        });
    } catch (error) {
        console.error('Error al obtener resumen de progreso:', error);
        res.status(500).json({ message: 'Ocurrió un error al obtener resumen de progreso' });
    }
};

module.exports = {
    getProgressSummary
};
