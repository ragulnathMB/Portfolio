const express = require("express");
const cors = require("cors");
const nodemailer = require('nodemailer');
require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;


const transporter = nodemailer.createTransport({
  service: 'gmail', // Use 'gmail' for Google SMTP
  auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS  // App password
  }
});

const sendEmail = async (subject, text) => {
  try {
      const mailOptions = {
          from: process.env.EMAIL_USER, // Sender email
          to:process.env.EMAIL_USER, // Receiver email
          subject,
          text
      };

      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);
      return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
      console.error('Error sending email:', error);
      return { success: false, message: 'Failed to send email' };
  }
};
// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

  
const skillSchema = new mongoose.Schema({
elName: String,
imageUrl: String,
});

const TestimonialSchema= new mongoose.Schema({
  name:String,
  message:String,
  imgUrl:String,
})

const projectSchema=new mongoose.Schema({
  title:String,
  description:String,
  technologies:[String],
  features:[String],
  github:String,
  live:String,
  priority:String,
  imgUrl:String,
})

const experienceSchema=new mongoose.Schema({
  role:String,
  company:String,
  duration:String,
  responsibilities:[String],
  tech_stacks:[String]
})

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON requests

const Skill = mongoose.model("Skill", skillSchema, "skillsElements");
const testimonial = mongoose.model("testimonial",TestimonialSchema,"testimonials")
const project = mongoose.model("project",projectSchema,"projects")
const experience =mongoose.model("experience",experienceSchema,"experiences")


// API Route to Fetch Skills
app.get("/skills", async (req, res) => {
  try {
    const skills = await Skill.find();
    console.log(skills);
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.get("/testimonials", async (req, res) => {
  try {
    const testimonials = await testimonial.find();
    console.log(testimonials);
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/projects", async (req, res) => {
  try {
    const projects = await project.find();
    console.log(projects);
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/experience",async (req,res)=>{
  try {
    const experiences=await experience.find();
    console.log(experiences);
    res.json(experiences)
  } catch (error) {
    res.status(500).json({error:"Internal server error"})
  }
})


app.post('/send-email', async (req, res) => {
  const { name, subject, message } = req.body;
  console.log("hello")
  try {
    const response = await sendEmail( subject, `From: ${name}\n\n${message}`);
    res.json(response);
  } catch (error) {
    console.log(error)
  }
 
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
