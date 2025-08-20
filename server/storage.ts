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
      // Handguns
      {
        id: "1",
        name: "Glock 19 Gen 5",
        description: "The gold standard of compact 9mm pistols. Used by law enforcement worldwide. Perfect balance of size, capacity, and shootability for concealed carry or home defense.",
        price: "549.99",
        category: "Handguns",
        image: "/api/placeholder/600/400?text=Glock+19+Gen+5",
        specifications: [
          "Caliber: 9mm Luger",
          "Capacity: 15+1 rounds",
          "Barrel Length: 4.02 inches",
          "Overall Length: 7.28 inches",
          "Weight: 23.65 oz (unloaded)",
          "Action: Safe Action (striker-fired)"
        ],
        inStock: 12
      },
      {
        id: "2",
        name: "Smith & Wesson M&P Shield Plus",
        description: "Revolutionary micro-compact with increased capacity. The Shield Plus offers 13+1 rounds in a package perfect for everyday carry.",
        price: "479.99",
        category: "Handguns",
        image: "/api/placeholder/600/400?text=S&W+Shield+Plus",
        specifications: [
          "Caliber: 9mm Luger",
          "Capacity: 13+1 rounds",
          "Barrel Length: 3.1 inches",
          "Overall Length: 6.1 inches",
          "Weight: 20.2 oz (unloaded)",
          "Sights: Tritium night sights available"
        ],
        inStock: 8
      },
      {
        id: "3",
        name: "Sig Sauer P320 X-Carry",
        description: "Modular striker-fired pistol with enhanced trigger and grip. Military-tested reliability meets competition-ready features.",
        price: "679.99",
        category: "Handguns",
        image: "/api/placeholder/600/400?text=Sig+P320+X-Carry",
        specifications: [
          "Caliber: 9mm Luger",
          "Capacity: 17+1 rounds",
          "Barrel Length: 3.9 inches",
          "Trigger: X-Series flat trigger",
          "Grip: X-Series grip module",
          "Optic Ready: Yes"
        ],
        inStock: 6
      },
      {
        id: "4",
        name: "Ruger LCP MAX .380",
        description: "Maximum capacity in minimum size. 12+1 rounds of .380 ACP in a pocket-sized package. Your last line of defense that fits anywhere.",
        price: "369.99",
        category: "Handguns",
        image: "/api/placeholder/600/400?text=Ruger+LCP+MAX",
        specifications: [
          "Caliber: .380 ACP",
          "Capacity: 12+1 rounds",
          "Barrel Length: 2.8 inches",
          "Weight: 10.6 oz",
          "Sights: Tritium front sight",
          "Trigger: ~6 lbs"
        ],
        inStock: 10
      },
      {
        id: "5",
        name: "Canik TP9 Elite SC",
        description: "Turkish engineering at its finest. Match-grade barrel, outstanding trigger, and Warren Tactical sights at an unbeatable price point.",
        price: "429.99",
        category: "Handguns",
        image: "/api/placeholder/600/400?text=Canik+TP9+Elite+SC",
        specifications: [
          "Caliber: 9mm Luger",
          "Capacity: 12+1 / 15+1 rounds",
          "Barrel Length: 3.6 inches",
          "Includes: Hard case, 2 mags, holster",
          "Sights: Warren Tactical",
          "Optic Ready: Yes with plates"
        ],
        inStock: 7
      },

      // Rifles
      {
        id: "6",
        name: "Smith & Wesson M&P15 Sport II",
        description: "America's favorite entry-level AR-15. Built for reliability, accuracy, and affordability. The perfect first rifle for sport shooting or home defense.",
        price: "699.99",
        category: "Rifles",
        image: "/api/placeholder/600/400?text=M&P15+Sport+II",
        specifications: [
          "Caliber: 5.56 NATO/.223 Rem",
          "Barrel: 16\" 1:9 twist",
          "Gas System: Direct impingement",
          "Stock: 6-position telescoping",
          "Weight: 6.5 lbs",
          "Includes: 30-round PMAG"
        ],
        inStock: 9
      },
      {
        id: "7",
        name: "Ruger 10/22 Carbine",
        description: "The most popular .22 rifle in America. Perfect for plinking, small game hunting, or teaching new shooters. Endless customization options.",
        price: "379.99",
        category: "Rifles",
        image: "/api/placeholder/600/400?text=Ruger+10-22",
        specifications: [
          "Caliber: .22 Long Rifle",
          "Capacity: 10 rounds (rotary mag)",
          "Barrel Length: 18.5 inches",
          "Overall Length: 37 inches",
          "Weight: 5 lbs",
          "Stock: Synthetic black"
        ],
        inStock: 15
      },
      {
        id: "8",
        name: "Mossberg Patriot .308",
        description: "American-made bolt-action precision. Fluted barrel, adjustable trigger, and guaranteed MOA accuracy. Your ticket to filling the freezer.",
        price: "449.99",
        category: "Rifles",
        image: "/api/placeholder/600/400?text=Mossberg+Patriot+308",
        specifications: [
          "Caliber: .308 Winchester",
          "Capacity: 4+1 rounds",
          "Barrel: 22\" fluted",
          "Trigger: LBA adjustable",
          "Stock: Synthetic with recoil pad",
          "Accuracy: MOA guarantee"
        ],
        inStock: 5
      },
      {
        id: "9",
        name: "Henry Big Boy X .357/.38",
        description: "Tactical meets traditional. Lever-action reliability with modern features. Threaded barrel, rail, and fiber optic sights.",
        price: "979.99",
        category: "Rifles",
        image: "/api/placeholder/600/400?text=Henry+Big+Boy+X",
        specifications: [
          "Caliber: .357 Mag/.38 Special",
          "Capacity: 7 rounds",
          "Barrel: 17.4\" threaded",
          "Sights: Fiber optic",
          "Stock: Black synthetic",
          "Rails: Picatinny top rail"
        ],
        inStock: 3
      },

      // Shotguns
      {
        id: "10",
        name: "Mossberg 500 Tactical",
        description: "The proven pump-action defender. Military and law enforcement trusted. Your home's first line of defense with devastating stopping power.",
        price: "549.99",
        category: "Shotguns",
        image: "/api/placeholder/600/400?text=Mossberg+500+Tactical",
        specifications: [
          "Gauge: 12 gauge",
          "Capacity: 8+1 rounds",
          "Barrel: 20\" cylinder bore",
          "Stock: 6-position adjustable",
          "Sights: Ghost ring",
          "Action: Pump-action"
        ],
        inStock: 7
      },
      {
        id: "11",
        name: "Remington 870 Express",
        description: "The most trusted name in shotguns. Over 11 million sold. From duck blinds to deer stands, this workhorse delivers every time.",
        price: "479.99",
        category: "Shotguns",
        image: "/api/placeholder/600/400?text=Remington+870",
        specifications: [
          "Gauge: 12 gauge",
          "Capacity: 4+1 rounds",
          "Barrel: 28\" vent rib",
          "Chokes: Modified RemChoke",
          "Stock: Hardwood",
          "Finish: Matte black"
        ],
        inStock: 6
      },
      {
        id: "12",
        name: "Benelli Nova Tactical",
        description: "Italian innovation in a pump-action package. Rotary bolt, steel cage embedded polymer stock. Built for the harshest conditions.",
        price: "449.99",
        category: "Shotguns",
        image: "/api/placeholder/600/400?text=Benelli+Nova+Tactical",
        specifications: [
          "Gauge: 12 gauge",
          "Capacity: 4+1 rounds",
          "Barrel: 18.5\" cylinder",
          "Stock: Polymer with grip",
          "Sights: Ghost ring",
          "Weather resistant coating"
        ],
        inStock: 4
      },

      // Ammunition
      {
        id: "13",
        name: "Federal 9mm 115gr FMJ - 50rds",
        description: "Range-ready brass-cased ammunition. Consistent, reliable, and clean-burning. Stock up at KGS CREW's unbeatable bulk prices.",
        price: "19.99",
        category: "Ammunition",
        image: "/api/placeholder/600/400?text=Federal+9mm+Ammo",
        specifications: [
          "Caliber: 9mm Luger",
          "Grain: 115 grain FMJ",
          "Velocity: 1180 fps",
          "Rounds: 50 per box",
          "Case: Brass",
          "Primer: Boxer"
        ],
        inStock: 100
      },
      {
        id: "14",
        name: "Winchester 5.56 NATO 55gr - 20rds",
        description: "M193 specification ammunition. Lake City production quality at civilian prices. Perfect for your AR platform.",
        price: "12.99",
        category: "Ammunition",
        image: "/api/placeholder/600/400?text=Winchester+556+Ammo",
        specifications: [
          "Caliber: 5.56x45mm NATO",
          "Grain: 55 grain FMJ",
          "Velocity: 3240 fps",
          "Rounds: 20 per box",
          "Case: Brass",
          "Military spec"
        ],
        inStock: 150
      },
      {
        id: "15",
        name: "CCI Mini-Mag .22LR - 100rds",
        description: "The gold standard in rimfire. Clean, accurate, and reliable. More velocity and energy than standard velocity rounds.",
        price: "9.99",
        category: "Ammunition",
        image: "/api/placeholder/600/400?text=CCI+Mini+Mag+22",
        specifications: [
          "Caliber: .22 Long Rifle",
          "Grain: 40 grain round nose",
          "Velocity: 1235 fps",
          "Rounds: 100 per box",
          "Copper-plated bullet",
          "Clean-burning powder"
        ],
        inStock: 200
      },
      {
        id: "16",
        name: "Federal 12GA 00 Buck - 5rds",
        description: "Maximum stopping power when it matters most. Nine .33 caliber pellets deliver devastating energy. Trust Federal for home defense.",
        price: "8.99",
        category: "Ammunition",
        image: "/api/placeholder/600/400?text=Federal+12GA+Buck",
        specifications: [
          "Gauge: 12 gauge",
          "Load: 00 Buckshot",
          "Pellets: 9 pellets",
          "Length: 2-3/4\"",
          "Velocity: 1325 fps",
          "Rounds: 5 per box"
        ],
        inStock: 75
      },

      // Accessories
      {
        id: "17",
        name: "Vortex Crossfire Red Dot",
        description: "Rugged, reliable, and ready. 2 MOA dot for fast target acquisition. Unlimited eye relief and parallax free. Your accuracy upgrade.",
        price: "149.99",
        category: "Optics",
        image: "/api/placeholder/600/400?text=Vortex+Crossfire",
        specifications: [
          "Dot Size: 2 MOA",
          "Battery: CR2032",
          "Battery Life: 50,000 hrs",
          "Adjustments: 1 MOA clicks",
          "Mount: Picatinny",
          "Waterproof & shockproof"
        ],
        inStock: 12
      },
      {
        id: "18",
        name: "Streamlight TLR-7A Weapon Light",
        description: "500 lumens of instant target identification. Ambidextrous switching and rail-mounted design. When you can't identify, you can't defend.",
        price: "129.99",
        category: "Accessories",
        image: "/api/placeholder/600/400?text=Streamlight+TLR7A",
        specifications: [
          "Lumens: 500",
          "Runtime: 1.5 hours",
          "Battery: CR123A",
          "Switches: Ambidextrous",
          "Mount: Universal rail",
          "IPX7 waterproof"
        ],
        inStock: 8
      },
      {
        id: "19",
        name: "Magpul PMAG 30rd AR Magazine",
        description: "The magazine that changed everything. Impact-resistant polymer, anti-tilt follower, and legendary reliability. Never let a mag failure stop you.",
        price: "14.99",
        category: "Magazines",
        image: "/api/placeholder/600/400?text=Magpul+PMAG+30",
        specifications: [
          "Caliber: 5.56/.223",
          "Capacity: 30 rounds",
          "Material: Polymer",
          "Window: GEN M3 available",
          "Color: Black",
          "Made in USA"
        ],
        inStock: 50
      },
      {
        id: "20",
        name: "Peltor Sport Tactical 300",
        description: "Electronic hearing protection that amplifies range commands and blocks harmful noise. Protect your hearing, improve your awareness.",
        price: "89.99",
        category: "Safety",
        image: "/api/placeholder/600/400?text=Peltor+Tactical+300",
        specifications: [
          "NRR: 24 dB",
          "Amplification: Yes",
          "Auto shut-off: 2 hours",
          "Input jack: 3.5mm",
          "Batteries: 2 x AAA",
          "Foldable design"
        ],
        inStock: 15
      },
      {
        id: "21",
        name: "Alien Gear ShapeShift 4.0 IWB Holster",
        description: "Revolutionary modular holster system. Converts from IWB to OWB in seconds. Lifetime warranty and 30-day test drive guarantee.",
        price: "59.99",
        category: "Holsters",
        image: "/api/placeholder/600/400?text=Alien+Gear+Holster",
        specifications: [
          "Type: IWB/OWB convertible",
          "Material: Neoprene/Polymer",
          "Retention: Adjustable",
          "Cant: Adjustable",
          "Warranty: Lifetime",
          "Fits: Multiple models"
        ],
        inStock: 20
      },
      {
        id: "22",
        name: "Plano All Weather Tactical Case",
        description: "Military-grade protection for your investment. Watertight, crushproof, and dustproof. Customizable foam insert protects during transport.",
        price: "79.99",
        category: "Cases",
        image: "/api/placeholder/600/400?text=Plano+Tactical+Case",
        specifications: [
          "Size: 42\" rifle case",
          "Material: Heavy-duty polymer",
          "Seal: Watertight O-ring",
          "Foam: Pluck foam insert",
          "Latches: Dual-stage",
          "Wheels: Heavy-duty"
        ],
        inStock: 10
      },

      // Youth Rifles (Keystone Sporting Arms specialty)
      {
        id: "23",
        name: "Crickett Youth Rifle .22LR",
        description: "My First Rifle - The perfect way to teach gun safety. Manually cocked single-shot design. Creating responsible shooters since 1996.",
        price: "159.99",
        category: "Youth Rifles",
        image: "/api/placeholder/600/400?text=Crickett+Youth+Rifle",
        specifications: [
          "Caliber: .22 Long Rifle",
          "Action: Single shot",
          "Barrel: 16.125\"",
          "Length of Pull: 11.5\"",
          "Weight: 2.5 lbs",
          "Safety: Rebounding firing pin"
        ],
        inStock: 8
      },
      {
        id: "24",
        name: "Savage Rascal Youth .22LR",
        description: "Sized right for young shooters. AccuTrigger technology and proven Savage accuracy. Building tomorrow's marksmen today.",
        price: "189.99",
        category: "Youth Rifles",
        image: "/api/placeholder/600/400?text=Savage+Rascal+22",
        specifications: [
          "Caliber: .22 Long Rifle",
          "Action: Single shot",
          "Barrel: 16.125\"",
          "Trigger: AccuTrigger",
          "Sights: Adjustable",
          "Colors: Multiple available"
        ],
        inStock: 6
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