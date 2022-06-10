const router = require('express').Router();
const thougthRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');

router.use('/thoughts', thougthRoutes);
router.use('/users', userRoutes);

module.exports = router;