const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// POST a new reading sensor
router.post('/readingSensors', async (req, res) => {
  const { sensor_id, temperature, humidity, concentration, co, Alcohol, CO2, Toluen, NH4, Aceton, particle_level, air_quality_label } = req.body;
  try {
    const newReadingSensor = await prisma.readingSensors.create({
      data: {
        sensor_id,
        temperature,
        humidity,
        concentration,
        co,
        Alcohol,
        CO2,
        Toluen,
        NH4,
        Aceton,
        particle_level,
        air_quality_label,
      },
    });
    res.status(201).json(newReadingSensor);
  } catch (error) {
    console.error('Error creating new reading sensor:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET all reading sensors
router.get('/readingSensors', async (req, res) => {
  try {
    const readingSensors = await prisma.readingSensors.findMany({});
    res.json(readingSensors);
  } catch (error) {
    console.error('Error fetching reading sensors:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
