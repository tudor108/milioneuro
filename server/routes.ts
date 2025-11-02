import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      console.log("Contact form submission received");
      const { name, email, company, tooling, requirements } = req.body;

      // Validate required fields
      if (!name || !email || !requirements) {
        console.log("Validation failed: missing required fields");
        return res.status(400).json({ 
          success: false, 
          message: "Name, email, and requirements are required." 
        });
      }

      console.log("Creating SMTP transporter...");
      // Create transporter (using Gmail SMTP as default, but can be configured via env vars)
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: parseInt(process.env.SMTP_PORT || "587", 10),
        secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
        auth: process.env.SMTP_USER && process.env.SMTP_PASS ? {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        } : undefined,
        connectionTimeout: 10000, // 10 seconds timeout for connection
        greetingTimeout: 10000, // 10 seconds timeout for greeting
        socketTimeout: 10000, // 10 seconds socket timeout
      });

      console.log("SMTP transporter created, preparing email...");

      // Email content
      const safeRequirements = (requirements || "").replace(/\n/g, "<br>");
      const mailOptions = {
        from: process.env.SMTP_FROM || email,
        to: "autoai831@gmail.com",
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
          ${tooling ? `<p><strong>Tools Used:</strong> ${tooling}</p>` : ""}
          <p><strong>Automation Requirements:</strong></p>
          <p>${safeRequirements}</p>
        `,
        text: `
          New Contact Form Submission
          
          Name: ${name}
          Email: ${email}
          ${company ? `Company: ${company}` : ""}
          ${tooling ? `Tools Used: ${tooling}` : ""}
          
          Automation Requirements:
          ${requirements || ""}
        `,
      };

      // Send email with timeout
      console.log("Sending email...");
      const startTime = Date.now();
      const emailPromise = transporter.sendMail(mailOptions);
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error("Email send timeout after 30 seconds")), 30000)
      );
      
      await Promise.race([emailPromise, timeoutPromise]);
      const duration = Date.now() - startTime;
      console.log(`Email sent successfully! Took ${duration}ms`);

      res.json({ 
        success: true, 
        message: "Email sent successfully!" 
      });
    } catch (error: any) {
      console.error("=== ERROR SENDING EMAIL ===");
      console.error("Error type:", error.constructor.name);
      console.error("Error message:", error.message);
      console.error("Error code:", error.code);
      console.error("Error stack:", error.stack);
      console.error("Full error object:", JSON.stringify(error, null, 2));
      
      // Provide more detailed error message in development
      const isDevelopment = process.env.NODE_ENV === "development";
      let errorMessage = "Failed to send email. Please try again later.";
      
      if (isDevelopment && error.message) {
        errorMessage = `Email error: ${error.message}`;
        if (error.code === "EAUTH") {
          errorMessage = "SMTP authentication failed. Check your email credentials in .env file.";
        } else if (error.code === "ECONNECTION") {
          errorMessage = "Cannot connect to SMTP server. Check SMTP_HOST and SMTP_PORT in .env file.";
        }
      }
      
      res.status(500).json({ 
        success: false, 
        message: errorMessage 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
