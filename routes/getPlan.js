const express = require('express');
const router = express.Router();
const Workout = require('../models/workout');
router.post('/getPlans', async (req, res) => {
    try {
        const { id, week } = req.body || req.query;
        console.log(id);
        console.log(week);
        const plans = await Workout.find({
            userid: id,
            week: week
        });

        console.log(plans);
        if (plans.length === 0) {
            return res.status(404).json({ success: false, msg: 'No plans found' });
        }

        res.json({ success: true, plans });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

module.exports = router;
