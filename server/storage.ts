import { type User, type InsertUser, type Product, type InsertProduct } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getAllProducts(): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  getProductsByCategory(category: string): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private products: Map<string, Product>;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    this.initializeProducts();
  }

  private initializeProducts() {
    const sampleProducts: Product[] = [
      {
        id: "1",
        name: "AR-15 Tactical Rifle",
        description: "Premium tactical rifle with advanced features including adjustable stock, tactical rail system, and precision barrel. Perfect for sport shooting and tactical applications.",
        price: "1299.00",
        category: "Rifles",
        image: "/api/placeholder/600/400?text=AR-15+Tactical+Rifle",
        specifications: [
          "Caliber: .223/5.56 NATO",
          "Barrel Length: 16 inches",
          "Overall Length: 32-36 inches",
          "Weight: 6.5 lbs",
          "Capacity: 30 rounds",
          "Action: Semi-automatic"
        ],
        inStock: 5
      },
      {
        id: "2",
        name: "Glock 19 Gen 5",
        description: "Reliable and accurate compact pistol perfect for concealed carry and duty use. Features improved trigger, enhanced grip texture, and ambidextrous slide stop.",
        price: "599.00",
        category: "Handguns",
        image: "/api/placeholder/600/400?text=Glock+19+Gen+5",
        specifications: [
          "Caliber: 9mm",
          "Barrel Length: 4.02 inches",
          "Overall Length: 7.36 inches",
          "Weight: 23.63 oz",
          "Capacity: 15+1 rounds",
          "Action: Safe Action"
        ],
        inStock: 8
      },
      {
        id: "3",
        name: "Tactical Shotgun 12GA",
        description: "Professional grade tactical shotgun designed for law enforcement and security applications. Features adjustable stock and tactical rail system.",
        price: "899.00",
        category: "Shotguns",
        image: "/api/placeholder/600/400?text=Tactical+Shotgun+12GA",
        specifications: [
          "Gauge: 12 gauge",
          "Barrel Length: 18.5 inches",
          "Overall Length: 38.5 inches",
          "Weight: 7.5 lbs",
          "Capacity: 8+1 rounds",
          "Action: Pump-action"
        ],
        inStock: 3
      },
      {
        id: "4",
        name: "Tactical Scope 4x32",
        description: "High-precision tactical optics with crystal clear glass and reliable tracking. Perfect for long-range precision shooting.",
        price: "329.00",
        category: "Accessories",
        image: "/api/placeholder/600/400?text=Tactical+Scope+4x32",
        specifications: [
          "Magnification: 4x32",
          "Objective Lens: 32mm",
          "Eye Relief: 3.5 inches",
          "Field of View: 30 feet at 100 yards",
          "Tube Diameter: 1 inch",
          "Reticle: Mil-Dot"
        ],
        inStock: 12
      },
      {
        id: "5",
        name: "Premium Ammunition",
        description: "High-quality rounds for precision shooting. Match-grade ammunition for competitive and professional use.",
        price: "89.00",
        category: "Ammunition",
        image: "/api/placeholder/600/400?text=Premium+Ammunition",
        specifications: [
          "Caliber: .308 Winchester",
          "Bullet Weight: 168 grain",
          "Bullet Type: Match King HPBT",
          "Rounds per Box: 20",
          "Velocity: 2650 fps",
          "Energy: 2620 ft-lbs"
        ],
        inStock: 25
      },
      {
        id: "6",
        name: "Tactical Holster",
        description: "Professional grade tactical holster with adjustable retention and quick-draw capability. Suitable for duty and concealed carry.",
        price: "159.00",
        category: "Accessories",
        image: "/api/placeholder/600/400?text=Tactical+Holster",
        specifications: [
          "Material: Kydex",
          "Retention: Adjustable",
          "Draw Angle: Adjustable",
          "Compatibility: Glock 17/19/22/23",
          "Mounting: Belt Loop",
          "Finish: Black"
        ],
        inStock: 15
      }
    ];

    sampleProducts.forEach(product => {
      this.products.set(product.id, product);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      (product) => product.category === category
    );
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = { 
      ...insertProduct, 
      id,
      specifications: insertProduct.specifications || [],
      inStock: insertProduct.inStock || 0
    };
    this.products.set(id, product);
    return product;
  }
}

export const storage = new MemStorage();
