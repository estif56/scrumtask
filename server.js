const express = require('express');
const userRoutes = require('./userRoutes');
const taskRoutes = require('./taskRoutes');

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
