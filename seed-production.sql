-- Production database seed script for KGS CREW products
-- Run this in the Replit Database pane against your PRODUCTION database

-- Insert products into the products table
INSERT INTO products (name, description, price, category, image, specifications, "in_stock") VALUES
-- Handguns
('Glock 19 Gen 5', 'The Glock 19 Gen 5 is a compact 9mm pistol that offers the perfect balance of size and capacity. Features the Glock Marksman Barrel for increased accuracy and ambidextrous slide stop levers.', '599.99', 'Handguns', '/api/placeholder/400/300?text=Glock%2019', ARRAY['Caliber: 9mm', 'Capacity: 15+1', 'Barrel Length: 4.02"', 'Weight: 23.65 oz'], 5),
('Smith & Wesson M&P Shield Plus', 'Slim, lightweight, and easy to conceal, the M&P Shield Plus is the next generation in personal protection. Features an enhanced trigger and increased capacity.', '449.99', 'Handguns', '/api/placeholder/400/300?text=S%26W%20Shield', ARRAY['Caliber: 9mm', 'Capacity: 13+1', 'Barrel Length: 3.1"', 'Weight: 20.2 oz'], 3),
('Sig Sauer P365 XL', 'The P365 XL offers a perfect balance of capacity and concealability. Features an optic-ready slide and flat trigger for enhanced accuracy.', '679.99', 'Handguns', '/api/placeholder/400/300?text=Sig%20P365%20XL', ARRAY['Caliber: 9mm', 'Capacity: 12+1', 'Barrel Length: 3.7"', 'Weight: 20.7 oz'], 4),

-- Rifles
('Ruger 10/22 Carbine', 'America''s favorite .22 rifle. Perfect for plinking, small game hunting, and training new shooters. Features a reliable rotary magazine and legendary Ruger quality.', '379.99', 'Rifles', '/api/placeholder/400/300?text=Ruger%2010-22', ARRAY['Caliber: .22 LR', 'Capacity: 10 rounds', 'Barrel Length: 18.5"', 'Weight: 5 lbs'], 8),
('Daniel Defense DDM4 V7', 'Premium AR-15 rifle built to exceed expectations. Features a cold hammer forged barrel, free-floating handguard, and exceptional build quality.', '1899.99', 'Rifles', '/api/placeholder/400/300?text=DDM4%20V7', ARRAY['Caliber: 5.56 NATO', 'Capacity: 30 rounds', 'Barrel Length: 16"', 'Weight: 6.8 lbs'], 2),
('Savage Axis II XP', 'Affordable bolt-action rifle perfect for hunting. Includes a mounted and bore-sighted scope, AccuTrigger for a crisp pull, and button-rifled barrel.', '449.99', 'Rifles', '/api/placeholder/400/300?text=Savage%20Axis', ARRAY['Caliber: .308 Win', 'Capacity: 4 rounds', 'Barrel Length: 22"', 'Weight: 8.5 lbs with scope'], 6),

-- Less-Lethal Launchers
('Byrna SD Launcher', 'Non-lethal self-defense launcher that fires chemical irritant projectiles. No background check required. Legal in all 50 states.', '399.99', 'Less-Lethal Launchers', '/api/placeholder/400/300?text=Byrna%20SD', ARRAY['Caliber: .68', 'Capacity: 5 rounds', 'Effective Range: 60 ft', 'Powered by CO2'], 10),
('Byrna TCR Tactical Compact Rifle', 'Tactical less-lethal rifle platform. Fires the same projectiles as Byrna pistols but with increased accuracy and range. Perfect for home defense.', '599.99', 'Less-Lethal Launchers', '/api/placeholder/400/300?text=Byrna%20TCR', ARRAY['Caliber: .68', 'Capacity: 7 rounds', 'Effective Range: 100 ft', 'Powered by CO2'], 5),

-- Ammunition
('Federal Premium 9mm 124gr HST', 'Premium self-defense ammunition trusted by law enforcement. Features consistent expansion, optimum penetration, and superior terminal performance.', '39.99', 'Ammunition', '/api/placeholder/400/300?text=Federal%20HST', ARRAY['Caliber: 9mm', 'Grain: 124gr', 'Rounds: 20', 'Type: Hollow Point'], 25),
('Winchester White Box 5.56 NATO', 'Reliable range ammunition at an affordable price. Perfect for training and target practice with your AR-15 platform rifle.', '14.99', 'Ammunition', '/api/placeholder/400/300?text=Winchester%205.56', ARRAY['Caliber: 5.56 NATO', 'Grain: 55gr', 'Rounds: 20', 'Type: FMJ'], 50),
('CCI Standard Velocity .22 LR', 'Reliable rimfire ammunition perfect for plinking and small game hunting. Consistent velocity and excellent accuracy.', '8.99', 'Ammunition', '/api/placeholder/400/300?text=CCI%20.22LR', ARRAY['Caliber: .22 LR', 'Grain: 40gr', 'Rounds: 50', 'Type: Lead Round Nose'], 100),

-- Less-Lethal Ammunition
('Byrna Kinetic Projectiles', 'Hard plastic projectiles for less-lethal defense. Delivers maximum kinetic impact without chemical irritants.', '19.99', 'Less-Lethal Ammunition', '/api/placeholder/400/300?text=Byrna%20Kinetic', ARRAY['Caliber: .68', 'Quantity: 25 rounds', 'Type: Kinetic', 'Color: Black'], 30),
('Byrna Max Projectiles', 'Maximum strength OC and CS blend for ultimate stopping power. Features a 5% OC and 1% CS formula for law enforcement grade protection.', '39.99', 'Less-Lethal Ammunition', '/api/placeholder/400/300?text=Byrna%20Max', ARRAY['Caliber: .68', 'Quantity: 25 rounds', 'Type: Chemical', 'Formula: OC/CS Blend'], 20),

-- Hearing Protection
('Walker''s Razor Slim Electronic Muffs', 'Low profile electronic hearing protection. Amplifies safe sounds while protecting against harmful noise levels. Perfect for the range.', '54.99', 'Hearing Protection', '/api/placeholder/400/300?text=Walker%27s%20Razor', ARRAY['NRR: 23 dB', 'Battery: 2 AAA', 'Response Time: 0.02 seconds', 'Color: Black'], 15),
('3M Peltor Sport Tactical 500', 'Premium electronic hearing protection with Bluetooth connectivity. Features dynamic suppression time and clear voice tracking.', '149.99', 'Hearing Protection', '/api/placeholder/400/300?text=Peltor%20500', ARRAY['NRR: 26 dB', 'Battery: 2 AA', 'Bluetooth: Yes', 'Auto Shutoff: 2 hours'], 8),
('Howard Leight Impact Sport', 'Affordable electronic hearing protection with directional microphones. Automatically blocks harmful noise while amplifying conversation.', '49.99', 'Hearing Protection', '/api/placeholder/400/300?text=Impact%20Sport', ARRAY['NRR: 22 dB', 'Battery: 2 AAA', 'Response Time: 0.5 ms', 'Auto Shutoff: 4 hours'], 12);

-- Verify the products were inserted
SELECT COUNT(*) as total_products, STRING_AGG(DISTINCT category, ', ') as categories FROM products;