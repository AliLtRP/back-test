const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// POST a new sensor
router.post('/sensors', async (req, res) => {
  const { sensor_type, last_reading_time, location_id } = req.body;
  try {
    const newSensor = await prisma.sensors.create({
      data: {
        sensor_type,
        last_reading_time,
        location_id,
      },
    });
    res.status(201).json(newSensor);
  } catch (error) {
    console.error('Error creating new sensor:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET all sensors
router.get('/sensors', async (req, res) => {
  try {
    const sensors = await prisma.sensors.findMany();
    res.json(sensors);
  } catch (error) {
    console.error('Error fetching sensors:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
