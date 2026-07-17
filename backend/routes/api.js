const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Signup = require('../models/Signup');
const Membership = require('../models/Membership');
const Contact = require('../models/Contact');
const Trial = require('../models/Trial');

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Signup route
router.post('/signup', async (req, res) => {
  try {
    const { name, email } = req.body;
    const newSignup = new Signup({ name, email });
    await newSignup.save();

    // Email send in a separate try-catch to prevent app crash if email fails
    try {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: 'New Signup',
        text: `New signup received:\nName: ${name}\nEmail: ${email}`,
      };
      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.log('Signup Email failed to send:', emailError.message);
    }

    res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Membership route
router.post('/membership', async (req, res) => {
  try {
    const membershipData = req.body;
    const newMembership = new Membership(membershipData);
    await newMembership.save();

    // Email send in a separate try-catch
    try {
      const emailBody = `
New Membership Application:

Name: ${membershipData.name}
Email: ${membershipData.email}
Gender: ${membershipData.gender}
Occupation: ${membershipData.occupation}
Country: ${membershipData.country}
Phone: ${membershipData.phone}
Branch: ${membershipData.branch}
Weight: ${membershipData.weight}
Height: ${membershipData.heightFeet} ft ${membershipData.heightInches} in
BMI: ${membershipData.bmi}
BMI Category: ${membershipData.bmiCategory}
Fitness Goals: ${membershipData.fitnessGoals ? membershipData.fitnessGoals.join(', ') : ''}
Smoking: ${membershipData.smoking}
Alcohol: ${membershipData.alcohol}
Interested in Session: ${membershipData.interestedInSession}
Activity Level: ${membershipData.activityLevel}
Eating Habits: ${membershipData.eatingHabits}
Commitment Level: ${membershipData.commitmentLevel}
Comments: ${membershipData.comments}
      `;

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: 'New Membership Application',
        text: emailBody,
      };
      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.log('Membership Email failed to send:', emailError.message);
    }

    res.status(201).json({ message: 'Membership application submitted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Contact route
router.post('/contact', async (req, res) => {
  try {
    const { name, email, phone, branch, message } = req.body;
    const newContact = new Contact({ name, email, phone, branch, message });
    await newContact.save();

    // Email send in a separate try-catch
    try {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: 'New Contact Inquiry',
        text: `New contact inquiry:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nBranch: ${branch}\nMessage: ${message}`,
      };
      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.log('Contact Email failed to send:', emailError.message);
    }

    res.status(201).json({ message: 'Contact inquiry submitted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Trial route
router.post('/trial', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, location } = req.body;
    const newTrial = new Trial({ firstName, lastName, email, phone, location });
    await newTrial.save();

    // Email send in a separate try-catch
    try {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: 'New Trial Signup',
        text: `New trial signup:\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone: ${phone}\nLocation: ${location}`,
      };
      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.log('Trial Email failed to send:', emailError.message);
    }

    res.status(201).json({ message: 'Trial signup submitted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;