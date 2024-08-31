const express=require('express')
const router=express.Router()
const upload=require('../services/multer')
const User=require('../models/userModel')



// Signup Route
router.post('/signup', upload, async (req, res) => {
  try {
    const { name, email, phone,occupation } = req.body;
    const resumePath = req.file.path;
console.log(resumePath)
    const newUser = new User({
      name,
      email,
      phone,
      occupation,
      resumePath,
    });

    // Save the user in the database
    await newUser.save();

    res.status(201).json({ message: 'Job seeker registered successfully!' });
  } catch (error) {
    console.error('Error in POST /signup:', error);
    res.status(500).json({ message: 'Server error while registering job seeker.' });
  }
});

router.get('/jobseekers', async (req, res) => {
  try {
    // Fetch all users from the database
    const jobSeekers = await User.find();

    // If no job seekers are found
    if (!jobSeekers || jobSeekers.length === 0) {
      return res.status(404).json({ message: 'No job seekers found' });
    }

    res.status(200).json(jobSeekers);
  } catch (error) {
    console.log('Error in GET /jobseekers:', error);
    res.status(500).json({ message: 'Server error while fetching job seekers.' });
  }
});

module.exports=router