const express = require('express');
const router = express.Router();
const { createTask, markTaskAsCompleted, getProgressSummary } = require('./taskController');

router.post('/', createTask);
router.put('/:taskId/complete', markTaskAsCompleted);
router.get('/progress', getProgressSummary);

module.exports = router;
