const mongoose = require("mongoose");
const User = require("./models/user");
const StudentProfile = require("./models/studentProfiles.js");
require('dotenv').config()

async function main() {
    await mongoose.connect(process.env.dbUrl);

    try {
        // Fetch existing users to link profiles
        const users = await User.find();

        const profiles = [
            {
                userId: users[0]._id,
                firstName: "Varun",
                lastName: "Suddala",
                rollNumber: "CSE2021001",
                email: "varun@example.com",
                phone: "9876543210",
                branch: "CSE",
                graduationYear: 2024,
                cgpa: 8.7,
                sscPercentage: 92.5,
                interPercentage: 88.0,
                backlogs: 0,
                skills: ["Python", "Node.js", "MongoDB"],
                certifications: ["AWS Cloud Practitioner", "JavaScript Basics"],
                projects: ["TalentBridge API", "Portfolio Website"],
                githubUrl: "https://github.com/varun",
                linkedinUrl: "https://linkedin.com/in/varun",
                resumeUrl: "https://example.com/resume/varun.pdf",
                points: 120
            },
            {
                userId: users[1]._id,
                firstName: "Manish",
                lastName: "Kumar",
                rollNumber: "ECE2021002",
                email: "manish@example.com",
                phone: "9876501234",
                branch: "ECE",
                graduationYear: 2025,
                cgpa: 7.9,
                sscPercentage: 89.0,
                interPercentage: 85.5,
                backlogs: 1,
                skills: ["C++", "Embedded Systems"],
                certifications: ["IoT Fundamentals"],
                projects: ["Smart Home Automation"],
                githubUrl: "https://github.com/manish",
                linkedinUrl: "https://linkedin.com/in/manish",
                resumeUrl: "https://example.com/resume/manish.pdf",
                points: 95
            },
            {
                userId: users[2]._id,
                firstName: "Akash",
                lastName: "Singh",
                rollNumber: "IT2021003",
                email: "akash@example.com",
                phone: "9876512345",
                branch: "IT",
                graduationYear: 2023,
                cgpa: 9.1,
                sscPercentage: 94.0,
                interPercentage: 90.0,
                backlogs: 0,
                skills: ["React", "Express.js", "MongoDB"],
                certifications: ["Full Stack Developer"],
                projects: ["E-commerce Website", "Chat App"],
                githubUrl: "https://github.com/akash",
                linkedinUrl: "https://linkedin.com/in/akash",
                resumeUrl: "https://example.com/resume/akash.pdf",
                points: 150
            }
        ];

        await StudentProfile.insertMany(profiles);
        console.log("Dummy student profiles inserted successfully");
        mongoose.connection.close();
    } catch (err) {
        console.error("Error inserting dummy profiles:", err);
    }
}

main();