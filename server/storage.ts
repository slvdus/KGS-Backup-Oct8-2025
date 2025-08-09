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
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
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
        image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
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
        image: "https://images.unsplash.com/photo-1518562180175-34a163b1d0d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
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
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
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
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
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
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
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
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }
}

export const storage = new MemStorage();
