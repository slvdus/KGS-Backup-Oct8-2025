import { storage } from "./storage";
import type { InsertProduct } from "@shared/schema";

const sampleProducts: InsertProduct[] = [
  // Handguns
  {
    name: "Glock 19 Gen 5",
    description: "The Glock 19 Gen 5 is a compact 9mm pistol that offers the perfect balance of size and capacity. Features the Glock Marksman Barrel for increased accuracy and ambidextrous slide stop levers.",
    price: "599.99",
    category: "Handguns",
    image: "/api/placeholder/400/300?text=Glock%2019",
    specifications: ["Caliber: 9mm", "Capacity: 15+1", "Barrel Length: 4.02\"", "Weight: 23.65 oz"],
    inStock: 5
  },
  {
    name: "Smith & Wesson M&P Shield Plus",
    description: "Slim, lightweight, and easy to conceal, the M&P Shield Plus is the next generation in personal protection. Features an enhanced trigger and increased capacity.",
    price: "449.99",
    category: "Handguns",
    image: "/api/placeholder/400/300?text=S%26W%20Shield",
    specifications: ["Caliber: 9mm", "Capacity: 13+1", "Barrel Length: 3.1\"", "Weight: 20.2 oz"],
    inStock: 3
  },
  {
    name: "Sig Sauer P365 XL",
    description: "The P365 XL offers a perfect balance of capacity and concealability. Features an optic-ready slide and flat trigger for enhanced accuracy.",
    price: "679.99",
    category: "Handguns",
    image: "/api/placeholder/400/300?text=Sig%20P365%20XL",
    specifications: ["Caliber: 9mm", "Capacity: 12+1", "Barrel Length: 3.7\"", "Weight: 20.7 oz"],
    inStock: 4
  },

  // Rifles
  {
    name: "Ruger 10/22 Carbine",
    description: "America's favorite .22 rifle. Perfect for plinking, small game hunting, and training new shooters. Features a reliable rotary magazine and legendary Ruger quality.",
    price: "379.99",
    category: "Rifles",
    image: "/api/placeholder/400/300?text=Ruger%2010-22",
    specifications: ["Caliber: .22 LR", "Capacity: 10 rounds", "Barrel Length: 18.5\"", "Weight: 5 lbs"],
    inStock: 8
  },
  {
    name: "Daniel Defense DDM4 V7",
    description: "Premium AR-15 rifle built to exceed expectations. Features a cold hammer forged barrel, free-floating handguard, and exceptional build quality.",
    price: "1899.99",
    category: "Rifles",
    image: "/api/placeholder/400/300?text=DDM4%20V7",
    specifications: ["Caliber: 5.56 NATO", "Capacity: 30 rounds", "Barrel Length: 16\"", "Weight: 6.8 lbs"],
    inStock: 2
  },
  {
    name: "Savage Axis II XP",
    description: "Affordable bolt-action rifle perfect for hunting. Includes a mounted and bore-sighted scope, AccuTrigger for a crisp pull, and button-rifled barrel.",
    price: "449.99",
    category: "Rifles",
    image: "/api/placeholder/400/300?text=Savage%20Axis",
    specifications: ["Caliber: .308 Win", "Capacity: 4 rounds", "Barrel Length: 22\"", "Weight: 8.5 lbs with scope"],
    inStock: 6
  },

  // Less-Lethal Launchers
  {
    name: "Byrna SD Launcher",
    description: "Non-lethal self-defense launcher that fires chemical irritant projectiles. No background check required. Legal in all 50 states.",
    price: "399.99",
    category: "Less-Lethal Launchers",
    image: "/api/placeholder/400/300?text=Byrna%20SD",
    specifications: ["Caliber: .68", "Capacity: 5 rounds", "Effective Range: 60 ft", "Powered by CO2"],
    inStock: 10
  },
  {
    name: "Byrna TCR Tactical Compact Rifle",
    description: "Tactical less-lethal rifle platform. Fires the same projectiles as Byrna pistols but with increased accuracy and range. Perfect for home defense.",
    price: "599.99",
    category: "Less-Lethal Launchers",
    image: "/api/placeholder/400/300?text=Byrna%20TCR",
    specifications: ["Caliber: .68", "Capacity: 7 rounds", "Effective Range: 100 ft", "Powered by CO2"],
    inStock: 5
  },

  // Ammunition
  {
    name: "Federal Premium 9mm 124gr HST",
    description: "Premium self-defense ammunition trusted by law enforcement. Features consistent expansion, optimum penetration, and superior terminal performance.",
    price: "39.99",
    category: "Ammunition",
    image: "/api/placeholder/400/300?text=Federal%20HST",
    specifications: ["Caliber: 9mm", "Grain: 124gr", "Rounds: 20", "Type: Hollow Point"],
    inStock: 25
  },
  {
    name: "Winchester White Box 5.56 NATO",
    description: "Reliable range ammunition at an affordable price. Perfect for training and target practice with your AR-15 platform rifle.",
    price: "14.99",
    category: "Ammunition",
    image: "/api/placeholder/400/300?text=Winchester%205.56",
    specifications: ["Caliber: 5.56 NATO", "Grain: 55gr", "Rounds: 20", "Type: FMJ"],
    inStock: 50
  },
  {
    name: "CCI Standard Velocity .22 LR",
    description: "Reliable rimfire ammunition perfect for plinking and small game hunting. Consistent velocity and excellent accuracy.",
    price: "8.99",
    category: "Ammunition",
    image: "/api/placeholder/400/300?text=CCI%20.22LR",
    specifications: ["Caliber: .22 LR", "Grain: 40gr", "Rounds: 50", "Type: Lead Round Nose"],
    inStock: 100
  },

  // Less-Lethal Ammunition
  {
    name: "Byrna Kinetic Projectiles",
    description: "Hard plastic projectiles for less-lethal defense. Delivers maximum kinetic impact without chemical irritants.",
    price: "19.99",
    category: "Less-Lethal Ammunition",
    image: "/api/placeholder/400/300?text=Byrna%20Kinetic",
    specifications: ["Caliber: .68", "Quantity: 25 rounds", "Type: Kinetic", "Color: Black"],
    inStock: 30
  },
  {
    name: "Byrna Max Projectiles",
    description: "Maximum strength OC and CS blend for ultimate stopping power. Features a 5% OC and 1% CS formula for law enforcement grade protection.",
    price: "39.99",
    category: "Less-Lethal Ammunition",
    image: "/api/placeholder/400/300?text=Byrna%20Max",
    specifications: ["Caliber: .68", "Quantity: 25 rounds", "Type: Chemical", "Formula: OC/CS Blend"],
    inStock: 20
  },

  // Hearing Protection
  {
    name: "Walker's Razor Slim Electronic Muffs",
    description: "Low profile electronic hearing protection. Amplifies safe sounds while protecting against harmful noise levels. Perfect for the range.",
    price: "54.99",
    category: "Hearing Protection",
    image: "/api/placeholder/400/300?text=Walker%27s%20Razor",
    specifications: ["NRR: 23 dB", "Battery: 2 AAA", "Response Time: 0.02 seconds", "Color: Black"],
    inStock: 15
  },
  {
    name: "3M Peltor Sport Tactical 500",
    description: "Premium electronic hearing protection with Bluetooth connectivity. Features dynamic suppression time and clear voice tracking.",
    price: "149.99",
    category: "Hearing Protection",
    image: "/api/placeholder/400/300?text=Peltor%20500",
    specifications: ["NRR: 26 dB", "Battery: 2 AA", "Bluetooth: Yes", "Auto Shutoff: 2 hours"],
    inStock: 8
  },
  {
    name: "Howard Leight Impact Sport",
    description: "Affordable electronic hearing protection with directional microphones. Automatically blocks harmful noise while amplifying conversation.",
    price: "49.99",
    category: "Hearing Protection",
    image: "/api/placeholder/400/300?text=Impact%20Sport",
    specifications: ["NRR: 22 dB", "Battery: 2 AAA", "Response Time: 0.5 ms", "Auto Shutoff: 4 hours"],
    inStock: 12
  }
];

async function seedProducts() {
  console.log("Starting product seeding...");
  
  try {
    for (const product of sampleProducts) {
      const created = await storage.createProduct(product);
      console.log(`✓ Created product: ${created.name}`);
    }
    
    console.log(`\n✓ Successfully seeded ${sampleProducts.length} products!`);
  } catch (error) {
    console.error("Error seeding products:", error);
    process.exit(1);
  }
}

// Run the seed function
seedProducts().then(() => {
  console.log("Seeding complete!");
  process.exit(0);
}).catch((error) => {
  console.error("Seeding failed:", error);
  process.exit(1);
});