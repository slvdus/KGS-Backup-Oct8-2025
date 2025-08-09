import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all products
  app.get("/api/products", async (req, res) => {
    try {
      const products = await storage.getAllProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch products" });
    }
  });

  // Get product by ID
  app.get("/api/products/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const product = await storage.getProduct(id);
      
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch product" });
    }
  });

  // Get products by category
  app.get("/api/products/category/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const products = await storage.getProductsByCategory(category);
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch products by category" });
    }
  });

  // Placeholder image endpoint
  app.get("/api/placeholder/:width/:height", async (req, res) => {
    const { width, height } = req.params;
    const text = req.query.text || "Placeholder";
    
    // Simple SVG placeholder
    const svg = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#1a1a1a"/>
        <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="16" fill="#f5f3f0" text-anchor="middle" dy=".3em">${text}</text>
      </svg>
    `;
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.send(svg);
  });

  // Contact form submission (mock endpoint)
  app.post("/api/contact", async (req, res) => {
    try {
      const { firstName, lastName, email, phone, subject, message } = req.body;
      
      // In a real application, this would send an email or store in database
      console.log("Contact form submission:", {
        firstName,
        lastName,
        email,
        phone,
        subject,
        message
      });
      
      res.json({ message: "Contact form submitted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to submit contact form" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
