const express = require('express');
const router = express.Router();

router.get('/admin', (req, res) => {
    res.redirect('Admin Dashboard');
});

module.exports = router;