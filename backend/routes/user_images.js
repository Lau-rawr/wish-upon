// creating a route
const router = require('express').Router();
const auth = require("../middleware/auth");
// requiring the model
const userImage = require('../models/user_images.model');

// Get ALL users' images
router.get('/', async (req, res) => {
  const images = await userImage.find({});
  res.json(images);
});

// Get a specific user's images
router.get('/all', auth, async (req, res) => {
  const images = await userImage.find({ userId: req.user });
  res.json(images);
});

router.post('/add', auth, async (req, res) => {
  try {
    const imageId = req.body.imageId;
    const component = req.body.component;

    const newUserImage = new userImage({
      imageId,
      component,
      userId: req.user,
    });
    const savedUserImage = await newUserImage.save();
    res.json(savedUserImage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', auth, async (req, res) => {
  const image = await userImage.findOne({ userId: req.user, _id: req.params.id });
  res.json(image);
});

router.post('/:id', auth, async (req, res) => {
  const image = await userImage.findOne({ userId: req.user, _id: req.params.id });
  console.log(image)
  image.fill_colors = req.body.fill_colors;
  const savedUserImage = await image.save()
  res.json(savedUserImage);
});

router.delete('/:id', auth, async (req, res) => {
  await userImage.deleteOne({ userId: req.user, _id: req.params.id })
});

module.exports = router; // standard in router files