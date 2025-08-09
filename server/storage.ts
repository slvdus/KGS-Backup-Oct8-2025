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
        name: "Byrna TCR (Tactical Compact Rifle)",
        description: "Semi-automatic CO₂-powered less-lethal launcher with tactical ergonomics. Offers extended magazines, rails, and professional-grade performance for home defense, training, and recreation.",
        price: "599.99",
        category: "Less-Lethal Launchers",
        image: "/api/placeholder/600/400?text=Byrna+TCR+Tactical+Compact+Rifle",
        specifications: [
          "Caliber: .68 caliber",
          "Magazine Capacity: 12+7 rounds",
          "Barrel Length: 11 inches",
          "Power: Pull-pierce CO₂",
          "Features: Picatinny rails, flip-up sights",
          "Stock: Collapsible tactical stock"
        ],
        inStock: 8
      },
      {
        id: "2",
        name: "Colt Python (Blued)",
        description: "Iconic .357 Magnum revolver famed for precision and smooth trigger. Built with vent rib barrel and full underlug. A legendary firearm perfect for target shooting, collection, and hunting.",
        price: "1699.00",
        category: "Handguns",
        image: "/api/placeholder/600/400?text=Colt+Python+Blued+Revolver",
        specifications: [
          "Caliber: .357 Magnum/.38 Special",
          "Capacity: 6-shot",
          "Action: Double/Single Action",
          "Barrel Length: 6 inches",
          "Sights: Adjustable target sights",
          "Finish: Royal Blue"
        ],
        inStock: 3
      },
      {
        id: "3",
        name: "Colt King Cobra",
        description: "Modern .357 Magnum revolver offering strength and reliability with classic styling. Perfect for range shooting, defensive carry, and collection.",
        price: "1149.00",
        category: "Handguns",
        image: "/api/placeholder/600/400?text=Colt+King+Cobra+357+Magnum",
        specifications: [
          "Caliber: .357 Magnum",
          "Capacity: 6-shot",
          "Action: Double/Single Action", 
          "Barrel Length: 6 inches",
          "Sights: Ramp front sight",
          "Frame: Stainless steel"
        ],
        inStock: 5
      },
      {
        id: "4",
        name: "GForce Arms Lever Rifle (LTAC Style)",
        description: "Lever-action rifle with modern M-LOK handguard and threaded barrel. Combines classic operation with tactical upgrades for ranch, defense, and brush hunting applications.",
        price: "899.00",
        category: "Rifles",
        image: "/api/placeholder/600/400?text=GForce+Arms+Lever+Action+Rifle",
        specifications: [
          "Caliber: .357 Magnum/.38 Special",
          "Capacity: 8+1 rounds",
          "Barrel Length: 16.5 inches (threaded)",
          "Features: M-LOK handguard, top rail",
          "Sights: Fiber optic front sight",
          "Action: Lever-action"
        ],
        inStock: 6
      },
      {
        id: "5",
        name: "CCI Suppressor Max .22 LR",
        description: "Segmented hollow point .22LR optimized for suppressor use, offering quiet operation and effective expansion. Ideal for small game, pest control, and quiet training.",
        price: "19.00",
        category: "Ammunition",
        image: "/api/placeholder/600/400?text=CCI+Suppressor+Max+22LR",
        specifications: [
          "Caliber: .22 Long Rifle",
          "Bullet Weight: 45 grain",
          "Bullet Type: Segmented Hollow Point",
          "Velocity: 970 fps (subsonic)",
          "Quantity: 100 rounds per box",
          "Use: Suppressor optimized"
        ],
        inStock: 50
      },
      {
        id: "6",
        name: "PMC X-TAC 5.56 NATO (M855)",
        description: "Green-tip 5.56 NATO penetrator rounds built to military specification for reliable performance. Perfect for training, tactical drills, and duty-grade practice.",
        price: "14.00",
        category: "Ammunition",
        image: "/api/placeholder/600/400?text=PMC+X-TAC+556+NATO+M855",
        specifications: [
          "Caliber: 5.56x45mm NATO",
          "Bullet Weight: 62 grain",
          "Bullet Type: Light Armor Piercing (LAP)",
          "Velocity: ~3,100 fps",
          "Quantity: 20 rounds per box",
          "Features: Steel penetrator core"
        ],
        inStock: 75
      },
      {
        id: "7", 
        name: "Magtech 300 BLK Subsonic",
        description: "Heavy subsonic .300 Blackout FMJ ammunition designed for suppressed shooting with minimal noise signature. Excellent for suppressed training and range use.",
        price: "38.00",
        category: "Ammunition",
        image: "/api/placeholder/600/400?text=Magtech+300+Blackout+Subsonic",
        specifications: [
          "Caliber: 300 AAC Blackout",
          "Bullet Weight: 200 grain",
          "Bullet Type: Full Metal Jacket (FMJ)",
          "Velocity: 1,050 fps (subsonic)",
          "Quantity: 50 rounds per box",
          "Use: Suppressor optimized"
        ],
        inStock: 40
      },
      {
        id: "8",
        name: "Byrna SD Launcher Kit (Safety Orange)",
        description: "Compact CO₂-powered personal defense launcher with included projectiles and CO₂ cartridges. Ready-to-use kit for home defense, self-defense, and training applications.",
        price: "389.00",
        category: "Less-Lethal Launchers",
        image: "/api/placeholder/600/400?text=Byrna+SD+Launcher+Orange",
        specifications: [
          "Caliber: .68 caliber",
          "Magazine Capacity: 5 rounds (2 magazines)",
          "Projectiles: 15 included",
          "Safety: Ambidextrous safety",
          "Trigger: Straight trigger design",
          "Color: Safety Orange"
        ],
        inStock: 12
      },
      {
        id: "9",
        name: "Byrna Projectiles Assortment",
        description: "Mix of Byrna Kinetic, Eco-Kinetic, Training, and Pepper projectiles, plus 12ga less-lethal rounds. Various payloads for training and defense applications.",
        price: "50.00",
        category: "Less-Lethal Ammunition",
        image: "/api/placeholder/600/400?text=Byrna+Projectiles+Assortment",
        specifications: [
          "Calibers: .68 caliber & 12 gauge",
          "Types: Kinetic, Eco-Kinetic, Training, Pepper",
          "Payload: Various non-lethal payloads",
          "Compatibility: Byrna launchers",
          "Use: Training and defense",
          "Note: Check local legal restrictions"
        ],
        inStock: 25
      },
      {
        id: "10",
        name: "Custom Glock-Pattern 9mm",
        description: "Custom-built Glock-style pistol with slide cuts, enhanced barrel, and magwell. Features windowed slide, gold-tone barrel, and tall sights for competition and range use.",
        price: "1200.00",
        category: "Handguns",
        image: "/api/placeholder/600/400?text=Custom+Glock+9mm+Competition",
        specifications: [
          "Caliber: 9mm Luger",
          "Features: Windowed slide cuts",
          "Barrel: Gold-tone enhanced barrel",
          "Sights: Tall competition sights",
          "Magwell: Enhanced magwell",
          "Use: Competition, range shooting"
        ],
        inStock: 4
      },
      {
        id: "11",
        name: "SIG Sauer P365X",
        description: "Micro-compact 9mm pistol with optic-ready slide and flat trigger, ideal for concealed carry. Perfect balance of size, capacity, and shootability for everyday carry.",
        price: "639.00",
        category: "Handguns",
        image: "/api/placeholder/600/400?text=SIG+Sauer+P365X+9mm",
        specifications: [
          "Caliber: 9mm Luger",
          "Capacity: 12+1 rounds",
          "Barrel Length: 3.1 inches",
          "Sights: XRAY3 Night Sights",
          "Slide: Optic-ready",
          "Trigger: Flat trigger"
        ],
        inStock: 15
      },
      {
        id: "12",
        name: "Walker's Razor Slim Electronic Muffs",
        description: "Low-profile electronic earmuffs that amplify ambient sound and protect against gunfire. Slim design with foldable cups perfect for range and hunting use.",
        price: "64.00",
        category: "Hearing Protection",
        image: "/api/placeholder/600/400?text=Walkers+Razor+Slim+Electronic+Muffs",
        specifications: [
          "NRR Rating: 23 dB",
          "Type: Electronic amplification",
          "Design: Slim profile cups",
          "Features: Foldable design",
          "Power: Battery operated",
          "Use: Range, hunting, training"
        ],
        inStock: 30
      },
      {
        id: "13",
        name: "Ruger American Pistol (9mm)",
        description: "Full-size duty pistol with ergonomic grip and Novak sights. Reliable and accurate platform designed for duty, home defense, and range applications.",
        price: "539.00",
        category: "Handguns",
        image: "/api/placeholder/600/400?text=Ruger+American+Pistol+9mm",
        specifications: [
          "Caliber: 9mm Luger",
          "Capacity: 17+1 rounds",
          "Barrel Length: 4.2 inches",
          "Sights: Novak 3-dot sights",
          "Frame: Ergonomic grip design",
          "Action: Striker-fired"
        ],
        inStock: 10
      },
      {
        id: "14",
        name: "S&W Bodyguard 2.0 (.380 ACP)",
        description: "Compact .380 ACP pistol designed for discreet carry and deep concealment. Ultra-compact size makes it perfect as a primary carry gun or backup weapon.",
        price: "493.00",
        category: "Handguns",
        image: "/api/placeholder/600/400?text=SW+Bodyguard+2.0+380ACP",
        specifications: [
          "Caliber: .380 ACP",
          "Capacity: 10+1/12+1 rounds",
          "Barrel Length: 2.75 inches",
          "Frame: Polymer frame",
          "Use: Deep concealment, backup",
          "Action: Striker-fired"
        ],
        inStock: 8
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
