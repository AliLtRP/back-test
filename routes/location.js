const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// POST a new location
router.post('/locations', async (req, res) => {
  const { city_name } = req.body;

  try {
    const newLocation = await prisma.locations.create({
      data: {
        city_name,
      },
    });
    res.status(201).json(newLocation);
  } catch (error) {
    console.error('Error creating new location:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET all locations
router.get('/locations', async (req, res) => {
  try {
    const locations = await prisma.locations.findMany();
    res.json(locations);
  } catch (error) {
    console.error('Error fetching locations:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
