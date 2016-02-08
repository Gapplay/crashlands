var abj = {};

var $master = {
    api: {
        item: {},
        creature: {},
        recipe_in: {},
        recipe_out: {}
    },
    local: {
        name: "",
        page: 0,
        page_qty: 10,
        array: [],
        array_backup: []
    }
};

$master.api.item = {
    "B.S. S.S. Assess Lander": {
        "name": "B.S. S.S. Assess Lander",
        "type": "Teleporter",
        "rarity": "Legendary",
        "description": "This tiny ship is what you arrived in.",
        "icon": "bs_ss_assess_lander.png"
    },
    "Stick": {
        "name": "Stick",
        "type": "Component",
        "rarity": "Normal",
        "description": "You notice that if you run with it, you will put your eye out.",
        "icon": "stick.png"
    },
    "Sawgrassaw": {
        "name": "Sawgrassaw",
        "type": "Tool",
        "level": "Tier 1",
        "rarity": "Random",
        "description": "Tier 1 saw. A saw made of sawgrass. This is the mediumest quality saw youve ever seen, but it should let you chop down logtrees and whistleroots!",
        "recipe": {
            "name": "BS SSSS SS5",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Stick", "qty": 4}, {"name": "Sawgrass Blade", "qty": 10}]
        },
        "icon": "sawgrassaw.png"
    },
    "Sawboard": {
        "name": "Sawboard",
        "type": "Weapon",
        "level": "Level 2",
        "rarity": "Random",
        "description": "Level 2 weapon. This bad boy is 100% certified organic. ORGANICALLY DEADLY.",
        "recipe": {
            "name": "Skinnery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Log", "qty": 15}, {"name": "Sawgrass Blade", "qty": 16}, {
                "name": "Sawgrass Leaf",
                "qty": 5
            }, {"name": "Wompit Bone", "qty": 6}]
        },
        "icon": "sawboard.png"
    },
    "Flatstone": {
        "name": "Flatstone",
        "type": "Component",
        "rarity": "Normal",
        "description": "This stone is so unbelievably flat you could probably barely squeeze a sheet of paper between it and something else.",
        "icon": "flatstone.png"
    },
    "Flatstone Hammer": {
        "name": "Flatstone Hammer",
        "type": "Weapon",
        "level": "Level 3",
        "rarity": "Random",
        "description": "Level 3 weapon. A high-tech hammer crafted from the finest of flatstones. Used for pounding things. WITH STYLE!",
        "recipe": {
            "name": "Stoneshaper",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Log", "qty": 21}, {"name": "Flatstone", "qty": 19}, {
                "name": "Wompit Sinew",
                "qty": 4
            }]
        },
        "icon": "flatstone_hammer.png"
    },
    "Logtree": {
        "name": "Logtree",
        "type": "Resource",
        "rarity": "Normal",
        "description": "This tree appears to be made of logs. You wonder what the people back home would make of this.",
        "icon": "logtree.png",
        "drop": ["Sawdust","Log","Logtree Seed"]
    },
    "Wooden Floor": {
        "name": "Wooden Floor",
        "type": "Floor",
        "rarity": "Normal",
        "description": "It has a nicely polished sheen, and you get splinters when you slide your bare feet along it. So dont do that.",
        "recipe": {
            "name": "Sawmill",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Log", "qty": 10}]
        },
        "icon": "wooden_floor.png"
    },
    "Wooden Wall": {
        "name": "Wooden Wall",
        "type": "Structure",
        "rarity": "Normal",
        "description": "Forming good relationships is all about putting up walls. Better get to work.",
        "recipe": {
            "name": "Sawmill",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Log", "qty": 5}]
        },
        "icon": "wooden_wall.png"
    },
    "Bumpberry": {
        "name": "Bumpberry",
        "type": "Component",
        "rarity": "Normal",
        "description": "This berry is purple, which definitely means its poisonous. Or maybe that was red. In any case, some color means poisonous.",
        "icon": "bumpberry.png"
    },
    "Sawgrass": {
        "name": "Sawgrass",
        "type": "Resource",
        "rarity": "Normal",
        "description": "This grass is super sharp and firm, yet flexible. And it tastes somewhat like lightly toasted marshmallows with a smattering of beef.",
        "icon": "sawgrass.png"
    },
    "Glutternet": {
        "name": "Glutternet",
        "type": "Creature Catalyst",
        "rarity": "Superior",
        "description": "Glutterflies go crazy for this kind of crap. Embiggens your Glutterfly to POWERFUL SIZE!",
        "recipe": {
            "name": "Stoneshaper",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Whistleroot Reed", "qty": 154}, {
                "name": "Bumpberry",
                "qty": 12
            }, {"name": "Glutterfly Chitin", "qty": 48}, {"name": "Ancient Glutterfly Essence", "qty": 5}]
        },
        "icon": "glutternet.png"
    },
    "Sawgrass Blade": {
        "name": "Sawgrass Blade",
        "type": "Component",
        "rarity": "Normal",
        "description": "A blade of sawgrass. When you rub your hand across it, you bleed profusely. But when you rub your hand across it a SECOND time, you continue to bleed profusely.",
        "icon": "sawgrass_blade.png"
    },
    "Sawgrass Leaf": {
        "name": "Sawgrass Leaf",
        "type": "Component",
        "rarity": "Normal",
        "description": "A soft, tender leaf from the Sawgrass plant. It feels good to rub your face on it, though it causes rashes.",
        "icon": "sawgrass_leaf.png"
    },
    "Wompit Sinew": {
        "name": "Wompit Sinew",
        "type": "Component",
        "rarity": "Normal",
        "description": "A tough tendon from the leg of a Wompit. Its stretchy enough that you might be able to tie your hair up with it, if you werent in a space suit.",
        "icon": "wompit_sinew.png"
    },
    "Log": {
        "name": "Log",
        "type": "Component",
        "rarity": "Normal",
        "description": "A round piece of wood, harvested from the Logtree plant. Youve never seen anything like this!",
        "icon": "log.png"
    },
    "Sawdust": {
        "name": "Sawdust",
        "type": "Component",
        "rarity": "Normal",
        "description": "A byproduct from cutting wood. If you stick your hands in the pile, it feels awesome. And it smells great!",
        "icon": "sawdust.png"
    },
    "Sunshroom": {
        "name": "Sunshroom",
        "type": "Consumable",
        "rarity": "Normal",
        "description": "These shrooms love to grow in mud, and they taste salty. Restores 149 HP.",
        "icon": "sunshroom.png"
    },
    "Sawmill": {
        "name": "Sawmill",
        "type": "Workstation",
        "rarity": "Normal",
        "description": "This workbench with a circular saw will allow you to craft all kinds of wooden masterpieces!",
        "recipe": {
            "name": "BS SSSS SS5",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Sawgrass Blade", "qty": 14}, {"name": "Log", "qty": 13}]
        },
        "icon": "sawmill.png"
    },
    "Stoneshaper": {
        "name": "Stoneshaper",
        "type": "Workstation",
        "rarity": "Normal",
        "description": "What a convenient way to shape rocks into other shapes!",
        "recipe": {
            "name": "Skinnery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Flatstone", "qty": 27}, {"name": "Log", "qty": 29}, {
                "name": "Wompit Sinew",
                "qty": 5
            }]
        },
        "icon": "stoneshaper.png"
    },
    "Stone Wall": {
        "name": "Stone Wall",
        "type": "Structure",
        "rarity": "Normal",
        "description": "Legends say that the Stone Wall was first invented by a one-gloved man with sweet dance moves.",
        "recipe": {
            "name": "Stoneshaper",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Flatstone", "qty": 5}]
        },
        "icon": "stone_wall.png"
    },
    "WompHat": {
        "name": "WompHat",
        "type": "Helm",
        "level": "Level 3",
        "rarity": "Random",
        "description": "Level 3 helm. This will protect your scalp from almost the mightiest of touches.",
        "recipe": {
            "name": "Skinnery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Wompit Leather", "qty": 18}, {"name": "Wompit Bone", "qty": 11}]
        },
        "icon": "womphat.png"
    },
    "Logboots": {
        "name": "Logboots",
        "type": "Leg Armor",
        "level": "Level 1",
        "rarity": "Random",
        "description": "Level 1 boots. Theyll keep your feet warm in the cold weather! Well, kinda. Not really. Theyre wood.",
        "recipe": {
            "name": "Sawmill",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Log", "qty": 9}, {"name": "Sawgrass Leaf", "qty": 3}]
        },
        "icon": "logboots.png"
    },
    "Logchest": {
        "name": "Logchest",
        "type": "Chest Armor",
        "level": "Level 1",
        "rarity": "Random",
        "description": "Level 1 chestplate. Cover your bosom with this amazing pile of boards to protect your ribs from slight bruising!",
        "recipe": {
            "name": "Sawmill",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Log", "qty": 15}, {"name": "Sawgrass Leaf", "qty": 5}]
        },
        "icon": "logchest.png"
    },
    "Woodmitts": {
        "name": "Woodmitts",
        "type": "Gloves",
        "level": "Level 1",
        "rarity": "Random",
        "description": "Level 1 gloves. Protect your fat, sausagey fingers WITH THE POWER OF WOOD!",
        "recipe": {
            "name": "Sawmill",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Log", "qty": 12}, {"name": "Stick", "qty": 6}]
        },
        "icon": "woodmitts.png"
    },
    "Hydrablade Woodshankers": {
        "name": "Hydrablade Woodshankers",
        "type": "Gloves",
        "level": "Level 3",
        "rarity": "Legendary",
        "description": "Level 3 legendary gloves. Dont scratch your nose with these bad boys on.",
        "recipe": {
            "name": "Sawmill",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Log", "qty": 52}, {"name": "The Hydrablade", "qty": 1}, {
                "name": "Sawgrass Leaf",
                "qty": 18
            }]
        },
        "icon": "hydrablade_woodshankers.png"
    },
    "Baconband": {
        "name": "Baconband",
        "type": "Trinket",
        "rarity": "Normal",
        "description": "Now you can enjoy the sweet scent of baconweed ALL THE TIME! Grants 0.25% HP regeneration every second!",
        "recipe": {
            "name": "Skinnery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Baconweed", "qty": 16}, {"name": "Wompit Sinew", "qty": 14}]
        },
        "icon": "baconband.png"
    },
    "Loghat": {
        "name": "Loghat",
        "type": "Helm",
        "level": "Level 1",
        "rarity": "Random",
        "description": "Level 1 helm. IM THE KING OF THE WOOD!",
        "recipe": {
            "name": "Sawmill",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Log", "qty": 11}, {"name": "Stick", "qty": 5}, {"name": "Sawdust", "qty": 4}]
        },
        "icon": "loghat.png"
    },
    "Baconweed": {
        "name": "Baconweed",
        "type": "Consumable",
        "rarity": "Normal",
        "description": "These pretty flowers have a tantalizing aroma. Restores 81 HP.",
        "icon": "baconweed.png"
    },
    "Logtree Seed": {
        "name": "Logtree Seed",
        "type": "Seed",
        "rarity": "Good",
        "description": "Under the right conditions, this will grow into a majestic Logtree over time.",
        "icon": "logtree_seed.png"
    },
    "Sawgrass Seed": {
        "name": "Sawgrass Seed",
        "type": "Seed",
        "rarity": "Good",
        "description": "If planted in the right type of soil, this will sprout into a lovely Sawgrass plant.",
        "icon": "sawgrass_seed.png"
    },
    "Flatboulder": {
        "name": "Flatboulder",
        "type": "Resource",
        "rarity": "Normal",
        "description": "This looks heavy. Turns out, it is.",
        "icon": "flatboulder.png",
        "drop": ["Flatstone Gravel","Flatstone","Yellow Gem"]
    },
    "Flatstone Gravel": {
        "name": "Flatstone Gravel",
        "type": "Component",
        "rarity": "Normal",
        "description": "This will be incredibly useful for whatever you might use an ordinary pile of small rocks for.",
        "icon": "flatstone_gravel.png"
    },
    "Pickaxe": {
        "name": "Pickaxe",
        "type": "Tool",
        "level": "Tier 1",
        "rarity": "Random",
        "description": "Tier 1 pickaxe. This pickaxe will break through even the toughest of Flatstone Boulders! Or at least the weakest ones.",
        "recipe": {
            "name": "Skinnery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Stick", "qty": 9}, {"name": "Wompit Bone", "qty": 8}, {
                "name": "Wompit Sinew",
                "qty": 3
            }]
        },
        "icon": "pickaxe.png"
    },
    "Sawgrass Sword": {
        "name": "Sawgrass Sword",
        "type": "Weapon",
        "level": "Level 1",
        "rarity": "Random",
        "description": "Level 1 weapon. A sword made of grass. This will end well for you.",
        "recipe": {
            "name": "Sawmill",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Log", "qty": 18}, {"name": "Sawgrass Blade", "qty": 20}]
        },
        "icon": "sawgrass_sword.png"
    },
    "Stonahawk": {
        "name": "Stonahawk",
        "type": "Weapon",
        "level": "Level 5",
        "rarity": "Random",
        "description": "Level 5 weapon. You once read about this in a National Geographic. It seems effective.",
        "recipe": {
            "name": "Chemworks",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Glutterfly Chitin", "qty": 13}, {"name": "Flatstone", "qty": 30}]
        },
        "icon": "stonahawk.png"
    },
    "Wompit Bone": {
        "name": "Wompit Bone",
        "type": "Component",
        "rarity": "Normal",
        "description": "It can handle a lot of stress and weight, but it cant handle criticism.",
        "icon": "wompit_bone.png"
    },
    "Flatstone Floor": {
        "name": "Flatstone Floor",
        "type": "Floor",
        "rarity": "Normal",
        "description": "A resilient flooring for those with finer taste.",
        "recipe": {
            "name": "Stoneshaper",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Flatstone", "qty": 10}]
        },
        "icon": "flatstone_floor.png"
    },
    "Golden Chest": {
        "name": "Golden Chest",
        "type": "Chest",
        "rarity": "Good",
        "description": "Made of the finest-quality, gold-colored something-or-other. Probably needs a key to open!",
        "icon": "golden_chest.png"
    },
    "Elixir of Scorching": {
        "name": "Elixir of Scorching",
        "type": "Consumable",
        "rarity": "Good",
        "description": "Pouring this along the murdery part of your weapon makes it RED-HOT! 3% chance to set enemies on fire upon striking. Elixir lasts 20 minutes.",
        "recipe": {
            "name": "Cauldron",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Grenamel", "qty": 2}, {
                "name": "Satgat Chemoreceptors",
                "qty": 1
            }, {"name": "Plonktan", "qty": 1}, {"name": "Sensitive Satgat Essence", "qty": 1}]
        },
        "icon": "elixir_of_scorching.png"
    },
    "Mild HP Potion": {
        "name": "Mild HP Potion",
        "type": "Consumable",
        "rarity": "Good",
        "description": "Chugging one of these will make you feel as calm as a summer breeze. Restores 453 HP.",
        "recipe": {
            "name": "Hearth",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Log", "qty": 3}, {"name": "Baconweed", "qty": 3}]
        },
        "icon": "mild_hp_potion.png"
    },
    "Warp Beacon": {
        "name": "Warp Beacon",
        "type": "Teleporter",
        "rarity": "Good",
        "description": "Placing this beacon on the ground will allow you to warp to it from your map if you are within range.",
        "icon": "warp_beacon.png"
    },
    "Telepad": {
        "name": "Telepad",
        "type": "Teleporter",
        "rarity": "Epic",
        "description": "Hewgodooko left this lying around. What an idiot!",
        "icon": "telepad.png"
    },
    "Whistleroot": {
        "name": "Whistleroot",
        "type": "Resource",
        "rarity": "Normal",
        "description": "This plant makes hilarious squealing noises as the wind blows through it. Each plant makes a unique pitch!",
        "icon": "whistleroot.png",
        "drop":["Whistle Borer","Whistleroot Reed","Spood Beast"]
    },
    "Whistle Borer": {
        "name": "Whistle Borer",
        "type": "Component",
        "rarity": "Normal",
        "description": "This termite-like creature is attracted to the sounds of Whistleroot plants. Its jaws are razor-sharp, but it refuses to bite you.",
        "icon": "whistle_borer.png"
    },
    "Whistleroot Reed": {
        "name": "Whistleroot Reed",
        "type": "Component",
        "rarity": "Normal",
        "description": "This reed is long and hollow. Its very resistant to bending, but its not resistant to your charm and good looks. What up, reed?",
        "icon": "whistleroot_reed.png"
    },
    "Glidopus Siphon": {
        "name": "Glidopus Siphon",
        "type": "Component",
        "rarity": "Normal",
        "description": "Its strong and rubbery, like an old garden hose. Or maybe like a new one, if it were a strong and rubbery new one.",
        "icon": "glidopus_siphon.png"
    },
    "Glidopus Ink": {
        "name": "Glidopus Ink",
        "type": "Component",
        "rarity": "Normal",
        "description": "Glidopi keep their ink in glass bottles for safety. A gasoline-like aroma fills the air when you pop the cork.",
        "icon": "glidopus_ink.png"
    },
    "Gravestone": {
        "name": "Gravestone",
        "type": "Structure",
        "rarity": "Normal",
        "description": "Resurrect In Peace.",
        "icon": "gravestone.png"
    },
    "Wompit Toenail": {
        "name": "Wompit Toenail",
        "type": "Component",
        "rarity": "Normal",
        "description": "This toenail is tough and rough. It also tastes pretty bad, but in a good kind of way.",
        "icon": "wompit_toenail.png"
    },
    "Intact Wompit Heart": {
        "name": "Intact Wompit Heart",
        "type": "Component",
        "rarity": "Normal",
        "description": "The heart continues pumping long after it has been torn from its host. Interesting and morbid!",
        "icon": "intact_wompit_heart.png"
    },
    "Wompit Leather": {
        "name": "Wompit Leather",
        "type": "Component",
        "rarity": "Normal",
        "description": "Youve managed to kill a wompit and steal its skin. Hopefully you have a good reason for this kind of rude behavior.",
        "icon": "wompit_leather.png"
    },
    "Wooden Chair": {
        "name": "Wooden Chair",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "If you had knees, this would be a good place to sit. But still... nice to look at.",
        "recipe": {
            "name": "Sawmill",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Stick", "qty": 6}, {"name": "Log", "qty": 13}]
        },
        "icon": "wooden_chair.png"
    },
    "Wooden Table": {
        "name": "Wooden Table",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Tables: you can put things on them, so long as you use a coaster.",
        "recipe": {
            "name": "Sawmill",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Stick", "qty": 6}, {"name": "Log", "qty": 13}]
        },
        "icon": "wooden_table.png"
    },
    "Old Man Statue": {
        "name": "Old Man Statue",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "His majestic moustache is sure to bring good fortune to anyone who strokes it gently.",
        "recipe": {
            "name": "Sawmill",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Log", "qty": 25}]
        },
        "icon": "old_man_statue.png"
    },
    "Basic Glue": {
        "name": "Basic Glue",
        "type": "Component",
        "rarity": "Good",
        "description": "Its sticky, like glue should be.",
        "recipe": {
            "name": "Skinnery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Sawdust", "qty": 1}, {"name": "Wompit Toenail", "qty": 1}]
        },
        "icon": "basic_glue.png"
    },
    "Chemworks": {
        "name": "Chemworks",
        "type": "Workstation",
        "rarity": "Normal",
        "description": "It takes a lot of chemicals to work with all these crazy materials. This should do the trick!",
        "recipe": {
            "name": "Stoneshaper",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Intact Wompit Heart", "qty": 2}, {
                "name": "Wompit Leather",
                "qty": 16
            }, {"name": "Glutterfly Chitin", "qty": 9}, {"name": "Bumpberry", "qty": 3}]
        },
        "icon": "chemworks.png"
    },
    "Glutterfly Chitin": {
        "name": "Glutterfly Chitin",
        "type": "Component",
        "rarity": "Normal",
        "description": "Its extremely tough and hard to pronounce. But it catches the light in a really awesome way!",
        "icon": "glutterfly_chitin.png"
    },
    "Glorch": {
        "name": "Glorch",
        "type": "Lighting",
        "rarity": "Normal",
        "description": "Its about time you went green with your lighting.",
        "recipe": {
            "name": "Sawmill",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Log", "qty": 5}, {"name": "Glow Juice", "qty": 2}]
        },
        "icon": "glorch.png"
    },
    "Glow Juice": {
        "name": "Glow Juice",
        "type": "Component",
        "rarity": "Normal",
        "description": "It seems to glow brighter in higher densities. Poking your finger into it burns and tingles at the same time.",
        "icon": "glow_juice.png"
    },
    "Wompvest": {
        "name": "Wompvest",
        "type": "Chest Armor",
        "level": "Level 3",
        "rarity": "Random",
        "description": "Level 3 chestplate. If you plan to run a marathon, be sure to bring tape.",
        "recipe": {
            "name": "Skinnery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Wompit Leather", "qty": 11}, {
                "name": "Sawgrass Leaf",
                "qty": 6
            }, {"name": "Wompit Sinew", "qty": 3}]
        },
        "icon": "wompvest.png"
    },
    "Wompants": {
        "name": "Wompants",
        "type": "Leg Armor",
        "level": "Level 3",
        "rarity": "Random",
        "description": "Level 3 boots. These leggings really show off your better features.",
        "recipe": {
            "name": "Skinnery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Wompit Leather", "qty": 10}, {"name": "Wompit Toenail", "qty": 1}]
        },
        "icon": "wompants.png"
    },
    "Wompigloves": {
        "name": "Wompigloves",
        "type": "Gloves",
        "level": "Level 3",
        "rarity": "Random",
        "description": "Level 3 gloves. Nothing warms your hands up like the skin of animals!",
        "recipe": {
            "name": "Skinnery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Wompit Leather", "qty": 13}, {"name": "Sawgrass Leaf", "qty": 7}]
        },
        "icon": "wompigloves.png"
    },
    "Gunpowda": {
        "name": "Gunpowda",
        "type": "Component",
        "rarity": "Good",
        "description": "This would be even more useful if you had a gun.",
        "recipe": {
            "name": "Chemworks",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Glidopus Ink", "qty": 1}, {"name": "Sawdust", "qty": 1}]
        },
        "icon": "gunpowda.png"
    },
    "Gravelbomb": {
        "name": "Gravelbomb",
        "type": "Bomb",
        "rarity": "Normal",
        "description": "This bomb packs quite a punch. A PUNCH IN THE NECK! Deals 200% of your DPS as physical damage.",
        "recipe": {
            "name": "Chemworks",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Gunpowda", "qty": 3}, {
                "name": "Flatstone Gravel",
                "qty": 3
            }, {"name": "Wompit Leather", "qty": 3}]
        },
        "icon": "gravelbomb.png"
    },
    "Sawgrass Seedbomb": {
        "name": "Sawgrass Seedbomb",
        "type": "Bomb",
        "rarity": "Normal",
        "description": "Nothings sharper than sawgrass... except maybe a sawgrass seed flying into your eye. Deals 125% of your DPS as physical damage.",
        "recipe": {
            "name": "Chemworks",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Sawgrass Seed", "qty": 3}, {
                "name": "Sawgrass Leaf",
                "qty": 3
            }, {"name": "Glidopus Ink", "qty": 3}]
        },
        "icon": "sawgrass_seedbomb.png"
    },
    "Logtree Seedbomb": {
        "name": "Logtree Seedbomb",
        "type": "Bomb",
        "rarity": "Normal",
        "description": "Why plant seeds in the ground when you can plant them in FACES? Deals 125% of your DPS as physical damage.",
        "recipe": {
            "name": "Chemworks",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Logtree Seed", "qty": 3}, {"name": "Log", "qty": 3}, {
                "name": "Glidopus Ink",
                "qty": 3
            }]
        },
        "icon": "logtree_seedbomb.png"
    },
    "Hearth": {
        "name": "Hearth",
        "type": "Workstation",
        "rarity": "Normal",
        "description": "Its warm and delightful. If only you had some hot cocoa to dip your toes into.",
        "recipe": {
            "name": "Stoneshaper",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Flatstone", "qty": 29}, {"name": "Flatstone Gravel", "qty": 7}, {
                "name": "Log",
                "qty": 31
            }]
        },
        "icon": "hearth.png"
    },
    "Harvestbomb": {
        "name": "Harvestbomb",
        "type": "Bomb",
        "rarity": "Good",
        "description": "Chop down sawgrass, logtrees, and whistleroot. WITH THE POWER OF VIOLENCE! Breaks apart Sawgrass, Logtrees, and Whistleroots!",
        "recipe": {
            "name": "BS SSSS SS5",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Sawgrass Blade", "qty": 3}, {"name": "Whistleroot Reed", "qty": 3}]
        },
        "icon": "harvestbomb.png"
    },
    "Wooden Poledoor": {
        "name": "Wooden Poledoor",
        "type": "Structure",
        "rarity": "Normal",
        "description": "Doors make better doors than walls.",
        "recipe": {
            "name": "Sawmill",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Log", "qty": 2}]
        },
        "icon": "wooden_poledoor.png"
    },
    "Thatched Sawfloor": {
        "name": "Thatched Sawfloor",
        "type": "Floor",
        "rarity": "Normal",
        "description": "Floors prevent wild creatures from randomly popping up in your house, and can also be used as bridges!",
        "recipe": {
            "name": "BS SSSS SS5",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Sawgrass Blade", "qty": 10}]
        },
        "icon": "thatched_sawfloor.png"
    },
    "Stone Creature Bed": {
        "name": "Stone Creature Bed",
        "type": "Creature Stable",
        "rarity": "Good",
        "description": "Provide all the creature comforts your creatures deserve. Comes with a name tag!",
        "recipe": {
            "name": "Stoneshaper",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Sawgrass Leaf", "qty": 5}, {
                "name": "Flatstone",
                "qty": 12
            }, {"name": "Yellow Gem", "qty": 2}]
        },
        "icon": "stone_creature_bed.png"
    },
    "Water Pump": {
        "name": "Water Pump",
        "type": "Workstation",
        "rarity": "Normal",
        "description": "This pump will produce an endless supply of water balloons when placed in Savanna water.",
        "recipe": {
            "name": "Chemworks",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Flatstone", "qty": 30}, {
                "name": "Intact Wompit Heart",
                "qty": 3
            }, {"name": "Glidopus Siphon", "qty": 26}]
        },
        "icon": "water_pump.png"
    },
    "Water Balloon": {
        "name": "Water Balloon",
        "type": "Component",
        "rarity": "Good",
        "description": "It squeaks annoyingly when you rub your hands all over it.",
        "recipe": {
            "name": "Water Pump",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Glidopus Siphon", "qty": 3}, {"name": "Sawgrass Blade", "qty": 3}]
        },
        "icon": "water_balloon.png"
    },
    "Gem Lamp": {
        "name": "Gem Lamp",
        "type": "Lighting",
        "rarity": "Normal",
        "description": "Only the most fashionable and wealthy survivors can afford the luxury of Gem Lamps.",
        "recipe": {
            "name": "Stoneshaper",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Flatstone", "qty": 8}, {"name": "Yellow Gem", "qty": 1}]
        },
        "icon": "gem_lamp.png"
    },
    "Yellow Gem": {
        "name": "Yellow Gem",
        "type": "Component",
        "rarity": "Normal",
        "description": "If you hold it up to your eye and squint really hard, you become self conscious and immediately stop.",
        "icon": "yellow_gem.png"
    },
    "Wompit Garter": {
        "name": "Wompit Garter",
        "type": "Creature Catalyst",
        "rarity": "Superior",
        "description": "Wompits love wearing decorative garters on their slender legs. Embiggens your Wompit to POWERFUL SIZE!",
        "recipe": {
            "name": "Skinnery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Flatstone", "qty": 149}, {
                "name": "Wompit Leather",
                "qty": 107
            }, {"name": "Sterling Wompit Essence", "qty": 12}]
        },
        "icon": "wompit_garter.png"
    },
    "Stunning Mirror": {
        "name": "Stunning Mirror",
        "type": "Device",
        "rarity": "Good",
        "description": "Temporarily stun your opponents for 2 seconds by hitting them directly in the face with this fashionable mirror!",
        "recipe": {
            "name": "Stoneshaper",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Flatstone", "qty": 68}, {"name": "Yellow Gem", "qty": 9}, {
                "name": "Basic Glue",
                "qty": 5
            }]
        },
        "icon": "stunning_mirror.png"
    },
    "Elixir of Fireproofing": {
        "name": "Elixir of Fireproofing",
        "type": "Consumable",
        "rarity": "Good",
        "description": "OH GOD ITS SO COLD WHY IS IT SO COLD GET IT AWAY. Reduces fire damage taken by 15%. Elixir lasts 20 minutes.",
        "recipe": {
            "name": "Cauldron",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Sagtatoe", "qty": 1}, {"name": "Clossom", "qty": 1}, {
                "name": "Throak Jelly",
                "qty": 1
            }, {"name": "Malicious Throak Essence", "qty": 1}]
        },
        "icon": "elixir_of_fireproofing.png"
    },
    "Leather Ball": {
        "name": "Leather Ball",
        "type": "Throwable",
        "rarity": "Normal",
        "description": "Playing with leathery balls has been a pastime of your people for millennia. Why break with tradition?",
        "recipe": {
            "name": "Skinnery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Wompit Leather", "qty": 10}, {"name": "Basic Glue", "qty": 2}]
        },
        "icon": "leather_ball.png"
    },
    "Safety Gogs": {
        "name": "Safety Gogs",
        "type": "Trinket",
        "rarity": "Superior",
        "description": "Supreme suction elongates the optical nerve, allowing you to crit like a champ! Increases critical strike chance by 10%!",
        "recipe": {
            "name": "Chemworks",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Glidopus Ink", "qty": 71}, {
                "name": "Basic Glue",
                "qty": 5
            }, {"name": "Water Balloon", "qty": 42}]
        },
        "icon": "safety_gogs.png"
    },
    "Blo-Pipe": {
        "name": "Blo-Pipe",
        "type": "Device",
        "rarity": "Good",
        "description": "A hefty sucknblow will get you to where you want to go! Assuming where you want to go is POISONING YOUR ENEMIES FOR 100% OF YOUR DPS!",
        "recipe": {
            "name": "Chemworks",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Whistleroot Reed", "qty": 93}, {
                "name": "Sawgrass Leaf",
                "qty": 26
            }, {"name": "Bumpberry", "qty": 8}]
        },
        "icon": "blo-pipe.png"
    },
    "Scarecrow": {
        "name": "Scarecrow",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Unfortunately there are no crows on this planet, so this item is probably useless. Still, it looks totally rad.",
        "recipe": {
            "name": "Skinnery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Intact Wompit Heart", "qty": 1}, {
                "name": "Sawgrass Blade",
                "qty": 12
            }, {"name": "Sawgrass Leaf", "qty": 4}, {"name": "Stick", "qty": 5}]
        },
        "icon": "scarecrow.png"
    },
    "Chelm": {
        "name": "Chelm",
        "type": "Helm",
        "level": "Level 5",
        "rarity": "Random",
        "description": "Level 5 helm. Like a helmet, but with a little more pizazz.",
        "recipe": {
            "name": "Stoneshaper",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Glutterfly Chitin", "qty": 7}, {
                "name": "Flatstone",
                "qty": 17
            }, {"name": "Yellow Gem", "qty": 3}]
        },
        "icon": "chelm.png"
    },
    "Charmor": {
        "name": "Charmor",
        "type": "Chest Armor",
        "level": "Level 5",
        "rarity": "Random",
        "description": "Level 5 chestplate. Big shoulders make you more impressive in meetings and on the go.",
        "recipe": {
            "name": "Stoneshaper",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Glutterfly Chitin", "qty": 10}, {"name": "Flatstone", "qty": 23}]
        },
        "icon": "charmor.png"
    },
    "Choots": {
        "name": "Choots",
        "type": "Leg Armor",
        "level": "Level 5",
        "rarity": "Random",
        "description": "Level 5 boots. Somehow you feel your knitting recipe flew off the rails.",
        "recipe": {
            "name": "Stoneshaper",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Glutterfly Chitin", "qty": 6}, {"name": "Flatstone", "qty": 15}]
        },
        "icon": "choots.png"
    },
    "Chittens": {
        "name": "Chittens",
        "type": "Gloves",
        "level": "Level 5",
        "rarity": "Random",
        "description": "Level 5 gloves. Solid as the carapace of a dead bug and with extra gripping strength to match.",
        "recipe": {
            "name": "Stoneshaper",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Glutterfly Chitin", "qty": 8}, {"name": "Flatstone", "qty": 19}]
        },
        "icon": "chittens.png"
    },
    "Walker Blossom": {
        "name": "Walker Blossom",
        "type": "Component",
        "rarity": "Normal",
        "description": "This fragrant blossom can be picked from walkerroots. When shoved into your eye, it burns immensely.",
        "icon": "walker_blossom.png"
    },
    "Walkerroot": {
        "name": "Walkerroot",
        "type": "Resource",
        "rarity": "Good",
        "description": "These plants look like theyre trying to escape, but theyre not fooling anyone.",
        "icon": "walkerroot.png",
        "drop":["Walker Blossom"]
    },
    "Blastique": {
        "name": "Blastique",
        "type": "Component",
        "rarity": "Good",
        "description": "This initially soft substance becomes extremely hard over time.",
        "recipe": {
            "name": "Chemworks",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Walker Blossom", "qty": 1}, {"name": "Glidopus Ink", "qty": 1}]
        },
        "icon": "blastique.png"
    },
    "Glidopus Beak": {
        "name": "Glidopus Beak",
        "type": "Component",
        "rarity": "Normal",
        "description": "Glidopi hide their beaks deep within their stomachs, or something. Honestly, the purpose of this thing is a mystery.",
        "icon": "glidopus_beak.png"
    },
    "Blastique Saw": {
        "name": "Blastique Saw",
        "type": "Tool",
        "level": "Tier 2",
        "rarity": "Normal",
        "description": "Tier 2 saw. The serrated Blastique edges of this saw will tear through Squee plants like a knife through something soft and buttery!",
        "recipe": {
            "name": "Chemworks",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Blastique", "qty": 3}, {"name": "Flatstone", "qty": 15}, {
                "name": "Sawgrassaw",
                "qty": 1
            }, {"name": "Water Balloon", "qty": 8}]
        },
        "icon": "blastique_saw.png"
    },
    "Dusk Crystal": {
        "name": "Dusk Crystal",
        "type": "Resource",
        "rarity": "Good",
        "description": "This crystal looks totally awesome, and tastes salty sweet. Its possible that its made of sugar. Or salt. They look very similar.",
        "icon": "dusk_crystal.png",
        "drop": ["Dusk Dust","Dusk Shard"]
    },
    "Dusk Shard": {
        "name": "Dusk Shard",
        "type": "Component",
        "rarity": "Normal",
        "description": "A perfect shard of a dusk crystal. It has the majestic aura of a skateboarding dog.",
        "icon": "dusk_shard.png"
    },
    "Dusk Dust": {
        "name": "Dusk Dust",
        "type": "Component",
        "rarity": "Good",
        "description": "This is the byproduct of your weak attempts at harvesting dusk shards. If you suck it into your nose, it makes your pupils dilate.",
        "icon": "dusk_dust.png"
    },
    "Squee": {
        "name": "Squee",
        "type": "Resource",
        "rarity": "Normal",
        "description": "Slapping it creates a hollow drum sound. With enough of these, you could form a genuine hippie commune.",
        "icon": "squee.png",
        "drop": ["Squee Husk","Squee Barrel","Squocoon","Squee Seed"]
    },
    "Squee Husk": {
        "name": "Squee Husk",
        "type": "Component",
        "rarity": "Normal",
        "description": "The beautiful, yet oddly rigid, husk of a Squee plant. Rubbing your fingers over it produces a pleasing sensation. Maybe a little too pleasing...",
        "icon": "squee_husk.png"
    },
    "Squee Barrel": {
        "name": "Squee Barrel",
        "type": "Component",
        "rarity": "Normal",
        "description": "When you squeeze it, a milky substance comes out. When you lick the milky substance, you are filled with regret.",
        "icon": "squee_barrel.png"
    },
    "Giant Fossilized Skull": {
        "name": "Giant Fossilized Skull",
        "type": "Component",
        "rarity": "Legendary",
        "description": "The tusks on this skull indicate that the beast it once belonged to had tusks.",
        "icon": "giant_fossilized_skull.png"
    },
    "Giant Fossilized Femur": {
        "name": "Giant Fossilized Femur",
        "type": "Component",
        "rarity": "Normal",
        "description": "You wonder what this leg bone would have been connected to. Probably something giant.",
        "icon": "giant_fossilized_femur.png"
    },
    "Mild Speed Potion": {
        "name": "Mild Speed Potion",
        "type": "Consumable",
        "rarity": "Good",
        "description": "This will go STRAIGHT to your thighs.",
        "recipe": {
            "name": "Hearth",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Log", "qty": 3}, {"name": "Whistle Borer", "qty": 3}]
        },
        "icon": "mild_speed_potion.png"
    },
    "Crystal Flare": {
        "name": "Crystal Flare",
        "type": "Torch",
        "rarity": "Good",
        "description": "In the darkest of times, this ornate device will keep your surroundings illuminated. In the brightest of times, its completely useless.",
        "icon": "crystal_flare.png"
    },
    "Potted Baconweed": {
        "name": "Potted Baconweed",
        "type": "Potted Plant",
        "rarity": "Normal",
        "description": "Legend says if you leave a potted baconweed by your back step, the baconweed fairy will steal your teeth. But thats silly... isnt it?",
        "recipe": {
            "name": "Sawmill",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Log", "qty": 5}, {"name": "Baconweed", "qty": 1}]
        },
        "icon": "potted_baconweed.png"
    },
    "Wompit Milk": {
        "name": "Wompit Milk",
        "type": "Component",
        "rarity": "Good",
        "description": "With the right attitude, you can milk just about anything. This comes from a domesticated Wompit!",
        "recipe": {
            "name": "Wompit",
            "output_qty": 1,
            "type": "Pet",
            "ingredients": [{"name": "Sawgrass Blade", "qty": 2}, {"name": "Sawgrass Leaf", "qty": 1}]
        },
        "icon": "wompit_milk.png"
    },
    "Glutterfly Wingdust": {
        "name": "Glutterfly Wingdust",
        "type": "Component",
        "rarity": "Good",
        "description": "Carefully harvested from the furiously flapping wings of a domesticated Glutterfly. The dust gets all over everything and is very hard to get out.",
        "recipe": {
            "name": "Glutterfly",
            "output_qty": 1,
            "type": "Pet",
            "ingredients": [{"name": "Bumpberry", "qty": 1}, {"name": "Baconweed", "qty": 2}]
        },
        "icon": "glutterfly_wingdust.png"
    },
    "Tartil Pitch": {
        "name": "Tartil Pitch",
        "type": "Component",
        "rarity": "Normal",
        "description": "A sticky ball of Tartil chunks. It tastes slightly of almonds and sweetened condensed milk. Slightly buttery. Would definitely make a great pound cake.",
        "icon": "tartil_pitch.png"
    },
    "Tartil Tongue": {
        "name": "Tartil Tongue",
        "type": "Component",
        "rarity": "Normal",
        "description": "Its covered with bumps that ooze a putrid substance when popped. Still, as with bubble wrap, its hard to resist.",
        "icon": "tartil_tongue.png"
    },
    "Petrified Amber": {
        "name": "Petrified Amber",
        "type": "Component",
        "rarity": "Normal",
        "description": "These ancient amber chunks are found in the bodies of Tartils. You can see tiny bugs trapped inside.",
        "icon": "petrified_amber.png"
    },
    "Stone Table": {
        "name": "Stone Table",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Show your dinner guests your hard side with this solid stone table.",
        "recipe": {
            "name": "Stoneshaper",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Flatstone", "qty": 40}]
        },
        "icon": "stone_table.png"
    },
    "Stone Stool": {
        "name": "Stone Stool",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Its a bit firm to sit on, but oddly comfortable for very short periods of time.",
        "recipe": {
            "name": "Stoneshaper",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Flatstone", "qty": 40}]
        },
        "icon": "stone_stool.png"
    },
    "Squee Seed": {
        "name": "Squee Seed",
        "type": "Seed",
        "rarity": "Good",
        "description": "With enough love and care, you can cultivate your very own Squee garden!",
        "icon": "squee_seed.png"
    },
    "Squocoon": {
        "name": "Squocoon",
        "type": "Component",
        "rarity": "Normal",
        "description": "This cocoon was found inside a Squee plant. It jiggles and bounces to the sound of music.",
        "icon": "squocoon.png"
    },
    "Straddlebark": {
        "name": "Straddlebark",
        "type": "Component",
        "rarity": "Good",
        "description": "This plant has no roots, but the bottom is extremely sticky and hard to detach from things once it latches on.",
        "icon": "straddlebark.png"
    },
    "Gassak": {
        "name": "Gassak",
        "type": "Resource",
        "rarity": "Normal",
        "description": "This pungent-smelling plant grows in patches. It produces bags of a strange gas.",
        "icon": "gassak.png",
        "drop":["Gassak Gas Sack", "Gassak Doublesack", "Gassakmeister","Volatile Sack"]
    },
    "Night Glotus": {
        "name": "Night Glotus",
        "type": "Resource",
        "rarity": "Normal",
        "description": "Every day it grows a new batch of glowing berries, and it opens up at night. The berries are so glowy that theyre visible from space!",
        "icon": "night_glotus.png",
        "drop":["Glotus Berries"]
    },
    "Bulbi": {
        "name": "Bulbi",
        "type": "Component",
        "rarity": "Normal",
        "description": "A small and fragile plant with a single bulb. Even though its just a plant, it seems terrified of everything.",
        "icon": "bulbi.png"
    },
    "Gassak Gas Sack": {
        "name": "Gassak Gas Sack",
        "type": "Component",
        "rarity": "Normal",
        "description": "Picked from a Gassak plant, this bubbly sack smells strongly of methane.",
        "icon": "gassak_gas_sack.png"
    },
    "Glotus Berries": {
        "name": "Glotus Berries",
        "type": "Component",
        "rarity": "Normal",
        "description": "These bioluminescent berries are warm to the touch and emit a deep humming sound.",
        "icon": "glotus_berries.png"
    },
    "Gassak Doublesack": {
        "name": "Gassak Doublesack",
        "type": "Component",
        "rarity": "Good",
        "description": "Two gassak sacks fused together, presumably at the hip. Theyre inseparable.",
        "icon": "gassak_doublesack.png"
    },
    "Gassakmeister": {
        "name": "Gassakmeister",
        "type": "Component",
        "rarity": "Superior",
        "description": "This little bug seems to feed on the gas produced inside Gassak Gas Sacks. It looks sad that you have destroyed its home and family.",
        "icon": "gassakmeister.png"
    },
    "Tartil Firedamp": {
        "name": "Tartil Firedamp",
        "type": "Component",
        "rarity": "Good",
        "description": "This extremely volatile compound is produced in the belly of a domesticated Tartil. It must be extracted very carefully.",
        "recipe": {
            "name": "Tartil",
            "output_qty": 1,
            "type": "Pet",
            "ingredients": [{"name": "Gassak Doublesack", "qty": 1}, {
                "name": "Bulbi",
                "qty": 1
            }, {"name": "Giant Fossilized Femur", "qty": 2}]
        },
        "icon": "tartil_firedamp.png"
    },
    "Glidopus Larva": {
        "name": "Glidopus Larva",
        "type": "Component",
        "rarity": "Good",
        "description": "If you treat a domesticated Glidopus well, it will give you its firstborn. And every born after that.",
        "recipe": {
            "name": "Glidopus",
            "output_qty": 1,
            "type": "Pet",
            "ingredients": [{"name": "Whistleroot Reed", "qty": 2}, {"name": "Sunshroom", "qty": 1}]
        },
        "icon": "glidopus_larva.png"
    },
    "Wat Wing": {
        "name": "Wat Wing",
        "type": "Component",
        "rarity": "Normal",
        "description": "Wat kind of a wing, is this? Yes, it is a Wat kind of a wing. It never stops vibrating. Wat.",
        "icon": "wat_wing.png"
    },
    "Watfinger": {
        "name": "Watfinger",
        "type": "Component",
        "rarity": "Normal",
        "description": "The fingers of a Wat are renowned for their deliciousness when fried in butter and chocolate. Theyre also great for flicking things in the eye!",
        "icon": "watfinger.png"
    },
    "Wat Fur Tuft": {
        "name": "Wat Fur Tuft",
        "type": "Component",
        "rarity": "Normal",
        "description": "Youve carefully extracted this fur from the face of a Wat by stabbing it to death. It better be worth it!",
        "icon": "wat_fur_tuft.png"
    },
    "Wuano": {
        "name": "Wuano",
        "type": "Component",
        "rarity": "Good",
        "description": "This appears to be poop from a domesticated Wat. It is gross. You are gross.",
        "recipe": {
            "name": "Wat",
            "output_qty": 1,
            "type": "Pet",
            "ingredients": [{"name": "Glotus Berries", "qty": 2}, {"name": "Straddlebark", "qty": 1}]
        },
        "icon": "wuano.png"
    },
    "Squathe": {
        "name": "Squathe",
        "type": "Workstation",
        "rarity": "Normal",
        "description": "This workstation can handle all kinds of abuse! And it spins!",
        "recipe": {
            "name": "Chemworks",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Squee Husk", "qty": 24}, {
                "name": "Blastique",
                "qty": 5
            }, {"name": "Water Balloon", "qty": 15}]
        },
        "icon": "squathe.png"
    },
    "Squest": {
        "name": "Squest",
        "type": "Chest Armor",
        "level": "Level 7",
        "rarity": "Random",
        "description": "Level 7 chestplate. Sometimes you feel like a stud. This is one of those times.",
        "recipe": {
            "name": "Squathe",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Squee Husk", "qty": 10}, {
                "name": "Squee Barrel",
                "qty": 4
            }, {"name": "Whistleroot Reed", "qty": 17}, {"name": "Blastique", "qty": 3}]
        },
        "icon": "squest.png"
    },
    "Squittens": {
        "name": "Squittens",
        "type": "Gloves",
        "level": "Level 7",
        "rarity": "Random",
        "description": "Level 7 gloves. The palms are covered with a super sticky gripping surface.",
        "recipe": {
            "name": "Squathe",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Squee Husk", "qty": 11}, {
                "name": "Squee Barrel",
                "qty": 4
            }, {"name": "Glidopus Siphon", "qty": 12}]
        },
        "icon": "squittens.png"
    },
    "Squaps": {
        "name": "Squaps",
        "type": "Leg Armor",
        "level": "Level 7",
        "rarity": "Random",
        "description": "Level 7 boots. Theyre so tight you can see your rippling calves through the material.",
        "recipe": {
            "name": "Squathe",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Blastique", "qty": 3}, {"name": "Glidopus Siphon", "qty": 14}]
        },
        "icon": "squaps.png"
    },
    "Squask": {
        "name": "Squask",
        "type": "Helm",
        "level": "Level 7",
        "rarity": "Random",
        "description": "Level 7 helm. This complete covering will keep your head jelly intact.",
        "recipe": {
            "name": "Squathe",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Blastique", "qty": 4}, {"name": "Squee Husk", "qty": 15}, {
                "name": "Squee Barrel",
                "qty": 5
            }]
        },
        "icon": "squask.png"
    },
    "Squee Flooring": {
        "name": "Squee Flooring",
        "type": "Floor",
        "rarity": "Normal",
        "description": "Super absorbant and pleasing to the touch, Squee flooring can make a house out of even the dankest of dungeons!",
        "recipe": {
            "name": "Squathe",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Squee Barrel", "qty": 10}]
        },
        "icon": "squee_flooring.png"
    },
    "SqueeBop": {
        "name": "SqueeBop",
        "type": "Weapon",
        "level": "Level 7",
        "rarity": "Random",
        "description": "Level 7 weapon. Filling Squee barrels with Blastique makes for an incredibly unwieldy hammer. Fortunately, thats just your style.",
        "recipe": {
            "name": "Squathe",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Squee Husk", "qty": 17}, {"name": "Squee Barrel", "qty": 6}, {
                "name": "Blastique",
                "qty": 4
            }]
        },
        "icon": "squeebop.png"
    },
    "Savanna Fishing": {
        "name": "Savanna Fishing",
        "type": "Resource",
        "rarity": "Normal",
        "description": "This flurry of fish is easily frightened.",
        "icon": "savanna_fishing.png",
        "drop":["Deviltailed Slapper","Fatheaded Slurper","Pond Shoot","Ball Snail","Wobblygong"]
    },
    "Basic Fishing Pole": {
        "name": "Basic Fishing Pole",
        "type": "Tool",
        "level": "Tier 1",
        "rarity": "Normal",
        "description": "Tier 1 fishing pole. Tempt fish into the clutches of your shiny, deadly hook!",
        "recipe": {
            "name": "Squathe",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Squocoon", "qty": 2}, {"name": "Petrified Amber", "qty": 8}, {
                "name": "Stick",
                "qty": 10
            }]
        },
        "icon": "basic_fishing_pole.png"
    },
    "Deviltailed Slapper": {
        "name": "Deviltailed Slapper",
        "type": "Component",
        "rarity": "Normal",
        "description": "It seems to be giving you the evil eye.",
        "icon": "deviltailed_slapper.png"
    },
    "Fatheaded Slurper": {
        "name": "Fatheaded Slurper",
        "type": "Consumable",
        "rarity": "Normal",
        "description": "Its head is jiggly and full of some kind of squishy substance. It looks concerned about this. Restores 436 HP.",
        "icon": "fatheaded_slurper.png"
    },
    "Pond Shoot": {
        "name": "Pond Shoot",
        "type": "Component",
        "rarity": "Normal",
        "description": "Just a regular old piece of alien seaweed. Its extremely fibrous and tough.",
        "icon": "pond_shoot.png"
    },
    "Ball Snail": {
        "name": "Ball Snail",
        "type": "Component",
        "rarity": "Normal",
        "description": "It has one slimy appendage that occasionally pokes out from its shell to probe things... And it smells like potpourri.",
        "icon": "ball_snail.png"
    },
    "Thatched Wall": {
        "name": "Thatched Wall",
        "type": "Structure",
        "rarity": "Normal",
        "description": "Perfect for keeping the baddies away!",
        "recipe": {
            "name": "BS SSSS SS5",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Sawgrass Blade", "qty": 5}, {"name": "Stick", "qty": 5}]
        },
        "icon": "thatched_wall.png"
    },
    "Wobblygong": {
        "name": "Wobblygong",
        "type": "Weapon",
        "level": "Level 11",
        "rarity": "Epic",
        "description": "Level 11 weapon. Its not happy about being caught, but you might as well beat things with it.",
        "icon": "wobblygong.png"
    },
    "Kibweed": {
        "name": "Kibweed",
        "type": "Component",
        "rarity": "Normal",
        "description": "The local creatures are fascinated by this little plant.",
        "icon": "kibweed.png"
    },
    "Nitro": {
        "name": "Nitro",
        "type": "Component",
        "rarity": "Good",
        "description": "This compound burns your hand when you touch it. It also explodes when you touch it. Basically, dont touch it.",
        "recipe": {
            "name": "Chemworks",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Flatstone", "qty": 1}, {
                "name": "Gassak Gas Sack",
                "qty": 1
            }, {"name": "Wompit Milk", "qty": 1}]
        },
        "icon": "nitro.png"
    },
    "Glidopus Love Balloon": {
        "name": "Glidopus Love Balloon",
        "type": "Creature Catalyst",
        "rarity": "Superior",
        "description": "This perfect replica of a Glidopus should easily trick any reasonable Glidopus. Embiggens your Glidopus to POWERFUL SIZE!",
        "recipe": {
            "name": "Chemworks",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Glidopus Ink", "qty": 106}, {
                "name": "Water Balloon",
                "qty": 62
            }, {"name": "Bulbi", "qty": 11}, {"name": "Verdant Glidopus Essence", "qty": 13}]
        },
        "icon": "glidopus_love_balloon.png"
    },
    "Tartil Barrel": {
        "name": "Tartil Barrel",
        "type": "Creature Catalyst",
        "rarity": "Superior",
        "description": "This barrel is JUUUUST big enough to impress a Tartil of any size. Embiggens your Tartil to POWERFUL SIZE!",
        "recipe": {
            "name": "Fishiminea",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Squee Barrel", "qty": 37}, {
                "name": "Tartil Tongue",
                "qty": 15
            }, {"name": "Glotus Berries", "qty": 34}, {"name": "Filthy Tartil Essence", "qty": 11}]
        },
        "icon": "tartil_barrel.png"
    },
    "Sea Rope": {
        "name": "Sea Rope",
        "type": "Component",
        "rarity": "Good",
        "description": "With the power of weeds, you can tether anything to anything!",
        "recipe": {
            "name": "Fishiminea",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Pond Shoot", "qty": 1}, {"name": "Tartil Pitch", "qty": 1}]
        },
        "icon": "sea_rope.png"
    },
    "Pearl Scale": {
        "name": "Pearl Scale",
        "type": "Component",
        "rarity": "Good",
        "description": "Tough as snails and extremely shiny. You can think of some attractive people back home who wouldnt mind having some of this.",
        "recipe": {
            "name": "Fishiminea",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Ball Snail", "qty": 1}, {"name": "Glotus Berries", "qty": 1}]
        },
        "icon": "pearl_scale.png"
    },
    "Firecracker": {
        "name": "Firecracker",
        "type": "Bomb",
        "rarity": "Normal",
        "description": "Set everyone and everything on fire! Why? SHUT UP! Deals 200% of your DPS as a mixture of fire and physical damage.",
        "recipe": {
            "name": "Squathe",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Gassak Gas Sack", "qty": 3}, {"name": "Squee Barrel", "qty": 3}]
        },
        "icon": "firecracker.png"
    },
    "Poison Bomb": {
        "name": "Poison Bomb",
        "type": "Bomb",
        "rarity": "Normal",
        "description": "Nothing like the smell of putrid, deadly gases to get you under your desk in the morning. Deals 250% of your DPS as a mixture of poison and physical damage.",
        "recipe": {
            "name": "Fishiminea",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Glutterfly Wingdust", "qty": 3}, {
                "name": "Fatheaded Slurper",
                "qty": 3
            }, {"name": "Squee Husk", "qty": 3}]
        },
        "icon": "poison_bomb.png"
    },
    "Davy Lamp": {
        "name": "Davy Lamp",
        "type": "Trinket",
        "level": "Level 7",
        "rarity": "Superior",
        "description": "With this beautiful, ornate lamp at your side, you suddenly feel less afraid of fire. Grants +20% fire resistance.",
        "recipe": {
            "name": "Fishiminea",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Pearl Scale", "qty": 10}, {
                "name": "Tartil Firedamp",
                "qty": 4
            }, {"name": "Yellow Gem", "qty": 13}]
        },
        "icon": "davy_lamp.png"
    },
    "Flamethrower": {
        "name": "Flamethrower",
        "type": "Device",
        "rarity": "Superior",
        "description": "Theres nothing quite like the smell of burning in the any time of day or night. Deals 100% of your DPS as fire damage in an area.",
        "recipe": {
            "name": "Fishiminea",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Nitro", "qty": 3}, {
                "name": "Tartil Firedamp",
                "qty": 4
            }, {"name": "Petrified Amber", "qty": 34}]
        },
        "icon": "flamethrower.png"
    },
    "Stony Antidote": {
        "name": "Stony Antidote",
        "type": "Consumable",
        "rarity": "Good",
        "description": "It tastes of cashews. Also cleanses 1,378 poison from your body.",
        "recipe": {
            "name": "Hearth",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Flatstone", "qty": 3}, {"name": "Walker Blossom", "qty": 3}]
        },
        "icon": "stony_antidote.png"
    },
    "Stony Burn Salve": {
        "name": "Stony Burn Salve",
        "type": "Consumable",
        "rarity": "Good",
        "description": "Rub this bad boy all over your tender skin! Itll clear up 1,378 burn damage.",
        "recipe": {
            "name": "Hearth",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Flatstone", "qty": 3}, {"name": "Gassak Gas Sack", "qty": 3}]
        },
        "icon": "stony_burn_salve.png"
    },
    "Elixir of Luminescence": {
        "name": "Elixir of Luminescence",
        "type": "Consumable",
        "rarity": "Good",
        "description": "Rubbing this into your fleshy bod gives it a healthy glow! Elixir lasts 20 minutes.",
        "recipe": {
            "name": "Hearth",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Flatstone", "qty": 6}, {
                "name": "Glotus Berries",
                "qty": 2
            }, {"name": "Glow Juice", "qty": 2}, {"name": "Ancient Glutterfly Essence", "qty": 1}]
        },
        "icon": "elixir_of_luminescence.png"
    },
    "Fish Food": {
        "name": "Fish Food",
        "type": "Seed",
        "rarity": "Good",
        "description": "Placing this delicious treat in Savanna water will attract a new school of fish!",
        "recipe": {
            "name": "Fishiminea",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Gassakmeister", "qty": 1}, {
                "name": "Pond Shoot",
                "qty": 3
            }, {"name": "Glidopus Larva", "qty": 1}]
        },
        "icon": "fish_food.png"
    },
    "Stony Health Potion": {
        "name": "Stony Health Potion",
        "type": "Consumable",
        "rarity": "Good",
        "description": "Made from the finest fatheads, this potion will cure what ails you, so long as what ails you is near-death. Restores 638 HP.",
        "recipe": {
            "name": "Hearth",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Flatstone", "qty": 3}, {"name": "Fatheaded Slurper", "qty": 3}]
        },
        "icon": "stony_health_potion.png"
    },
    "Pearlscale Sword": {
        "name": "Pearlscale Sword",
        "type": "Weapon",
        "level": "Level 9",
        "rarity": "Random",
        "description": "Level 9 weapon. Its hooked shape is inspired by its origins!",
        "recipe": {
            "name": "Fishiminea",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Pearl Scale", "qty": 3}, {"name": "Sea Rope", "qty": 2}, {
                "name": "Tartil Tongue",
                "qty": 3
            }]
        },
        "icon": "pearlscale_sword.png"
    },
    "Pearlhat": {
        "name": "Pearlhat",
        "type": "Helm",
        "level": "Level 9",
        "rarity": "Random",
        "description": "Level 9 helm. Pointy, tough, and royal as F... fish.",
        "recipe": {
            "name": "Fishiminea",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Pearl Scale", "qty": 2}, {
                "name": "Tartil Tongue",
                "qty": 2
            }, {"name": "Petrified Amber", "qty": 6}, {"name": "Sea Rope", "qty": 2}]
        },
        "icon": "pearlhat.png"
    },
    "Pearlpants": {
        "name": "Pearlpants",
        "type": "Leg Armor",
        "level": "Level 9",
        "rarity": "Random",
        "description": "Level 9 boots. Their shiny sheen really brings out the definition in your thighs.",
        "recipe": {
            "name": "Fishiminea",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Pearl Scale", "qty": 2}, {
                "name": "Tartil Tongue",
                "qty": 2
            }, {"name": "Petrified Amber", "qty": 5}]
        },
        "icon": "pearlpants.png"
    },
    "Pearlgloves": {
        "name": "Pearlgloves",
        "type": "Gloves",
        "level": "Level 9",
        "rarity": "Random",
        "description": "Level 9 gloves. Your hands have never been so scaly.",
        "recipe": {
            "name": "Fishiminea",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Pearl Scale", "qty": 2}, {"name": "Pond Shoot", "qty": 2}, {
                "name": "Sea Rope",
                "qty": 2
            }]
        },
        "icon": "pearlgloves.png"
    },
    "Pearlplate": {
        "name": "Pearlplate",
        "type": "Chest Armor",
        "level": "Level 9",
        "rarity": "Random",
        "description": "Level 9 chestplate. It protects your sternum from pokes, and it looks fabulous, too!",
        "recipe": {
            "name": "Fishiminea",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Pearl Scale", "qty": 2}, {
                "name": "Tartil Tongue",
                "qty": 2
            }, {"name": "Petrified Amber", "qty": 5}, {"name": "Sea Rope", "qty": 2}]
        },
        "icon": "pearlplate.png"
    },
    "The Butterfly": {
        "name": "The Butterfly",
        "type": "Weapon",
        "level": "Level 11",
        "rarity": "Legendary",
        "description": "Level 11 legendary weapon. A lot of time, love, blood, sweat, and amber went into this. WORTH IT.",
        "recipe": {
            "name": "Fishiminea",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Oddly Shaped Crystal", "qty": 1}, {
                "name": "Nitro",
                "qty": 3
            }, {"name": "Blastique", "qty": 16}]
        },
        "icon": "the_butterfly.png"
    },
    "Wooden Chest": {
        "name": "Wooden Chest",
        "type": "Chest",
        "rarity": "Normal",
        "description": "WOOD CHEST IS GOOD CHEST.",
        "icon": "wooden_chest.png"
    },
    "Stone Bed": {
        "name": "Stone Bed",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "A fine place for a quick snooze. Legends say that while youre asleep, all of your health is restored.",
        "recipe": {
            "name": "Stoneshaper",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Flatstone", "qty": 20}, {"name": "Sawgrass Leaf", "qty": 8}]
        },
        "icon": "stone_bed.png"
    },
    "Zug Shell": {
        "name": "Zug Shell",
        "type": "Component",
        "rarity": "Normal",
        "description": "It seems you can carefully pry the tough, outer shell off a Zug by stabbing it or beating it to death. SCIENCEY!",
        "icon": "zug_shell.png"
    },
    "Zug Sparkplug": {
        "name": "Zug Sparkplug",
        "type": "Component",
        "rarity": "Normal",
        "description": "When Zuglings are approaching maturity, they build their own sparkplugs by hand, and then surgically insert them into their own shells. Its a cultural rite of passage type thing. You wouldnt understand.",
        "icon": "zug_sparkplug.png"
    },
    "Zug Kneecap": {
        "name": "Zug Kneecap",
        "type": "Component",
        "rarity": "Normal",
        "description": "Zugs have incredibly sophisticated kneecaps, rivaling the technology of a whole bunch of other stuff, like human kneecaps.",
        "icon": "zug_kneecap.png"
    },
    "Charged Zug Molt": {
        "name": "Charged Zug Molt",
        "type": "Component",
        "rarity": "Good",
        "description": "When a domesticated Zug is overfed, it has to shed its skin. It shocks you every time you touch it!",
        "recipe": {
            "name": "Zug",
            "output_qty": 1,
            "type": "Pet",
            "ingredients": [{"name": "Fatheaded Slurper", "qty": 2}, {"name": "Dusk Dust", "qty": 1}]
        },
        "icon": "charged_zug_molt.png"
    },
    "Shellfinger Pick": {
        "name": "Shellfinger Pick",
        "type": "Tool",
        "level": "Tier 2",
        "rarity": "Normal",
        "description": "Tier 2 pickaxe. Jamming a Wat finger into a Zug shell seemed like a good idea at the time. AND IT STILL DOES! This thing can break through Dusk crystals!",
        "recipe": {
            "name": "Fishiminea",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Watfinger", "qty": 2}, {"name": "Zug Shell", "qty": 16}, {
                "name": "Pickaxe",
                "qty": 1
            }, {"name": "Pearl Scale", "qty": 2}]
        },
        "icon": "shellfinger_pick.png"
    },
    "Crystal Kiln": {
        "name": "Crystal Kiln",
        "type": "Workstation",
        "rarity": "Normal",
        "description": "Dusk Crystals can withstand a tremendous amount of heat, which makes them perfect for CONTAINING TREMENDOUS AMOUNTS OF HEAT!",
        "recipe": {
            "name": "Fishiminea",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Dusk Shard", "qty": 5}, {"name": "Nitro", "qty": 1}, {
                "name": "Zug Shell",
                "qty": 24
            }, {"name": "Wat Wing", "qty": 8}]
        },
        "icon": "crystal_kiln.png"
    },
    "Dusk Prism": {
        "name": "Dusk Prism",
        "type": "Component",
        "rarity": "Good",
        "description": "When hammered into a triangular shape and infused with the souls of Glidopus babies, Dusk Crystals sure make one heck of a prism!",
        "recipe": {
            "name": "Crystal Kiln",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Dusk Shard", "qty": 1}, {"name": "Glidopus Larva", "qty": 1}]
        },
        "icon": "dusk_prism.png"
    },
    "ZuglaBall": {
        "name": "ZuglaBall",
        "type": "Creature Catalyst",
        "rarity": "Superior",
        "description": "Zugs are attracted by the allure of anything electrical. This Tesla ball is sure to impress! Embiggens your Zug to POWERFUL SIZE!",
        "recipe": {
            "name": "Crystal Kiln",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Dusk Shard", "qty": 26}, {
                "name": "Zug Sparkplug",
                "qty": 17
            }, {"name": "Zug Lug Essence", "qty": 13}, {"name": "Zug Kneecap", "qty": 74}]
        },
        "icon": "zuglaball.png"
    },
    "Wat Bat": {
        "name": "Wat Bat",
        "type": "Creature Catalyst",
        "rarity": "Superior",
        "description": "Wats are renowned for their love of sports! Embiggens your Wat to POWERFUL SIZE!",
        "recipe": {
            "name": "Crystal Kiln",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Wat Wing", "qty": 43}, {
                "name": "GrandWat Essence",
                "qty": 8
            }, {"name": "Watfinger", "qty": 15}, {"name": "Dusk Dust", "qty": 9}]
        },
        "icon": "wat_bat.png"
    },
    "Dusk Seed": {
        "name": "Dusk Seed",
        "type": "Seed",
        "rarity": "Good",
        "description": "By combining a Dusk crystal with some other odds and ends, youve been able to seed the growth of a Dusk Crystal formation!",
        "recipe": {
            "name": "Crystal Kiln",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Dusk Dust", "qty": 1}, {"name": "Water Balloon", "qty": 1}]
        },
        "icon": "dusk_seed.png"
    },
    "Writable Sign": {
        "name": "Writable Sign",
        "type": "Sign",
        "rarity": "Normal",
        "description": "A sign you can write on! With this, you can label areas on your map. ITS REVOLUTIONARY!",
        "recipe": {
            "name": "Crystal Kiln",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Dusk Shard", "qty": 1}, {"name": "Glotus Berries", "qty": 1}]
        },
        "icon": "writable_sign.png"
    },
    "Elixir of Bulging Biceps": {
        "name": "Elixir of Bulging Biceps",
        "type": "Consumable",
        "rarity": "Good",
        "description": "Everybody knows that the bigger your biceps, the harder you hit stuff. Improves damage dealt by 5%. Elixir lasts 20 minutes.",
        "recipe": {
            "name": "Cauldron",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Sagtatoe", "qty": 1}, {"name": "Blood Louse", "qty": 1}, {
                "name": "Vampry",
                "qty": 1
            }, {"name": "Burnt Snorble Essence", "qty": 1}]
        },
        "icon": "elixir_of_bulging_biceps.png"
    },
    "Crystal Floor": {
        "name": "Crystal Floor",
        "type": "Floor",
        "rarity": "Normal",
        "description": "Its one of the toughest and rarest materials in the Savanna. So... what better way to use a Dusk Crystal than to WALK ALL OVER IT?",
        "recipe": {
            "name": "Crystal Kiln",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Dusk Shard", "qty": 10}]
        },
        "icon": "crystal_floor.png"
    },
    "Crystal Axe": {
        "name": "Crystal Axe",
        "type": "Weapon",
        "level": "Level 11",
        "rarity": "Random",
        "description": "Level 11 weapon. Dusk Crystals are extremely sharp when broken up into pieces. Makes for a great STAB!",
        "recipe": {
            "name": "Crystal Kiln",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Zug Shell", "qty": 22}, {"name": "Dusk Shard", "qty": 5}, {
                "name": "Wat Fur Tuft",
                "qty": 13
            }]
        },
        "icon": "crystal_axe.png"
    },
    "Duskhelm": {
        "name": "Duskhelm",
        "type": "Helm",
        "level": "Level 11",
        "rarity": "Random",
        "description": "Level 11 helm. The sparkplugs energize your brain and help you to think more clearly!",
        "recipe": {
            "name": "Crystal Kiln",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Dusk Shard", "qty": 3}, {
                "name": "Zug Sparkplug",
                "qty": 2
            }, {"name": "Wat Fur Tuft", "qty": 9}, {"name": "Charged Zug Molt", "qty": 1}]
        },
        "icon": "duskhelm.png"
    },
    "Duskjacket": {
        "name": "Duskjacket",
        "type": "Chest Armor",
        "level": "Level 11",
        "rarity": "Random",
        "description": "Level 11 chestplate. The crystal creates a nice, reflective surface that really accentuates your curves.",
        "recipe": {
            "name": "Crystal Kiln",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Dusk Shard", "qty": 3}, {"name": "Zug Shell", "qty": 14}, {
                "name": "Straddlebark",
                "qty": 1
            }, {"name": "Wat Fur Tuft", "qty": 8}]
        },
        "icon": "duskjacket.png"
    },
    "Duskpants": {
        "name": "Duskpants",
        "type": "Leg Armor",
        "level": "Level 11",
        "rarity": "Random",
        "description": "Level 11 pants. Theyre pretty stiff, but you figure youll make it work.",
        "recipe": {
            "name": "Crystal Kiln",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Dusk Shard", "qty": 3}, {
                "name": "Zug Kneecap",
                "qty": 6
            }, {"name": "Wat Fur Tuft", "qty": 7}]
        },
        "icon": "duskpants.png"
    },
    "Duskmitts": {
        "name": "Duskmitts",
        "type": "Gloves",
        "level": "Level 11",
        "rarity": "Random",
        "description": "Level 11 gloves. The extra layer of Wat fur really helps keep your sensitive elbows warm!",
        "recipe": {
            "name": "Crystal Kiln",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Dusk Shard", "qty": 3}, {"name": "Wat Wing", "qty": 5}, {
                "name": "Wat Fur Tuft",
                "qty": 9
            }]
        },
        "icon": "duskmitts.png"
    },
    "Crystal Wall": {
        "name": "Crystal Wall",
        "type": "Structure",
        "rarity": "Normal",
        "description": "These crystalline walls are very... ACOUSTIC. You can hear your own voice echoing back when youre near them.",
        "recipe": {
            "name": "Crystal Kiln",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Dusk Shard", "qty": 5}]
        },
        "icon": "crystal_wall.png"
    },
    "Crystal Door": {
        "name": "Crystal Door",
        "type": "Structure",
        "rarity": "Normal",
        "description": "Square doors make for a better seal, but KEEP AN EYE OUT FOR YOUR SHINS.",
        "recipe": {
            "name": "Crystal Kiln",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Dusk Shard", "qty": 2}]
        },
        "icon": "crystal_door.png"
    },
    "Potted Kibweed": {
        "name": "Potted Kibweed",
        "type": "Potted Plant",
        "rarity": "Normal",
        "description": "Its always good to maintain a self-replenishing stock of Kibweed to keep your creatures happy.",
        "recipe": {
            "name": "Stoneshaper",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Kibweed", "qty": 1}, {"name": "Log", "qty": 8}]
        },
        "icon": "potted_kibweed.png"
    },
    "Potted Sunshroom": {
        "name": "Potted Sunshroom",
        "type": "Potted Plant",
        "rarity": "Normal",
        "description": "Be sure to keep it in a shady place! Ah, who am I kidding? There is no shade on this planet. Put it wherever you want.",
        "recipe": {
            "name": "Stoneshaper",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Sunshroom", "qty": 3}, {"name": "Flatstone", "qty": 8}]
        },
        "icon": "potted_sunshroom.png"
    },
    "Potted Bulbi": {
        "name": "Potted Bulbi",
        "type": "Potted Plant",
        "rarity": "Normal",
        "description": "Its always good to keep a stockpile of Bulbi around. You know... for medicinal purposes.",
        "recipe": {
            "name": "Crystal Kiln",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Bulbi", "qty": 1}, {"name": "Dusk Shard", "qty": 2}]
        },
        "icon": "potted_bulbi.png"
    },
    "Glorb": {
        "name": "Glorb",
        "type": "Trinket",
        "rarity": "Good",
        "description": "You can take it as well as you can dish it out! Provides 5% chance to poison enemies and 5% poison resistance.",
        "recipe": {
            "name": "Chemworks",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Log", "qty": 58}, {
                "name": "Glow Juice",
                "qty": 16
            }, {"name": "Glutterfly Wingdust", "qty": 3}, {"name": "Water Balloon", "qty": 27}]
        },
        "icon": "glorb.png"
    },
    "Anger Omelet": {
        "name": "Anger Omelet",
        "type": "Creature Food",
        "rarity": "Normal",
        "description": "Your pets will love the spicy deliciousness so much, theyll go into a murderous rampage! 50% pet damage boost for 3 minutes.",
        "recipe": {
            "name": "Hearth",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Bumpberry", "qty": 1}, {
                "name": "Kibweed",
                "qty": 1
            }, {"name": "Sterling Wompit Essence", "qty": 1}]
        },
        "icon": "anger_omelet.png"
    },
    "Potted Bumpberry": {
        "name": "Potted Bumpberry",
        "type": "Potted Plant",
        "rarity": "Normal",
        "description": "Bumpberries are pretty rare. Itd be a good idea to keep a few pots of them around!",
        "recipe": {
            "name": "Stoneshaper",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Bumpberry", "qty": 1}, {"name": "Flatstone", "qty": 8}]
        },
        "icon": "potted_bumpberry.png"
    },
    "Blegh": {
        "name": "Blegh",
        "type": "Resource",
        "rarity": "Normal",
        "description": "The pods grown on this fork-shaped plant are full of an aromatic goo that burns like crazy when you rub it all over yourself.",
        "icon": "blegh.png",
        "drop": ["Bleghpod"]
    },
    "Artree": {
        "name": "Artree",
        "type": "Resource",
        "rarity": "Normal",
        "description": "Although it looks like a plant, the Artree is definitely connected to the vascular system of the Bawg.",
        "icon": "artree.png",
        "drop": ["Sagtatoe","Blube","Blood Louse","Artree Seed"]
    },
    "Clossom": {
        "name": "Clossom",
        "type": "Consumable",
        "rarity": "Normal",
        "description": "Some kind of hybrid between a living claw and an Agave-like plant, this taco-meat-flavored organism may very well restore 1,560 HP.",
        "icon": "clossom.png"
    },
    "Thrombyte": {
        "name": "Thrombyte",
        "type": "Resource",
        "rarity": "Normal",
        "description": "This large blister is JAM-PACKED full of a succulent fluid! Itll take a lot of vigorous pumping to get it all out.",
        "icon": "thrombyte.png"
    },
    "Pyn": {
        "name": "Pyn",
        "type": "Consumable",
        "rarity": "Normal",
        "description": "This parasitic creature feeds on the life force of the Bawg. TIME FOR PAYBACK! Restores 2,234 HP when eaten.",
        "icon": "pyn.png"
    },
    "Bloo": {
        "name": "Bloo",
        "type": "Component",
        "rarity": "Normal",
        "description": "Whenever you stand near a Jollychomp with one of these tick-like creatures in hand, the Jollychomp seems very interested.",
        "icon": "bloo.png"
    },
    "Bone Spur": {
        "name": "Bone Spur",
        "type": "Resource",
        "rarity": "Normal",
        "description": "These spurs appear to be quite painful to the Bawg. Youd be doing it a favor by removing them.",
        "icon": "bone_spur.png",
        "drop":["Spur Gum","Grenamel","Spur Gold","Spur Seed"]
    },
    "Nurva": {
        "name": "Nurva",
        "type": "Resource",
        "rarity": "Normal",
        "description": "Nurva are the dendrites of neurons that have somehow managed to protrude from the flesh of the Bawg. They crackle with electricity!",
        "icon": "nurva.png",
        "drop": ["Nurvaxon","Myelar","Dendrite Spine","Nurva Seed"]
    },
    "Bawg Hair": {
        "name": "Bawg Hair",
        "type": "Resource",
        "rarity": "Normal",
        "description": "Just a regular, ordinary, person-sized strand of hair.",
        "icon": "bawg_hair.png",
        "drop": ["Split End","Hairbark","Hair Louse","Haircone"]
    },
    "Tuber": {
        "name": "Tuber",
        "type": "Resource",
        "rarity": "Normal",
        "description": "These plants grow deep within the tissue of the Bawg. In many ways, theyre a lot like potatoes. In many other ways, theyre absolutely nothing like potatoes.",
        "icon": "tuber.png",
        "drop": ["Extracted Tuber"]
    },
    "Pikkaye": {
        "name": "Pikkaye",
        "type": "Resource",
        "rarity": "Normal",
        "description": "This fingery creature/plant repeatedly grows bulbous red pustules that taste a bit like cherries. It flinches when you pick them.",
        "icon": "pikkaye.png",
        "drop":["Ayeayes"]
    },
    "Giantbone Helm": {
        "name": "Giantbone Helm",
        "type": "Helm",
        "level": "Level 12",
        "rarity": "Legendary",
        "description": "Level 12 Helm. After painstakingly finding the sturdiest giant skull around, youve assembled what many would consider to be... a fantastic hat.",
        "recipe": {
            "name": "Fishiminea",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Giant Fossilized Skull", "qty": 1}, {
                "name": "Tartil Firedamp",
                "qty": 4
            }, {"name": "Pearl Scale", "qty": 10}]
        },
        "icon": "giantbone_helm.png"
    },
    "Splinter": {
        "name": "Splinter",
        "type": "Resource",
        "rarity": "Normal",
        "description": "This large fragment of matter can be found firmly lodged in the flesh of the Bawg. Removing splinters seems to make the Bawg very happy.",
        "icon": "splinter.png"
    },
    "Tusker": {
        "name": "Tusker",
        "type": "Consumable",
        "rarity": "Normal",
        "description": "This little growth is absolutely bursting with fruity flavors. MMMMM! Restores 591 HP.",
        "icon": "tusker.png"
    },
    "Jollychomp": {
        "name": "Jollychomp",
        "type": "Resource",
        "rarity": "Normal",
        "description": "These smiley little guys like to hang out in groups, and theyre always hungry. If you feed them, they give you something in return!",
        "icon": "jollychomp.png",
        "drop": ["Jolly Gastrolith","Jolly","Jolly Fulmar","Spood Beast","Jollybab"]
    },
    "Satgat Exoskeleton": {
        "name": "Satgat Exoskeleton",
        "type": "Component",
        "rarity": "Normal",
        "description": "After being forcibly removed from a Satgats body, the exoskeleton glows for a while and makes loud humming noises. It makes you very uncomfortable.",
        "icon": "satgat_exoskeleton.png"
    },
    "Satgat Chemoreceptors": {
        "name": "Satgat Chemoreceptors",
        "type": "Component",
        "rarity": "Good",
        "description": "If you touch both ends of it to your tongue, it shocks you. But it tastes really good, so its probably worth it.",
        "icon": "satgat_chemoreceptors.png"
    },
    "Satgat Silk": {
        "name": "Satgat Silk",
        "type": "Component",
        "rarity": "Good",
        "description": "Harvested from the silkparts of a domesticated Satgat. Its so ridiculously soft, you could probably make a very expensive pair of underpants from it!",
        "recipe": {
            "name": "Satgat",
            "output_qty": 1,
            "type": "Pet",
            "ingredients": [{"name": "Vampry", "qty": 1}, {"name": "Sagtatoe", "qty": 1}, {
                "name": "Snorble Skin",
                "qty": 2
            }]
        },
        "icon": "satgat_silk.png"
    },
    "Satgat Flesh": {
        "name": "Satgat Flesh",
        "type": "Component",
        "rarity": "Normal",
        "description": "Although Satgats have very hard shells, their flesh is soft and tender. Like a clam, only more adorable.",
        "icon": "satgat_flesh.png"
    },
    "Snorble Airsak": {
        "name": "Snorble Airsak",
        "type": "Component",
        "rarity": "Normal",
        "description": "When you squeeze it, it lets out a dramatically loud, fart-like sound. This would work well for pranks, if you werent the only human on this entire planet.",
        "icon": "snorble_airsak.png"
    },
    "Snorble Mucusak": {
        "name": "Snorble Mucusak",
        "type": "Component",
        "rarity": "Good",
        "description": "Snorbles use these as a form of currency. If you treat a domesticated Snorble well, it might give you one!",
        "recipe": {
            "name": "Snorble",
            "output_qty": 1,
            "type": "Pet",
            "ingredients": [{"name": "Extracted Tuber", "qty": 1}, {"name": "Thrombyte Fibrin", "qty": 2}]
        },
        "icon": "snorble_mucusak.png"
    },
    "Snorble Skin": {
        "name": "Snorble Skin",
        "type": "Component",
        "rarity": "Normal",
        "description": "Its really rough on one side, but on the other side its gross and wet. This is bit of a no-win situation, really.",
        "icon": "snorble_skin.png"
    },
    "Snorble Uvula": {
        "name": "Snorble Uvula",
        "type": "Component",
        "rarity": "Normal",
        "description": "The Snorbles uvula is a very delicate thing, because it contains the Snorbles third brain stem. It shies away from you when you try to poke it with a stick.",
        "icon": "snorble_uvula.png"
    },
    "Throak Fluoros": {
        "name": "Throak Fluoros",
        "type": "Component",
        "rarity": "Normal",
        "description": "This sticky substance is extremely smelly, and it would probably kill you if you covered yourself with it and set yourself on fire.",
        "icon": "throak_fluoros.png"
    },
    "Throak Jelly": {
        "name": "Throak Jelly",
        "type": "Component",
        "rarity": "Good",
        "description": "This ball of goo was extracted from the body of a domesticated Throak. It wobbles perpetually without stopping!",
        "recipe": {
            "name": "Throak",
            "output_qty": 1,
            "type": "Pet",
            "ingredients": [{"name": "Bleghpod", "qty": 1}, {"name": "Myelar", "qty": 2}]
        },
        "icon": "throak_jelly.png"
    },
    "Throak Nematocyte": {
        "name": "Throak Nematocyte",
        "type": "Component",
        "rarity": "Normal",
        "description": "This enlarged cell body contains a huge volume of chemicals that can be used to freeze things, slowing them down tremendously. If you lick it, your tongue freezes to it.",
        "icon": "throak_nematocyte.png"
    },
    "Throak Polyp": {
        "name": "Throak Polyp",
        "type": "Component",
        "rarity": "Normal",
        "description": "This seems to be the baby version of a Throak. Its not very adorable.",
        "icon": "throak_polyp.png"
    },
    "Throak Tentacle": {
        "name": "Throak Tentacle",
        "type": "Component",
        "rarity": "Normal",
        "description": "It seems to stay alive even when separated from the Throaks body. Its almost as if its an entirely separate creature.",
        "icon": "throak_tentacle.png"
    },
    "Jolly Gastrolith": {
        "name": "Jolly Gastrolith",
        "type": "Component",
        "rarity": "Normal",
        "description": "Jollychomps eat these hard stones and use them to grind up whatever they eat. They even use the stones to somehow convert food into other useful materials!",
        "icon": "jolly_gastrolith.png"
    },
    "Jolly Fulmar": {
        "name": "Jolly Fulmar",
        "type": "Component",
        "rarity": "Normal",
        "description": "Jollies are capable of spitting these balls of sticky, disgusting goo at predators to keep them away. It rarely works.",
        "icon": "jolly_fulmar.png"
    },
    "Jollybab": {
        "name": "Jollybab",
        "type": "Seed",
        "rarity": "Good",
        "description": "This tiny Jollychomp appears to be a baby. They must somehow lose their eyes when they reach adulthood. This makes no sense, but it must work for them.",
        "icon": "jollybab.png"
    },
    "Jolly": {
        "name": "Jolly",
        "type": "Component",
        "rarity": "Normal",
        "description": "This tasty treat is belched out of the mouth of a Jollychomp under the right conditions. It smells and tastes fruity-licious!",
        "icon": "jolly.png"
    },
    "Thrombyte Fibrin": {
        "name": "Thrombyte Fibrin",
        "type": "Component",
        "rarity": "Good",
        "description": "Powering up your Thrombopump with a few components from the Bawg allows you to extract these tough fibers. Salty!",
        "recipe": {
            "name": "Thrombopump",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Bloo", "qty": 3}, {"name": "Vlap", "qty": 3}]
        },
        "icon": "thrombyte_fibrin.png"
    },
    "Extracted Tuber": {
        "name": "Extracted Tuber",
        "type": "Component",
        "rarity": "Good",
        "description": "This little creature grows out of the enlarged pores of the Bawg. It doesnt seem happy to be removed from its home, but you obviously dont care.",
        "icon": "extracted_tuber.png"
    },
    "Luminalgae": {
        "name": "Luminalgae",
        "type": "Component",
        "rarity": "Good",
        "description": "This plant-like organism somehow thrives in the acidic pools of the Bawg. It turns the acid into a bioluminescent glow, which it uses to lure in unsuspecting Plonktans to eat.",
        "icon": "luminalgae.png"
    },
    "Coral Tubes": {
        "name": "Coral Tubes",
        "type": "Component",
        "rarity": "Good",
        "description": "Tiny creatures are living inside these tubes. They dont like being out of the Bawgs acid, but you dont really care.",
        "icon": "coral_tubes.png"
    },
    "Skeletonized Fathead": {
        "name": "Skeletonized Fathead",
        "type": "Consumable",
        "rarity": "Normal",
        "description": "The acid of the Bawg has purified the healing essence of this Fathead. Restores 2,234 HP!",
        "icon": "skeletonized_fathead.png"
    },
    "Vampry": {
        "name": "Vampry",
        "type": "Component",
        "rarity": "Good",
        "description": "Vampries attach themselves onto anything that dips its toe into the water. Their barbed teeth make them very difficult to pry off. Fortunately, theyre ticklish.",
        "icon": "vampry.png"
    },
    "Plonktan": {
        "name": "Plonktan",
        "type": "Component",
        "rarity": "Superior",
        "description": "This enormous tiny sea creature just floats around and gets eaten by things. It has a very stupid life.",
        "icon": "plonktan.png"
    },
    "Nurvaxon": {
        "name": "Nurvaxon",
        "type": "Component",
        "rarity": "Normal",
        "description": "The long, slender axon of a Nurva. It conducts electricity really well, but its terrible at baking cakes.",
        "icon": "nurvaxon.png"
    },
    "Dendrite Spine": {
        "name": "Dendrite Spine",
        "type": "Component",
        "rarity": "Normal",
        "description": "This projection of a Nurva is used to poke the eyes of things that wander nearby. As you look closer at it, it pokes you in the eye. Youre not sure what you expected.",
        "icon": "dendrite_spine.png"
    },
    "Myelar": {
        "name": "Myelar",
        "type": "Component",
        "rarity": "Normal",
        "description": "This styrofoam-like tissue can be ripped from Nurvas, and it makes for great electrical insulation!",
        "icon": "myelar.png"
    },
    "Nurva Seed": {
        "name": "Nurva Seed",
        "type": "Seed",
        "rarity": "Good",
        "description": "This little pod can be jammed into the flesh of the Bawg to grow new Nurva. Its odd when you think about it, so you stop thinking about it.",
        "icon": "nurva_seed.png"
    },
    "Jackagong": {
        "name": "Jackagong",
        "type": "Weapon",
        "level": "Level 21",
        "rarity": "Epic",
        "description": "Level 21 Axe. You arent sure which end to hold this thing by. Its pretty pointy no matter how you approach it.",
        "icon": "jackagong.png"
    },
    "Bamstache": {
        "name": "Bamstache",
        "type": "Component",
        "rarity": "Normal",
        "description": "The legendary moustache of a Bamli. When you peer into it, you can see your own soul reflected back at you.",
        "icon": "bamstache.png"
    },
    "Bamli Horn": {
        "name": "Bamli Horn",
        "type": "Component",
        "rarity": "Normal",
        "description": "You removed this horn forcibly from a Bamlis head. It was pretty horrifying. Youre a monster.",
        "icon": "bamli_horn.png"
    },
    "Bamli Flightbladder": {
        "name": "Bamli Flightbladder",
        "type": "Component",
        "rarity": "Normal",
        "description": "To aid in flight, the Bamli inflates its Flightbladder with absolutely nothing. Once the bladder is inflated, the Bamli becomes buoyant in the air and soars like a majestic eagle.",
        "icon": "bamli_flightbladder.png"
    },
    "Painsulin": {
        "name": "Painsulin",
        "type": "Component",
        "rarity": "Good",
        "description": "The domesticated Bamli produces an excessive amount of this hormone. Its unclear what its for.",
        "recipe": {
            "name": "Bamli",
            "output_qty": 1,
            "type": "Pet",
            "ingredients": [{"name": "Spur Gum", "qty": 1}, {"name": "Pyn", "qty": 3}]
        },
        "icon": "painsulin.png"
    },
    "Vompole": {
        "name": "Vompole",
        "type": "Component",
        "rarity": "Normal",
        "description": "An unexploded Vomma baby. It adorably tries to tear your arm off whenever you pet it. Babies are so cute.",
        "icon": "vompole.png"
    },
    "Vlap": {
        "name": "Vlap",
        "type": "Component",
        "rarity": "Normal",
        "description": "Vomma are covered with these fleshy flaps. Their primary purpose seems to be for decoration. Lady Vommas love a man with big flaps.",
        "icon": "vlap.png"
    },
    "Boba": {
        "name": "Boba",
        "type": "Component",
        "rarity": "Good",
        "description": "Domesticated Vomma produce these tasty balls of gelatin on a regular basis. They remind you a lot of tapioka.",
        "recipe": {
            "name": "Vomma",
            "output_qty": 1,
            "type": "Pet",
            "ingredients": [{"name": "Bloo", "qty": 2}, {"name": "Tusker", "qty": 1}]
        },
        "icon": "boba.png"
    },
    "Vomma Babymaker": {
        "name": "Vomma Babymaker",
        "type": "Component",
        "rarity": "Normal",
        "description": "This is where Vomma babies are made. Youre not sure why you felt compelled to pick it up and carry it around.",
        "icon": "vomma_babymaker.png"
    },
    "Bawg Fishing": {
        "name": "Bawg Fishing",
        "type": "Resource",
        "rarity": "Normal",
        "description": "Something is moving around under all that acid...",
        "icon": "bawg_fishing.png",
        "drop": ["Vampry","Skeletonized Fathead","Coral Tubes","Plonktan","Luminalgae","Jackagong"]
    },
    "Blube": {
        "name": "Blube",
        "type": "Component",
        "rarity": "Normal",
        "description": "This tube carries a blue liquid around inside the Bawg. Its really stretchy and rubbery. You could probably whip something really hard with it!",
        "icon": "blube.png"
    },
    "Blood Louse": {
        "name": "Blood Louse",
        "type": "Component",
        "rarity": "Good",
        "description": "This little guy latches onto Blubes and drinks the blood of the Bawg. Its pretty gross, but he doesnt seem too concerned.",
        "icon": "blood_louse.png"
    },
    "Sagtatoe": {
        "name": "Sagtatoe",
        "type": "Component",
        "rarity": "Normal",
        "description": "Plucked from the branches of an Artree, this potato-shaped saggy sack seems to be full of fat.",
        "icon": "sagtatoe.png"
    },
    "Artree Seed": {
        "name": "Artree Seed",
        "type": "Seed",
        "rarity": "Good",
        "description": "By plunging this into the Bawgs flesh, you can foster the growth of new Artrees. Which you can then stab repeatedly with sharp tools.",
        "icon": "artree_seed.png"
    },
    "Bleghpod": {
        "name": "Bleghpod",
        "type": "Component",
        "rarity": "Normal",
        "description": "After prying this from the clutches of a vicious Blegh, you are able to examine it up-close. You have concluded that it is bumpy.",
        "icon": "bleghpod.png"
    },
    "Hairbark": {
        "name": "Hairbark",
        "type": "Component",
        "rarity": "Normal",
        "description": "Much like the bark of a tree, the bark of the Bawgs gigantic hairs is tough and dry. It appears to be flammable, but it would probably smell terrible to burn it.",
        "icon": "hairbark.png"
    },
    "Split End": {
        "name": "Split End",
        "type": "Component",
        "rarity": "Normal",
        "description": "The Bawg has apparently never heard of conditioner.",
        "icon": "split_end.png"
    },
    "Ayeayes": {
        "name": "Ayeayes",
        "type": "Component",
        "rarity": "Normal",
        "description": "This was given to you by a friendly Pikkaye. Yes, thats right. Given.",
        "icon": "ayeayes.png"
    },
    "Hair Louse": {
        "name": "Hair Louse",
        "type": "Component",
        "rarity": "Normal",
        "description": "This thing was burrowed deep inside a giant hair. It makes you feel itchy just looking at it.",
        "icon": "hair_louse.png"
    },
    "Spur Gold": {
        "name": "Spur Gold",
        "type": "Component",
        "rarity": "Good",
        "description": "Somehow, those giant spurs sticking out of the Bawg are able to develop gold chunks inside of them. You should investigate this further, for science.",
        "icon": "spur_gold.png"
    },
    "Grenamel": {
        "name": "Grenamel",
        "type": "Component",
        "rarity": "Normal",
        "description": "You were able to break this off of a spur. Its a very tough, shell-like thing, and its super shiny. It would look cool to have a car made of this.",
        "icon": "grenamel.png"
    },
    "Spur Gum": {
        "name": "Spur Gum",
        "type": "Component",
        "rarity": "Normal",
        "description": "You managed to tear this off the foundation of a Spur before you destroyed it. Kind of like a dentist.",
        "icon": "spur_gum.png"
    },
    "Wojack Cilia": {
        "name": "Wojack Cilia",
        "type": "Component",
        "rarity": "Normal",
        "description": "This must be how the Wojacks get around underground. It wont stop wiggling around.",
        "icon": "wojack_cilia.png"
    },
    "Wojack Cornea": {
        "name": "Wojack Cornea",
        "type": "Component",
        "rarity": "Normal",
        "description": "Although Wojacks spend a lot of time undergound, they appear to have very sophisticated eyeballs.",
        "icon": "wojack_cornea.png"
    },
    "Wojack Petal": {
        "name": "Wojack Petal",
        "type": "Component",
        "rarity": "Normal",
        "description": "Is it a tooth, claw, horn, or flower petal? The world may never know. But it smells delightful.",
        "icon": "wojack_petal.png"
    },
    "Wojack Spice": {
        "name": "Wojack Spice",
        "type": "Component",
        "rarity": "Good",
        "description": "This came out of a domesticated Wojackss... spice... organ. When you sniff it, your eyes change color.",
        "recipe": {
            "name": "Wojack",
            "output_qty": 1,
            "type": "Pet",
            "ingredients": [{"name": "Bloo", "qty": 2}, {"name": "Bleghpod", "qty": 1}]
        },
        "icon": "wojack_spice.png"
    },
    "Wojack Sucker": {
        "name": "Wojack Sucker",
        "type": "Component",
        "rarity": "Normal",
        "description": "The severed arm of a Wojack. It wasnt really using it, anyway.",
        "icon": "wojack_sucker.png"
    },
    "Dusk Trowel": {
        "name": "Dusk Trowel",
        "type": "Tool",
        "level": "Tier 1",
        "rarity": "Normal",
        "description": "Tier 1 trowel. This trowel should come in handy for POPPING plants and stubborn organisms out of the ground! And thats about it. Its a trowel, what do you want?",
        "recipe": {
            "name": "Crystal Kiln",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Dusk Shard", "qty": 5}, {"name": "Vlap", "qty": 20}, {
                "name": "Wat Fur Tuft",
                "qty": 13
            }]
        },
        "icon": "dusk_trowel.png"
    },
    "Clikkax": {
        "name": "Clikkax",
        "type": "Tool",
        "level": "Tier 3",
        "rarity": "Normal",
        "description": "Tier 3 pickaxe. This pickaxe is insanely sturdy, for being made out of tentacles and plants!",
        "recipe": {
            "name": "Bioloom",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Clossom", "qty": 2}, {
                "name": "Throak Tentacle",
                "qty": 19
            }, {"name": "Shellfinger Pick", "qty": 1}, {"name": "Myelar", "qty": 17}]
        },
        "icon": "clikkax.png"
    },
    "Sawstache": {
        "name": "Sawstache",
        "type": "Tool",
        "level": "Tier 4",
        "rarity": "Normal",
        "description": "Tier 4 saw. The moustache of a Bamli is so rugged and manly that you can cut down Bonespurs and Hairbark with it! And lots of other stuff, too!",
        "recipe": {
            "name": "Centrifuge",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Bamli Horn", "qty": 32}, {
                "name": "Bamstache",
                "qty": 8
            }, {"name": "Thrombyte Fibrin", "qty": 5}, {"name": "Jacksaw", "qty": 1}]
        },
        "icon": "sawstache.png"
    },
    "Exopole": {
        "name": "Exopole",
        "type": "Tool",
        "level": "Tier 2",
        "rarity": "Normal",
        "description": "Tier 2 fishing pole. This pole is made of the most resilient materials of the Bawg, so it should DEFINITELY be able to stand up to a little bit of acid.",
        "recipe": {
            "name": "Compressor",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Ayeayes", "qty": 8}, {"name": "Blube", "qty": 9}, {
                "name": "Basic Fishing Pole",
                "qty": 1
            }, {"name": "Satgat Exoskeleton", "qty": 12}]
        },
        "icon": "exopole.png"
    },
    "Jacksaw": {
        "name": "Jacksaw",
        "type": "Tool",
        "level": "Tier 3",
        "rarity": "Normal",
        "description": "Tier 3 saw. The flora of the Bawg seem very resilient to your masterfully crafted Blastique saw, but this puppy should do the trick.",
        "recipe": {
            "name": "Jollyscope",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Blastique Saw", "qty": 1}, {
                "name": "Splinter",
                "qty": 12
            }, {"name": "Wojack Sucker", "qty": 10}, {"name": "Jolly", "qty": 8}]
        },
        "icon": "jacksaw.png"
    },
    "Waterbomb": {
        "name": "Waterbomb",
        "type": "Bomb",
        "rarity": "Normal",
        "description": "By jamming a reed into a water balloon, youre now able to fling it with TREMENDOUS FORCE onto your seeds! Seeds love that kinda stuff, right?",
        "recipe": {
            "name": "Water Pump",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Whistleroot Reed", "qty": 3}, {"name": "Water Balloon", "qty": 3}]
        },
        "icon": "waterbomb.png"
    },
    "Ship Door": {
        "name": "Ship Door",
        "type": "Structure",
        "rarity": "Normal",
        "description": "Its a door from your ship!",
        "icon": "ship_door.png"
    },
    "Ship Wall": {
        "name": "Ship Wall",
        "type": "Structure",
        "rarity": "Normal",
        "description": "Its a wall from your ship!",
        "icon": "ship_wall.png"
    },
    "Broken Console": {
        "name": "Broken Console",
        "type": "Structure",
        "rarity": "Normal",
        "description": "This communications console has broken down and is now VERY DANGEROUS!",
        "icon": "broken_console.png"
    },
    "Space Wrench": {
        "name": "Space Wrench",
        "type": "Device",
        "rarity": "Normal",
        "description": "This is great for clearing broken ship parts, and for stunning creatures at a distance!",
        "icon": "space_wrench.png"
    },
    "Broken Ship Door": {
        "name": "Broken Ship Door",
        "type": "Structure",
        "rarity": "Normal",
        "description": "This door has broken down, and its now shooting electricity everywhere!",
        "icon": "broken_ship_door.png"
    },
    "Damaged Ship Wall": {
        "name": "Damaged Ship Wall",
        "type": "Structure",
        "rarity": "Normal",
        "description": "A wall from your ship. It has been heavily damaged.",
        "icon": "damaged_ship_wall.png"
    },
    "The G-Gnome": {
        "name": "The G-Gnome",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "He seems to be staring into your soul with his cold, lifeless eyes.",
        "icon": "the_g-gnome.png"
    },
    "Ship Lanturn": {
        "name": "Ship Lanturn",
        "type": "Lighting",
        "rarity": "Normal",
        "description": "This keeps your ship illuminated!",
        "icon": "ship_lanturn.png"
    },
    "Ship Engine": {
        "name": "Ship Engine",
        "type": "Structure",
        "rarity": "Normal",
        "description": "The engines that power the B.S. S.S. Assess.",
        "icon": "ship_engine.png"
    },
    "Vlammer": {
        "name": "Vlammer",
        "type": "Weapon",
        "level": "Level 13",
        "rarity": "Random",
        "description": "Level 13 Hammer. When combined with the power of Vlaps, Jollychomp parts make for an excellent beating device.",
        "recipe": {
            "name": "Jollyscope",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Vlap", "qty": 21}, {
                "name": "Jolly Gastrolith",
                "qty": 4
            }, {"name": "Jolly Fulmar", "qty": 2}]
        },
        "icon": "vlammer.png"
    },
    "Petalprod": {
        "name": "Petalprod",
        "type": "Weapon",
        "level": "Level 15",
        "rarity": "Random",
        "description": "Level 15 Sword. The petals of a wojack are extraordinarily pointy. You find that when you shove them into things, it hurts a lot.",
        "recipe": {
            "name": "Jackweaver",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Nurvaxon", "qty": 5}, {
                "name": "Dendrite Spine",
                "qty": 2
            }, {"name": "Wojack Petal", "qty": 14}, {"name": "Jolly", "qty": 8}]
        },
        "icon": "petalprod.png"
    },
    "Tentaclax": {
        "name": "Tentaclax",
        "type": "Weapon",
        "level": "Level 17",
        "rarity": "Random",
        "description": "Level 17 Axe. You might think something like a floppy tentacle would make for a terrible axe. You might think WRONG.",
        "recipe": {
            "name": "Bioloom",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Throak Tentacle", "qty": 25}, {
                "name": "Clossom",
                "qty": 3
            }, {"name": "Throak Fluoros", "qty": 10}]
        },
        "icon": "tentaclax.png"
    },
    "Sakslapper": {
        "name": "Sakslapper",
        "type": "Weapon",
        "level": "Level 19",
        "rarity": "Random",
        "description": "Level 19 Hammer. Its about time you gave those Snorbles a taste of their own saks.",
        "recipe": {
            "name": "Compressor",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Clossom", "qty": 3}, {"name": "Snorble Airsak", "qty": 8}, {
                "name": "Blube",
                "qty": 12
            }]
        },
        "icon": "sakslapper.png"
    },
    "Exord": {
        "name": "Exord",
        "type": "Weapon",
        "level": "Level 21",
        "rarity": "Random",
        "description": "Level 21 Sword. This intuitively effective weapon can slice through even the mightiest of... Well, all kinds of stuff, really.",
        "recipe": {
            "name": "Centrifuge",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Coral Tubes", "qty": 2}, {
                "name": "Vampry",
                "qty": 2
            }, {"name": "Satgat Exoskeleton", "qty": 12}, {"name": "Thrombyte Fibrin", "qty": 5}]
        },
        "icon": "exord.png"
    },
    "Grumbler": {
        "name": "Grumbler",
        "type": "Weapon",
        "level": "Level 23",
        "rarity": "Random",
        "description": "Level 23 Axe. By harnessing the power of the Bamli, youve managed to assemble an axe that can strike down ALL WHO STAND BEFORE YOU! Almost.",
        "recipe": {
            "name": "Granvil",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Spur Gold", "qty": 2}, {"name": "Grenamel", "qty": 6}, {
                "name": "Spur Gum",
                "qty": 2
            }, {"name": "Bamli Horn", "qty": 33}]
        },
        "icon": "grumbler.png"
    },
    "Bambukket": {
        "name": "Bambukket",
        "type": "Creature Catalyst",
        "rarity": "Superior",
        "description": "For some reason, Bamlis have an unnatural obsession with anything shaped like a bucket. Embiggens your Bamli to POWERFUL SIZE!",
        "recipe": {
            "name": "Granvil",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Bamstache", "qty": 65}, {"name": "Pyn", "qty": 32}, {
                "name": "Spur Gold",
                "qty": 10
            }, {"name": "Wily Bamli Essence", "qty": 22}]
        },
        "icon": "bambukket.png"
    },
    "Leather Throwpillow": {
        "name": "Leather Throwpillow",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "This leathery pillow will really tie the room together!",
        "recipe": {
            "name": "Skinnery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Wompit Leather", "qty": 27}]
        },
        "icon": "leather_throwpillow.png"
    },
    "Glow Pillow": {
        "name": "Glow Pillow",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Not only does it look super comfortable, it also emits an eerie glow that makes you feel queasy!",
        "recipe": {
            "name": "Skinnery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Wompit Leather", "qty": 9}, {"name": "Sawdust", "qty": 4}, {
                "name": "Glow Juice",
                "qty": 4
            }]
        },
        "icon": "glow_pillow.png"
    },
    "Stuffed Wompit": {
        "name": "Stuffed Wompit",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "After spending so much time around wompits, youre able to perfectly recreate a Wompit using your skills of taxidermy!",
        "recipe": {
            "name": "Skinnery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Wompit Leather", "qty": 9}, {"name": "Wompit Bone", "qty": 6}, {
                "name": "Log",
                "qty": 14
            }]
        },
        "icon": "stuffed_wompit.png"
    },
    "Stuffed Glidopus": {
        "name": "Stuffed Glidopus",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "This lifelike dead Glidopus will either spruce up your living room, or something resembling the exact opposite.",
        "recipe": {
            "name": "Chemworks",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Glidopus Siphon", "qty": 9}, {
                "name": "Blastique",
                "qty": 2
            }, {"name": "Glidopus Beak", "qty": 2}, {"name": "Glidopus Ink", "qty": 9}]
        },
        "icon": "stuffed_glidopus.png"
    },
    "Stuffed Glutterfly": {
        "name": "Stuffed Glutterfly",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "If you strategically place this stuffed Glutterfly somewhere, it would look creepy.",
        "recipe": {
            "name": "Chemworks",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Glutterfly Chitin", "qty": 6}, {
                "name": "Glow Juice",
                "qty": 4
            }, {"name": "Flatstone", "qty": 14}]
        },
        "icon": "stuffed_glutterfly.png"
    },
    "Leather Bagchair": {
        "name": "Leather Bagchair",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "This would be really comfortable to sit in if you had knees.",
        "recipe": {
            "name": "Skinnery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Wompit Leather", "qty": 14}, {"name": "Sawgrass Leaf", "qty": 7}]
        },
        "icon": "leather_bagchair.png"
    },
    "Glowy Bagchair": {
        "name": "Glowy Bagchair",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Its possible that sitting on this chair will cause certain parts of your body to become radioactive. RADIOACTIVELY AWESOME, THAT IS.",
        "recipe": {
            "name": "Skinnery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Wompit Leather", "qty": 7}, {
                "name": "Sawdust",
                "qty": 3
            }, {"name": "Sawgrass Leaf", "qty": 4}, {"name": "Glow Juice", "qty": 3}]
        },
        "icon": "glowy_bagchair.png"
    },
    "Bureau Scroll": {
        "name": "Bureau Scroll",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "With the power of WRITING ON WOOD PULP, you are now able to convey your love toward the Bureau of Shipping. Great job!",
        "recipe": {
            "name": "Sawmill",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Log", "qty": 9}, {"name": "Glidopus Ink", "qty": 7}, {
                "name": "Whistle Borer",
                "qty": 2
            }]
        },
        "icon": "bureau_scroll.png"
    },
    "Armvlaps": {
        "name": "Armvlaps",
        "type": "Gloves",
        "level": "Level 13",
        "rarity": "Random",
        "description": "Level 13 Glove. Wrapping your hands in the loving Vlaps of a Vomma makes you feel warm, safe, and secure.",
        "recipe": {
            "name": "Jollyscope",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Jolly", "qty": 7}, {"name": "Jolly Gastrolith", "qty": 3}, {
                "name": "Vlap",
                "qty": 14
            }]
        },
        "icon": "armvlaps.png"
    },
    "Vlest": {
        "name": "Vlest",
        "type": "Chest Armor",
        "level": "Level 13",
        "rarity": "Random",
        "description": "Level 13 Chest. You feel warm and cuddly when you wrap yourself in a majestic suit of Vlaps.",
        "recipe": {
            "name": "Jollyscope",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Jolly Gastrolith", "qty": 3}, {"name": "Jolly", "qty": 6}, {
                "name": "Vlap",
                "qty": 13
            }, {"name": "Jolly Fulmar", "qty": 2}]
        },
        "icon": "vlest.png"
    },
    "Vlapchaps": {
        "name": "Vlapchaps",
        "type": "Leg Armor",
        "level": "Level 13",
        "rarity": "Random",
        "description": "Level 13 Pants. These chaps are exposed in the back, allowing you to enjoy a nice, cool breeze.",
        "recipe": {
            "name": "Jollyscope",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Jolly", "qty": 5}, {"name": "Vlap", "qty": 11}, {"name": "Bloo", "qty": 4}]
        },
        "icon": "vlapchaps.png"
    },
    "Vlapface Hat": {
        "name": "Vlapface Hat",
        "type": "Helm",
        "level": "Level 13",
        "rarity": "Random",
        "description": "Level 13 Helm. You think this hat makes you look super awesome. You might be right about that, but you might not.",
        "recipe": {
            "name": "Jollyscope",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Wat Wing", "qty": 7}, {"name": "Vlap", "qty": 19}, {"name": "Jolly", "qty": 9}]
        },
        "icon": "vlapface_hat.png"
    },
    "Jollyscope": {
        "name": "Jollyscope",
        "type": "Workstation",
        "rarity": "Normal",
        "description": "Using the focused power of firmified Jolly Fulmar, youre able to finely craft things with such immense detail that it hurts your eye sockets just thinking about it.",
        "recipe": {
            "name": "Crystal Kiln",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Vlap", "qty": 23}, {"name": "Jolly Fulmar", "qty": 3}, {
                "name": "Jolly",
                "qty": 11
            }, {"name": "Dusk Prism", "qty": 1}]
        },
        "icon": "jollyscope.png"
    },
    "Fauxsack": {
        "name": "Fauxsack",
        "type": "Creature Catalyst",
        "rarity": "Superior",
        "description": "Deploying this fake Vomma Baby Sack causes something magical to happen! Embiggens your Vomma to POWERFUL SIZE!",
        "recipe": {
            "name": "Jollyscope",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Vlap", "qty": 131}, {"name": "Vompole", "qty": 87}, {
                "name": "Tusker",
                "qty": 40
            }, {"name": "Tempered Vomma Essence", "qty": 14}]
        },
        "icon": "fauxsack.png"
    },
    "Siphon Floor": {
        "name": "Siphon Floor",
        "type": "Floor",
        "rarity": "Normal",
        "description": "This floor makes an awkward squishing noise as you rub your toes against it, but it feels nice.",
        "recipe": {
            "name": "Chemworks",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Glidopus Siphon", "qty": 10}]
        },
        "icon": "siphon_floor.png"
    },
    "Chitin Floor": {
        "name": "Chitin Floor",
        "type": "Floor",
        "rarity": "Normal",
        "description": "The shiny sheen of this floor makes you want to roll around on it, so you might as well.",
        "recipe": {
            "name": "Chemworks",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Glutterfly Chitin", "qty": 10}]
        },
        "icon": "chitin_floor.png"
    },
    "Bone Floor": {
        "name": "Bone Floor",
        "type": "Floor",
        "rarity": "Normal",
        "description": "Theres nothing quite like the bones of a thousand alien cow hippos to really add spice to a room.",
        "recipe": {
            "name": "Skinnery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Wompit Bone", "qty": 10}, {"name": "Wompit Leather", "qty": 10}]
        },
        "icon": "bone_floor.png"
    },
    "Stone Chest": {
        "name": "Stone Chest",
        "type": "Chest",
        "rarity": "Normal",
        "description": "This amazing-looking chest will hold whatever you put in it! Except love. Nothing can contain love.",
        "icon": "stone_chest.png"
    },
    "Throak Headguard": {
        "name": "Throak Headguard",
        "type": "Helm",
        "level": "Level 17",
        "rarity": "Random",
        "description": "Level 17 Helm. Looking at this helm makes you wonder if youll ever be able to get it off. Good thing its stylish, or youd be concerned.",
        "recipe": {
            "name": "Bioloom",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Throak Tentacle", "qty": 17}, {
                "name": "Wojack Cilia",
                "qty": 3
            }, {"name": "Vomma Babymaker", "qty": 3}, {"name": "Myelar", "qty": 15}]
        },
        "icon": "throak_headguard.png"
    },
    "Tentavest": {
        "name": "Tentavest",
        "type": "Chest Armor",
        "level": "Level 17",
        "rarity": "Random",
        "description": "Level 17 Chest. The suckers of the Throak tentacles constantly give you backrubs. Its nice.",
        "recipe": {
            "name": "Bioloom",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Throak Tentacle", "qty": 20}, {
                "name": "Boba",
                "qty": 1
            }, {"name": "Dendrite Spine", "qty": 2}]
        },
        "icon": "tentavest.png"
    },
    "Coiled Tentagloves": {
        "name": "Coiled Tentagloves",
        "type": "Gloves",
        "level": "Level 17",
        "rarity": "Random",
        "description": "Level 17 Glove. The tentacles respond to your movements and make you feel way stronger and 30% more awesome.",
        "recipe": {
            "name": "Bioloom",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Throak Tentacle", "qty": 25}, {"name": "Throak Polyp", "qty": 5}]
        },
        "icon": "coiled_tentagloves.png"
    },
    "Tentaclaps": {
        "name": "Tentaclaps",
        "type": "Leg Armor",
        "level": "Level 17",
        "rarity": "Random",
        "description": "Level 17 Pants. By attaching cilia to the bottom of your feet, you suddenly feel like youre gliding along the ground. Youre not, of course, but it definitely feels like it.",
        "recipe": {
            "name": "Bioloom",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Throak Tentacle", "qty": 13}, {
                "name": "Wojack Cilia",
                "qty": 2
            }, {"name": "Dendrite Spine", "qty": 2}]
        },
        "icon": "tentaclaps.png"
    },
    "Myelar Faceholder": {
        "name": "Myelar Faceholder",
        "type": "Helm",
        "level": "Level 15",
        "rarity": "Random",
        "description": "Level 15 Helm. The insulating nature of Myelar keeps your face toasty warm, like a marshmallow being incinerated over an open flame. Its quite painful.",
        "recipe": {
            "name": "Jackweaver",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Myelar", "qty": 19}, {"name": "Bleghpod", "qty": 3}, {
                "name": "Wojack Sucker",
                "qty": 13
            }]
        },
        "icon": "myelar_faceholder.png"
    },
    "Myelants": {
        "name": "Myelants",
        "type": "Leg Armor",
        "level": "Level 15",
        "rarity": "Random",
        "description": "Level 15 Pants. The insides of these slippers are... slippery. When you walk, it sounds like someone chewing a mouthful of mayonnaise.",
        "recipe": {
            "name": "Jackweaver",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Myelar", "qty": 16}, {"name": "Wojack Petal", "qty": 14}]
        },
        "icon": "myelants.png"
    },
    "Myelirt": {
        "name": "Myelirt",
        "type": "Chest Armor",
        "level": "Level 15",
        "rarity": "Random",
        "description": "Level 15 Chest. The constant flexing of the myelar makes it incredibly hard to breathe, yet you still feel compelled to wear it.",
        "recipe": {
            "name": "Jackweaver",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Myelar", "qty": 25}, {"name": "Wojack Petal", "qty": 23}]
        },
        "icon": "myelirt.png"
    },
    "Myelar Armsheaths": {
        "name": "Myelar Armsheaths",
        "type": "Gloves",
        "level": "Level 15",
        "rarity": "Random",
        "description": "Level 15 Glove. With the power of Wojack Suckers, you can hold on to just about anything!",
        "recipe": {
            "name": "Jackweaver",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Wojack Sucker", "qty": 9}, {"name": "Myelar", "qty": 14}, {
                "name": "Splinter",
                "qty": 11
            }]
        },
        "icon": "myelar_armsheaths.png"
    },
    "Bioloom": {
        "name": "Bioloom",
        "type": "Workstation",
        "rarity": "Normal",
        "description": "By weaving together all kinds of spindly, slimy organs and things, youve managed to create quite the impeccable workstation!",
        "recipe": {
            "name": "Jackweaver",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Throak Tentacle", "qty": 27}, {"name": "Clossom", "qty": 3}, {
                "name": "Nurvaxon",
                "qty": 7
            }, {"name": "Dendrite Spine", "qty": 3}]
        },
        "icon": "bioloom.png"
    },
    "Cauldron": {
        "name": "Cauldron",
        "type": "Workstation",
        "rarity": "Normal",
        "description": "Stretched and slapped Bleghpods make for an excellent container!",
        "recipe": {
            "name": "Jollyscope",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Bleghpod", "qty": 4}, {"name": "Splinter", "qty": 23}, {
                "name": "Jolly",
                "qty": 15
            }]
        },
        "icon": "cauldron.png"
    },
    "Splintrowel": {
        "name": "Splintrowel",
        "type": "Tool",
        "level": "Tier 2",
        "rarity": "Normal",
        "description": "Tier 2 trowel. A much more rugged trowel than its predecessor, the Splintrowel can pry just about anything out of the ground!",
        "recipe": {
            "name": "Jackweaver",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Splinter", "qty": 12}, {
                "name": "Throak Polyp",
                "qty": 4
            }, {"name": "Dendrite Spine", "qty": 2}, {"name": "Dusk Trowel", "qty": 1}]
        },
        "icon": "splintrowel.png"
    },
    "Thrackle": {
        "name": "Thrackle",
        "type": "Creature Catalyst",
        "rarity": "Superior",
        "description": "Young Throaks often lose control of their tentacles. But not with THIS! Embiggens your Throak to POWERFUL SIZE!",
        "recipe": {
            "name": "Bioloom",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Throak Tentacle", "qty": 157}, {
                "name": "Throak Polyp",
                "qty": 29
            }, {"name": "Myelar", "qty": 137}, {"name": "Malicious Throak Essence", "qty": 15}]
        },
        "icon": "thrackle.png"
    },
    "Wojack Soap": {
        "name": "Wojack Soap",
        "type": "Creature Catalyst",
        "rarity": "Superior",
        "description": "Although they look disgusting, Wojacks are obsessed with cleanliness! Embiggens your Wojack to POWERFUL SIZE!",
        "recipe": {
            "name": "Jackweaver",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Sticky Wojack Essence", "qty": 15}, {
                "name": "Wojack Petal",
                "qty": 118
            }, {"name": "Wojack Cilia", "qty": 25}, {"name": "Splinter", "qty": 99}]
        },
        "icon": "wojack_soap.png"
    },
    "Snelm": {
        "name": "Snelm",
        "type": "Helm",
        "level": "Level 19",
        "rarity": "Random",
        "description": "Level 19 Helm. This will either convince your enemies that youre a snorble, or convince your enemies that youre a crazy person wearing snorble parts on your face.",
        "recipe": {
            "name": "Compressor",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Snorble Skin", "qty": 10}, {
                "name": "Snorble Airsak",
                "qty": 6
            }, {"name": "Ayeayes", "qty": 7}, {"name": "Sagtatoe", "qty": 3}]
        },
        "icon": "snelm.png"
    },
    "Snest": {
        "name": "Snest",
        "type": "Chest Armor",
        "level": "Level 19",
        "rarity": "Random",
        "description": "Level 19 Chest. The airsaks protect your amazing chest skin from imminent harm, and the Wojack spice exfoliates your pores. High-tech!",
        "recipe": {
            "name": "Compressor",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Snorble Skin", "qty": 9}, {"name": "Snorble Airsak", "qty": 5}, {
                "name": "Blube",
                "qty": 7
            }, {"name": "Wojack Spice", "qty": 1}]
        },
        "icon": "snest.png"
    },
    "Snittens": {
        "name": "Snittens",
        "type": "Gloves",
        "level": "Level 19",
        "rarity": "Random",
        "description": "Level 19 Glove. Snorble Airsaks are velvety soft on the inside. Its like having your hand in a real glove!",
        "recipe": {
            "name": "Compressor",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Snorble Skin", "qty": 10}, {"name": "Snorble Airsak", "qty": 5}, {
                "name": "Blube",
                "qty": 8
            }]
        },
        "icon": "snittens.png"
    },
    "Snoots": {
        "name": "Snoots",
        "type": "Leg Armor",
        "level": "Level 19",
        "rarity": "Random",
        "description": "Level 19 Pants. Your legs will thank you after being exposed to the luscious juices of the Ayeayeas... uh... berries?",
        "recipe": {
            "name": "Compressor",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Snorble Skin", "qty": 11}, {"name": "Ayeayes", "qty": 8}]
        },
        "icon": "snoots.png"
    },
    "Exohead Facemask": {
        "name": "Exohead Facemask",
        "type": "Helm",
        "level": "Level 21",
        "rarity": "Random",
        "description": "Level 21 Helm. The sharp corners of this facemask constantly poke you in the eyes, but its a sacrifice you have to make for fashion.",
        "recipe": {
            "name": "Centrifuge",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Satgat Exoskeleton", "qty": 11}, {
                "name": "Luminalgae",
                "qty": 1
            }, {"name": "Thrombyte Fibrin", "qty": 5}, {"name": "Blood Louse", "qty": 1}]
        },
        "icon": "exohead_facemask.png"
    },
    "Exochest": {
        "name": "Exochest",
        "type": "Chest Armor",
        "level": "Level 21",
        "rarity": "Random",
        "description": "Level 21 Chest. Although it looks bulky, its actually quite light. Its even aerodynamic!",
        "recipe": {
            "name": "Centrifuge",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Satgat Exoskeleton", "qty": 10}, {
                "name": "Luminalgae",
                "qty": 1
            }, {"name": "Thrombyte Fibrin", "qty": 4}, {"name": "Throak Jelly", "qty": 1}]
        },
        "icon": "exochest.png"
    },
    "Exosleeves": {
        "name": "Exosleeves",
        "type": "Gloves",
        "level": "Level 21",
        "rarity": "Random",
        "description": "Level 21 Glove. By covering your arms with Satgat exoskeletons, youve managed to look... not leaf-like whatsoever.",
        "recipe": {
            "name": "Centrifuge",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Satgat Exoskeleton", "qty": 8}, {
                "name": "Luminalgae",
                "qty": 1
            }, {"name": "Thrombyte Fibrin", "qty": 4}, {"name": "Jolly Fulmar", "qty": 2}]
        },
        "icon": "exosleeves.png"
    },
    "Exoots": {
        "name": "Exoots",
        "type": "Leg Armor",
        "level": "Level 21",
        "rarity": "Random",
        "description": "Level 21 Pants. Although pointy on the outside, the inside is soft and warm. It will protect your most important parts.",
        "recipe": {
            "name": "Centrifuge",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Satgat Exoskeleton", "qty": 8}, {
                "name": "Luminalgae",
                "qty": 1
            }, {"name": "Thrombyte Fibrin", "qty": 4}]
        },
        "icon": "exoots.png"
    },
    "Dusky Healing Potion": {
        "name": "Dusky Healing Potion",
        "type": "Consumable",
        "rarity": "Good",
        "description": "When cooked ever so slightly, Fatheads produce a delicious juice that restores 1,609 HP.",
        "recipe": {
            "name": "Hearth",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Dusk Shard", "qty": 3}, {"name": "Fatheaded Slurper", "qty": 3}]
        },
        "icon": "dusky_healing_potion.png"
    },
    "Snorbelt": {
        "name": "Snorbelt",
        "type": "Creature Catalyst",
        "rarity": "Superior",
        "description": "Snorbles are very safety-conscious; its why they evolved giant airbags all over their bodies. Embiggens your Snorble to POWERFUL SIZE!",
        "recipe": {
            "name": "Compressor",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Burnt Snorble Essence", "qty": 9}, {
                "name": "Snorble Skin",
                "qty": 90
            }, {"name": "Extracted Tuber", "qty": 7}, {"name": "Blube", "qty": 73}]
        },
        "icon": "snorbelt.png"
    },
    "Bleghmar Treat": {
        "name": "Bleghmar Treat",
        "type": "Creature Food",
        "rarity": "Normal",
        "description": "Cramming a tasty Bleghpod full of nutritious Jolly Fulmar? AMAZING! Boosts your pets critical strike chance by 25% for 3 minutes.",
        "recipe": {
            "name": "Cauldron",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Bleghpod", "qty": 1}, {
                "name": "Jolly Fulmar",
                "qty": 1
            }, {"name": "Sticky Wojack Essence", "qty": 1}]
        },
        "icon": "bleghmar_treat.png"
    },
    "Thrombopump": {
        "name": "Thrombopump",
        "type": "Workstation",
        "rarity": "Normal",
        "description": "By slapping this pump onto a Thrombyte, you can extract whatever goodness lies inside!",
        "recipe": {
            "name": "Centrifuge",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Snorble Airsak", "qty": 9}, {"name": "Blube", "qty": 14}, {
                "name": "Ayeayes",
                "qty": 12
            }, {"name": "Plonktan", "qty": 1}]
        },
        "icon": "thrombopump.png"
    },
    "Attractive Mask": {
        "name": "Attractive Mask",
        "type": "Creature Catalyst",
        "rarity": "Superior",
        "description": "Satgats are self-conscious about their stupid faces, so they love to find new ways to kep themselves covered! Embiggens your Satgat to POWERFUL SIZE!",
        "recipe": {
            "name": "Centrifuge",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Satgat Exoskeleton", "qty": 101}, {
                "name": "Plonktan",
                "qty": 4
            }, {"name": "Sensitive Satgat Essence", "qty": 8}, {"name": "Satgat Chemoreceptors", "qty": 8}]
        },
        "icon": "attractive_mask.png"
    },
    "Granvil": {
        "name": "Granvil",
        "type": "Workstation",
        "rarity": "Normal",
        "description": "The moustache of a Bamli is so powerful, you can use it to BEND ANYTHING TO YOUR WILL! Its also super attractive.",
        "recipe": {
            "name": "Centrifuge",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Thrombyte Fibrin", "qty": 7}, {
                "name": "Grenamel",
                "qty": 8
            }, {"name": "Bamstache", "qty": 12}, {"name": "Spur Gold", "qty": 2}]
        },
        "icon": "granvil.png"
    },
    "Wooden Writable Sign": {
        "name": "Wooden Writable Sign",
        "type": "Sign",
        "rarity": "Normal",
        "description": "Youve treated this wood such that you can write and erase stuff on it! Now you can label parts of the map.",
        "recipe": {
            "name": "Sawmill",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Log", "qty": 1}, {"name": "Stick", "qty": 1}]
        },
        "icon": "wooden_writable_sign.png"
    },
    "Grenoots": {
        "name": "Grenoots",
        "type": "Leg Armor",
        "level": "Level 23",
        "rarity": "Random",
        "description": "Level 23 Pants. The power of ancient Bamli horn allows you to leap small things in a single bound or more! HIYOOOO!",
        "recipe": {
            "name": "Granvil",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Bamli Horn", "qty": 33}, {"name": "Grenamel", "qty": 6}]
        },
        "icon": "grenoots.png"
    },
    "Grenamel Stachemask": {
        "name": "Grenamel Stachemask",
        "type": "Helm",
        "level": "Level 23",
        "rarity": "Random",
        "description": "Level 23 Helm. Whats better than having a hairy face? Having a hair-barky face.",
        "recipe": {
            "name": "Granvil",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Bamli Horn", "qty": 30}, {"name": "Grenamel", "qty": 5}, {
                "name": "Hairbark",
                "qty": 26
            }, {"name": "Bamstache", "qty": 7}]
        },
        "icon": "grenamel_stachemask.png"
    },
    "Grestplate": {
        "name": "Grestplate",
        "type": "Chest Armor",
        "level": "Level 23",
        "rarity": "Random",
        "description": "Level 23 Chest. Sometimes, you just gotta awesomely cover your entire torso in the forged bones of an ancient giant beast. This is one of those times.",
        "recipe": {
            "name": "Granvil",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Bamli Horn", "qty": 27}, {"name": "Grenamel", "qty": 5}, {
                "name": "Spur Gum",
                "qty": 2
            }, {"name": "Spur Gold", "qty": 1}]
        },
        "icon": "grestplate.png"
    },
    "Grenamel Armpads": {
        "name": "Grenamel Armpads",
        "type": "Gloves",
        "level": "Level 23",
        "rarity": "Random",
        "description": "Level 23 Glove. Grenamel makes for amazing arm protection, so long as you dont care about using your elbows, fingers, or anything else.",
        "recipe": {
            "name": "Granvil",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Bamli Horn", "qty": 29}, {"name": "Grenamel", "qty": 5}, {
                "name": "Hairbark",
                "qty": 25
            }]
        },
        "icon": "grenamel_armpads.png"
    },
    "Karboan Healing Potion": {
        "name": "Karboan Healing Potion",
        "type": "Consumable",
        "rarity": "Good",
        "description": "Its ICE COLD! Restores 52,087 HP.",
        "recipe": {
            "name": "Pressure Cooker",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Karboan", "qty": 3}, {"name": "Flungus Airoot", "qty": 3}]
        },
        "icon": "karboan_healing_potion.png"
    },
    "Pipey Healing Potion": {
        "name": "Pipey Healing Potion",
        "type": "Consumable",
        "rarity": "Good",
        "description": "It goes down smooth, like a smoooooth smoothie. Restores 125,060 HP.",
        "recipe": {
            "name": "Pressure Cooker",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Pipedirt Pipe", "qty": 3}, {"name": "Magmite Worker", "qty": 3}]
        },
        "icon": "pipey_healing_potion.png"
    },
    "Elixir of Concussions": {
        "name": "Elixir of Concussions",
        "type": "Consumable",
        "rarity": "Good",
        "description": "Drinking this brew makes you want to punch stuff! 2% chance to stun enemies upon striking. Elixir lasts 20 minutes.",
        "recipe": {
            "name": "Pressure Cooker",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Smashblossom Trunk", "qty": 6}, {
                "name": "Parapod",
                "qty": 2
            }, {"name": "Fanged Strangler", "qty": 1}, {"name": "Royal Glaser Essence", "qty": 1}]
        },
        "icon": "elixir_of_concussions.png"
    },
    "Blegh Healing Potion": {
        "name": "Blegh Healing Potion",
        "type": "Consumable",
        "rarity": "Good",
        "description": "Lets be honest here; youre just throwing ingredients into a jar and seeing what sticks. Restores 2,221 HP.",
        "recipe": {
            "name": "Cauldron",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Bleghpod", "qty": 3}, {"name": "Tusker", "qty": 3}]
        },
        "icon": "blegh_healing_potion.png"
    },
    "Elixir of Shocking": {
        "name": "Elixir of Shocking",
        "type": "Consumable",
        "rarity": "Good",
        "description": "You may think you dont need to call down lightning from the heavens... BUT YOU DO. 3% chance to shock enemies upon striking. Elixir lasts 20 minutes.",
        "recipe": {
            "name": "Pressure Cooker",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Karboan", "qty": 5}, {"name": "Meltor", "qty": 2}, {
                "name": "Flailpod",
                "qty": 3
            }, {"name": "Calcified Gallum Essence", "qty": 1}]
        },
        "icon": "elixir_of_shocking.png"
    },
    "Grenamel Healing Potion": {
        "name": "Grenamel Healing Potion",
        "type": "Consumable",
        "rarity": "Good",
        "description": "As the saying goes... Sometimes you juice the louse, and sometimes the louse juices you. Restores 9,670 HP.",
        "recipe": {
            "name": "Cauldron",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Grenamel", "qty": 3}, {"name": "Hairbark", "qty": 3}, {
                "name": "Vompole",
                "qty": 3
            }]
        },
        "icon": "grenamel_healing_potion.png"
    },
    "Furgrasp": {
        "name": "Furgrasp",
        "type": "Resource",
        "rarity": "Normal",
        "description": "Its long, claw-like branches often snag the fur of animals that pass by. It probably uses the fur for knitting hats.",
        "icon": "furgrasp.png",
        "drop": ["Furgrasp Antler","Furgrasp Foliage","Strange Tuft","Furgrasp Seed"]
    },
    "Spiregg": {
        "name": "Spiregg",
        "type": "Resource",
        "rarity": "Normal",
        "description": "Its unclear what laid this egg. But it is clear that its packed with nutrients and goodies, like some kind of natural pinata.",
        "icon": "spiregg.png",
        "drop": ["Spiregg Goop","Spiregg Shell","Spiregg Yolk"]
    },
    "Smashblossom": {
        "name": "Smashblossom",
        "type": "Resource",
        "rarity": "Normal",
        "description": "The flower of this plant is insanely heavy. The blossom climbs up the stalk, then smashes down into the ice to break off chunks, which the plant then consumes.",
        "icon": "smashblossom.png",
        "drop": ["Smashblossom Pistil","Smashblossom Trunk","Smashblossom Petal","Emerald Smashborer","Smash Seed"]
    },
    "Geysir": {
        "name": "Geysir",
        "type": "Resource",
        "rarity": "Normal",
        "description": "The water inside overflows until it freezes over, creating a sort of cap. One the frozen cap is in place, the Geysir builds up tremendous pressure inside that is only relieved when the cap is removed.",
        "icon": "geysir.png",
        "drop": ["Geysir Slurry","Diamond","Spood Beast"]
    },
    "Tundra School": {
        "name": "Tundra School",
        "type": "Resource",
        "rarity": "Normal",
        "description": "Something is stirring under the cold, icy waters.",
        "icon": "tundra_school.png",
        "drop": ["Ice Skate","Coralduster","Ventsleeper","Squeti","Bonkagong"]
    },
    "Ice Skate": {
        "name": "Ice Skate",
        "type": "Component",
        "rarity": "Normal",
        "description": "This flat, fish-like creature clings to ice chunks and blends in with them. It also speaks several languages, none of which you understand.",
        "icon": "ice_skate.png"
    },
    "Squeti": {
        "name": "Squeti",
        "type": "Component",
        "rarity": "Normal",
        "description": "A hairy squid, well-suited for swimming in the extreme cold of the Tundra. It seems highly intelligent.",
        "icon": "squeti.png"
    },
    "Ventsleeper": {
        "name": "Ventsleeper",
        "type": "Component",
        "rarity": "Good",
        "description": "This snail-like beasty lives around boiling hot-water vents deep in the bottom of the ocean. It shivers nonstop as soon as you pull it out of the water.",
        "icon": "ventsleeper.png"
    },
    "Coralduster": {
        "name": "Coralduster",
        "type": "Component",
        "rarity": "Normal",
        "description": "Its bristles are soft. They remind you of the time you used to work as a maid and carried a featherduster around everywhere you went.",
        "icon": "coralduster.png"
    },
    "Bonkagong": {
        "name": "Bonkagong",
        "type": "Weapon",
        "level": "Level 29",
        "rarity": "Epic",
        "description": "Level 29 Hammer. This fish has no skull. Instead, its stomach is in its head, and it swallows an exorbitant number of stones, which it keeps in its head-stomach to protect its tiny, tiny brain.",
        "icon": "bonkagong.png"
    },
    "Conjoined Perp": {
        "name": "Conjoined Perp",
        "type": "Consumable",
        "rarity": "Good",
        "description": "These plants grow in pairs, and they have a shifty attitude. It would be wise not to trust them. Restores 7,103 HP.",
        "icon": "conjoined_perp.png"
    },
    "Hard Core": {
        "name": "Hard Core",
        "type": "Resource",
        "rarity": "Normal",
        "description": "This thing is sharp and pointy. It seems pretty hardcore.",
        "icon": "hard_core.png"
    },
    "Parapod": {
        "name": "Parapod",
        "type": "Consumable",
        "rarity": "Normal",
        "description": "When squeezed, it emits a horrible odor. You also hear rumbling sounds nearby. Restores 7,268 HP.",
        "icon": "parapod.png"
    },
    "Bluff": {
        "name": "Bluff",
        "type": "Resource",
        "rarity": "Normal",
        "description": "Instead of leaves, this plant grows a crazy amount of hair. The hair generates energy for the plant by blowing in the wind. It reminds you of one of your distant relatives.",
        "icon": "bluff.png",
        "drop": ["Bluffollicle","Bluffluff"]
    },
    "Flailtree": {
        "name": "Flailtree",
        "type": "Resource",
        "rarity": "Normal",
        "description": "This tree twitches when hostile creatures come near it, but it never swings. You surmise that it might be a pacifist.",
        "icon": "flailtree.png",
        "drop":["Flailpod","Blackbark","Flaycorn"]
    },
    "Pipedirt": {
        "name": "Pipedirt",
        "type": "Resource",
        "rarity": "Normal",
        "description": "Its unclear whether this is a type of coral, a plant, an animal, or something in between. The sounds it make as the wind blows through the pipes remind you of an old timey church organ!",
        "icon": "pipedirt.png",
        "drop": ["Pipedirt Pipe","Rustmoss","Pipeseed"]
    },
    "Crystine": {
        "name": "Crystine",
        "type": "Component",
        "rarity": "Normal",
        "description": "A chunk of pristine, green crystal protruding up from the shattered crystalline area of the Tundra. It sings and vibrates when it senses you are near it.",
        "icon": "crystine.png"
    },
    "Magmite Mound": {
        "name": "Magmite Mound",
        "type": "Resource",
        "rarity": "Normal",
        "description": "Its full of mites! They build the mound using blood, sweat, tears, and a little bit of elbow grease. The mound is easily popped open with a trowel, though.",
        "icon": "magmite_mound.png",
        "drop":["Magmite Worker","Lonsdaleite","Magmite King","Magmite Queen"]
    },
    "Flungus": {
        "name": "Flungus",
        "type": "Resource",
        "rarity": "Normal",
        "description": "The bags are probably full of helium or something. It floats gently above the waters of the Tundra.",
        "icon": "flungus.png",
        "drop":["Flungus Airoot","Flungus Pod", "Flungus Brain", "Flungus Sporebee"]
    },
    "Hewgodooko Wall": {
        "name": "Hewgodooko Wall",
        "type": "Structure",
        "rarity": "Normal",
        "description": "One of the walls from Hewgodookos savanna fortresses. Its pretty dang durable.",
        "icon": "hewgodooko_wall.png"
    },
    "Hewgodooko Door": {
        "name": "Hewgodooko Door",
        "type": "Structure",
        "rarity": "Normal",
        "description": "WHATS IT MADE OF?",
        "icon": "hewgodooko_door.png"
    },
    "Icequill": {
        "name": "Icequill",
        "type": "Consumable",
        "rarity": "Normal",
        "description": "A cluster of bioluminescent algae that has adapted to only grow on ice. Your tongue sticks to it if you lick it. Restores 16,906 HP.",
        "icon": "icequill.png"
    },
    "Coppersponge": {
        "name": "Coppersponge",
        "type": "Component",
        "rarity": "Normal",
        "description": "This plant grows perfect sponges made of copper. This will be super helpful when you have to do the dishes.",
        "icon": "coppersponge.png"
    },
    "Depressurized Larva": {
        "name": "Depressurized Larva",
        "type": "Component",
        "rarity": "Good",
        "description": "This larva looks like it has suffered from decompression sickness. It probably came from somewhere incredibly deep under the ground...",
        "icon": "depressurized_larva.png"
    },
    "Fanged Strangler": {
        "name": "Fanged Strangler",
        "type": "Component",
        "rarity": "Good",
        "description": "This tiny critter uses advanced elegtromagnetic-detecting neurons to find the nearest neck and strangle it. It would make a great gift for children you hate.",
        "icon": "fanged_strangler.png"
    },
    "Boreole": {
        "name": "Boreole",
        "type": "Component",
        "rarity": "Good",
        "description": "It glows between a range of colors to lure in its prey. When the target gets close, it sits there and does nothing, because its a mushroom.",
        "icon": "boreole.png"
    },
    "Liquideon": {
        "name": "Liquideon",
        "type": "Component",
        "rarity": "Superior",
        "description": "Green goo that has seeped up through the cracks in the green crystals of the Tundra. It has since hardened... And it smells like squid.",
        "icon": "liquideon.png"
    },
    "Bunnion": {
        "name": "Bunnion",
        "type": "Consumable",
        "rarity": "Normal",
        "description": "Although it looks like an adorable rabbit, its just a camouflaged root vegetable. Ignore the fact that it screams when you eat it. Thats part of the camouflage. Restores 40,293 HP.",
        "icon": "bunnion.png"
    },
    "Bluffollicle": {
        "name": "Bluffollicle",
        "type": "Component",
        "rarity": "Normal",
        "description": "Youve managed to whack a Bluff hard enough to knock its follicle right out! It doesnt seeem physically possible, but it happened.",
        "icon": "bluffollicle.png"
    },
    "Bluffluff": {
        "name": "Bluffluff",
        "type": "Component",
        "rarity": "Normal",
        "description": "Its so soft, you figure the thread count on this thing is in the jillions. It would make a nice bed... or coat.",
        "icon": "bluffluff.png"
    },
    "Smashblossom Pistil": {
        "name": "Smashblossom Pistil",
        "type": "Component",
        "rarity": "Normal",
        "description": "This thing appears to be used to perform unspeakable acts of plant romance.",
        "icon": "smashblossom_pistil.png"
    },
    "Smashblossom Petal": {
        "name": "Smashblossom Petal",
        "type": "Component",
        "rarity": "Normal",
        "description": "This weighs from three to twelve hundred pounds or kilograms. Or grams. Its very squirmy, so its tough to get a read on it.",
        "icon": "smashblossom_petal.png"
    },
    "Smashblossom Trunk": {
        "name": "Smashblossom Trunk",
        "type": "Component",
        "rarity": "Normal",
        "description": "This trunk sure can take a pounding.",
        "icon": "smashblossom_trunk.png"
    },
    "Emerald Smashborer": {
        "name": "Emerald Smashborer",
        "type": "Component",
        "rarity": "Good",
        "description": "Its pretty jittery. It can only be calmed down by the rhythmic, explosive pounding of a Smashblossom.",
        "icon": "emerald_smashborer.png"
    },
    "Flailpod": {
        "name": "Flailpod",
        "type": "Component",
        "rarity": "Normal",
        "description": "It has a convenient grip, almost as it if was made to be thrown by you and you alone. As you gaze upon the flailpod, you feel butterflies in your stomach. It was meant to be.",
        "icon": "flailpod.png"
    },
    "Blackbark": {
        "name": "Blackbark",
        "type": "Component",
        "rarity": "Normal",
        "description": "The blackbark of a Flailtree is much stronger and more resilient than its backbark.",
        "icon": "blackbark.png"
    },
    "Flaycorn": {
        "name": "Flaycorn",
        "type": "Seed",
        "rarity": "Good",
        "description": "The seed of a Flailtree. Its very aggressive and disagreeable. Better to bury it and get it over with.",
        "icon": "flaycorn.png"
    },
    "Furgrasp Antler": {
        "name": "Furgrasp Antler",
        "type": "Component",
        "rarity": "Normal",
        "description": "The Furgrasp uses these long, pointy appendages to rip tufts of fur from... something.",
        "icon": "furgrasp_antler.png"
    },
    "Furgrasp Foliage": {
        "name": "Furgrasp Foliage",
        "type": "Component",
        "rarity": "Normal",
        "description": "These leaves are fibrous, almost as if they were woven together by a tiny person with tiny, tiny fingers. Like a baby, or perhaps a very small monkey.",
        "icon": "furgrasp_foliage.png"
    },
    "Furgrasp Seed": {
        "name": "Furgrasp Seed",
        "type": "Seed",
        "rarity": "Good",
        "description": "After murdering its father, the least you can do is plant this seed. Dont be a barbarian.",
        "icon": "furgrasp_seed.png"
    },
    "Strange Tuft": {
        "name": "Strange Tuft",
        "type": "Component",
        "rarity": "Good",
        "description": "A furgrasp must have ripped this tuft off of something... strange...",
        "icon": "strange_tuft.png"
    },
    "Flungus Airoot": {
        "name": "Flungus Airoot",
        "type": "Component",
        "rarity": "Normal",
        "description": "Flungi use these roots to keep themselves aloft somehow. It seems like magic, so it probably is, according to Occams razor.",
        "icon": "flungus_airoot.png"
    },
    "Flungus Brain": {
        "name": "Flungus Brain",
        "type": "Component",
        "rarity": "Normal",
        "description": "Based on the size and complexity of his brain, Flungi may be the most intelligent creatures in the universe. Too bad they cant move or speak!",
        "icon": "flungus_brain.png"
    },
    "Flungus Sporebee": {
        "name": "Flungus Sporebee",
        "type": "Seed",
        "rarity": "Good",
        "description": "Flungi home in on these bees to deposit their spores, or something. Planting one of these in Furdle Frost should generate a Flungus, at any rate!",
        "icon": "flungus_sporebee.png"
    },
    "Flungus Pod": {
        "name": "Flungus Pod",
        "type": "Component",
        "rarity": "Normal",
        "description": "This pod has avoided being exploded by your violent attacks. You sense that it is terrifed of you, and probably delicious.",
        "icon": "flungus_pod.png"
    },
    "Spiregg Goop": {
        "name": "Spiregg Goop",
        "type": "Component",
        "rarity": "Normal",
        "description": "Its wet and sticky, like the goop that comes out of an egg. Oh, wait... thats EXACTLY WHAT IT IS.",
        "icon": "spiregg_goop.png"
    },
    "Spiregg Yolk": {
        "name": "Spiregg Yolk",
        "type": "Component",
        "rarity": "Normal",
        "description": "Its packed full of nutrients, like fat, cholesterol, and various poisons! It also seems to be glaring at you.",
        "icon": "spiregg_yolk.png"
    },
    "Spiregg Shell": {
        "name": "Spiregg Shell",
        "type": "Component",
        "rarity": "Normal",
        "description": "This shell is one of the hardest substances youve seen since you began looking at it just a second ago.",
        "icon": "spiregg_shell.png"
    },
    "Magmite King": {
        "name": "Magmite King",
        "type": "Component",
        "rarity": "Good",
        "description": "It demands that you bow before it and kiss its appendages.",
        "icon": "magmite_king.png"
    },
    "Magmite Worker": {
        "name": "Magmite Worker",
        "type": "Component",
        "rarity": "Normal",
        "description": "This little bugger will chop the back of your face off if you take your eyes off it for a second. Just to be safe, you should try it.",
        "icon": "magmite_worker.png"
    },
    "Lonsdaleite": {
        "name": "Lonsdaleite",
        "type": "Component",
        "rarity": "Normal",
        "description": "This substance is harder than anything youve ever seen. The Magmites build their nests around this stuff, apparently hoping to mine it. So far they have never succeeded.",
        "icon": "lonsdaleite.png"
    },
    "Oil": {
        "name": "Oil",
        "type": "Component",
        "rarity": "Good",
        "description": "You cant imagine what this might be useful for.",
        "icon": "oil.png"
    },
    "Pipedirt Pipe": {
        "name": "Pipedirt Pipe",
        "type": "Component",
        "rarity": "Normal",
        "description": "This is just a pipe, made out of some type of organic plant matter. It becomes progressively floppier over time.",
        "icon": "pipedirt_pipe.png"
    },
    "Rustmoss": {
        "name": "Rustmoss",
        "type": "Component",
        "rarity": "Normal",
        "description": "This mossy stuff must do something to produce the pipes you always see protruding from it. BUT WHAT? Science will never know.",
        "icon": "rustmoss.png"
    },
    "Diamond": {
        "name": "Diamond",
        "type": "Component",
        "rarity": "Normal",
        "description": "The intense pressures inside Geysirs are SO CRAZY HIGH, they can turn just about anything into a diamond! Including whatever this was!",
        "icon": "diamond.png"
    },
    "Geysir Slurry": {
        "name": "Geysir Slurry",
        "type": "Component",
        "rarity": "Normal",
        "description": "When scrubbed down, this ball of crud yields a cornucopia of precious metals!",
        "icon": "geysir_slurry.png"
    },
    "Spood Beast": {
        "name": "Spood Beast",
        "type": "Component",
        "rarity": "Good",
        "description": "This little weirdo can move REALLY fast. When it wants to. Which it doesnt. YOU CANT TELL IT WHAT TO DO.",
        "icon": "spood_beast.png"
    },
    "Basic Hewgotable": {
        "name": "Basic Hewgotable",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "This table was built by Hewgodookos bare hands. Or whatever he uses for this kind of thing. Lasers, probably. Bare lasers.",
        "icon": "basic_hewgotable.png"
    },
    "Basic Hewgochair": {
        "name": "Basic Hewgochair",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "This chair was found in one of Hewgodookos bases. The craftsmanship is exquisite. Looking at this chair, you wonder whether Hewgodooko was once a skilled carpenter, and if so, why he would know how to build chairs if he can levitate.",
        "icon": "basic_hewgochair.png"
    },
    "Hewgolamp": {
        "name": "Hewgolamp",
        "type": "Lighting",
        "rarity": "Normal",
        "description": "This lamp glows with infinite fuel, probably using some kind of mystical energy source known only to... whatever Hewgodooko is.",
        "icon": "hewgolamp.png"
    },
    "Basic Hewgochest": {
        "name": "Basic Hewgochest",
        "type": "Chest",
        "rarity": "Normal",
        "description": "Hewgodooko has some pretty big chests. This will come in handy for normal chest-based activities.",
        "icon": "basic_hewgochest.png"
    },
    "Teal Hewgolantern": {
        "name": "Teal Hewgolantern",
        "type": "Lighting",
        "rarity": "Normal",
        "description": "A lamp from Hewgodookos base that goes on the floor. It glows a beautiful teal. The color reminds you of toothpaste, or the ocean, or stuff like that.",
        "icon": "teal_hewgolantern.png"
    },
    "Turbo Green Hewgolantern": {
        "name": "Turbo Green Hewgolantern",
        "type": "Lighting",
        "rarity": "Normal",
        "description": "This lantern is so green, you wonder if it could possibly get any greener. The answer is yes... OR IS IT? No, its not.",
        "icon": "turbo_green_hewgolantern.png"
    },
    "Yella Hewgolantern": {
        "name": "Yella Hewgolantern",
        "type": "Lighting",
        "rarity": "Normal",
        "description": "This lantern is yella. Yella, like the colah of the skah on a nahce summa dah.",
        "icon": "yella_hewgolantern.png"
    },
    "Rudorange Hewgolantern": {
        "name": "Rudorange Hewgolantern",
        "type": "Lighting",
        "rarity": "Normal",
        "description": "This lantern glows a deep, reddish-orange. It reminds you of the fiery eyes of a demon you once loved.",
        "icon": "rudorange_hewgolantern.png"
    },
    "Magentamazing Hewgolantern": {
        "name": "Magentamazing Hewgolantern",
        "type": "Lighting",
        "rarity": "Normal",
        "description": "THIS HEWGOLANTERN IS MAGENTAMAAAAAZING! Its magenta.",
        "icon": "magentamazing_hewgolantern.png"
    },
    "Perp Purp Hewgolantern": {
        "name": "Perp Purp Hewgolantern",
        "type": "Lighting",
        "rarity": "Normal",
        "description": "The color of this lantern is similar to the prison garb of inmates back home on Earth. Those were the days.",
        "icon": "perp_purp_hewgolantern.png"
    },
    "Bluh Hewgolantern": {
        "name": "Bluh Hewgolantern",
        "type": "Lighting",
        "rarity": "Normal",
        "description": "Dis lamp has uh bluh gluh.",
        "icon": "bluh_hewgolantern.png"
    },
    "Hologram": {
        "name": "Hologram",
        "type": "Furniture",
        "rarity": "Superior",
        "description": "This hologram stores a memory print of whatever the user exposes it to. Unfortunately, its too sophisticated for your feeble mind to understand how to update the display. Still, it looks nice!",
        "icon": "hologram.png"
    },
    "Glaser Silk": {
        "name": "Glaser Silk",
        "type": "Component",
        "rarity": "Good",
        "description": "Extracted from a domesticated Glaser, it works well to keep things tied up. Might as well not question a good thing.",
        "recipe": {
            "name": "Glaser",
            "output_qty": 1,
            "type": "Pet",
            "ingredients": [{"name": "Parapod", "qty": 3}, {"name": "Spiregg Yolk", "qty": 1}]
        },
        "icon": "glaser_silk.png"
    },
    "Glaser Antler Fragment": {
        "name": "Glaser Antler Fragment",
        "type": "Component",
        "rarity": "Normal",
        "description": "Its pointy and hums with energy. You wonder how it would feel to get poked by it.",
        "icon": "glaser_antler_fragment.png"
    },
    "Glaser Stomachball": {
        "name": "Glaser Stomachball",
        "type": "Component",
        "rarity": "Normal",
        "description": "When a Glaser eats something unusual, its stomachs tie in knots. This seems like a disadvantage.",
        "icon": "glaser_stomachball.png"
    },
    "Glaser Hoof": {
        "name": "Glaser Hoof",
        "type": "Component",
        "rarity": "Normal",
        "description": "Its extremely well insulated, like styrofoam. It also feels like styrofoam. You wonder if its styrofoam. It might just be styrofoam.",
        "icon": "glaser_hoof.png"
    },
    "Glaser Chargenub": {
        "name": "Glaser Chargenub",
        "type": "Component",
        "rarity": "Good",
        "description": "The heart of a Glasers extreme energy powers, this charge hub would be able to power a small cell phone.",
        "icon": "glaser_chargenub.png"
    },
    "Shirk Blubber": {
        "name": "Shirk Blubber",
        "type": "Component",
        "rarity": "Normal",
        "description": "It bounces and makes wet slapping noises when you throw it against things.",
        "icon": "shirk_blubber.png"
    },
    "Shirk Beakfragment": {
        "name": "Shirk Beakfragment",
        "type": "Component",
        "rarity": "Normal",
        "description": "It probably hurt when this was ripped from a Shirks face, but Shirks probably dont have emotions or self-awareness, so its not that big of a deal.",
        "icon": "shirk_beakfragment.png"
    },
    "Sodium Chunk": {
        "name": "Sodium Chunk",
        "type": "Component",
        "rarity": "Good",
        "description": "You managed to squeeze this whopping sodium chunk out of a domesticated Shirks salt gland. And you only nearly lost a limb!",
        "recipe": {
            "name": "Shirk",
            "output_qty": 1,
            "type": "Pet",
            "ingredients": [{"name": "Bamli Flightbladder", "qty": 1}, {
                "name": "Hair Louse",
                "qty": 1
            }, {"name": "Smashblossom Petal", "qty": 2}]
        },
        "icon": "sodium_chunk.png"
    },
    "Shirk Plumage": {
        "name": "Shirk Plumage",
        "type": "Component",
        "rarity": "Normal",
        "description": "These feathers give Shirks their beautiful, glorious majesty. They truly are natures most beautiful carnivorous flying bird shark monsters.",
        "icon": "shirk_plumage.png"
    },
    "Shirk Saltgland": {
        "name": "Shirk Saltgland",
        "type": "Component",
        "rarity": "Normal",
        "description": "Shirks like an extra pinch of salt on their meals, so this salt gland really comes in handy for such occasions.",
        "icon": "shirk_saltgland.png"
    },
    "Lyff Crystalshard": {
        "name": "Lyff Crystalshard",
        "type": "Component",
        "rarity": "Good",
        "description": "Legends say that Lyffs will give shards of their crystals to those they consider friends. What legends? You know... the legends.",
        "recipe": {
            "name": "Lyff",
            "output_qty": 1,
            "type": "Pet",
            "ingredients": [{"name": "Meltor", "qty": 1}, {
                "name": "Flungus Pod",
                "qty": 3
            }, {"name": "Fanged Strangler", "qty": 1}]
        },
        "icon": "lyff_crystalshard.png"
    },
    "Lyff Donglespring": {
        "name": "Lyff Donglespring",
        "type": "Component",
        "rarity": "Normal",
        "description": "The only organ a Lyff uses to get around. It makes a loud BOING sound when you pull it back and release.",
        "icon": "lyff_donglespring.png"
    },
    "Lyff Leather": {
        "name": "Lyff Leather",
        "type": "Component",
        "rarity": "Normal",
        "description": "The skin is quite thin, but its covered in an incredibly thick mat of fur. So thick, in fact, that it might not be fur at all. It might just be more skin.",
        "icon": "lyff_leather.png"
    },
    "Lyff Swimbladder": {
        "name": "Lyff Swimbladder",
        "type": "Component",
        "rarity": "Normal",
        "description": "When a Lyff wants to go for a dip, this puppy keeps it afloat. Its so effective that Lyffs cant swim more than a foot or so underwater without popping back up.",
        "icon": "lyff_swimbladder.png"
    },
    "Lyfftongue": {
        "name": "Lyfftongue",
        "type": "Component",
        "rarity": "Normal",
        "description": "Its coarse and covered in bumps. If you rub it on your cheek, nothing happens.",
        "icon": "lyfftongue.png"
    },
    "Gallum Warpcore": {
        "name": "Gallum Warpcore",
        "type": "Component",
        "rarity": "Good",
        "description": "Torn from the chest cavity of a Gallum, this warp core might be useful for something involving warping.",
        "icon": "gallum_warpcore.png"
    },
    "Gallum Rib": {
        "name": "Gallum Rib",
        "type": "Component",
        "rarity": "Normal",
        "description": "These ribs provide protection for the warp core of a Gallum. Not enough protection, apparently, because you easily pried it out with your bare hands.",
        "icon": "gallum_rib.png"
    },
    "Gallum Meat": {
        "name": "Gallum Meat",
        "type": "Component",
        "rarity": "Normal",
        "description": "This meat holds the ribs of a Gallum together. Throw that in a pot with some salt and pepper, and baby, youve got a stew going.",
        "icon": "gallum_meat.png"
    },
    "Gallum Armor": {
        "name": "Gallum Armor",
        "type": "Component",
        "rarity": "Normal",
        "description": "This would be one of the toughest substances known to mankind, if it were substantially tougher... and known to mankind.",
        "icon": "gallum_armor.png"
    },
    "Gulanti Blowhole": {
        "name": "Gulanti Blowhole",
        "type": "Component",
        "rarity": "Normal",
        "description": "You ripped that Gulanti a new, slightly bigger blowhole in exactly the same place as its old one.",
        "icon": "gulanti_blowhole.png"
    },
    "Gulanti Calcite": {
        "name": "Gulanti Calcite",
        "type": "Component",
        "rarity": "Normal",
        "description": "It gets warm when you hold fire to it, but it stops getting warm when you take the fire away.",
        "icon": "gulanti_calcite.png"
    },
    "Gulanti Chomper": {
        "name": "Gulanti Chomper",
        "type": "Component",
        "rarity": "Normal",
        "description": "Gulantis probably use these serrated edges to tear the meat from the bones of their innocent victims, or possibly for carpentry.",
        "icon": "gulanti_chomper.png"
    },
    "Gulanti Elecore": {
        "name": "Gulanti Elecore",
        "type": "Component",
        "rarity": "Good",
        "description": "You know that feeling when you rub your socks on the carpet, then touch something, and it zaps you? Touching this thing feels nothing like that.",
        "icon": "gulanti_elecore.png"
    },
    "Gulanti Zeolite": {
        "name": "Gulanti Zeolite",
        "type": "Component",
        "rarity": "Good",
        "description": "Whatever you put this next to, it makes that thing seem way more awesome. Its extracted from a domesticated Gulanti!",
        "recipe": {
            "name": "Gulanti",
            "output_qty": 1,
            "type": "Pet",
            "ingredients": [{"name": "Bunnion", "qty": 2}, {"name": "Depressurized Larva", "qty": 2}]
        },
        "icon": "gulanti_zeolite.png"
    },
    "Slurbshell": {
        "name": "Slurbshell",
        "type": "Component",
        "rarity": "Normal",
        "description": "When you gaze upon the lustrous sheen of the shell, you begin to hallucinate that you are stranded alone on a planet, fighting for your survival while trying to defeat a limbless alien.",
        "icon": "slurbshell.png"
    },
    "Slurb Electrucus": {
        "name": "Slurb Electrucus",
        "type": "Component",
        "rarity": "Good",
        "description": "Acquired from a domesticated Slurb. Is it mucus? Is it electric? Yes.",
        "recipe": {
            "name": "Slurb",
            "output_qty": 1,
            "type": "Pet",
            "ingredients": [{"name": "Spiregg Goop", "qty": 2}, {"name": "Hard Core", "qty": 2}, {
                "name": "Meltor",
                "qty": 1
            }]
        },
        "icon": "slurb_electrucus.png"
    },
    "Slurb Magnet": {
        "name": "Slurb Magnet",
        "type": "Component",
        "rarity": "Normal",
        "description": "Slurbs probably use these to amplify their aerobatic spins. This magnet has impeccable craftsmanship.",
        "icon": "slurb_magnet.png"
    },
    "Slurb Spine": {
        "name": "Slurb Spine",
        "type": "Component",
        "rarity": "Normal",
        "description": "Its so insanely pointy, you could probably attach it to something, then poke stuff with that thing, and it would hurt a lot.",
        "icon": "slurb_spine.png"
    },
    "Blastcrab Shell": {
        "name": "Blastcrab Shell",
        "type": "Component",
        "rarity": "Normal",
        "description": "Its not very firm under normal conditions, but it hardens instantly when exposed to explosions.",
        "icon": "blastcrab_shell.png"
    },
    "Blastcrab Ignition Gland": {
        "name": "Blastcrab Ignition Gland",
        "type": "Component",
        "rarity": "Good",
        "description": "Much like a grill lighter, this gland sends sparks into the Blastcrabs body and lights... whatever is in there.",
        "icon": "blastcrab_ignition_gland.png"
    },
    "Blastcrab Hydrocarbon": {
        "name": "Blastcrab Hydrocarbon",
        "type": "Component",
        "rarity": "Good",
        "description": "Pulled from a blast tube of a domesticated Blastcrab, this compound makes your breath flammable!",
        "recipe": {
            "name": "Blastcrab",
            "output_qty": 1,
            "type": "Pet",
            "ingredients": [{"name": "Oilbag", "qty": 2}, {"name": "Liquideon", "qty": 1}, {
                "name": "Flailpod",
                "qty": 2
            }]
        },
        "icon": "blastcrab_hydrocarbon.png"
    },
    "Blastcrab Hide": {
        "name": "Blastcrab Hide",
        "type": "Component",
        "rarity": "Normal",
        "description": "Its tough and chewy! Almost too chewy...",
        "icon": "blastcrab_hide.png"
    },
    "Gallium": {
        "name": "Gallium",
        "type": "Component",
        "rarity": "Good",
        "description": "This high-energy goo binds the cosmic energy of the Gallums crystals together. If you treat a domesticated Gallum well, it might give you some!",
        "recipe": {
            "name": "Gallum",
            "output_qty": 1,
            "type": "Pet",
            "ingredients": [{"name": "Gulanti Elecore", "qty": 1}, {
                "name": "Lonsdaleite",
                "qty": 2
            }, {"name": "Crystine", "qty": 1}]
        },
        "icon": "gallium.png"
    },
    "Glowb": {
        "name": "Glowb",
        "type": "Lighting",
        "rarity": "Normal",
        "description": "Youve packed about as much glow juice into one place as you possibly can. This thing should stay lit for... FRICKIN EONS.",
        "recipe": {
            "name": "Chemworks",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Glutterfly Chitin", "qty": 3}, {
                "name": "Basic Glue",
                "qty": 1
            }, {"name": "Glow Juice", "qty": 2}]
        },
        "icon": "glowb.png"
    },
    "Skinnery": {
        "name": "Skinnery",
        "type": "Workstation",
        "rarity": "Normal",
        "description": "Now youre crafting with Wompit parts!",
        "recipe": {
            "name": "Sawmill",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Wompit Leather", "qty": 12}, {
                "name": "Wompit Bone",
                "qty": 8
            }, {"name": "Whistleroot Reed", "qty": 22}]
        },
        "icon": "skinnery.png"
    },
    "Shirkbeak Pickaxe": {
        "name": "Shirkbeak Pickaxe",
        "type": "Tool",
        "level": "Tier 4",
        "rarity": "Normal",
        "description": "Tier 4 pickaxe. The hair bristles pleasantly against the palm of your hand as you wield it.",
        "recipe": {
            "name": "Granvil",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Split End", "qty": 8}, {"name": "Grenamel", "qty": 6}, {
                "name": "Clikkax",
                "qty": 1
            }, {"name": "Shirk Beakfragment", "qty": 7}]
        },
        "icon": "shirkbeak_pickaxe.png"
    },
    "Shredbasket": {
        "name": "Shredbasket",
        "type": "Workstation",
        "rarity": "Normal",
        "description": "If you put a piece of bread into it, you would end up with more pieces of bread.",
        "recipe": {
            "name": "Granvil",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Smashblossom Trunk", "qty": 23}, {
                "name": "Furgrasp Foliage",
                "qty": 6
            }, {"name": "Spiregg Shell", "qty": 6}, {"name": "Furgrasp Antler", "qty": 11}]
        },
        "icon": "shredbasket.png"
    },
    "Fursmasher": {
        "name": "Fursmasher",
        "type": "Weapon",
        "level": "Level 25",
        "rarity": "Random",
        "description": "Level 25 Hammer. The plumage on the hilt really gives it a nice counterbalanced heft.",
        "recipe": {
            "name": "Shredbasket",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Furgrasp Antler", "qty": 8}, {
                "name": "Smashblossom Petal",
                "qty": 9
            }, {"name": "Shirk Blubber", "qty": 13}, {"name": "Shirk Plumage", "qty": 3}]
        },
        "icon": "fursmasher.png"
    },
    "Smat": {
        "name": "Smat",
        "type": "Helm",
        "level": "Level 25",
        "rarity": "Random",
        "description": "Level 25 Helm. The last thing your enemies will remember is the shining glimmer of your beautiful shirkbeak smile.",
        "recipe": {
            "name": "Shredbasket",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Furgrasp Antler", "qty": 7}, {
                "name": "Smashblossom Trunk",
                "qty": 14
            }, {"name": "Shirk Plumage", "qty": 3}, {"name": "Shirk Beakfragment", "qty": 7}]
        },
        "icon": "smat.png"
    },
    "Smock": {
        "name": "Smock",
        "type": "Chest Armor",
        "level": "Level 25",
        "rarity": "Random",
        "description": "Level 25 Chest. Smashblossom parts can really take a pounding, and now, so can you!",
        "recipe": {
            "name": "Shredbasket",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Furgrasp Antler", "qty": 7}, {
                "name": "Smashblossom Trunk",
                "qty": 13
            }, {"name": "Strange Tuft", "qty": 1}, {"name": "Shirk Blubber", "qty": 11}]
        },
        "icon": "smock.png"
    },
    "Smitts": {
        "name": "Smitts",
        "type": "Gloves",
        "level": "Level 25",
        "rarity": "Random",
        "description": "Level 25 Glove. The yolk is pretty sticky, but it keeps the gloves firmly cemented onto your hands. Its a trade-off.",
        "recipe": {
            "name": "Shredbasket",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Furgrasp Antler", "qty": 5}, {
                "name": "Smashblossom Trunk",
                "qty": 11
            }, {"name": "Shirk Blubber", "qty": 9}, {"name": "Spiregg Yolk", "qty": 2}]
        },
        "icon": "smitts.png"
    },
    "Smants": {
        "name": "Smants",
        "type": "Leg Armor",
        "level": "Level 25",
        "rarity": "Random",
        "description": "Level 25 Pants. The blubber does a great job of trapping the natural heat of your spicy legs, which is pretty important in the cold of the Tundra.",
        "recipe": {
            "name": "Shredbasket",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Furgrasp Antler", "qty": 4}, {
                "name": "Smashblossom Trunk",
                "qty": 8
            }, {"name": "Shirk Blubber", "qty": 7}, {"name": "Smashblossom Petal", "qty": 5}]
        },
        "icon": "smants.png"
    },
    "Poorly Repaired Shirk Egg": {
        "name": "Poorly Repaired Shirk Egg",
        "type": "Creature Catalyst",
        "rarity": "Superior",
        "description": "Its a patchy job, but most Shirks are just dumb enough to fall for it. Embiggens your Shirk to POWERFUL SIZE!",
        "recipe": {
            "name": "Shredbasket",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Berg Shirk Essence", "qty": 12}, {
                "name": "Shirk Blubber",
                "qty": 107
            }, {"name": "Spiregg Shell", "qty": 30}, {"name": "Spiregg Goop", "qty": 56}]
        },
        "icon": "poorly_repaired_shirk_egg.png"
    },
    "Pressure Cooker": {
        "name": "Pressure Cooker",
        "type": "Workstation",
        "rarity": "Normal",
        "description": "Be sure not to put your face in front of this while its running, unless youre into horrifying spa treatments.",
        "recipe": {
            "name": "Shredbasket",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Diamond", "qty": 3}, {
                "name": "Hard Core",
                "qty": 12
            }, {"name": "Fanged Strangler", "qty": 1}, {"name": "Glaser Stomachball", "qty": 3}]
        },
        "icon": "pressure_cooker.png"
    },
    "Gastropestle": {
        "name": "Gastropestle",
        "type": "Workstation",
        "rarity": "Normal",
        "description": "Like the chemistry set you had as a kid, but morbid.",
        "recipe": {
            "name": "Shredbasket",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Glaser Stomachball", "qty": 4}, {
                "name": "Hard Core",
                "qty": 16
            }, {"name": "Boreole", "qty": 2}]
        },
        "icon": "gastropestle.png"
    },
    "Antlerhoof Trowel": {
        "name": "Antlerhoof Trowel",
        "type": "Tool",
        "level": "Tier 3",
        "rarity": "Normal",
        "description": "Tier 3 trowel. Antlers and hooves are terrible at prying things off the ground, until you combine them. In a sense, theyre like the mustard and mayonnaise of a deviled egg.",
        "recipe": {
            "name": "Shredbasket",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Splintrowel", "qty": 1}, {
                "name": "Furgrasp Antler",
                "qty": 8
            }, {"name": "Glaser Hoof", "qty": 5}, {"name": "Spiregg Goop", "qty": 7}]
        },
        "icon": "antlerhoof_trowel.png"
    },
    "Saggy Healing Potion": {
        "name": "Saggy Healing Potion",
        "type": "Consumable",
        "rarity": "Good",
        "description": "The sagtatoe container really brings out the flavonoids. Restores 6,521 HP.",
        "recipe": {
            "name": "Cauldron",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Sagtatoe", "qty": 3}, {"name": "Skeletonized Fathead", "qty": 3}]
        },
        "icon": "saggy_healing_potion.png"
    },
    "Elixir of Siphoning": {
        "name": "Elixir of Siphoning",
        "type": "Consumable",
        "rarity": "Good",
        "description": "Juicing up with this bad boy lets you SUCK THE LIFE FROM EVERYONE AROUND YOU! 2% chance to regain health upon striking. Elixir lasts 20 minutes.",
        "recipe": {
            "name": "Pressure Cooker",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Pipedirt Pipe", "qty": 8}, {
                "name": "Jumpy Gulanti Essence",
                "qty": 1
            }, {"name": "Crystine", "qty": 2}]
        },
        "icon": "elixir_of_siphoning.png"
    },
    "Smashy Healbev": {
        "name": "Smashy Healbev",
        "type": "Consumable",
        "rarity": "Good",
        "description": "With this much protein, you could seriously consider getting into squats. Restores 17,894 HP.",
        "recipe": {
            "name": "Pressure Cooker",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Smashblossom Trunk", "qty": 3}, {"name": "Parapod", "qty": 3}]
        },
        "icon": "smashy_healbev.png"
    },
    "Elixir of Temporary Insanity": {
        "name": "Elixir of Temporary Insanity",
        "type": "Consumable",
        "rarity": "Good",
        "description": "This disgusting fluid makes you REALLY UPSET. 3% chance to go berserk upon striking. Elixir lasts 20 minutes.",
        "recipe": {
            "name": "Pressure Cooker",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Smashblossom Trunk", "qty": 8}, {
                "name": "Conjoined Perp",
                "qty": 1
            }, {"name": "Berg Shirk Essence", "qty": 1}]
        },
        "icon": "elixir_of_temporary_insanity.png"
    },
    "Dirt": {"name": "Dirt", "type": "Component", "rarity": "Normal", "description": "Its dirty.", "icon": "dirt.png"},
    "Furdle Durt": {
        "name": "Furdle Durt",
        "type": "Floor",
        "rarity": "Normal",
        "description": "You can plant seeds in it! Its so furdle and durty!.",
        "recipe": {
            "name": "BS SSSS SS5",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Dirt", "qty": 8}, {"name": "Sawdust", "qty": 4}]
        },
        "icon": "furdle_durt.png"
    },
    "Gaze Catcher": {
        "name": "Gaze Catcher",
        "type": "Creature Catalyst",
        "rarity": "Superior",
        "description": "If theres one thing a Glaser cant resist, its a space traveler in tight spandex flinging a ball of awkwardly-assembled objects at it. Embiggens your Glaser to POWERFUL SIZE!",
        "recipe": {
            "name": "Gastropestle",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Glaser Antler Fragment", "qty": 67}, {
                "name": "Royal Glaser Essence",
                "qty": 8
            }, {"name": "Fanged Strangler", "qty": 6}, {"name": "Diamond", "qty": 17}]
        },
        "icon": "gaze_catcher.png"
    },
    "Hardcore Stomord": {
        "name": "Hardcore Stomord",
        "type": "Weapon",
        "level": "Level 27",
        "rarity": "Random",
        "description": "Level 27 Sword. Although Glaser stomachs dont make for very good building components, they work much better once you stab them with everything else.",
        "recipe": {
            "name": "Gastropestle",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Glaser Stomachball", "qty": 2}, {
                "name": "Diamond",
                "qty": 2
            }, {"name": "Hard Core", "qty": 9}, {"name": "Fanged Strangler", "qty": 1}]
        },
        "icon": "hardcore_stomord.png"
    },
    "Gloots": {
        "name": "Gloots",
        "type": "Leg Armor",
        "level": "Level 27",
        "rarity": "Random",
        "description": "Level 27 Pants. The stranglers keep all your parts packed in tight!",
        "recipe": {
            "name": "Gastropestle",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Glaser Hoof", "qty": 3}, {
                "name": "Parapod",
                "qty": 3
            }, {"name": "Fanged Strangler", "qty": 1}]
        },
        "icon": "gloots.png"
    },
    "Glasevest": {
        "name": "Glasevest",
        "type": "Chest Armor",
        "level": "Level 27",
        "rarity": "Random",
        "description": "Level 27 Chest. It protect, lifts, and supports! Your dignity, that is.",
        "recipe": {
            "name": "Gastropestle",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Hard Core", "qty": 7}, {"name": "Fanged Strangler", "qty": 1}, {
                "name": "Parapod",
                "qty": 3
            }, {"name": "Glaser Antler Fragment", "qty": 7}]
        },
        "icon": "glasevest.png"
    },
    "Hardhat": {
        "name": "Hardhat",
        "type": "Helm",
        "level": "Level 27",
        "rarity": "Random",
        "description": "Level 27 Helm. Itll protect your face so hard, you wont even know what hit you. Seriously, youll have no idea.",
        "recipe": {
            "name": "Gastropestle",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Hard Core", "qty": 8}, {
                "name": "Fanged Strangler",
                "qty": 1
            }, {"name": "Glaser Antler Fragment", "qty": 8}, {"name": "Diamond", "qty": 2}]
        },
        "icon": "hardhat.png"
    },
    "Stomagloves": {
        "name": "Stomagloves",
        "type": "Gloves",
        "level": "Level 27",
        "rarity": "Random",
        "description": "Level 27 Glove. The high levels of acid on the inside will definitely render your hands soft and tender. Everyone loves soft hands!",
        "recipe": {
            "name": "Gastropestle",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Glaser Stomachball", "qty": 2}, {
                "name": "Fanged Strangler",
                "qty": 1
            }, {"name": "Diamond", "qty": 2}, {"name": "Shirk Saltgland", "qty": 2}]
        },
        "icon": "stomagloves.png"
    },
    "Slurry Processing": {
        "name": "Slurry Processing",
        "type": "Component",
        "rarity": "Good",
        "description": "By dumping slurry into the Slurrifier, youll be able to clean it up and extract something useful from it.",
        "recipe": {
            "name": "Slurrifier",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Geysir Slurry", "qty": 1}, {"name": "Parapod", "qty": 1}]
        },
        "icon": "slurry_processing.png",
        "drop":["Meltor","Karboan","Technium"]
    },
    "Slurrifier": {
        "name": "Slurrifier",
        "type": "Workstation",
        "rarity": "Normal",
        "description": "It seems that the slurry you get from geysirs might contain valuable resources. This station will let you extract all the delicious goodness!",
        "recipe": {
            "name": "Gastropestle",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Boreole", "qty": 2}, {"name": "Hard Core", "qty": 13}, {
                "name": "Slurbshell",
                "qty": 26
            }, {"name": "Slurb Spine", "qty": 14}]
        },
        "icon": "slurrifier.png"
    },
    "Karboan": {
        "name": "Karboan",
        "type": "Component",
        "rarity": "Normal",
        "description": "This was covered in some Geysir Slurry, and you managed to clean it up. Its pretty rough around the edges, but it might be good for something.",
        "icon": "karboan.png"
    },
    "Technium": {
        "name": "Technium",
        "type": "Component",
        "rarity": "Normal",
        "description": "Its hard and scratch-proof, and polished to a perfect sheen. Nothing you do seems to dent it, and it hums gently when you come near it.",
        "icon": "technium.png"
    },
    "Meltor": {
        "name": "Meltor",
        "type": "Component",
        "rarity": "Normal",
        "description": "This toxic goo is a primary component of slurry. It sticks to everything it touches, including your nostrils.",
        "icon": "meltor.png"
    },
    "Karbopole": {
        "name": "Karbopole",
        "type": "Tool",
        "level": "Tier 3",
        "rarity": "Normal",
        "description": "Tier 3 fishing pole. Its long, hard, and thorny. Like a fishing pole should be.",
        "recipe": {
            "name": "Gastropestle",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Karboan", "qty": 12}, {"name": "Slurb Spine", "qty": 10}, {
                "name": "Exopole",
                "qty": 1
            }, {"name": "Glaser Silk", "qty": 2}]
        },
        "icon": "karbopole.png"
    },
    "Tumbler": {
        "name": "Tumbler",
        "type": "Workstation",
        "rarity": "Normal",
        "description": "Fully equipped for all your tumbling needs, this Tumbler even comes with a cupholder! In the sense that you can put a cup near it.",
        "recipe": {
            "name": "Gastropestle",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Karboan", "qty": 18}, {"name": "Ice Skate", "qty": 4}, {
                "name": "Ventsleeper",
                "qty": 2
            }, {"name": "Boreole", "qty": 2}]
        },
        "icon": "tumbler.png"
    },
    "Elixir of Resilience": {
        "name": "Elixir of Resilience",
        "type": "Consumable",
        "rarity": "Good",
        "description": "It smells like waffles without syrup. Reduces physical damage taken by 15%. Elixir lasts 20 minutes.",
        "recipe": {
            "name": "Pressure Cooker",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Pipedirt Pipe", "qty": 6}, {"name": "Icequill", "qty": 2}, {
                "name": "Rustmoss",
                "qty": 2
            }, {"name": "Pressurized Blastcrab Essence", "qty": 1}]
        },
        "icon": "elixir_of_resilience.png"
    },
    "Karbaxe": {
        "name": "Karbaxe",
        "type": "Weapon",
        "level": "Level 29",
        "rarity": "Random",
        "description": "Level 29 Axe. When swung hard enough, ice skates can become deadly weapons. Like most things, probably.",
        "recipe": {
            "name": "Tumbler",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Karboan", "qty": 12}, {"name": "Ice Skate", "qty": 3}, {
                "name": "Slurb Spine",
                "qty": 10
            }, {"name": "Meltor", "qty": 4}]
        },
        "icon": "karbaxe.png"
    },
    "Karbelm": {
        "name": "Karbelm",
        "type": "Helm",
        "level": "Level 29",
        "rarity": "Random",
        "description": "Level 29 Helm. You could put a lot of eyes out with these things.",
        "recipe": {
            "name": "Tumbler",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Karboan", "qty": 11}, {"name": "Squeti", "qty": 6}, {
                "name": "Meltor",
                "qty": 4
            }, {"name": "Slurb Spine", "qty": 9}]
        },
        "icon": "karbelm.png"
    },
    "Slest": {
        "name": "Slest",
        "type": "Chest Armor",
        "level": "Level 29",
        "rarity": "Random",
        "description": "Level 29 Chest. Nothing insulates your saucy torso like a Squeti.",
        "recipe": {
            "name": "Tumbler",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Karboan", "qty": 10}, {"name": "Slurbshell", "qty": 14}, {
                "name": "Squeti",
                "qty": 5
            }, {"name": "Coralduster", "qty": 4}]
        },
        "icon": "slest.png"
    },
    "Sloves": {
        "name": "Sloves",
        "type": "Gloves",
        "level": "Level 29",
        "rarity": "Random",
        "description": "Level 29 Glove. Poofy shoulderpads are IN! Fashion is cyclical, right? ... Right?",
        "recipe": {
            "name": "Tumbler",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Squeti", "qty": 6}, {"name": "Slurbshell", "qty": 16}, {
                "name": "Coralduster",
                "qty": 4
            }]
        },
        "icon": "sloves.png"
    },
    "Sloots": {
        "name": "Sloots",
        "type": "Leg Armor",
        "level": "Level 29",
        "rarity": "Random",
        "description": "Level 29 Pants. Sloots with the fur, to protect your beautiful calves from the biting cold.",
        "recipe": {
            "name": "Tumbler",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Squeti", "qty": 5}, {"name": "Slurbshell", "qty": 12}, {
                "name": "Ice Skate",
                "qty": 2
            }]
        },
        "icon": "sloots.png"
    },
    "Magnetic Bracelet": {
        "name": "Magnetic Bracelet",
        "type": "Creature Catalyst",
        "rarity": "Superior",
        "description": "Slurbs rely on magnetism to powercharge their leaps. Embiggens your Slurb to POWERFUL SIZE!",
        "recipe": {
            "name": "Tumbler",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Slurbshell", "qty": 147}, {
                "name": "Slurb Magnet",
                "qty": 18
            }, {"name": "Slurb Electrucus", "qty": 10}, {"name": "Raging Slurb Essence", "qty": 14}]
        },
        "icon": "magnetic_bracelet.png"
    },
    "Spinesaw": {
        "name": "Spinesaw",
        "type": "Tool",
        "level": "Tier 5",
        "rarity": "Normal",
        "description": "Tier 5 saw. The jagged spines of Slurbs make for an amazing saw. They are also great conversation starters and enders!",
        "recipe": {
            "name": "Tumbler",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Lyfftongue", "qty": 4}, {"name": "Slurb Spine", "qty": 10}, {
                "name": "Karboan",
                "qty": 12
            }, {"name": "Sawstache", "qty": 1}]
        },
        "icon": "spinesaw.png"
    },
    "Burnchurn": {
        "name": "Burnchurn",
        "type": "Workstation",
        "rarity": "Normal",
        "description": "Good thing it runs on its own, or youd end up with a lot of disfiguring scars!",
        "recipe": {
            "name": "Tumbler",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Blackbark", "qty": 6}, {"name": "Bluffluff", "qty": 19}, {
                "name": "Flungus Pod",
                "qty": 29
            }, {"name": "Coralduster", "qty": 7}]
        },
        "icon": "burnchurn.png"
    },
    "Flungmallet": {
        "name": "Flungmallet",
        "type": "Weapon",
        "level": "Level 31",
        "rarity": "Random",
        "description": "Level 31 Hammer. Although soft and filled with air, flungus pods can do some serious damage in the very, very long term. Years, maybe.",
        "recipe": {
            "name": "Burnchurn",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Flungus Pod", "qty": 20}, {"name": "Bluffluff", "qty": 13}, {
                "name": "Blackbark",
                "qty": 5
            }, {"name": "Lyff Swimbladder", "qty": 2}]
        },
        "icon": "flungmallet.png"
    },
    "Lyff Toy Bauble": {
        "name": "Lyff Toy Bauble",
        "type": "Creature Catalyst",
        "rarity": "Superior",
        "description": "Lyffs are super playful, so this toy-ish baubley thing should win one over pretty easily. Embiggens your Lyff to POWERFUL SIZE!",
        "recipe": {
            "name": "Burnchurn",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Lyff Broh Essence", "qty": 7}, {
                "name": "Lyff Donglespring",
                "qty": 17
            }, {"name": "Coppersponge", "qty": 55}, {"name": "Flungus Sporebee", "qty": 51}]
        },
        "icon": "lyff_toy_bauble.png"
    },
    "Thinkingcap": {
        "name": "Thinkingcap",
        "type": "Helm",
        "level": "Level 31",
        "rarity": "Random",
        "description": "Level 31 Helm. Wearing this cap infuses your cerebrum with the mental faculties of a Flungus. It also removes your depth perception, which is a plus.",
        "recipe": {
            "name": "Burnchurn",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Lyff Leather", "qty": 7}, {
                "name": "Blackbark",
                "qty": 4
            }, {"name": "Flungus Brain", "qty": 3}, {"name": "Flungus Pod", "qty": 18}]
        },
        "icon": "thinkingcap.png"
    },
    "Florset": {
        "name": "Florset",
        "type": "Chest Armor",
        "level": "Level 31",
        "rarity": "Random",
        "description": "Level 31 Chest. Its tight, which is what makes it so nice.",
        "recipe": {
            "name": "Burnchurn",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Lyff Leather", "qty": 6}, {"name": "Blackbark", "qty": 4}, {
                "name": "Bluffluff",
                "qty": 11
            }, {"name": "Coppersponge", "qty": 6}]
        },
        "icon": "florset.png"
    },
    "Tonguemitts": {
        "name": "Tonguemitts",
        "type": "Gloves",
        "level": "Level 31",
        "rarity": "Random",
        "description": "Level 31 Glove. Wrapping a Lyff tongue around your hand has augmented the sounds of your slaps to become very satisfying.",
        "recipe": {
            "name": "Burnchurn",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Flungus Airoot", "qty": 13}, {
                "name": "Bluffluff",
                "qty": 9
            }, {"name": "Lyff Leather", "qty": 5}, {"name": "Lyfftongue", "qty": 3}]
        },
        "icon": "tonguemitts.png"
    },
    "Floots": {
        "name": "Floots",
        "type": "Leg Armor",
        "level": "Level 31",
        "rarity": "Random",
        "description": "Level 31 Pants. The fluff feels good in between your toes. Or it would, if you had some.",
        "recipe": {
            "name": "Burnchurn",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Bluffluff", "qty": 9}, {"name": "Flungus Pod", "qty": 13}, {
                "name": "Blackbark",
                "qty": 3
            }]
        },
        "icon": "floots.png"
    },
    "Icy Pickaxe": {
        "name": "Icy Pickaxe",
        "type": "Tool",
        "level": "Tier 5",
        "rarity": "Normal",
        "description": "Tier 5 pickaxe. Be careful not to poke your parts with the spiky ball part of the pick.",
        "recipe": {
            "name": "Burnchurn",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Blastcrab Shell", "qty": 8}, {
                "name": "Flailpod",
                "qty": 8
            }, {"name": "Shirkbeak Pickaxe", "qty": 1}, {"name": "Lyff Crystalshard", "qty": 2}]
        },
        "icon": "icy_pickaxe.png"
    },
    "Refinery": {
        "name": "Refinery",
        "type": "Workstation",
        "rarity": "Normal",
        "description": "Pump it up and process it down! This bad boy will turn all that bubblin crude into whatever your little heart desires!",
        "recipe": {
            "name": "Burnchurn",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Pipedirt Pipe", "qty": 26}, {
                "name": "Blastcrab Shell",
                "qty": 12
            }, {"name": "Blastcrab Hide", "qty": 7}, {"name": "Icequill", "qty": 8}]
        },
        "icon": "refinery.png"
    },
    "Alloyonite": {
        "name": "Alloyonite",
        "type": "Component",
        "rarity": "Good",
        "description": "Its hard, round, and smooth. Despite its toughness, it has just enough give to make for some pretty good bounces.",
        "recipe": {
            "name": "Refinery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Karboan", "qty": 1}, {"name": "Oilbag", "qty": 1}]
        },
        "icon": "alloyonite.png"
    },
    "Redhat": {
        "name": "Redhat",
        "type": "Helm",
        "level": "Level 33",
        "rarity": "Random",
        "description": "Level 33 Helm. Its just heavy enough that you might break your neck wearing it. Thats how you know its good.",
        "recipe": {
            "name": "Refinery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Alloyonite", "qty": 4}, {
                "name": "Blastcrab Shell",
                "qty": 8
            }, {"name": "Blastcrab Hide", "qty": 4}, {"name": "Pipedirt Pipe", "qty": 16}]
        },
        "icon": "redhat.png"
    },
    "Redcoat": {
        "name": "Redcoat",
        "type": "Chest Armor",
        "level": "Level 33",
        "rarity": "Random",
        "description": "Level 33 Chest. Its strong enough for a man, and also strong enough for a woman. Because women and men are equal.",
        "recipe": {
            "name": "Refinery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Alloyonite", "qty": 3}, {"name": "Rustmoss", "qty": 5}, {
                "name": "Icequill",
                "qty": 4
            }, {"name": "Blastcrab Hide", "qty": 4}]
        },
        "icon": "redcoat.png"
    },
    "Redsleeves": {
        "name": "Redsleeves",
        "type": "Gloves",
        "level": "Level 33",
        "rarity": "Random",
        "description": "Level 33 Glove. It looks sharp on the outside, but its even sharper on the inside. You should seek medical attention.",
        "recipe": {
            "name": "Refinery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Alloyonite", "qty": 3}, {
                "name": "Blastcrab Shell",
                "qty": 6
            }, {"name": "Blastcrab Hide", "qty": 3}, {"name": "Icequill", "qty": 4}]
        },
        "icon": "redsleeves.png"
    },
    "Redboots": {
        "name": "Redboots",
        "type": "Leg Armor",
        "level": "Level 33",
        "rarity": "Random",
        "description": "Level 33 Pants. These boots will grant you the style of one eagle and the finesse of another eagle, high-fiving as they soar through space.",
        "recipe": {
            "name": "Refinery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Alloyonite", "qty": 3}, {"name": "Rustmoss", "qty": 4}, {
                "name": "Blastcrab Hide",
                "qty": 3
            }]
        },
        "icon": "redboots.png"
    },
    "Redpoker": {
        "name": "Redpoker",
        "type": "Weapon",
        "level": "Level 33",
        "rarity": "Random",
        "description": "Level 33 Sword. Look at this sword. You could poke the whole world with this thing.",
        "recipe": {
            "name": "Refinery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Alloyonite", "qty": 4}, {"name": "Meltor", "qty": 5}, {
                "name": "Pipedirt Pipe",
                "qty": 18
            }, {"name": "Slurb Electrucus", "qty": 2}]
        },
        "icon": "redpoker.png"
    },
    "Bagpump": {
        "name": "Bagpump",
        "type": "Workstation",
        "rarity": "Normal",
        "description": "It makes horrible squealing noises as it extracts oil from the waters of the Tundra. It makes you feel like dancing.",
        "recipe": {
            "name": "Refinery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Pipedirt Pipe", "qty": 27}, {
                "name": "Blastcrab Hide",
                "qty": 7
            }, {"name": "Slurb Magnet", "qty": 4}, {"name": "Lyff Swimbladder", "qty": 3}]
        },
        "icon": "bagpump.png"
    },
    "Oilbag": {
        "name": "Oilbag",
        "type": "Component",
        "rarity": "Good",
        "description": "Priming your Bagpump with an Icequill lets you extract this from the water. Its oily on the outside, and oilier on the inside!",
        "recipe": {
            "name": "Bagpump",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Icequill", "qty": 3}]
        },
        "icon": "oilbag.png"
    },
    "Oiled Calcite Trowel": {
        "name": "Oiled Calcite Trowel",
        "type": "Tool",
        "level": "Tier 4",
        "rarity": "Normal",
        "description": "Tier 4 trowel. The grip is pretty slippery, but it should get the job done.",
        "recipe": {
            "name": "Refinery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Gulanti Calcite", "qty": 11}, {
                "name": "Antlerhoof Trowel",
                "qty": 1
            }, {"name": "Oilbag", "qty": 5}, {"name": "Pipedirt Pipe", "qty": 18}]
        },
        "icon": "oiled_calcite_trowel.png"
    },
    "Blastcrab Firebarrel": {
        "name": "Blastcrab Firebarrel",
        "type": "Creature Catalyst",
        "rarity": "Superior",
        "description": "Blastcrabs care about one thing only, and thats burning everything. Embiggens your Blastcrab to POWERFUL SIZE!",
        "recipe": {
            "name": "Refinery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Blastcrab Shell", "qty": 67}, {
                "name": "Blastcrab Ignition Gland",
                "qty": 9
            }, {"name": "Oilbag", "qty": 42}, {"name": "Pressurized Blastcrab Essence", "qty": 7}]
        },
        "icon": "blastcrab_firebarrel.png"
    },
    "Foundry": {
        "name": "Foundry",
        "type": "Workstation",
        "rarity": "Normal",
        "description": "It runs pretty hot, but not very fast. You could probably beat it in a marathon, or with a stick.",
        "recipe": {
            "name": "Refinery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Lonsdaleite", "qty": 12}, {
                "name": "Crystine",
                "qty": 7
            }, {"name": "Magmite Worker", "qty": 8}, {"name": "Gulanti Calcite", "qty": 17}]
        },
        "icon": "foundry.png"
    },
    "Lonsdaxe": {
        "name": "Lonsdaxe",
        "type": "Weapon",
        "level": "Level 35",
        "rarity": "Legendary",
        "description": "Level 35 Axe. Its heavy, awkward, pointy, and dangerous. Just like your ex-spouse.",
        "recipe": {
            "name": "Foundry",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Lonsdaleite", "qty": 35}, {
                "name": "Crystine",
                "qty": 21
            }, {"name": "Gallum Armor", "qty": 44}, {"name": "Gulanti Chomper", "qty": 27}]
        },
        "icon": "lonsdaxe.png"
    },
    "Lonsdelm": {
        "name": "Lonsdelm",
        "type": "Helm",
        "level": "Level 35",
        "rarity": "Legendary",
        "description": "Level 35 Helm. It fits so snugly over your skull, you can barely hear, think, see, or breathe. So protective!",
        "recipe": {
            "name": "Foundry",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Lonsdaleite", "qty": 42}, {
                "name": "Gulanti Chomper",
                "qty": 33
            }, {"name": "Magmite King", "qty": 5}]
        },
        "icon": "lonsdelm.png"
    },
    "Lonschest": {
        "name": "Lonschest",
        "type": "Chest Armor",
        "level": "Level 35",
        "rarity": "Legendary",
        "description": "Level 35 Chest. It grips your ribs with the strength of a thousand dung beetles!",
        "recipe": {
            "name": "Foundry",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Lonsdaleite", "qty": 28}, {
                "name": "Gallum Rib",
                "qty": 9
            }, {"name": "Gallum Armor", "qty": 35}, {"name": "Gulanti Calcite", "qty": 41}]
        },
        "icon": "lonschest.png"
    },
    "Lonsmitts": {
        "name": "Lonsmitts",
        "type": "Gloves",
        "level": "Level 35",
        "rarity": "Legendary",
        "description": "Level 35 Glove. The blowhole makes for a great seal, and the hard outer covering makes for a great hard outer covering! All in all, 3/5 stars.",
        "recipe": {
            "name": "Foundry",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Lonsdaleite", "qty": 30}, {
                "name": "Gulanti Blowhole",
                "qty": 11
            }, {"name": "Crystine", "qty": 19}]
        },
        "icon": "lonsmitts.png"
    },
    "Lonsboots": {
        "name": "Lonsboots",
        "type": "Leg Armor",
        "level": "Level 35",
        "rarity": "Legendary",
        "description": "Level 35 Pants. Having a blowhole wrapped around your thigh reminds you of your college days.",
        "recipe": {
            "name": "Foundry",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Lonsdaleite", "qty": 18}, {
                "name": "Gulanti Blowhole",
                "qty": 6
            }, {"name": "Gallum Meat", "qty": 12}, {"name": "Crystine", "qty": 11}]
        },
        "icon": "lonsboots.png"
    },
    "Surprise Grub": {
        "name": "Surprise Grub",
        "type": "Creature Catalyst",
        "rarity": "Superior",
        "description": "Gulantis love hide and seek. Maybe this little trick will scare one! Embiggens your Gulanti to POWERFUL SIZE!",
        "recipe": {
            "name": "Foundry",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Gulanti Elecore", "qty": 14}, {
                "name": "Depressurized Larva",
                "qty": 10
            }, {"name": "Bunnion", "qty": 15}, {"name": "Jumpy Gulanti Essence", "qty": 10}]
        },
        "icon": "surprise_grub.png"
    },
    "Puzzlecube": {
        "name": "Puzzlecube",
        "type": "Creature Catalyst",
        "rarity": "Superior",
        "description": "Take your Gallum to the next level OF PUZZLING ACTION! Embiggens your Gallum to POWERFUL SIZE!",
        "recipe": {
            "name": "Foundry",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Lonsdaleite", "qty": 65}, {
                "name": "Crystine",
                "qty": 39
            }, {"name": "Calcified Gallum Essence", "qty": 9}, {"name": "Gallum Warpcore", "qty": 12}]
        },
        "icon": "puzzlecube.png"
    },
    "Fishiminea": {
        "name": "Fishiminea",
        "type": "Workstation",
        "rarity": "Normal",
        "description": "It can hold in a lot of heat, though it gets sticky after a lot of use. It could use a good rub-down from time to time.",
        "recipe": {
            "name": "Squathe",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Ball Snail", "qty": 5}, {
                "name": "Deviltailed Slapper",
                "qty": 3
            }, {"name": "Giant Fossilized Femur", "qty": 4}, {"name": "Tartil Pitch", "qty": 20}]
        },
        "icon": "fishiminea.png"
    },
    "Jackweaver": {
        "name": "Jackweaver",
        "type": "Workstation",
        "rarity": "Normal",
        "description": "It pulls together all manner of things, strips them into strips, and weaves them together into a weave. BRILLIANT!",
        "recipe": {
            "name": "Jollyscope",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Myelar", "qty": 23}, {"name": "Wojack Cilia", "qty": 5}, {
                "name": "Wojack Petal",
                "qty": 21
            }, {"name": "Wojack Sucker", "qty": 15}]
        },
        "icon": "jackweaver.png"
    },
    "Compressor": {
        "name": "Compressor",
        "type": "Workstation",
        "rarity": "Normal",
        "description": "All you need is the right attitude, a bit of elbow grease, and an elaborate workstation made of the skin of giant inflatable aliens.",
        "recipe": {
            "name": "Bioloom",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Snorble Skin", "qty": 16}, {
                "name": "Snorble Airsak",
                "qty": 9
            }, {"name": "Clossom", "qty": 3}, {"name": "Blube", "qty": 13}]
        },
        "icon": "compressor.png"
    },
    "Centrifuge": {
        "name": "Centrifuge",
        "type": "Workstation",
        "rarity": "Normal",
        "description": "Spinning. It makes the world go round.",
        "recipe": {
            "name": "Compressor",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Satgat Exoskeleton", "qty": 18}, {
                "name": "Coral Tubes",
                "qty": 2
            }, {"name": "Satgat Flesh", "qty": 5}, {"name": "Skeletonized Fathead", "qty": 3}]
        },
        "icon": "centrifuge.png"
    },
    "Chemwand": {
        "name": "Chemwand",
        "type": "Trinket",
        "rarity": "Superior",
        "description": "Its only after youve burned everything that youre free to do anything. Grants a 10% chance to set enemies on fire.",
        "recipe": {
            "name": "Compressor",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Snorble Mucusak", "qty": 5}, {
                "name": "Satgat Chemoreceptors",
                "qty": 6
            }, {"name": "Tusker", "qty": 31}]
        },
        "icon": "chemwand.png"
    },
    "Shivly": {
        "name": "Shivly",
        "type": "Trinket",
        "rarity": "Superior",
        "description": "Imbue your attacks with THROAK TENTACLE POWERS! Grants a 10% chance on melee attack to deal ice damage.",
        "recipe": {
            "name": "Bioloom",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Throak Nematocyte", "qty": 8}, {
                "name": "Throak Jelly",
                "qty": 4
            }, {"name": "Jolly Fulmar", "qty": 7}, {"name": "Splinter", "qty": 52}]
        },
        "icon": "shivly.png"
    },
    "Retina Mounted Spice Injector": {
        "name": "Retina Mounted Spice Injector",
        "type": "Trinket",
        "rarity": "Superior",
        "description": "You can see clearly now; the pain is gone. Reduces cooldowns of all items by 15%.",
        "recipe": {
            "name": "Jackweaver",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Wojack Spice", "qty": 4}, {
                "name": "Boba",
                "qty": 4
            }, {"name": "Throak Nematocyte", "qty": 7}, {"name": "Wojack Cornea", "qty": 16}]
        },
        "icon": "retina_mounted_spice_injector.png"
    },
    "Optimized Gamepad": {
        "name": "Optimized Gamepad",
        "type": "Trinket",
        "rarity": "Superior",
        "description": "Now with firmified grippy handles XTREME! 360 noscope resource harvesting YOLO! Grants a 15% chance when breaking resources to gain a turbo run speed boost.",
        "recipe": {
            "name": "Granvil",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Bamli Flightbladder", "qty": 17}, {
                "name": "Wojack Spice",
                "qty": 5
            }, {"name": "Charged Zug Molt", "qty": 5}, {"name": "Extracted Tuber", "qty": 4}]
        },
        "icon": "optimized_gamepad.png"
    },
    "Wealthy Statuette": {
        "name": "Wealthy Statuette",
        "type": "Trinket",
        "rarity": "Superior",
        "description": "Only the wealthiest of individuals carry around gold-plated miniatures of themselves. This is how you know youve made it. Grants a 10% chance when breaking resources to find double the normal amount of components!",
        "recipe": {
            "name": "Granvil",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Painsulin", "qty": 5}, {"name": "Spur Gold", "qty": 5}, {
                "name": "Satgat Silk",
                "qty": 5
            }, {"name": "Wojack Spice", "qty": 5}]
        },
        "icon": "wealthy_statuette.png"
    },
    "Heating Pad": {
        "name": "Heating Pad",
        "type": "Trinket",
        "rarity": "Superior",
        "description": "Keeping warm is for babies. And you, apparently. Grants 20% resistance to ice damage and freezing effects.",
        "recipe": {
            "name": "Jollyscope",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Jolly Fulmar", "qty": 7}, {
                "name": "Myelar",
                "qty": 63
            }, {"name": "Vomma Babymaker", "qty": 10}, {"name": "Wojack Spice", "qty": 4}]
        },
        "icon": "heating_pad.png"
    },
    "Weakness Detector": {
        "name": "Weakness Detector",
        "type": "Trinket",
        "rarity": "Superior",
        "description": "Its time to take a huge crit all over the place! Increases your critical strike damage by 25%.",
        "recipe": {
            "name": "Centrifuge",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Satgat Chemoreceptors", "qty": 4}, {
                "name": "Plonktan",
                "qty": 2
            }, {"name": "Vampry", "qty": 5}, {"name": "Blood Louse", "qty": 4}]
        },
        "icon": "weakness_detector.png"
    },
    "Bloodball": {
        "name": "Bloodball",
        "type": "Trinket",
        "rarity": "Superior",
        "description": "Just having this beautiful thing around makes you want to rub all up on your enemies and steal their lives away! Grants a 5% chance to steal health from enemies on melee attack.",
        "recipe": {
            "name": "Centrifuge",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Blood Louse", "qty": 4}, {"name": "Ayeayes", "qty": 34}, {
                "name": "Vampry",
                "qty": 5
            }, {"name": "Boba", "qty": 4}]
        },
        "icon": "bloodball.png"
    },
    "Rave Tube": {
        "name": "Rave Tube",
        "type": "Trinket",
        "rarity": "Epic",
        "description": "Youll be the life of any party with this fancy Rave Tube! Unless youre a cop. Grants a 5% chance on melee attack to gain a turbo speed boost.",
        "recipe": {
            "name": "Centrifuge",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Blube", "qty": 43}, {"name": "Throak Jelly", "qty": 5}, {
                "name": "Pyn",
                "qty": 18
            }, {"name": "Luminalgae", "qty": 4}]
        },
        "icon": "rave_tube.png"
    },
    "Clawbox": {
        "name": "Clawbox",
        "type": "Trinket",
        "rarity": "Superior",
        "description": "You aint got time to bleed, but your enemies sure do! Grants a 10% chance on melee attack to cause your target to bleed.",
        "recipe": {
            "name": "Granvil",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Clossom", "qty": 9}, {"name": "Blood Louse", "qty": 4}, {
                "name": "Vampry",
                "qty": 5
            }, {"name": "Satgat Chemoreceptors", "qty": 5}]
        },
        "icon": "clawbox.png"
    },
    "Beakler": {
        "name": "Beakler",
        "type": "Trinket",
        "rarity": "Superior",
        "description": "With the right amount of poison, you can overcome just about anything! Grants a 10% chance to poison enemies on melee attacks.",
        "recipe": {
            "name": "Chemworks",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Bumpberry", "qty": 7}, {
                "name": "Glidopus Ink",
                "qty": 53
            }, {"name": "Glutterfly Wingdust", "qty": 3}, {"name": "Glidopus Beak", "qty": 7}]
        },
        "icon": "beakler.png"
    },
    "Shockprod": {
        "name": "Shockprod",
        "type": "Trinket",
        "rarity": "Superior",
        "description": "This thing is shockingly good at shocking the socks off of things. Dont lick the tip. Grants a 10% chance on melee attack to deal electric damage!",
        "recipe": {
            "name": "Crystal Kiln",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Zug Sparkplug", "qty": 9}, {
                "name": "Charged Zug Molt",
                "qty": 4
            }, {"name": "Watfinger", "qty": 8}, {"name": "Wat Fur Tuft", "qty": 40}]
        },
        "icon": "shockprod.png"
    },
    "Medicine Bag": {
        "name": "Medicine Bag",
        "type": "Trinket",
        "rarity": "Superior",
        "description": "Rubbing this sack all over your face should cure what ails ya! Grants 20% poison damage resistance.",
        "recipe": {
            "name": "Skinnery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Basic Glue", "qty": 4}, {
                "name": "Wompit Leather",
                "qty": 40
            }, {"name": "Whistle Borer", "qty": 14}, {"name": "Intact Wompit Heart", "qty": 5}]
        },
        "icon": "medicine_bag.png"
    },
    "Grounder": {
        "name": "Grounder",
        "type": "Trinket",
        "rarity": "Superior",
        "description": "One foot on the ground, and the other on the grounder. Grants 20% electric damage resistance.",
        "recipe": {
            "name": "Fishiminea",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Giant Fossilized Femur", "qty": 11}, {
                "name": "Dirt",
                "qty": 6
            }, {"name": "Tartil Pitch", "qty": 58}, {"name": "Sea Rope", "qty": 7}]
        },
        "icon": "grounder.png"
    },
    "Mercurial Batshoes": {
        "name": "Mercurial Batshoes",
        "type": "Trinket",
        "rarity": "Superior",
        "description": "Keeping these around reminds you of your days as an Olympic sprinter. Ah, simpler times. Increases run speed by 5%!",
        "recipe": {
            "name": "Crystal Kiln",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Wat Wing", "qty": 22}, {
                "name": "Wompit Sinew",
                "qty": 13
            }, {"name": "Deviltailed Slapper", "qty": 7}, {"name": "Gassak Doublesack", "qty": 3}]
        },
        "icon": "mercurial_batshoes.png"
    },
    "Nasty Lure": {
        "name": "Nasty Lure",
        "type": "Trinket",
        "rarity": "Superior",
        "description": "The smell reminds you of a frat party you went to once. But itll increase the number of fish in schools by 40%, which is nice.",
        "recipe": {
            "name": "Fishiminea",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Glotus Berries", "qty": 23}, {
                "name": "Tartil Tongue",
                "qty": 10
            }, {"name": "Bulbi", "qty": 8}]
        },
        "icon": "nasty_lure.png"
    },
    "The Heft": {
        "name": "The Heft",
        "type": "Trinket",
        "rarity": "Superior",
        "description": "Its so hefty, but you already know. Grants your melee attacks a 3% chance to stun enemies.",
        "recipe": {
            "name": "Shredbasket",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Smashblossom Petal", "qty": 46}, {
                "name": "Grenamel",
                "qty": 30
            }, {"name": "Painsulin", "qty": 6}]
        },
        "icon": "the_heft.png"
    },
    "Efficiency Engine": {
        "name": "Efficiency Engine",
        "type": "Trinket",
        "rarity": "Superior",
        "description": "With a bit of extra thought, you can always do things better. Grants a 5% chance on swing to break resources apart completely.",
        "recipe": {
            "name": "Burnchurn",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Lyff Crystalshard", "qty": 5}, {
                "name": "Flungus Brain",
                "qty": 11
            }, {"name": "Crystine", "qty": 19}, {"name": "Slurb Electrucus", "qty": 5}]
        },
        "icon": "efficiency_engine.png"
    },
    "Cleavebat": {
        "name": "Cleavebat",
        "type": "Trinket",
        "rarity": "Superior",
        "description": "This bat will give you all the leverage you need! 75% chance to hit nearby identical resources when harvesting.",
        "recipe": {
            "name": "Foundry",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Lyff Donglespring", "qty": 9}, {
                "name": "Gulanti Chomper",
                "qty": 26
            }, {"name": "Gulanti Zeolite", "qty": 5}, {"name": "Alloyonite", "qty": 16}]
        },
        "icon": "cleavebat.png"
    },
    "Motivator": {
        "name": "Motivator",
        "type": "Trinket",
        "rarity": "Superior",
        "description": "Sometimes it just takes a little fire under the tush. Increases move speed by 15% when health is low!",
        "recipe": {
            "name": "Gastropestle",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Glaser Chargenub", "qty": 7}, {
                "name": "Sodium Chunk",
                "qty": 5
            }, {"name": "Spiregg Shell", "qty": 16}, {"name": "Meltor", "qty": 16}]
        },
        "icon": "motivator.png"
    },
    "Clarm": {
        "name": "Clarm",
        "type": "Trinket",
        "rarity": "Epic",
        "description": "Now your pets tiny arms can get some work done! Increases your pets damage by 20%.",
        "recipe": {
            "name": "Foundry",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Pipedirt Pipe", "qty": 87}, {
                "name": "Technium",
                "qty": 11
            }, {"name": "Lyff Crystalshard", "qty": 6}, {"name": "Icequill", "qty": 25}]
        },
        "icon": "clarm.png"
    },
    "Searchlight": {
        "name": "Searchlight",
        "type": "Trinket",
        "rarity": "Epic",
        "description": "Show your pet where to strike! Increases your pets critical hit chance by 20%.",
        "recipe": {
            "name": "Refinery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Icequill", "qty": 24}, {"name": "Boreole", "qty": 5}, {
                "name": "Slurb Electrucus",
                "qty": 6
            }, {"name": "Alloyonite", "qty": 18}]
        },
        "icon": "searchlight.png"
    },
    "Nematoblaster": {
        "name": "Nematoblaster",
        "type": "Device",
        "rarity": "Good",
        "description": "Harness the power of Throaks to blast a hostile enemy with THE COLDITUDE OF ICE! Deals 100% of your DPS as ice damage.",
        "recipe": {
            "name": "Bioloom",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Throak Tentacle", "qty": 68}, {
                "name": "Throak Nematocyte",
                "qty": 7
            }, {"name": "Wojack Cilia", "qty": 11}, {"name": "Splinter", "qty": 45}]
        },
        "icon": "nematoblaster.png"
    },
    "Terrifying Fetish": {
        "name": "Terrifying Fetish",
        "type": "Gadget",
        "rarity": "Superior",
        "description": "One look at this horrible thing will get that adrenaline pumping! Provides a turbo speed boost for 10 seconds.",
        "recipe": {
            "name": "Jackweaver",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Jollybab", "qty": 11}, {"name": "Tusker", "qty": 21}, {
                "name": "Wojack Cilia",
                "qty": 13
            }, {"name": "Wojack Spice", "qty": 4}]
        },
        "icon": "terrifying_fetish.png"
    },
    "Life Enforcer": {
        "name": "Life Enforcer",
        "type": "Gadget",
        "rarity": "Epic",
        "description": "Using ethically questionable stem cell research, youre able to restore 50% of your missing HP. Now thats progress!",
        "recipe": {
            "name": "Jollyscope",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Vomma Babymaker", "qty": 11}, {"name": "Jollybab", "qty": 12}, {
                "name": "Jolly",
                "qty": 35
            }, {"name": "Zug Sparkplug", "qty": 10}]
        },
        "icon": "life_enforcer.png"
    },
    "Shockstache": {
        "name": "Shockstache",
        "type": "Device",
        "rarity": "Superior",
        "description": "The moustache of a Bamli builds up static charges so fast, youd be crazy NOT to weaponize it! Deals 100% of your DPS as lightning damage to your target and all nearby targets as well.",
        "recipe": {
            "name": "Granvil",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Bamstache", "qty": 33}, {"name": "Spur Gold", "qty": 5}, {
                "name": "Pyn",
                "qty": 16
            }, {"name": "Thrombyte Fibrin", "qty": 21}]
        },
        "icon": "shockstache.png"
    },
    "Plague Injector": {
        "name": "Plague Injector",
        "type": "Device",
        "rarity": "Superior",
        "description": "Whacking an enemy with this thing will poison it and everyone and everything it loves! Deals 100% of your DPS as poison damage to your target and nearby targets.",
        "recipe": {
            "name": "Centrifuge",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Vampry", "qty": 5}, {
                "name": "Blood Louse",
                "qty": 4
            }, {"name": "Throak Nematocyte", "qty": 8}, {"name": "Extracted Tuber", "qty": 4}]
        },
        "icon": "plague_injector.png"
    },
    "Swapscope": {
        "name": "Swapscope",
        "type": "Gadget",
        "rarity": "Good",
        "description": "By focusing light into a tiny point onto your retina, youre able to instantly trade places with your pet somehow. Theres a lot of science packed into this thing.",
        "recipe": {
            "name": "Compressor",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Snorble Airsak", "qty": 28}, {
                "name": "Wojack Cornea",
                "qty": 20
            }, {"name": "Extracted Tuber", "qty": 4}]
        },
        "icon": "swapscope.png"
    },
    "Fingarang": {
        "name": "Fingarang",
        "type": "Device",
        "rarity": "Superior",
        "description": "Itll do tremendous damage to your enemies and make them bleed, but be careful catching it on the way back, or you might lose... a finger. Applies a bleed to enemies for 100% of your DPS.",
        "recipe": {
            "name": "Crystal Kiln",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Watfinger", "qty": 8}, {"name": "Dusk Shard", "qty": 13}, {
                "name": "Wat Wing",
                "qty": 22
            }, {"name": "Zug Shell", "qty": 69}]
        },
        "icon": "fingarang.png"
    },
    "DBot": {
        "name": "DBot",
        "type": "Gadget",
        "rarity": "Epic",
        "description": "At the press of a button, DBot will come to your rescue, making you invincible! But he gets tired easily, so dont wear him out.",
        "recipe": {
            "name": "Stoneshaper",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Yellow Gem", "qty": 12}, {
                "name": "Whistle Borer",
                "qty": 22
            }, {"name": "Glotus Berries", "qty": 22}]
        },
        "icon": "dbot.png"
    },
    "Slowball Machine": {
        "name": "Slowball Machine",
        "type": "Device",
        "rarity": "Good",
        "description": "Fling balls of packed snow and ice at your enemies, dealing 70% of your DPS as ice damage and freezing their legs!",
        "recipe": {
            "name": "Tumbler",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Karboan", "qty": 58}, {"name": "Slurb Electrucus", "qty": 6}, {
                "name": "Meltor",
                "qty": 19
            }]
        },
        "icon": "slowball_machine.png"
    },
    "Thundercall": {
        "name": "Thundercall",
        "type": "Gadget",
        "rarity": "Superior",
        "description": "Change the climate by creating a MICROSTORM right over your own head! The storm will strike enemies with lightning every second while the storm persists, each strike damaging for 75% of your DPS.",
        "recipe": {
            "name": "Foundry",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Lonsdaleite", "qty": 33}, {
                "name": "Gulanti Elecore",
                "qty": 7
            }, {"name": "Glaser Chargenub", "qty": 7}, {"name": "Technium", "qty": 10}]
        },
        "icon": "thundercall.png"
    },
    "Big Red": {
        "name": "Big Red",
        "type": "Gadget",
        "rarity": "Epic",
        "description": "They say the safest part of a raging inferno is the point of origin. Thats probably not true, but it couldnt hurt to test it. Burns enemies for 100% of your DPS!",
        "recipe": {
            "name": "Refinery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Blastcrab Hydrocarbon", "qty": 6}, {
                "name": "Blastcrab Ignition Gland",
                "qty": 5
            }, {"name": "Technium", "qty": 11}, {"name": "Alloyonite", "qty": 18}]
        },
        "icon": "big_red.png"
    },
    "Laser Leash": {
        "name": "Laser Leash",
        "type": "Gadget",
        "rarity": "Good",
        "description": "Draws a laser between you and your pet, which you can drag across enemies to damage them for 75% of your DPS.",
        "recipe": {
            "name": "Gastropestle",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Glaser Chargenub", "qty": 7}, {
                "name": "Glaser Antler Fragment",
                "qty": 39
            }, {"name": "Diamond", "qty": 10}]
        },
        "icon": "laser_leash.png"
    },
    "Jollyfloor": {
        "name": "Jollyfloor",
        "type": "Floor",
        "rarity": "Normal",
        "description": "It squishes between your toes when you stride across it barefoot, and it sounds a bit like that squealing sound of rubbing a balloon.",
        "recipe": {
            "name": "Jollyscope",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Jolly", "qty": 10}]
        },
        "icon": "jollyfloor.png"
    },
    "Myelar Floor": {
        "name": "Myelar Floor",
        "type": "Floor",
        "rarity": "Normal",
        "description": "Its velvety and soft, like soft velvet. Rubbing your head on it makes you feel relaxed.",
        "recipe": {
            "name": "Jackweaver",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Myelar", "qty": 10}]
        },
        "icon": "myelar_floor.png"
    },
    "Golden Floor": {
        "name": "Golden Floor",
        "type": "Floor",
        "rarity": "Normal",
        "description": "It is slippery when wet.",
        "recipe": {
            "name": "Granvil",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Spur Gold", "qty": 10}]
        },
        "icon": "golden_floor.png"
    },
    "Smashblossom Floor": {
        "name": "Smashblossom Floor",
        "type": "Floor",
        "rarity": "Normal",
        "description": "It seems very resilient, almost as if you could smash it repeatedly with a blossom to no effect.",
        "recipe": {
            "name": "Shredbasket",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Smashblossom Trunk", "qty": 10}]
        },
        "icon": "smashblossom_floor.png"
    },
    "Karboan Floor": {
        "name": "Karboan Floor",
        "type": "Floor",
        "rarity": "Normal",
        "description": "Its so hard that if you fell face-first on it, it would break. Your face, not the floor.",
        "recipe": {
            "name": "Tumbler",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Karboan", "qty": 10}]
        },
        "icon": "karboan_floor.png"
    },
    "Lonsdaleite Floor": {
        "name": "Lonsdaleite Floor",
        "type": "Floor",
        "rarity": "Normal",
        "description": "Its pretty hard to walk on, on account of it being made of huge balls. But hey, its the price you pay to walk on huge balls.",
        "recipe": {
            "name": "Foundry",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Lonsdaleite", "qty": 10}]
        },
        "icon": "lonsdaleite_floor.png"
    },
    "Jollywall": {
        "name": "Jollywall",
        "type": "Structure",
        "rarity": "Normal",
        "description": "You feel like if you ran at it hard enough, it would give way. Better get started!",
        "recipe": {
            "name": "Jollyscope",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Jolly", "qty": 5}]
        },
        "icon": "jollywall.png"
    },
    "Myelar Wall": {
        "name": "Myelar Wall",
        "type": "Structure",
        "rarity": "Normal",
        "description": "It squishes when you press your face all up on it. Probably not the soundest of construction materials, but what are you gonna do?",
        "recipe": {
            "name": "Jackweaver",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Myelar", "qty": 5}]
        },
        "icon": "myelar_wall.png"
    },
    "Golden Wall": {
        "name": "Golden Wall",
        "type": "Structure",
        "rarity": "Normal",
        "description": "Its so shiny you can see your reflection in it! That must be useful, somehow.",
        "recipe": {
            "name": "Granvil",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Spur Gold", "qty": 5}]
        },
        "icon": "golden_wall.png"
    },
    "Smashblossom Wall": {
        "name": "Smashblossom Wall",
        "type": "Structure",
        "rarity": "Normal",
        "description": "Its more dense than the densest of black holes. Fortunately it isnt one, or you would have fallen in by now.",
        "recipe": {
            "name": "Shredbasket",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Smashblossom Trunk", "qty": 5}]
        },
        "icon": "smashblossom_wall.png"
    },
    "Karboan Wall": {
        "name": "Karboan Wall",
        "type": "Structure",
        "rarity": "Normal",
        "description": "Its tough enough to withstand a hurricane, but gentle enough that you could trust it to look after your kids.",
        "recipe": {
            "name": "Tumbler",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Karboan", "qty": 5}]
        },
        "icon": "karboan_wall.png"
    },
    "Lonsdaleite Wall": {
        "name": "Lonsdaleite Wall",
        "type": "Structure",
        "rarity": "Normal",
        "description": "Its the strongest material in the universe. It makes no sense that you were able to craft it into this shape.",
        "recipe": {
            "name": "Foundry",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Lonsdaleite", "qty": 5}]
        },
        "icon": "lonsdaleite_wall.png"
    },
    "Flatstone Door": {
        "name": "Flatstone Door",
        "type": "Structure",
        "rarity": "Normal",
        "description": "Made of the toughest flatstone around, this door will keep all your stuff safe from burglars!",
        "recipe": {
            "name": "Stoneshaper",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Flatstone", "qty": 2}]
        },
        "icon": "flatstone_door.png"
    },
    "Jollydoor": {
        "name": "Jollydoor",
        "type": "Structure",
        "rarity": "Normal",
        "description": "When it retracts, red goo squirts out. It smells like candy!",
        "recipe": {
            "name": "Jollyscope",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Jolly", "qty": 2}]
        },
        "icon": "jollydoor.png"
    },
    "Myelar Door": {
        "name": "Myelar Door",
        "type": "Structure",
        "rarity": "Normal",
        "description": "This door probably couldnt do much to keep anything out, but it sure feels great!",
        "recipe": {
            "name": "Jackweaver",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Myelar", "qty": 2}]
        },
        "icon": "myelar_door.png"
    },
    "Golden Door": {
        "name": "Golden Door",
        "type": "Structure",
        "rarity": "Normal",
        "description": "The sun reflects off it in such a blindingly bright way, its hard to even open the thing. How pretty!",
        "recipe": {
            "name": "Granvil",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Spur Gold", "qty": 2}]
        },
        "icon": "golden_door.png"
    },
    "Smashblossom Door": {
        "name": "Smashblossom Door",
        "type": "Structure",
        "rarity": "Normal",
        "description": "The tough knobs make it hard to close and open, but they also make it easier, you know, in some respects.",
        "recipe": {
            "name": "Shredbasket",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Smashblossom Trunk", "qty": 2}]
        },
        "icon": "smashblossom_door.png"
    },
    "Karboan Door": {
        "name": "Karboan Door",
        "type": "Structure",
        "rarity": "Normal",
        "description": "Its tough. Its rugged. Its the all new Karboan Door, straight from your very own Tumbler!",
        "recipe": {
            "name": "Tumbler",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Karboan", "qty": 2}]
        },
        "icon": "karboan_door.png"
    },
    "Lonsdaleite Door": {
        "name": "Lonsdaleite Door",
        "type": "Structure",
        "rarity": "Normal",
        "description": "Nobody can get through this door! Unless they open it.",
        "recipe": {
            "name": "Foundry",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Lonsdaleite", "qty": 2}]
        },
        "icon": "lonsdaleite_door.png"
    },
    "BS SSSS SS5": {
        "name": "BS SSSS SS5",
        "type": "Workstation",
        "rarity": "Normal",
        "description": "Your trusty Bureau of Shipping Self-Sustaining Survival Station Series S-5! Itll get you started on this hostile alien planet.",
        "recipe": {
            "name": "BS SSSS SS5",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Stick", "qty": 6}, {"name": "Sawgrass Leaf", "qty": 5}]
        },
        "icon": "bs_ssss_ss5.png"
    },
    "Pearlscale Anchor": {
        "name": "Pearlscale Anchor",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "It might be good to build a few of these, in case you end up with a cruise ship in your possession.",
        "recipe": {
            "name": "Fishiminea",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Pearl Scale", "qty": 2}, {"name": "Sea Rope", "qty": 2}, {
                "name": "Basic Glue",
                "qty": 1
            }]
        },
        "icon": "pearlscale_anchor.png"
    },
    "Crystalline Bookcase": {
        "name": "Crystalline Bookcase",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "This is where you keep all the books you tell everyone youve read!",
        "recipe": {
            "name": "Crystal Kiln",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Dusk Shard", "qty": 3}, {"name": "Wat Wing", "qty": 4}, {
                "name": "Sawdust",
                "qty": 4
            }, {"name": "Glidopus Ink", "qty": 11}]
        },
        "icon": "crystalline_bookcase.png"
    },
    "Crystal Throne": {
        "name": "Crystal Throne",
        "type": "Furniture",
        "rarity": "Epic",
        "description": "This makes you momentarily forget how unimportant you are!",
        "recipe": {
            "name": "Crystal Kiln",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Dusk Shard", "qty": 4}, {
                "name": "Yellow Gem",
                "qty": 3
            }, {"name": "Charged Zug Molt", "qty": 1}, {"name": "Watfinger", "qty": 2}]
        },
        "icon": "crystal_throne.png"
    },
    "Turbo Shrine": {
        "name": "Turbo Shrine",
        "type": "Shrine",
        "rarity": "Normal",
        "description": "Touching this shrine makes your legs feel all tingly. Like that feeling when you sit on the toilet for too long, only different.",
        "icon": "turbo_shrine.png"
    },
    "Glowing Shrine": {
        "name": "Glowing Shrine",
        "type": "Shrine",
        "rarity": "Normal",
        "description": "Fondling this shrine fills you with happiness and joy. But then again, fondling anything does that. Fondling is great.",
        "icon": "glowing_shrine.png"
    },
    "Logbaby": {
        "name": "Logbaby",
        "type": "Component",
        "rarity": "Good",
        "description": "It rocks back and forth, staring at you with wide eyes. Looking at it makes you uncomfortable.",
        "icon": "logbaby.png"
    },
    "Exposed Root of Maarla": {
        "name": "Exposed Root of Maarla",
        "type": "Structure",
        "rarity": "Normal",
        "description": "A root of the plant known as Maarla. It hums with the energy of life!",
        "icon": "exposed_root_of_maarla.png"
    },
    "Expression of Maarla": {
        "name": "Expression of Maarla",
        "type": "Structure",
        "rarity": "Normal",
        "description": "A bud of the giant plant called Maarla. The petals glow with a radiant orange.",
        "icon": "expression_of_maarla.png"
    },
    "Flower of Maarla": {
        "name": "Flower of Maarla",
        "type": "Structure",
        "rarity": "Normal",
        "description": "A fully blossomed flower of Maarla. Its purple glow fills you with warmth and craving for burritos.",
        "icon": "flower_of_maarla.png"
    },
    "Tendraam Torch": {
        "name": "Tendraam Torch",
        "type": "Lighting",
        "rarity": "Normal",
        "description": "The Tendraam use these small buds of Maarla as light sources at night.",
        "icon": "tendraam_torch.png"
    },
    "Fractured Flatstone": {
        "name": "Fractured Flatstone",
        "type": "Structure",
        "rarity": "Normal",
        "description": "A shoot of Maarla that has burst through a flatstone boulder.",
        "icon": "fractured_flatstone.png"
    },
    "Gastrolith Path": {
        "name": "Gastrolith Path",
        "type": "Floor Covering",
        "rarity": "Normal",
        "description": "Walking on it gives your toes immense pleasure. YEAH, TOES!",
        "recipe": {
            "name": "Jollyscope",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Jolly Gastrolith", "qty": 1}]
        },
        "icon": "gastrolith_path.png"
    },
    "Blueglow Beachball": {
        "name": "Blueglow Beachball",
        "type": "Throwable",
        "rarity": "Normal",
        "description": "Its huge and ball-shaped!",
        "recipe": {
            "name": "Fishiminea",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Wat Wing", "qty": 3}, {
                "name": "Glotus Berries",
                "qty": 6
            }, {"name": "Zug Kneecap", "qty": 1}, {"name": "Walker Blossom", "qty": 2}]
        },
        "icon": "blueglow_beachball.png"
    },
    "Beachball": {
        "name": "Beachball",
        "type": "Throwable",
        "rarity": "Normal",
        "description": "If this hit you in the face at a high speed, it would be hilarious.",
        "recipe": {
            "name": "Fishiminea",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Wat Wing", "qty": 6}, {"name": "Gassakmeister", "qty": 3}, {
                "name": "Zug Kneecap",
                "qty": 2
            }, {"name": "Walker Blossom", "qty": 4}]
        },
        "icon": "beachball.png"
    },
    "Greenglow Beachball": {
        "name": "Greenglow Beachball",
        "type": "Throwable",
        "rarity": "Normal",
        "description": "If this hit you in the face at a high speed in the dark, it would be hilarious.",
        "recipe": {
            "name": "Fishiminea",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Glow Juice", "qty": 10}, {"name": "Wat Wing", "qty": 3}, {
                "name": "Gassakmeister",
                "qty": 5
            }, {"name": "Zug Kneecap", "qty": 1}]
        },
        "icon": "greenglow_beachball.png"
    },
    "Potted Straddlebark": {
        "name": "Potted Straddlebark",
        "type": "Potted Plant",
        "rarity": "Normal",
        "description": "Its straddlebark in a pot. WHAT MORE DO YOU WANT?",
        "recipe": {
            "name": "Crystal Kiln",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Straddlebark", "qty": 1}, {"name": "Dusk Shard", "qty": 2}]
        },
        "icon": "potted_straddlebark.png"
    },
    "Vlapkeg": {
        "name": "Vlapkeg",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Standing near it makes you want to throw your hands in the air, almost as if you simply dont care.",
        "recipe": {
            "name": "Jollyscope",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Vlap", "qty": 11}, {"name": "Straddlebark", "qty": 1}, {
                "name": "Tusker",
                "qty": 4
            }, {"name": "Wojack Cilia", "qty": 2}]
        },
        "icon": "vlapkeg.png"
    },
    "Telescope": {
        "name": "Telescope",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Putting your eye up to it leaves a gross ring of goo around your eye socket.",
        "recipe": {
            "name": "Jackweaver",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Splinter", "qty": 9}, {"name": "Wojack Cornea", "qty": 3}, {
                "name": "Dusk Prism",
                "qty": 1
            }, {"name": "Wojack Sucker", "qty": 8}]
        },
        "icon": "telescope.png"
    },
    "Pearlscale HoverBuoy": {
        "name": "Pearlscale HoverBuoy",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "It floats in the water, despite being made of ultra-dense materials. There must be some science in there!",
        "recipe": {
            "name": "Fishiminea",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Pearl Scale", "qty": 2}, {
                "name": "Sea Rope",
                "qty": 2
            }, {"name": "Glotus Berries", "qty": 3}, {"name": "Water Balloon", "qty": 6}]
        },
        "icon": "pearlscale_hoverbuoy.png"
    },
    "Jollamp": {
        "name": "Jollamp",
        "type": "Lighting",
        "rarity": "Normal",
        "description": "The glowing orbs are hypnotic. You can feel yourself drooling as you watch it.",
        "recipe": {
            "name": "Jollyscope",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Jolly", "qty": 2}, {"name": "Jolly Fulmar", "qty": 1}, {
                "name": "Dusk Prism",
                "qty": 1
            }, {"name": "Zug Sparkplug", "qty": 1}]
        },
        "icon": "jollamp.png"
    },
    "Evileye": {
        "name": "Evileye",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "It stares into the soul of everything in the universe.",
        "recipe": {
            "name": "Crystal Kiln",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Dusk Shard", "qty": 3}, {"name": "Watfinger", "qty": 2}, {
                "name": "Straddlebark",
                "qty": 1
            }, {"name": "Deviltailed Slapper", "qty": 2}]
        },
        "icon": "evileye.png"
    },
    "Bamli Egg": {
        "name": "Bamli Egg",
        "type": "Egg",
        "rarity": "Superior",
        "description": "Even before it is fully hatched, the Bamli sports a proud moustache.",
        "icon": "bamli_egg.png"
    },
    "Blastcrab Egg": {
        "name": "Blastcrab Egg",
        "type": "Egg",
        "rarity": "Superior",
        "description": "Its hot to the touch. Like an egg, but one thats hot to the touch.",
        "icon": "blastcrab_egg.png"
    },
    "Gallum Egg": {
        "name": "Gallum Egg",
        "type": "Egg",
        "rarity": "Superior",
        "description": "The egg is made of crystal chunks, just like its parents. It seems shy. You know, for an egg.",
        "icon": "gallum_egg.png"
    },
    "Glaser Egg": {
        "name": "Glaser Egg",
        "type": "Egg",
        "rarity": "Superior",
        "description": "While being carried, the egg makes high-pitched gurgling noises.",
        "icon": "glaser_egg.png"
    },
    "Glidopus Egg": {
        "name": "Glidopus Egg",
        "type": "Egg",
        "rarity": "Superior",
        "description": "No matter how much you dab it with paper towels, it remains perpetually moist.",
        "icon": "glidopus_egg.png"
    },
    "Glutterfly Egg": {
        "name": "Glutterfly Egg",
        "type": "Egg",
        "rarity": "Superior",
        "description": "Something adorable is probably going to come out of this. That, or a hideous flying insect.",
        "icon": "glutterfly_egg.png"
    },
    "Gulanti Egg": {
        "name": "Gulanti Egg",
        "type": "Egg",
        "rarity": "Superior",
        "description": "The blowhole must be there for a reason. What that might be... nobody knows.",
        "icon": "gulanti_egg.png"
    },
    "Lyff Egg": {
        "name": "Lyff Egg",
        "type": "Egg",
        "rarity": "Superior",
        "description": "When threatened, the egg makes a high-pitched ululating sound. Like father, like son.",
        "icon": "lyff_egg.png"
    },
    "Satgat Egg": {
        "name": "Satgat Egg",
        "type": "Egg",
        "rarity": "Superior",
        "description": "This shell looks the same as the exoskeleton of the parents!",
        "icon": "satgat_egg.png"
    },
    "Shirk Egg": {
        "name": "Shirk Egg",
        "type": "Egg",
        "rarity": "Superior",
        "description": "The baby Shirk inside screeches violently.",
        "icon": "shirk_egg.png"
    },
    "Slurb Egg": {
        "name": "Slurb Egg",
        "type": "Egg",
        "rarity": "Superior",
        "description": "You have to be careful while handling it, so as to not impale your entire everything.",
        "icon": "slurb_egg.png"
    },
    "Snorble Egg": {
        "name": "Snorble Egg",
        "type": "Egg",
        "rarity": "Superior",
        "description": "It squishes like an airbag. Its almost as if theres nothing inside it...",
        "icon": "snorble_egg.png"
    },
    "Tartil Egg": {
        "name": "Tartil Egg",
        "type": "Egg",
        "rarity": "Superior",
        "description": "It gets stuck to your hand when you touch it. Hopefully its not permanent.",
        "icon": "tartil_egg.png"
    },
    "Throak Egg": {
        "name": "Throak Egg",
        "type": "Egg",
        "rarity": "Superior",
        "description": "It wobbles like jelly when you slap it. You should probably not slap it.",
        "icon": "throak_egg.png"
    },
    "Vomma Egg": {
        "name": "Vomma Egg",
        "type": "Egg",
        "rarity": "Superior",
        "description": "The egg is covered in a sticky substance, and it smells like the bathroom of a bar at closing time.",
        "icon": "vomma_egg.png"
    },
    "Wat Egg": {
        "name": "Wat Egg",
        "type": "Egg",
        "rarity": "Superior",
        "description": "The egg seems ready to zoom off into the sunset.",
        "icon": "wat_egg.png"
    },
    "Wojack Egg": {
        "name": "Wojack Egg",
        "type": "Egg",
        "rarity": "Superior",
        "description": "Its covered in suckers! Probably to keep it attached to... whatever.",
        "icon": "wojack_egg.png"
    },
    "Wompit Egg": {
        "name": "Wompit Egg",
        "type": "Egg",
        "rarity": "Superior",
        "description": "Youd think Wompits wouldnt lay eggs, on account of them being mammals. Youd be wrong.",
        "icon": "wompit_egg.png"
    },
    "Zug Egg": {
        "name": "Zug Egg",
        "type": "Egg",
        "rarity": "Superior",
        "description": "It crackles with electricity. You get tiny static shocks the whole time youre holding it.",
        "icon": "zug_egg.png"
    },
    "Glidopus Incubator": {
        "name": "Glidopus Incubator",
        "type": "Incubator",
        "rarity": "Superior",
        "description": "This is going to get moist.",
        "recipe": {
            "name": "Chemworks",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Whistleroot Reed", "qty": 28}, {
                "name": "Sawgrass Leaf",
                "qty": 8
            }, {"name": "Log", "qty": 23}, {"name": "Glidopus Egg", "qty": 1}]
        },
        "icon": "glidopus_incubator.png"
    },
    "Glutterfly Incubator": {
        "name": "Glutterfly Incubator",
        "type": "Incubator",
        "rarity": "Superior",
        "description": "As the saying goes, if you want to hatch a Glutterfly, you gotta build one of these.",
        "recipe": {
            "name": "Stoneshaper",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Glutterfly Egg", "qty": 1}, {
                "name": "Flatstone Gravel",
                "qty": 5
            }, {"name": "Sawgrass Leaf", "qty": 8}, {"name": "Log", "qty": 22}]
        },
        "icon": "glutterfly_incubator.png"
    },
    "Tartil Incubator": {
        "name": "Tartil Incubator",
        "type": "Incubator",
        "rarity": "Superior",
        "description": "Tartil eggs stick to everything they touch. INCLUDING THIS!",
        "recipe": {
            "name": "Fishiminea",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Tartil Egg", "qty": 1}, {
                "name": "Giant Fossilized Femur",
                "qty": 4
            }, {"name": "Sawgrass Leaf", "qty": 9}, {"name": "Log", "qty": 25}]
        },
        "icon": "tartil_incubator.png"
    },
    "Wat Incubator": {
        "name": "Wat Incubator",
        "type": "Incubator",
        "rarity": "Superior",
        "description": "You figure its about time you raised your own pointy-fingered bat creature.",
        "recipe": {
            "name": "Crystal Kiln",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Dusk Dust", "qty": 2}, {"name": "Wat Egg", "qty": 1}, {
                "name": "Sawgrass Leaf",
                "qty": 9
            }, {"name": "Log", "qty": 27}]
        },
        "icon": "wat_incubator.png"
    },
    "Wompit Incubator": {
        "name": "Wompit Incubator",
        "type": "Incubator",
        "rarity": "Superior",
        "description": "This should keep a Wompit egg at just the right temperature to make it hatch!",
        "recipe": {
            "name": "Skinnery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Wompit Egg", "qty": 1}, {
                "name": "Sawgrass Blade",
                "qty": 23
            }, {"name": "Sawgrass Leaf", "qty": 7}, {"name": "Log", "qty": 20}]
        },
        "icon": "wompit_incubator.png"
    },
    "Zug Incubator": {
        "name": "Zug Incubator",
        "type": "Incubator",
        "rarity": "Superior",
        "description": "Be sure not to stick your tongue on this while its hatching. Thatd be gross.",
        "recipe": {
            "name": "Crystal Kiln",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Zug Egg", "qty": 1}, {"name": "Straddlebark", "qty": 1}, {
                "name": "Sawgrass Leaf",
                "qty": 9
            }, {"name": "Log", "qty": 27}]
        },
        "icon": "zug_incubator.png"
    },
    "Shirk Incubator": {
        "name": "Shirk Incubator",
        "type": "Incubator",
        "rarity": "Superior",
        "description": "Ever wanted a shrieking bird shark following you around? Nows your chance!",
        "recipe": {
            "name": "Shredbasket",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Shirk Egg", "qty": 1}, {
                "name": "Strange Tuft",
                "qty": 2
            }, {"name": "Furgrasp Antler", "qty": 11}, {"name": "Smashblossom Petal", "qty": 12}]
        },
        "icon": "shirk_incubator.png"
    },
    "Blastcrab Incubator": {
        "name": "Blastcrab Incubator",
        "type": "Incubator",
        "rarity": "Superior",
        "description": "How hot does a Blastcrab egg need to be? Probably... probably hot.",
        "recipe": {
            "name": "Refinery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Blastcrab Egg", "qty": 1}, {
                "name": "Oilbag",
                "qty": 7
            }, {"name": "Furgrasp Antler", "qty": 13}, {"name": "Smashblossom Petal", "qty": 14}]
        },
        "icon": "blastcrab_incubator.png"
    },
    "Gallum Incubator": {
        "name": "Gallum Incubator",
        "type": "Incubator",
        "rarity": "Superior",
        "description": "This might be tricky, on account of the egg attempting to teleport away all the time.",
        "recipe": {
            "name": "Foundry",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Gallum Egg", "qty": 1}, {
                "name": "Crystine",
                "qty": 7
            }, {"name": "Furgrasp Antler", "qty": 13}, {"name": "Smashblossom Petal", "qty": 14}]
        },
        "icon": "gallum_incubator.png"
    },
    "Glaser Incubator": {
        "name": "Glaser Incubator",
        "type": "Incubator",
        "rarity": "Superior",
        "description": "Be sure to put the egg in right-side up, or youll end up with an upside-down Glaser.",
        "recipe": {
            "name": "Gastropestle",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Glaser Egg", "qty": 1}, {"name": "Boreole", "qty": 2}, {
                "name": "Furgrasp Antler",
                "qty": 11
            }, {"name": "Smashblossom Petal", "qty": 12}]
        },
        "icon": "glaser_incubator.png"
    },
    "Slurb Incubator": {
        "name": "Slurb Incubator",
        "type": "Incubator",
        "rarity": "Superior",
        "description": "You never know when you need a spiked flying snail at your back or front.",
        "recipe": {
            "name": "Tumbler",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Slurb Egg", "qty": 1}, {"name": "Karboan", "qty": 17}, {
                "name": "Furgrasp Antler",
                "qty": 12
            }, {"name": "Smashblossom Petal", "qty": 13}]
        },
        "icon": "slurb_incubator.png"
    },
    "Gulanti Incubator": {
        "name": "Gulanti Incubator",
        "type": "Incubator",
        "rarity": "Superior",
        "description": "You know what makes for great padding? Giant, squirming larvae.",
        "recipe": {
            "name": "Foundry",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Gulanti Egg", "qty": 1}, {
                "name": "Depressurized Larva",
                "qty": 2
            }, {"name": "Furgrasp Antler", "qty": 13}, {"name": "Smashblossom Petal", "qty": 14}]
        },
        "icon": "gulanti_incubator.png"
    },
    "Lyff Incubator": {
        "name": "Lyff Incubator",
        "type": "Incubator",
        "rarity": "Superior",
        "description": "Theres no way this will keep a Lyff egg intact. But youre going to try it anyway.",
        "recipe": {
            "name": "Burnchurn",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Lyff Egg", "qty": 1}, {
                "name": "Flungus Pod",
                "qty": 28
            }, {"name": "Furgrasp Antler", "qty": 12}, {"name": "Smashblossom Petal", "qty": 13}]
        },
        "icon": "lyff_incubator.png"
    },
    "Bamli Incubator": {
        "name": "Bamli Incubator",
        "type": "Incubator",
        "rarity": "Superior",
        "description": "With a pile of grenamel and a bit of TLC, you can hatch just about anything!",
        "recipe": {
            "name": "Granvil",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Bamli Egg", "qty": 1}, {"name": "Grenamel", "qty": 8}, {
                "name": "Vlap",
                "qty": 27
            }, {"name": "Jolly Gastrolith", "qty": 5}]
        },
        "icon": "bamli_incubator.png"
    },
    "Satgat Incubator": {
        "name": "Satgat Incubator",
        "type": "Incubator",
        "rarity": "Superior",
        "description": "Flying barrel bugs with tiny heads make great pets. You read that on the internet once.",
        "recipe": {
            "name": "Centrifuge",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Satgat Egg", "qty": 1}, {"name": "Thrombyte Fibrin", "qty": 7}, {
                "name": "Vlap",
                "qty": 26
            }, {"name": "Jolly Gastrolith", "qty": 5}]
        },
        "icon": "satgat_incubator.png"
    },
    "Snorble Incubator": {
        "name": "Snorble Incubator",
        "type": "Incubator",
        "rarity": "Superior",
        "description": "With the right amount of blube, you can fit a Snorble egg into just about anything.",
        "recipe": {
            "name": "Compressor",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Snorble Egg", "qty": 1}, {"name": "Blube", "qty": 13}, {
                "name": "Vlap",
                "qty": 25
            }, {"name": "Jolly Gastrolith", "qty": 5}]
        },
        "icon": "snorble_incubator.png"
    },
    "Throak Incubator": {
        "name": "Throak Incubator",
        "type": "Incubator",
        "rarity": "Superior",
        "description": "How do you hatch a Throak egg? No, seriously... is this right?",
        "recipe": {
            "name": "Bioloom",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Throak Egg", "qty": 1}, {"name": "Dendrite Spine", "qty": 3}, {
                "name": "Vlap",
                "qty": 24
            }, {"name": "Jolly Gastrolith", "qty": 5}]
        },
        "icon": "throak_incubator.png"
    },
    "Vomma Incubator": {
        "name": "Vomma Incubator",
        "type": "Incubator",
        "rarity": "Superior",
        "description": "Theres no way to know whether this will work. Actually, there is. LETS DO THIS!",
        "recipe": {
            "name": "Jollyscope",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Vomma Egg", "qty": 1}, {"name": "Jolly Fulmar", "qty": 3}, {
                "name": "Vlap",
                "qty": 22
            }, {"name": "Jolly Gastrolith", "qty": 5}]
        },
        "icon": "vomma_incubator.png"
    },
    "Wojack Incubator": {
        "name": "Wojack Incubator",
        "type": "Incubator",
        "rarity": "Superior",
        "description": "What if the Wojack egg DIGS THROUGH THE INCUBATOR?",
        "recipe": {
            "name": "Jackweaver",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Wojack Egg", "qty": 1}, {"name": "Myelar", "qty": 22}, {
                "name": "Vlap",
                "qty": 23
            }, {"name": "Jolly Gastrolith", "qty": 5}]
        },
        "icon": "wojack_incubator.png"
    },
    "Lognest": {
        "name": "Lognest",
        "type": "Creature Stable",
        "rarity": "Normal",
        "description": "It uses extremely soft and well-insulated wood to keep creatures and their eggs warm!",
        "recipe": {
            "name": "Sawmill",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Log", "qty": 9}, {"name": "Sawgrass Leaf", "qty": 3}]
        },
        "icon": "lognest.png"
    },
    "Vlappy Nest": {
        "name": "Vlappy Nest",
        "type": "Creature Stable",
        "rarity": "Normal",
        "description": "Its the perfect combination of soft, moist, and bone-crushingly firm!",
        "recipe": {
            "name": "Jollyscope",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Vlap", "qty": 16}, {"name": "Jolly Gastrolith", "qty": 3}]
        },
        "icon": "vlappy_nest.png"
    },
    "Smashy Nest": {
        "name": "Smashy Nest",
        "type": "Creature Stable",
        "rarity": "Normal",
        "description": "Spikes? No, those are... love-pokers.",
        "recipe": {
            "name": "Shredbasket",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Furgrasp Antler", "qty": 8}, {"name": "Smashblossom Petal", "qty": 9}]
        },
        "icon": "smashy_nest.png"
    },
    "Spongy Podcake": {
        "name": "Spongy Podcake",
        "type": "Creature Food",
        "rarity": "Normal",
        "description": "It smells like something that died that ate something that also died after living a full life. Sends your pet into a berserking rampage for 3 minutes!",
        "recipe": {
            "name": "Pressure Cooker",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Coppersponge", "qty": 1}, {
                "name": "Parapod",
                "qty": 1
            }, {"name": "Royal Glaser Essence", "qty": 1}]
        },
        "icon": "spongy_podcake.png"
    },
    "Bawgaporter": {
        "name": "Bawgaporter",
        "type": "Teleporter",
        "rarity": "Epic",
        "description": "This remarkable contraption allows you to instantly warp to the Bawg!",
        "icon": "bawgaporter.png"
    },
    "Blulch": {
        "name": "Blulch",
        "type": "Component",
        "rarity": "Superior",
        "description": "Its a squishy pile of organic goopy chunk part pieces. Its warm!",
        "icon": "blulch.png"
    },
    "Permafrost": {
        "name": "Permafrost",
        "type": "Component",
        "rarity": "Good",
        "description": "Its pretty frosty, and moderately perma, too.",
        "icon": "permafrost.png"
    },
    "Furdle Blulch": {
        "name": "Furdle Blulch",
        "type": "Floor",
        "rarity": "Normal",
        "description": "This RICH COMPOUND OF BLEH should work well for cultivating a Bawg garden!",
        "recipe": {
            "name": "Jollyscope",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Blulch", "qty": 4}, {"name": "Jolly Fulmar", "qty": 8}]
        },
        "icon": "furdle_blulch.png"
    },
    "Furdle Frost": {
        "name": "Furdle Frost",
        "type": "Floor",
        "rarity": "Normal",
        "description": "Anything from the Tundra should be happy growing in this DELICIOUS FROST!",
        "recipe": {
            "name": "Shredbasket",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Permafrost", "qty": 4}, {"name": "Spiregg Goop", "qty": 8}]
        },
        "icon": "furdle_frost.png"
    },
    "Healing Shrine": {
        "name": "Healing Shrine",
        "type": "Shrine",
        "rarity": "Normal",
        "description": "Itll get all kinds of jibblies out of your blood tubes!",
        "icon": "healing_shrine.png"
    },
    "Bait Shrine": {
        "name": "Bait Shrine",
        "type": "Shrine",
        "rarity": "Normal",
        "description": "Your pole is totally gonna be so awesome for the fishings after you touch this.",
        "icon": "bait_shrine.png"
    },
    "Flight Shrine": {
        "name": "Flight Shrine",
        "type": "Shrine",
        "rarity": "Normal",
        "description": "Prodding this shrine makes your toes feel all twinkly toesy mctwinkle.",
        "icon": "flight_shrine.png"
    },
    "Harvest Shrine": {
        "name": "Harvest Shrine",
        "type": "Shrine",
        "rarity": "Normal",
        "description": "GET TO WORK!",
        "icon": "harvest_shrine.png"
    },
    "Haircone": {
        "name": "Haircone",
        "type": "Seed",
        "rarity": "Good",
        "description": "This makes a giant hair emerge from the ground. Why? HAIRCONE!",
        "icon": "haircone.png"
    },
    "Spur Seed": {
        "name": "Spur Seed",
        "type": "Seed",
        "rarity": "Good",
        "description": "Jamming this into the ground will cause a spur to appear over time. Gross, but effective.",
        "icon": "spur_seed.png"
    },
    "Brubus Codewall": {
        "name": "Brubus Codewall",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Brubus congregants will often write their meeting minutes on golden tablets. You know, for posterity.",
        "icon": "brubus_codewall.png"
    },
    "Brubus Debate Lamp": {
        "name": "Brubus Debate Lamp",
        "type": "Lighting",
        "rarity": "Normal",
        "description": "To sustain debates into the depths of the COLD NIGHT, Brubus will keep these lamps lit around their congregation.",
        "icon": "brubus_debate_lamp.png"
    },
    "Brubus Lectern": {
        "name": "Brubus Lectern",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Its important to have a place from which to shout others down.",
        "icon": "brubus_lectern.png"
    },
    "Statue of Bribery": {
        "name": "Statue of Bribery",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "The Brubus have tremendous regard for greasing the wheels of democracy.",
        "icon": "statue_of_bribery.png"
    },
    "Brubus Voting Bucket": {
        "name": "Brubus Voting Bucket",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Write your name and put it in the bucket. Its definitely not a shredder or anything.",
        "icon": "brubus_voting_bucket.png"
    },
    "Blollilamp": {
        "name": "Blollilamp",
        "type": "Lighting",
        "rarity": "Normal",
        "description": "Sometimes the best ideas come from taking two random objects and cramming them together really hard.",
        "recipe": {
            "name": "Jollyscope",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Bloo", "qty": 3}, {"name": "Jolly", "qty": 4}]
        },
        "icon": "blollilamp.png"
    },
    "Blotlamp": {
        "name": "Blotlamp",
        "type": "Lighting",
        "rarity": "Normal",
        "description": "ITS BLUE AND IT GLOWS. WHAT MORE DO YOU WANT FROM IT.",
        "recipe": {
            "name": "Squathe",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Blastique", "qty": 1}, {"name": "Glotus Berries", "qty": 2}, {
                "name": "Bulbi",
                "qty": 1
            }]
        },
        "icon": "blotlamp.png"
    },
    "Fluorsack": {
        "name": "Fluorsack",
        "type": "Lighting",
        "rarity": "Normal",
        "description": "For when you need to bathe the world in a delicious purpley glow.",
        "recipe": {
            "name": "Compressor",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Throak Fluoros", "qty": 4}, {"name": "Gassak Gas Sack", "qty": 2}]
        },
        "icon": "fluorsack.png"
    },
    "Lumivase": {
        "name": "Lumivase",
        "type": "Lighting",
        "rarity": "Normal",
        "description": "This would go well with your new drapes, or some kinda fashionable stuff like that.",
        "recipe": {
            "name": "Centrifuge",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Luminalgae", "qty": 1}, {"name": "Blube", "qty": 3}, {
                "name": "Coral Tubes",
                "qty": 1
            }]
        },
        "icon": "lumivase.png"
    },
    "Smashlight": {
        "name": "Smashlight",
        "type": "Lighting",
        "rarity": "Normal",
        "description": "This beautiful piece will keep your other beautiful pieces marginally visible at night.",
        "recipe": {
            "name": "Shredbasket",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Emerald Smashborer", "qty": 1}, {"name": "Smashblossom Trunk", "qty": 8}]
        },
        "icon": "smashlight.png"
    },
    "Stuffed Bamli": {
        "name": "Stuffed Bamli",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "When youve bested this many bamlis, youd best put it on display.",
        "recipe": {
            "name": "Granvil",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Spur Gum", "qty": 2}, {"name": "Bamstache", "qty": 8}, {
                "name": "Bamli Horn",
                "qty": 31
            }]
        },
        "icon": "stuffed_bamli.png"
    },
    "Stuffed Blastcrab": {
        "name": "Stuffed Blastcrab",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Its still warm to the touch, even after being stuffed!",
        "recipe": {
            "name": "Refinery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Karboan", "qty": 12}, {
                "name": "Blastcrab Shell",
                "qty": 8
            }, {"name": "Blastcrab Hide", "qty": 4}]
        },
        "icon": "stuffed_blastcrab.png"
    },
    "Reassembled Gallum": {
        "name": "Reassembled Gallum",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "When you place your hand on it, you can feel it vibrating and humming slightly.",
        "recipe": {
            "name": "Foundry",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Crystine", "qty": 4}, {"name": "Gallum Armor", "qty": 7}, {
                "name": "Alloyonite",
                "qty": 3
            }, {"name": "Gallum Rib", "qty": 2}]
        },
        "icon": "reassembled_gallum.png"
    },
    "Stuffed Glaser": {
        "name": "Stuffed Glaser",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "If you look closely, you can see old burn marks on the antlers from the heat of its laser!",
        "recipe": {
            "name": "Gastropestle",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Smashblossom Trunk", "qty": 12}, {
                "name": "Glaser Antler Fragment",
                "qty": 6
            }, {"name": "Glaser Hoof", "qty": 3}, {"name": "Glaser Stomachball", "qty": 2}]
        },
        "icon": "stuffed_glaser.png"
    },
    "Stuffed Gulanti": {
        "name": "Stuffed Gulanti",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Your hair stands on end as you walk past it. Its either the static or the creepiness.",
        "recipe": {
            "name": "Foundry",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Alloyonite", "qty": 3}, {
                "name": "Gulanti Chomper",
                "qty": 5
            }, {"name": "Gulanti Blowhole", "qty": 2}, {"name": "Gulanti Elecore", "qty": 2}]
        },
        "icon": "stuffed_gulanti.png"
    },
    "Stuffed Lyff": {
        "name": "Stuffed Lyff",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Its so realistic, you can almost feel it licking you. ALMOST.",
        "recipe": {
            "name": "Tumbler",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Karboan", "qty": 12}, {"name": "Lyff Leather", "qty": 7}, {
                "name": "Lyfftongue",
                "qty": 4
            }]
        },
        "icon": "stuffed_lyff.png"
    },
    "Stuffed Satgat": {
        "name": "Stuffed Satgat",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Even though they are immobile and stuffed, its wings move so fast you cannot see them.",
        "recipe": {
            "name": "Centrifuge",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Spur Gum", "qty": 2}, {
                "name": "Satgat Exoskeleton",
                "qty": 12
            }, {"name": "Satgat Flesh", "qty": 4}]
        },
        "icon": "stuffed_satgat.png"
    },
    "Stuffed Shirk": {
        "name": "Stuffed Shirk",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "The beak is so sharp you could cut paper with it, or styrofoam or something.",
        "recipe": {
            "name": "Shredbasket",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Smashblossom Trunk", "qty": 15}, {
                "name": "Shirk Beakfragment",
                "qty": 7
            }, {"name": "Shirk Plumage", "qty": 3}]
        },
        "icon": "stuffed_shirk.png"
    },
    "Stuffed Slurb": {
        "name": "Stuffed Slurb",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Its horribleness haunts your dreams. AND EVEN YOUR NIGHTMARES.",
        "recipe": {
            "name": "Tumbler",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Karboan", "qty": 12}, {"name": "Slurb Spine", "qty": 9}, {
                "name": "Slurb Magnet",
                "qty": 2
            }]
        },
        "icon": "stuffed_slurb.png"
    },
    "Stuffed Snorble": {
        "name": "Stuffed Snorble",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "It takes a lot of work to keep these airbags inflated, but it pays the mortgage.",
        "recipe": {
            "name": "Compressor",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Clossom", "qty": 2}, {
                "name": "Snorble Airsak",
                "qty": 6
            }, {"name": "Snorble Skin", "qty": 10}]
        },
        "icon": "stuffed_snorble.png"
    },
    "Stuffed Tartil": {
        "name": "Stuffed Tartil",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "The tar never seems to dry, no matter how long it sits. Fortunately, it smells terrible.",
        "recipe": {
            "name": "Fishiminea",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Pearl Scale", "qty": 2}, {
                "name": "Tartil Pitch",
                "qty": 13
            }, {"name": "Tartil Tongue", "qty": 2}]
        },
        "icon": "stuffed_tartil.png"
    },
    "Stuffed Throak": {
        "name": "Stuffed Throak",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "The tentacles get stuck on you as you walk past. Its delightful!",
        "recipe": {
            "name": "Bioloom",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Clossom", "qty": 2}, {
                "name": "Throak Tentacle",
                "qty": 18
            }, {"name": "Throak Jelly", "qty": 1}]
        },
        "icon": "stuffed_throak.png"
    },
    "Stuffed Vomma": {
        "name": "Stuffed Vomma",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "It looks just like the real thing! A dead version of the real thing, anyway.",
        "recipe": {
            "name": "Jollyscope",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Jolly Gastrolith", "qty": 3}, {"name": "Vlap", "qty": 15}, {
                "name": "Boba",
                "qty": 1
            }]
        },
        "icon": "stuffed_vomma.png"
    },
    "Stuffed Wat": {
        "name": "Stuffed Wat",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Its long, slender fingers are still gross to look at.",
        "recipe": {
            "name": "Crystal Kiln",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Dusk Shard", "qty": 3}, {"name": "Watfinger", "qty": 2}, {
                "name": "Wat Wing",
                "qty": 5
            }]
        },
        "icon": "stuffed_wat.png"
    },
    "Stuffed Wojack": {
        "name": "Stuffed Wojack",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "OH GOD IT oh its dead. Heh. For a minute there... ... anyways.",
        "recipe": {
            "name": "Jackweaver",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Jolly Gastrolith", "qty": 3}, {
                "name": "Wojack Cilia",
                "qty": 3
            }, {"name": "Wojack Sucker", "qty": 10}]
        },
        "icon": "stuffed_wojack.png"
    },
    "Stuffed Zug": {
        "name": "Stuffed Zug",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "When you gaze upon its face, you are reminded of how stupid it was in life.",
        "recipe": {
            "name": "Crystal Kiln",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Dusk Shard", "qty": 3}, {
                "name": "Zug Kneecap",
                "qty": 7
            }, {"name": "Charged Zug Molt", "qty": 1}, {"name": "Zug Sparkplug", "qty": 2}]
        },
        "icon": "stuffed_zug.png"
    },
    "Wobbler": {
        "name": "Wobbler",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "When you gotta punch a wobbly picture of your nemesis, you gotta punch a wobbly picture of your nemesis.",
        "recipe": {
            "name": "Chemworks",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Wompit Leather", "qty": 11}, {
                "name": "Glidopus Ink",
                "qty": 12
            }, {"name": "Flatstone Gravel", "qty": 4}]
        },
        "icon": "wobbler.png"
    },
    "Brain Boost Potion": {
        "name": "Brain Boost Potion",
        "type": "Consumable",
        "rarity": "Good",
        "description": "Drinking this cocktail heightens your senses! ALL OF THEM. Puts you in bullet-time for 3 seconds.",
        "recipe": {
            "name": "Pressure Cooker",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Karboan", "qty": 3}, {
                "name": "Raging Slurb Essence",
                "qty": 3
            }, {"name": "Boreole", "qty": 3}, {"name": "Ventsleeper", "qty": 3}]
        },
        "icon": "brain_boost_potion.png"
    },
    "Karboric Shiner": {
        "name": "Karboric Shiner",
        "type": "Lighting",
        "rarity": "Normal",
        "description": "Its so firm and glowy! Standing near it makes you feel queasy and nauseous, for some reason.",
        "recipe": {
            "name": "Tumbler",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Boreole", "qty": 1}, {"name": "Karboan", "qty": 6}]
        },
        "icon": "karboric_shiner.png"
    },
    "Floaty Icelight": {
        "name": "Floaty Icelight",
        "type": "Lighting",
        "rarity": "Normal",
        "description": "The power of Flungus keeps this glowing Icequill hovering gently in the air!",
        "recipe": {
            "name": "Burnchurn",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Flungus Pod", "qty": 10}, {"name": "Icequill", "qty": 3}]
        },
        "icon": "floaty_icelight.png"
    },
    "Potted Pyn": {
        "name": "Potted Pyn",
        "type": "Potted Plant",
        "rarity": "Normal",
        "description": "Now you can chew the eyes off of Pyns any time of the day! But not at night; thatd be weird.",
        "recipe": {
            "name": "Granvil",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Pyn", "qty": 2}, {"name": "Spur Gum", "qty": 1}]
        },
        "icon": "potted_pyn.png"
    },
    "Potted Perp": {
        "name": "Potted Perp",
        "type": "Potted Plant",
        "rarity": "Normal",
        "description": "These perps will add ambience to any room that doesnt already have Perps in it!",
        "recipe": {
            "name": "Shredbasket",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Conjoined Perp", "qty": 1}, {"name": "Smashblossom Trunk", "qty": 8}]
        },
        "icon": "potted_perp.png"
    },
    "Potted Bunnion": {
        "name": "Potted Bunnion",
        "type": "Potted Plant",
        "rarity": "Normal",
        "description": "These adorable Bunnions scream endlessly until eaten. Theyre SO CUUUUTE!",
        "recipe": {
            "name": "Foundry",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Bunnion", "qty": 1}, {"name": "Alloyonite", "qty": 2}]
        },
        "icon": "potted_bunnion.png"
    },
    "Potted Boreole": {
        "name": "Potted Boreole",
        "type": "Potted Plant",
        "rarity": "Normal",
        "description": "Once potted, Boreoles stop glowing. Must be something about... sciencey crap...",
        "recipe": {
            "name": "Gastropestle",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Boreole", "qty": 1}, {"name": "Smashblossom Trunk", "qty": 9}]
        },
        "icon": "potted_boreole.png"
    },
    "Potted Icequill": {
        "name": "Potted Icequill",
        "type": "Potted Plant",
        "rarity": "Normal",
        "description": "Potted Icequills dont have the same vibrant glow as wild ones. Still, WHATEVER!",
        "recipe": {
            "name": "Refinery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Icequill", "qty": 3}, {"name": "Karboan", "qty": 7}]
        },
        "icon": "potted_icequill.png"
    },
    "Potted Coppersponge": {
        "name": "Potted Coppersponge",
        "type": "Potted Plant",
        "rarity": "Normal",
        "description": "Infinite sponges? INFINITE SPONGES! SPONGE SPONGE SPONGE SPONGE. Sponge.",
        "recipe": {
            "name": "Burnchurn",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Coppersponge", "qty": 4}, {"name": "Karboan", "qty": 7}]
        },
        "icon": "potted_coppersponge.png"
    },
    "Potted Hardcore": {
        "name": "Potted Hardcore",
        "type": "Potted Plant",
        "rarity": "Normal",
        "description": "Probably the most hardcore potted hardcore ever potted.",
        "recipe": {
            "name": "Gastropestle",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Hard Core", "qty": 5}, {"name": "Smashblossom Trunk", "qty": 9}]
        },
        "icon": "potted_hardcore.png"
    },
    "Potted Parapod": {
        "name": "Potted Parapod",
        "type": "Potted Plant",
        "rarity": "Normal",
        "description": "Potted Parapods present prolific parapod production possibilities!",
        "recipe": {
            "name": "Gastropestle",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Parapod", "qty": 2}, {"name": "Smashblossom Trunk", "qty": 9}]
        },
        "icon": "potted_parapod.png"
    },
    "Geysir Drill": {
        "name": "Geysir Drill",
        "type": "Seed",
        "rarity": "Good",
        "description": "This thingamabob will punch a hole in Furdle Frost, digging a permanent Geysir!",
        "recipe": {
            "name": "Tumbler",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Hard Core", "qty": 11}, {
                "name": "Diamond",
                "qty": 3
            }, {"name": "Glaser Chargenub", "qty": 2}]
        },
        "icon": "geysir_drill.png"
    },
    "Magmite Queen": {
        "name": "Magmite Queen",
        "type": "Seed",
        "rarity": "Good",
        "description": "Her voluptuous insectoid curves attract all the magmite mans!",
        "icon": "magmite_queen.png"
    },
    "Smash Seed": {
        "name": "Smash Seed",
        "type": "Seed",
        "rarity": "Good",
        "description": "When placed in the right environment, this will yield a DELICIOUS Smashblossom!",
        "icon": "smash_seed.png"
    },
    "Pipeseed": {
        "name": "Pipeseed",
        "type": "Seed",
        "rarity": "Good",
        "description": "Somehow, this turns into pipes. Pipedirt. Pipey pipedirty dirt pipes. PIPE.",
        "icon": "pipeseed.png"
    },
    "Potted Tusker": {
        "name": "Potted Tusker",
        "type": "Potted Plant",
        "rarity": "Normal",
        "description": "It makes you feel things when you feel it.",
        "recipe": {
            "name": "Jollyscope",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Jolly Gastrolith", "qty": 2}, {"name": "Tusker", "qty": 3}]
        },
        "icon": "potted_tusker.png"
    },
    "Nematobomb": {
        "name": "Nematobomb",
        "type": "Bomb",
        "rarity": "Normal",
        "description": "Deals 100% of your DPS as frost damage and makes your enemies crave hot cocoa!",
        "recipe": {
            "name": "Compressor",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Extracted Tuber", "qty": 3}, {
                "name": "Blube",
                "qty": 3
            }, {"name": "Throak Nematocyte", "qty": 3}]
        },
        "icon": "nematobomb.png"
    },
    "Vompole Clusterbomb": {
        "name": "Vompole Clusterbomb",
        "type": "Bomb",
        "rarity": "Normal",
        "description": "Harness the explosive power of BABIES! Er... vompoles. Not babies. Deals 250% of your DPS as physical damage!",
        "recipe": {
            "name": "Jackweaver",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Vompole", "qty": 3}, {"name": "Jolly Fulmar", "qty": 3}, {
                "name": "Bleghpod",
                "qty": 3
            }]
        },
        "icon": "vompole_clusterbomb.png"
    },
    "Bloodbomb": {
        "name": "Bloodbomb",
        "type": "Bomb",
        "rarity": "Normal",
        "description": "If it bleeds, you can kill it. If its already bleeding, you probably dont have to. Bleeds enemies for 250% of your DPS!",
        "recipe": {
            "name": "Centrifuge",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Vampry", "qty": 3}, {
                "name": "Blood Louse",
                "qty": 3
            }, {"name": "Satgat Exoskeleton", "qty": 3}]
        },
        "icon": "bloodbomb.png"
    },
    "Shirknel Bomb": {
        "name": "Shirknel Bomb",
        "type": "Bomb",
        "rarity": "Normal",
        "description": "The salt gland causes a chemical reaction, and then CHEMISTRY HAPPENS! Deals 250% of your DPS as physical damage!",
        "recipe": {
            "name": "Gastropestle",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Shirk Saltgland", "qty": 3}, {
                "name": "Glaser Stomachball",
                "qty": 3
            }, {"name": "Shirk Beakfragment", "qty": 3}]
        },
        "icon": "shirknel_bomb.png"
    },
    "The Slurricane": {
        "name": "The Slurricane",
        "type": "Bomb",
        "rarity": "Normal",
        "description": "Creates a powerful poison cloud that poisons LITERALLY EVERYTHING except for some stuff! Deals 300% of your DPS as poison damage!",
        "recipe": {
            "name": "Tumbler",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Slurb Spine", "qty": 3}, {"name": "Karboan", "qty": 3}, {
                "name": "Meltor",
                "qty": 3
            }]
        },
        "icon": "the_slurricane.png"
    },
    "Pincushion Bomb": {
        "name": "Pincushion Bomb",
        "type": "Bomb",
        "rarity": "Normal",
        "description": "Vigorously poke everything TO DEATH! Deals 200% of your DPS as physical damage!",
        "recipe": {
            "name": "Burnchurn",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Flungus Pod", "qty": 3}, {"name": "Flailpod", "qty": 3}]
        },
        "icon": "pincushion_bomb.png"
    },
    "Handy Purptorch": {
        "name": "Handy Purptorch",
        "type": "Torch",
        "rarity": "Normal",
        "description": "What, this? ITS NOT PINK. ITS FUCHSIA.",
        "recipe": {
            "name": "Bioloom",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Splinter", "qty": 25}, {"name": "Nurvaxon", "qty": 9}, {
                "name": "Dendrite Spine",
                "qty": 4
            }, {"name": "Throak Fluoros", "qty": 15}]
        },
        "icon": "handy_purptorch.png"
    },
    "Emerald Hand Torch": {
        "name": "Emerald Hand Torch",
        "type": "Torch",
        "rarity": "Superior",
        "description": "Fight the darkness with the bright glow of this AMAZING EMERALD TORCH! Order now and well throw in a bag of toothpaste.",
        "recipe": {
            "name": "Tumbler",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Boreole", "qty": 4}, {"name": "Diamond", "qty": 8}, {
                "name": "Emerald Smashborer",
                "qty": 6
            }]
        },
        "icon": "emerald_hand_torch.png"
    },
    "Jollysign": {
        "name": "Jollysign",
        "type": "Sign",
        "rarity": "Normal",
        "description": "Disgustingly keep track of all the cool stuff you find!",
        "recipe": {
            "name": "Jollyscope",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Jolly", "qty": 1}, {"name": "Vlap", "qty": 1}]
        },
        "icon": "jollysign.png"
    },
    "Smashy Sign": {
        "name": "Smashy Sign",
        "type": "Sign",
        "rarity": "Normal",
        "description": "Magellan it up in the Tundra with this fashionable sign!",
        "recipe": {
            "name": "Shredbasket",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Furgrasp Antler", "qty": 1}, {"name": "Smashblossom Trunk", "qty": 1}]
        },
        "icon": "smashy_sign.png"
    },
    "Sterling Wompit Essence": {
        "name": "Sterling Wompit Essence",
        "type": "Creature Essence",
        "rarity": "Superior",
        "description": "Holding this object in your hand makes you feel... stompy.",
        "icon": "sterling_wompit_essence.png"
    },
    "Ancient Glutterfly Essence": {
        "name": "Ancient Glutterfly Essence",
        "type": "Creature Essence",
        "rarity": "Superior",
        "description": "Being near this essence makes you feel FLUTTERY AND VIVACIOUS!",
        "icon": "ancient_glutterfly_essence.png"
    },
    "Womplord Essence": {
        "name": "Womplord Essence",
        "type": "Creature Essence",
        "rarity": "Epic",
        "description": "Gazing upon this amazing whatever it is, you feel compelled to amputate one of your legs and hop around wildly.",
        "icon": "womplord_essence.png"
    },
    "Bloated Glutterfly Essence": {
        "name": "Bloated Glutterfly Essence",
        "type": "Creature Essence",
        "rarity": "Epic",
        "description": "It vibrates and chirps with the POWER OF GLUTTERFLIES! You get the sense that licking it would kill you.",
        "icon": "bloated_glutterfly_essence.png"
    },
    "Verdant Glidopus Essence": {
        "name": "Verdant Glidopus Essence",
        "type": "Creature Essence",
        "rarity": "Superior",
        "description": "Putting this essence in your pocket makes you strangely attracted to Whistleroots.",
        "icon": "verdant_glidopus_essence.png"
    },
    "Elder Glidopus Essence": {
        "name": "Elder Glidopus Essence",
        "type": "Creature Essence",
        "rarity": "Epic",
        "description": "Holding this object in your hand makes you wish your hand was a tentacle.",
        "icon": "elder_glidopus_essence.png"
    },
    "Filthy Tartil Essence": {
        "name": "Filthy Tartil Essence",
        "type": "Creature Essence",
        "rarity": "Superior",
        "description": "This makes you feel sticky, yet delicious. Like some kind of sticky cake or dessert.",
        "icon": "filthy_tartil_essence.png"
    },
    "Blood Tartil Essence": {
        "name": "Blood Tartil Essence",
        "type": "Creature Essence",
        "rarity": "Epic",
        "description": "This sticks to everything IN THE WHOLE UNIVERSE. Except for love, which is an intangible idea that things cant stick to.",
        "icon": "blood_tartil_essence.png"
    },
    "GrandWat Essence": {
        "name": "GrandWat Essence",
        "type": "Creature Essence",
        "rarity": "Superior",
        "description": "This ball of Wat energy rapidly flits around as you approach it! OR DOES IT? Yes, it does.",
        "icon": "grandwat_essence.png"
    },
    "Ancient Shadowy Wat Essence": {
        "name": "Ancient Shadowy Wat Essence",
        "type": "Creature Essence",
        "rarity": "Epic",
        "description": "Coming near this essence makes you want to poke things with your long, creepy fingers.",
        "icon": "ancient_shadowy_wat_essence.png"
    },
    "Zug Lug Essence": {
        "name": "Zug Lug Essence",
        "type": "Creature Essence",
        "rarity": "Superior",
        "description": "This Zug energy ball makes grating shrieking noises. Its oddly calming!",
        "icon": "zug_lug_essence.png"
    },
    "Zuguardian Essence": {
        "name": "Zuguardian Essence",
        "type": "Creature Essence",
        "rarity": "Epic",
        "description": "This essence crackles with electricity!",
        "icon": "zuguardian_essence.png"
    },
    "Tempered Vomma Essence": {
        "name": "Tempered Vomma Essence",
        "type": "Creature Essence",
        "rarity": "Superior",
        "description": "Being near this essence makes you want to barf. But... in a good way.",
        "icon": "tempered_vomma_essence.png"
    },
    "Sightless Vomma Essence": {
        "name": "Sightless Vomma Essence",
        "type": "Creature Essence",
        "rarity": "Epic",
        "description": "Being near this essence makes you REALLY want to barf. But in a REALLY GOOD way.",
        "icon": "sightless_vomma_essence.png"
    },
    "Malicious Throak Essence": {
        "name": "Malicious Throak Essence",
        "type": "Creature Essence",
        "rarity": "Superior",
        "description": "You feel that if you were to touch it, you would be stung. Only one way to find out!",
        "icon": "malicious_throak_essence.png"
    },
    "Bawgblood Throak Essence": {
        "name": "Bawgblood Throak Essence",
        "type": "Creature Essence",
        "rarity": "Epic",
        "description": "Holding this makes you feel like you could just FLOAT AWAY!",
        "icon": "bawgblood_throak_essence.png"
    },
    "Burnt Snorble Essence": {
        "name": "Burnt Snorble Essence",
        "type": "Creature Essence",
        "rarity": "Superior",
        "description": "This essence gives you the feeling of HURGH BLAGH!",
        "icon": "burnt_snorble_essence.png"
    },
    "Depressurized Snorble Essence": {
        "name": "Depressurized Snorble Essence",
        "type": "Creature Essence",
        "rarity": "Epic",
        "description": "It feels very light, as if its full of air! Wait. Thats just gas.",
        "icon": "depressurized_snorble_essence.png"
    },
    "Sensitive Satgat Essence": {
        "name": "Sensitive Satgat Essence",
        "type": "Creature Essence",
        "rarity": "Superior",
        "description": "This essence is ADORABLE!",
        "icon": "sensitive_satgat_essence.png"
    },
    "Desaturated Satgat Essence": {
        "name": "Desaturated Satgat Essence",
        "type": "Creature Essence",
        "rarity": "Epic",
        "description": "Being near this essence makes your head feel tiny.",
        "icon": "desaturated_satgat_essence.png"
    },
    "Sticky Wojack Essence": {
        "name": "Sticky Wojack Essence",
        "type": "Creature Essence",
        "rarity": "Superior",
        "description": "This little ball of Wojack energy makes you want to DIG! DIG INTO THE GERND!",
        "icon": "sticky_wojack_essence.png"
    },
    "Bleached Wojack Essence": {
        "name": "Bleached Wojack Essence",
        "type": "Creature Essence",
        "rarity": "Epic",
        "description": "It tingles your toes when you poke it with your toes. Stop poking it with your toes.",
        "icon": "bleached_wojack_essence.png"
    },
    "Wily Bamli Essence": {
        "name": "Wily Bamli Essence",
        "type": "Creature Essence",
        "rarity": "Superior",
        "description": "Just being near this makes you sprout a RAGING MOUSTACHE.",
        "icon": "wily_bamli_essence.png"
    },
    "Raving Bamli Essence": {
        "name": "Raving Bamli Essence",
        "type": "Creature Essence",
        "rarity": "Epic",
        "description": "Holding this item in your hand makes you crave sugar tremendously. Also, your limbs feel tingly.",
        "icon": "raving_bamli_essence.png"
    },
    "Berg Shirk Essence": {
        "name": "Berg Shirk Essence",
        "type": "Creature Essence",
        "rarity": "Superior",
        "description": "GREEEEEEEEEEAAAGH AAAAAAAAAAAAK!",
        "icon": "berg_shirk_essence.png"
    },
    "Redwing Shirk Essence": {
        "name": "Redwing Shirk Essence",
        "type": "Creature Essence",
        "rarity": "Epic",
        "description": "Your beak feels beakier just from being near this essence!",
        "icon": "redwing_shirk_essence.png"
    },
    "Royal Glaser Essence": {
        "name": "Royal Glaser Essence",
        "type": "Creature Essence",
        "rarity": "Superior",
        "description": "Holding this essence makes you feel like shooting laser beams from your forehead!",
        "icon": "royal_glaser_essence.png"
    },
    "Greybearded Glaser Essence": {
        "name": "Greybearded Glaser Essence",
        "type": "Creature Essence",
        "rarity": "Epic",
        "description": "This essence causes you to crave grass. MMMMMM GRASS HOLY CRAP YEAH!",
        "icon": "greybearded_glaser_essence.png"
    },
    "Raging Slurb Essence": {
        "name": "Raging Slurb Essence",
        "type": "Creature Essence",
        "rarity": "Superior",
        "description": "ITS HORRIBLE!",
        "icon": "raging_slurb_essence.png"
    },
    "Sleepless Slurb Essence": {
        "name": "Sleepless Slurb Essence",
        "type": "Creature Essence",
        "rarity": "Epic",
        "description": "This makes you feel terrible about yourself.",
        "icon": "sleepless_slurb_essence.png"
    },
    "Lyff Broh Essence": {
        "name": "Lyff Broh Essence",
        "type": "Creature Essence",
        "rarity": "Superior",
        "description": "Its so bouncy and springy!",
        "icon": "lyff_broh_essence.png"
    },
    "Max Lyff Essence": {
        "name": "Max Lyff Essence",
        "type": "Creature Essence",
        "rarity": "Epic",
        "description": "When you lick it, you like it.",
        "icon": "max_lyff_essence.png"
    },
    "Pressurized Blastcrab Essence": {
        "name": "Pressurized Blastcrab Essence",
        "type": "Creature Essence",
        "rarity": "Superior",
        "description": "ITS SO DANG HOT. OOH OOWEE! HOT HOT HOT! SO HOT RIGHT NOW!",
        "icon": "pressurized_blastcrab_essence.png"
    },
    "Liquid-Cooled Blastcrab Essence": {
        "name": "Liquid-Cooled Blastcrab Essence",
        "type": "Creature Essence",
        "rarity": "Epic",
        "description": "Touching this essence gives you the vague sense that you are severely burning off your fingers.",
        "icon": "liquid-cooled_blastcrab_essence.png"
    },
    "Calcified Gallum Essence": {
        "name": "Calcified Gallum Essence",
        "type": "Creature Essence",
        "rarity": "Superior",
        "description": "It wont stop vibrating. You can think of one good use for this. CALF MASSAGES!",
        "icon": "calcified_gallum_essence.png"
    },
    "Monochromatic Gallum Essence": {
        "name": "Monochromatic Gallum Essence",
        "type": "Creature Essence",
        "rarity": "Epic",
        "description": "You can feel the power coursing through it! OH GOOD LORDY! OH MY! OH MY STARS!",
        "icon": "monochromatic_gallum_essence.png"
    },
    "Jumpy Gulanti Essence": {
        "name": "Jumpy Gulanti Essence",
        "type": "Creature Essence",
        "rarity": "Superior",
        "description": "This essence makes you want to SING TO THE HEAVENS WITH YOUR GLORIOUS BLOWHOLE!",
        "icon": "jumpy_gulanti_essence.png"
    },
    "Hotblooded Gulanti Essence": {
        "name": "Hotblooded Gulanti Essence",
        "type": "Creature Essence",
        "rarity": "Epic",
        "description": "Your neck feels stretchy when you hold this. Almost TOO stretchy.",
        "icon": "hotblooded_gulanti_essence.png"
    },
    "Tundraporter": {
        "name": "Tundraporter",
        "type": "Teleporter",
        "rarity": "Epic",
        "description": "Majestically transports you to the Tundra LIKE A SOARING EAGOLE!",
        "icon": "tundraporter.png"
    },
    "Wompogo Stick": {
        "name": "Wompogo Stick",
        "type": "Creature Catalyst",
        "rarity": "Epic",
        "description": "Although Wompits cant ride this on account of having no arms, one will definitely appreciate the thought. Embiggens your Wompit to EPIC SIZE!",
        "recipe": {
            "name": "Crystal Kiln",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Tartil Firedamp", "qty": 8}, {
                "name": "Charged Zug Molt",
                "qty": 8
            }, {"name": "Dusk Shard", "qty": 29}, {"name": "Womplord Essence", "qty": 4}]
        },
        "icon": "wompogo_stick.png"
    },
    "Hivelighter": {
        "name": "Hivelighter",
        "type": "Creature Catalyst",
        "rarity": "Epic",
        "description": "Despite conventional wisdom, Glutterflies have terrible eyesight at night. BUT NOT WITH THIS! Embiggens your Glutterfly to EPIC SIZE!",
        "recipe": {
            "name": "Jollyscope",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Pearl Scale", "qty": 19}, {"name": "Jolly", "qty": 70}, {
                "name": "Wuano",
                "qty": 8
            }, {"name": "Bloated Glutterfly Essence", "qty": 2}]
        },
        "icon": "hivelighter.png"
    },
    "Kaglidoscope": {
        "name": "Kaglidoscope",
        "type": "Creature Catalyst",
        "rarity": "Epic",
        "description": "Glidopus be trippin. Embiggens your Glidopus to EPIC SIZE!",
        "recipe": {
            "name": "Bioloom",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Dusk Prism", "qty": 7}, {
                "name": "Bleghpod",
                "qty": 18
            }, {"name": "Extracted Tuber", "qty": 8}, {"name": "Elder Glidopus Essence", "qty": 5}]
        },
        "icon": "kaglidoscope.png"
    },
    "Ten Tonne Bomb": {
        "name": "Ten Tonne Bomb",
        "type": "Creature Catalyst",
        "rarity": "Epic",
        "description": "Once this bomb is absorbed into the squishy body of a Tartil, ALL BETS ARE OFF! Embiggens your Tartil to EPIC SIZE!",
        "recipe": {
            "name": "Bioloom",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Squocoon", "qty": 16}, {"name": "Dusk Prism", "qty": 7}, {
                "name": "Wojack Spice",
                "qty": 9
            }, {"name": "Blood Tartil Essence", "qty": 4}]
        },
        "icon": "ten_tonne_bomb.png"
    },
    "Sleeping Bag": {
        "name": "Sleeping Bag",
        "type": "Creature Catalyst",
        "rarity": "Epic",
        "description": "A growing Wat needs the warmth of a sleep sack! Embiggens your Wat to EPIC SIZE!",
        "recipe": {
            "name": "Compressor",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Snorble Mucusak", "qty": 9}, {
                "name": "Throak Jelly",
                "qty": 9
            }, {"name": "Extracted Tuber", "qty": 8}, {"name": "Ancient Shadowy Wat Essence", "qty": 3}]
        },
        "icon": "sleeping_bag.png"
    },
    "Perpetual Motion Machine": {
        "name": "Perpetual Motion Machine",
        "type": "Creature Catalyst",
        "rarity": "Epic",
        "description": "Nothing charges up a Zugs chargey parts like a thing that violates the laws of physics! Embiggens your Zug to EPIC SIZE!",
        "recipe": {
            "name": "Centrifuge",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Satgat Silk", "qty": 9}, {
                "name": "Vampry",
                "qty": 11
            }, {"name": "Thrombyte Fibrin", "qty": 45}, {"name": "Zuguardian Essence", "qty": 5}]
        },
        "icon": "perpetual_motion_machine.png"
    },
    "Vommophone": {
        "name": "Vommophone",
        "type": "Creature Catalyst",
        "rarity": "Epic",
        "description": "Youve never puked until youve puked through one of these babies. Embiggens your Vomma to EPIC SIZE!",
        "recipe": {
            "name": "Granvil",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Painsulin", "qty": 10}, {"name": "Spur Gold", "qty": 12}, {
                "name": "Blood Louse",
                "qty": 9
            }, {"name": "Sightless Vomma Essence", "qty": 5}]
        },
        "icon": "vommophone.png"
    },
    "Mining Helmet": {
        "name": "Mining Helmet",
        "type": "Creature Catalyst",
        "rarity": "Epic",
        "description": "Its good to protect the Noggin when TUNNELING CRAZILY UNDERGROUND LIKE AN ULTRABEAST! Embiggens your Wojack to EPIC SIZE!",
        "recipe": {
            "name": "Shredbasket",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Sodium Chunk", "qty": 10}, {
                "name": "Emerald Smashborer",
                "qty": 14
            }, {"name": "Grenamel", "qty": 51}, {"name": "Bleached Wojack Essence", "qty": 5}]
        },
        "icon": "mining_helmet.png"
    },
    "Tripoon": {
        "name": "Tripoon",
        "type": "Creature Catalyst",
        "rarity": "Epic",
        "description": "Used by the most powerful Throaks to hunt prey, or something like that. Embiggens your Throak to EPIC SIZE!",
        "recipe": {
            "name": "Gastropestle",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Glaser Silk", "qty": 10}, {"name": "Hair Louse", "qty": 29}, {
                "name": "Diamond",
                "qty": 20
            }, {"name": "Bawgblood Throak Essence", "qty": 5}]
        },
        "icon": "tripoon.png"
    },
    "RC Car": {
        "name": "RC Car",
        "type": "Creature Catalyst",
        "rarity": "Epic",
        "description": "Great for testing airbags and safety features! Embiggens your Snorble to EPIC SIZE!",
        "recipe": {
            "name": "Tumbler",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Slurb Electrucus", "qty": 11}, {
                "name": "Technium",
                "qty": 20
            }, {"name": "Karboan", "qty": 115}, {"name": "Depressurized Snorble Essence", "qty": 3}]
        },
        "icon": "rc_car.png"
    },
    "Binoculars": {
        "name": "Binoculars",
        "type": "Creature Catalyst",
        "rarity": "Epic",
        "description": "Giving this to a Satgat lets it see its house from here. Embiggens your Satgat to EPIC SIZE!",
        "recipe": {
            "name": "Burnchurn",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Crystine", "qty": 42}, {"name": "Meltor", "qty": 39}, {
                "name": "Diamond",
                "qty": 21
            }, {"name": "Desaturated Satgat Essence", "qty": 3}]
        },
        "icon": "binoculars.png"
    },
    "Hipster Bamglasses": {
        "name": "Hipster Bamglasses",
        "type": "Creature Catalyst",
        "rarity": "Epic",
        "description": "Are these cage-fed? Embiggens your Bamli to EPIC SIZE!",
        "recipe": {
            "name": "Refinery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Blastcrab Hydrocarbon", "qty": 12}, {
                "name": "Blackbark",
                "qty": 41
            }, {"name": "Strange Tuft", "qty": 11}, {"name": "Raving Bamli Essence", "qty": 7}]
        },
        "icon": "hipster_bamglasses.png"
    },
    "Sharp Whistle": {
        "name": "Sharp Whistle",
        "type": "Creature Catalyst",
        "rarity": "Epic",
        "description": "THIS PIERCES THE EARS. NOT THE LOBES, BUT... YOU KNOW... THE DRUMS. Embiggens your Shirk to EPIC SIZE!",
        "recipe": {
            "name": "Foundry",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Gallium", "qty": 12}, {"name": "Oilbag", "qty": 50}, {
                "name": "Liquideon",
                "qty": 6
            }, {"name": "Redwing Shirk Essence", "qty": 4}]
        },
        "icon": "sharp_whistle.png"
    },
    "Glazoo": {
        "name": "Glazoo",
        "type": "Creature Catalyst",
        "rarity": "Epic",
        "description": "Its perfectly shaped to fit in the mouth of a Glaser! Embiggens your Glaser to EPIC SIZE!",
        "recipe": {
            "name": "Foundry",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Gulanti Zeolite", "qty": 12}, {
                "name": "Alloyonite",
                "qty": 36
            }, {"name": "Technium", "qty": 22}, {"name": "Greybearded Glaser Essence", "qty": 3}]
        },
        "icon": "glazoo.png"
    },
    "Trampoline": {
        "name": "Trampoline",
        "type": "Creature Catalyst",
        "rarity": "Epic",
        "description": "Give that Slurb a trampoline. Slurbs love trampolines. Embiggens your Slurb to EPIC SIZE!",
        "recipe": {
            "name": "Foundry",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Gulanti Zeolite", "qty": 12}, {
                "name": "Oilbag",
                "qty": 50
            }, {"name": "Lyff Leather", "qty": 70}, {"name": "Sleepless Slurb Essence", "qty": 5}]
        },
        "icon": "trampoline.png"
    },
    "Barbell": {
        "name": "Barbell",
        "type": "Creature Catalyst",
        "rarity": "Epic",
        "description": "This lyff lifts, broh. Embiggens your Lyff to EPIC SIZE!",
        "recipe": {
            "name": "Foundry",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Gulanti Zeolite", "qty": 12}, {
                "name": "Spur Gold",
                "qty": 14
            }, {"name": "Pipedirt Pipe", "qty": 174}, {"name": "Max Lyff Essence", "qty": 2}]
        },
        "icon": "barbell.png"
    },
    "Cooler": {
        "name": "Cooler",
        "type": "Creature Catalyst",
        "rarity": "Epic",
        "description": "Play it cool, crabby. CRABBY COOL! COOL CRAB COOL CAKES! Embiggens your Blastcrab to EPIC SIZE!",
        "recipe": {
            "name": "Foundry",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Gallium", "qty": 12}, {"name": "Liquideon", "qty": 6}, {
                "name": "Flungus Pod",
                "qty": 199
            }, {"name": "Liquid-Cooled Blastcrab Essence", "qty": 2}]
        },
        "icon": "cooler.png"
    },
    "Insulated Sweater": {
        "name": "Insulated Sweater",
        "type": "Creature Catalyst",
        "rarity": "Epic",
        "description": "This will protect the electroneck of your glorious GULANTI! Embiggens your Gulanti to EPIC SIZE!",
        "recipe": {
            "name": "Foundry",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Satgat Silk", "qty": 12}, {
                "name": "Glaser Silk",
                "qty": 12
            }, {"name": "Coralduster", "qty": 48}, {"name": "Hotblooded Gulanti Essence", "qty": 3}]
        },
        "icon": "insulated_sweater.png"
    },
    "Galvanized Ribcage": {
        "name": "Galvanized Ribcage",
        "type": "Creature Catalyst",
        "rarity": "Epic",
        "description": "BE SELF-CONSCIOUS OF YOUR RIBCAGE NO MORE! Embiggens your Gallum to EPIC SIZE!",
        "recipe": {
            "name": "Foundry",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Technium", "qty": 22}, {"name": "Diamond", "qty": 22}, {
                "name": "Gallium",
                "qty": 12
            }, {"name": "Monochromatic Gallum Essence", "qty": 3}]
        },
        "icon": "galvanized_ribcage.png"
    },
    "Grenamel Sleeper": {
        "name": "Grenamel Sleeper",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Its like sleeping on a pillow made of gold. Youd think thatd be uncomfortable. WOULDNT YOU.",
        "recipe": {
            "name": "Granvil",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Vlap", "qty": 18}, {"name": "Spur Gold", "qty": 2}, {
                "name": "Luminalgae",
                "qty": 1
            }]
        },
        "icon": "grenamel_sleeper.png"
    },
    "Bluffy Bed": {
        "name": "Bluffy Bed",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Is this bed any better than any other bed? Does it matter? Why are we here? Is there a point to existence, or are we all just a cosmic accident?",
        "recipe": {
            "name": "Foundry",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Bluffluff", "qty": 10}, {"name": "Lonsdaleite", "qty": 6}, {
                "name": "Diamond",
                "qty": 2
            }, {"name": "Rustmoss", "qty": 5}]
        },
        "icon": "bluffy_bed.png"
    },
    "Squair": {
        "name": "Squair",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "This would be softer if you did more squats. But then, the whole world would be softer, WOULDNT IT?",
        "recipe": {
            "name": "Squathe",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Squee Barrel", "qty": 4}, {
                "name": "Squee Husk",
                "qty": 12
            }, {"name": "Wompit Sinew", "qty": 3}]
        },
        "icon": "squair.png"
    },
    "Squable": {
        "name": "Squable",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "BEHOLD THE MIGHT OF SQUABLE!",
        "recipe": {
            "name": "Squathe",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Squee Barrel", "qty": 4}, {
                "name": "Squee Husk",
                "qty": 12
            }, {"name": "Basic Glue", "qty": 1}]
        },
        "icon": "squable.png"
    },
    "Myelar Lazychair": {
        "name": "Myelar Lazychair",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Its so well insulated, itd be nearly impossible to be tased in the butt while sitting in it.",
        "recipe": {
            "name": "Bioloom",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Myelar", "qty": 23}, {"name": "Wojack Cilia", "qty": 5}]
        },
        "icon": "myelar_lazychair.png"
    },
    "Myelar Table": {
        "name": "Myelar Table",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "The squishiness of Myelar makes for a terrible writing surface. Good thing you dont have any pencils or paper!",
        "recipe": {
            "name": "Bioloom",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Myelar", "qty": 23}, {"name": "Throak Tentacle", "qty": 27}]
        },
        "icon": "myelar_table.png"
    },
    "Snorby Airchair": {
        "name": "Snorby Airchair",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Its like putting your butt on a cloud. A cloud made of air.",
        "recipe": {
            "name": "Compressor",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Snorble Skin", "qty": 10}, {
                "name": "Snorble Airsak",
                "qty": 6
            }, {"name": "Throak Jelly", "qty": 1}]
        },
        "icon": "snorby_airchair.png"
    },
    "Snorby Pufftable": {
        "name": "Snorby Pufftable",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "It takes a lot of LUNG POWER to keep this thing inflated. Inflabed. In... Infilgrated.",
        "recipe": {
            "name": "Compressor",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Snorble Skin", "qty": 10}, {
                "name": "Snorble Airsak",
                "qty": 6
            }, {"name": "Charged Zug Molt", "qty": 1}]
        },
        "icon": "snorby_pufftable.png"
    },
    "Grenamel Buttrest": {
        "name": "Grenamel Buttrest",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Its so dang smooth you can see your butts reflection in it!",
        "recipe": {
            "name": "Granvil",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Grenamel", "qty": 8}, {"name": "Splinter", "qty": 20}]
        },
        "icon": "grenamel_buttrest.png"
    },
    "Grenamel Flattable": {
        "name": "Grenamel Flattable",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "This table is the flattest surface in the known universe. Its so flat, you could put a glass on it if you use a coaster.",
        "recipe": {
            "name": "Granvil",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Grenamel", "qty": 8}, {"name": "Jolly Gastrolith", "qty": 5}]
        },
        "icon": "grenamel_flattable.png"
    },
    "Antler Pongtable": {
        "name": "Antler Pongtable",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Perfect for an outing with the rambunctious gents who all live in that one house down the street!",
        "recipe": {
            "name": "Gastropestle",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Glaser Antler Fragment", "qty": 12}, {"name": "Spiregg Goop", "qty": 10}]
        },
        "icon": "antler_pongtable.png"
    },
    "Antler Lawnchair": {
        "name": "Antler Lawnchair",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Not actually suitable for use on lawns. Chair not liable for serious injury or death.",
        "recipe": {
            "name": "Gastropestle",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Glaser Antler Fragment", "qty": 23}]
        },
        "icon": "antler_lawnchair.png"
    },
    "Fuzzy Hotchair": {
        "name": "Fuzzy Hotchair",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "The fuzz keeps your rear-end nice and toasty!",
        "recipe": {
            "name": "Burnchurn",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Blackbark", "qty": 6}, {"name": "Bluffluff", "qty": 18}]
        },
        "icon": "fuzzy_hotchair.png"
    },
    "Bulgy Podtable": {
        "name": "Bulgy Podtable",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "The slightest poke would cause it to rupture, possibly with force of up to millions of tons of dynamite.",
        "recipe": {
            "name": "Burnchurn",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Blackbark", "qty": 6}, {"name": "Flungus Pod", "qty": 28}]
        },
        "icon": "bulgy_podtable.png"
    },
    "Wobbly Redtable": {
        "name": "Wobbly Redtable",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Triangles are natures most elegant wobbly shapes.",
        "recipe": {
            "name": "Refinery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Alloyonite", "qty": 6}, {"name": "Oilbag", "qty": 7}]
        },
        "icon": "wobbly_redtable.png"
    },
    "Pointy Awesomechair": {
        "name": "Pointy Awesomechair",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "You could easily impale almost any body part on almost any part of this amazing chair!",
        "recipe": {
            "name": "Refinery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Alloyonite", "qty": 4}, {"name": "Coppersponge", "qty": 7}, {
                "name": "Hard Core",
                "qty": 9
            }]
        },
        "icon": "pointy_awesomechair.png"
    },
    "Squee Seedbomb": {
        "name": "Squee Seedbomb",
        "type": "Bomb",
        "rarity": "Normal",
        "description": "Take your Squee gardening to the next level. LEVEL UP! SQUEEEEE! Deals 125% of your DPS as physical damage.",
        "recipe": {
            "name": "Squathe",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Squee Seed", "qty": 3}, {"name": "Squee Husk", "qty": 3}, {
                "name": "Squee Barrel",
                "qty": 3
            }]
        },
        "icon": "squee_seedbomb.png"
    },
    "Nurva Seedbomb": {
        "name": "Nurva Seedbomb",
        "type": "Bomb",
        "rarity": "Normal",
        "description": "This seedbomb really gets on peoples... nurva. HEEEEEEH. Deals 125% of your DPS as physical damage.",
        "recipe": {
            "name": "Bioloom",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Myelar", "qty": 3}, {"name": "Nurvaxon", "qty": 3}, {
                "name": "Nurva Seed",
                "qty": 3
            }]
        },
        "icon": "nurva_seedbomb.png"
    },
    "Artree Seedbomb": {
        "name": "Artree Seedbomb",
        "type": "Bomb",
        "rarity": "Normal",
        "description": "Dont get your fingers caught in the Blubes, as they say. Deals 125% of your DPS as physical damage.",
        "recipe": {
            "name": "Compressor",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Blube", "qty": 3}, {"name": "Sagtatoe", "qty": 3}, {
                "name": "Artree Seed",
                "qty": 3
            }]
        },
        "icon": "artree_seedbomb.png"
    },
    "Hairy Seedbomb": {
        "name": "Hairy Seedbomb",
        "type": "Bomb",
        "rarity": "Normal",
        "description": "This baby will put hair into everythings chest. Deals 125% of your DPS as physical damage.",
        "recipe": {
            "name": "Granvil",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Hairbark", "qty": 6}, {"name": "Haircone", "qty": 3}]
        },
        "icon": "hairy_seedbomb.png"
    },
    "Spur Seedbomb": {
        "name": "Spur Seedbomb",
        "type": "Bomb",
        "rarity": "Normal",
        "description": "Why grow spurs when you can EXPLODE THEM AT THINGS? Deals 125% of your DPS as physical damage.",
        "recipe": {
            "name": "Granvil",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Spur Seed", "qty": 3}, {"name": "Grenamel", "qty": 3}, {
                "name": "Spur Gum",
                "qty": 3
            }]
        },
        "icon": "spur_seedbomb.png"
    },
    "Furgrasp Seedbomb": {
        "name": "Furgrasp Seedbomb",
        "type": "Bomb",
        "rarity": "Normal",
        "description": "GRASP AHOY! Deals 125% of your DPS as physical damage.",
        "recipe": {
            "name": "Shredbasket",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Furgrasp Seed", "qty": 3}, {
                "name": "Furgrasp Antler",
                "qty": 3
            }, {"name": "Furgrasp Foliage", "qty": 3}]
        },
        "icon": "furgrasp_seedbomb.png"
    },
    "Flailtree Seedbomb": {
        "name": "Flailtree Seedbomb",
        "type": "Bomb",
        "rarity": "Normal",
        "description": "Be careful not to flay yourself when this bad boy goes off! Deals 125% of your DPS as physical damage.",
        "recipe": {
            "name": "Burnchurn",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Flaycorn", "qty": 3}, {"name": "Blackbark", "qty": 6}]
        },
        "icon": "flailtree_seedbomb.png"
    },
    "Pipedirt Seedbomb": {
        "name": "Pipedirt Seedbomb",
        "type": "Bomb",
        "rarity": "Normal",
        "description": "Its about to get piping hot in here. Deals 125% of your DPS as physical damage.",
        "recipe": {
            "name": "Refinery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Pipeseed", "qty": 3}, {"name": "Rustmoss", "qty": 6}]
        },
        "icon": "pipedirt_seedbomb.png"
    },
    "Alloyonite Stable": {
        "name": "Alloyonite Stable",
        "type": "Creature Stable",
        "rarity": "Normal",
        "description": "Probably the fluffiest, bluffiest creature bed on the entire planet. Aside from the fluffy warmth of your love, that is.",
        "recipe": {
            "name": "Refinery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Alloyonite", "qty": 4}, {"name": "Bluffluff", "qty": 14}]
        },
        "icon": "alloyonite_stable.png"
    },
    "Bleghy Stable": {
        "name": "Bleghy Stable",
        "type": "Creature Stable",
        "rarity": "Normal",
        "description": "Its squishy, wet, and moderately lumpy. PERFECT FOR A PET TO LIVE IN!",
        "recipe": {
            "name": "Bioloom",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Bleghpod", "qty": 2}, {"name": "Throak Tentacle", "qty": 19}]
        },
        "icon": "bleghy_stable.png"
    },
    "Horn of Megalari": {
        "name": "Horn of Megalari",
        "type": "Structure",
        "rarity": "Normal",
        "description": "A fragment of the horn of the ancient and mysterious Megalari. The Polari believe it has MAGICAL PROPERTIES!",
        "icon": "horn_of_megalari.png"
    },
    "Clamphitheatre": {
        "name": "Clamphitheatre",
        "type": "Structure",
        "rarity": "Normal",
        "description": "This half-shell comes from deep in the frigid waters of the Tundra. At least... at least 10 or 12 feet deep.",
        "icon": "clamphitheatre.png"
    },
    "Polari Horn Sharpener": {
        "name": "Polari Horn Sharpener",
        "type": "Structure",
        "rarity": "Normal",
        "description": "Gotta keep those babies nice and sharp.",
        "icon": "polari_horn_sharpener.png"
    },
    "Polari Hornlamp": {
        "name": "Polari Hornlamp",
        "type": "Lighting",
        "rarity": "Normal",
        "description": "The horn is from a fallen Polari, and the light comes from that Polaris soul. Its a pretty depressing lamp.",
        "icon": "polari_hornlamp.png"
    },
    "Fat Beatdrum": {
        "name": "Fat Beatdrum",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "The beats that emerge from this drum are so fat, they could definitely stand to spend some time in the gym.",
        "icon": "fat_beatdrum.png"
    },
    "Baby Beatdrum": {
        "name": "Baby Beatdrum",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "For when fat beats just arent appropriate.",
        "icon": "baby_beatdrum.png"
    },
    "Bleghsketball": {
        "name": "Bleghsketball",
        "type": "Throwable",
        "rarity": "Normal",
        "description": "Dunking will be difficult in the gravity of this planet, and also without knees or a hoop.",
        "recipe": {
            "name": "Bioloom",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Bleghpod", "qty": 9}, {"name": "Throak Fluoros", "qty": 5}]
        },
        "icon": "bleghsketball.png"
    },
    "Gyroball": {
        "name": "Gyroball",
        "type": "Throwable",
        "rarity": "Normal",
        "description": "Sure, its hard as a ball of concrete, and as heavy as one, but... You know.",
        "recipe": {
            "name": "Tumbler",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Karboan", "qty": 9}, {"name": "Slurb Magnet", "qty": 3}, {
                "name": "Technium",
                "qty": 2
            }]
        },
        "icon": "gyroball.png"
    },
    "Larvy Sackball": {
        "name": "Larvy Sackball",
        "type": "Throwable",
        "rarity": "Normal",
        "description": "Its spongy, yet bouncy, like the skin of some larvae stitched together. Because thats what it is.",
        "recipe": {
            "name": "Foundry",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Depressurized Larva", "qty": 10}, {
                "name": "Gallum Rib",
                "qty": 3
            }, {"name": "Bluffluff", "qty": 4}]
        },
        "icon": "larvy_sackball.png"
    },
    "Flashfizzbang": {
        "name": "Flashfizzbang",
        "type": "Bomb",
        "rarity": "Normal",
        "description": "This contraption is packed full of lightning! Summons a lightning storm at the target location for 100% of your DPS for 7 seconds.",
        "recipe": {
            "name": "Foundry",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Gulanti Elecore", "qty": 3}, {
                "name": "Gallum Warpcore",
                "qty": 3
            }, {"name": "Crystine", "qty": 9}]
        },
        "icon": "flashfizzbang.png"
    },
    "The Big One": {
        "name": "The Big One",
        "type": "Bomb",
        "rarity": "Normal",
        "description": "Its pretty dang big, and it explodes pretty dang big, too! Flings out three other bombs, and also deals 100% of your DPS as physical damage.",
        "recipe": {
            "name": "Foundry",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Flashfizzbang", "qty": 6}, {
                "name": "The Slurricane",
                "qty": 6
            }, {"name": "Pincushion Bomb", "qty": 6}, {"name": "Lonsdaleite", "qty": 21}]
        },
        "icon": "the_big_one.png"
    },
    "Harvestbomb Mk2": {
        "name": "Harvestbomb Mk2",
        "type": "Bomb",
        "rarity": "Normal",
        "description": "A more powerful harvestbomb, for breaking apart all kinds of stuff! Breaks apart all Mk1 resources, plus Flatboulders, Squees, and Dusk Crystals!",
        "recipe": {
            "name": "Squathe",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Squee Barrel", "qty": 3}, {"name": "Gassak Gas Sack", "qty": 3}]
        },
        "icon": "harvestbomb_mk2.png"
    },
    "Harvestbomb Mk3": {
        "name": "Harvestbomb Mk3",
        "type": "Bomb",
        "rarity": "Normal",
        "description": "More powerful than its weaker cousin, this bomb is powerful, and not weak. Breaks apart all Mk2 resources, plus Jollychomps and Nurvas!",
        "recipe": {
            "name": "Jackweaver",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Clossom", "qty": 3}, {"name": "Splinter", "qty": 3}]
        },
        "icon": "harvestbomb_mk3.png"
    },
    "Harvestbomb Mk4": {
        "name": "Harvestbomb Mk4",
        "type": "Bomb",
        "rarity": "Normal",
        "description": "For when you need to chop things, but dont want to chop things! Breaks apart all Mk3 resources, plus Artrees, Bone Spurs, Bawg Hairs, Furgrasps, Spireggs, and Smashblossoms!",
        "recipe": {
            "name": "Shredbasket",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Hard Core", "qty": 3}, {"name": "Spiregg Shell", "qty": 3}]
        },
        "icon": "harvestbomb_mk4.png"
    },
    "Harvestbomb Mk5": {
        "name": "Harvestbomb Mk5",
        "type": "Bomb",
        "rarity": "Normal",
        "description": "You could probably blow up the whole world with this thing. Breaks apart all Mk4 resources, plus Flunguss, Flailtrees, Pipedirts, and Magmite Mounds!",
        "recipe": {
            "name": "Refinery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Flailpod", "qty": 3}, {"name": "Magmite Worker", "qty": 3}]
        },
        "icon": "harvestbomb_mk5.png"
    },
    "Fish Magnet": {
        "name": "Fish Magnet",
        "type": "Bomb",
        "rarity": "Normal",
        "description": "When flung with the right wrist-flick, this will magnetically explode fish out of all fishing holes caught in its radius!",
        "recipe": {
            "name": "Tumbler",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Ventsleeper", "qty": 3}, {"name": "Slurb Magnet", "qty": 3}, {
                "name": "Ice Skate",
                "qty": 3
            }]
        },
        "icon": "fish_magnet.png"
    },
    "Chembobber": {
        "name": "Chembobber",
        "type": "Bomb",
        "rarity": "Normal",
        "description": "This bobber will bob into Bawg or Savanna water and EXPLODE FISH RIGHT OUT OF THEIR SCHOOLS! Bobbly!",
        "recipe": {
            "name": "Centrifuge",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Satgat Chemoreceptors", "qty": 3}, {"name": "Pyn", "qty": 3}]
        },
        "icon": "chembobber.png"
    },
    "Pointy Pinwheel": {
        "name": "Pointy Pinwheel",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "This little guy will help you tell whether the wind is blowing! Hint: it is.",
        "recipe": {
            "name": "Chemworks",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Glutterfly Chitin", "qty": 6}, {
                "name": "Flatstone Gravel",
                "qty": 4
            }, {"name": "Whistleroot Reed", "qty": 19}]
        },
        "icon": "pointy_pinwheel.png"
    },
    "Balloon Cluster": {
        "name": "Balloon Cluster",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Great for parties.",
        "recipe": {
            "name": "Squathe",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Glidopus Siphon", "qty": 10}, {
                "name": "Gassak Gas Sack",
                "qty": 2
            }, {"name": "Bumpberry", "qty": 2}, {"name": "Flatstone Gravel", "qty": 3}]
        },
        "icon": "balloon_cluster.png"
    },
    "Depth Charge": {
        "name": "Depth Charge",
        "type": "Bomb",
        "rarity": "Normal",
        "description": "This came from somewhere... deep... And probably deals 300% of your DPS as physical damage!",
        "icon": "depth_charge.png"
    },
    "Bawgsack": {
        "name": "Bawgsack",
        "type": "Resource",
        "rarity": "Normal",
        "description": "It vibrates and pulses with squooshy mucus!",
        "icon": "bawgsack.png"
    },
    "Megagong Lure": {
        "name": "Megagong Lure",
        "type": "Trinket",
        "rarity": "Legendary",
        "description": "By fusing together three powerful Gongs, you may just be able to fish up the legendary Megagong with this equipped!",
        "recipe": {
            "name": "Refinery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Jackagong", "qty": 1}, {"name": "Wobblygong", "qty": 1}, {
                "name": "Bonkagong",
                "qty": 1
            }, {"name": "Gulanti Zeolite", "qty": 16}]
        },
        "icon": "megagong_lure.png"
    },
    "The Megagong": {
        "name": "The Megagong",
        "type": "Weapon",
        "level": "Level 37",
        "rarity": "Legendary",
        "description": "Level 37 Axe. This beast will make you the envy of every angler IN THE WHOLE DANG WORLD!",
        "icon": "the_megagong.png"
    },
    "The Hydrablade": {
        "name": "The Hydrablade",
        "type": "Component",
        "rarity": "Legendary",
        "description": "You have heard legends of three Sawgrass blades stuck together... but you never imagined it could be so beautiful.",
        "icon": "the_hydrablade.png"
    },
    "Ancient Watch Parts": {
        "name": "Ancient Watch Parts",
        "type": "Component",
        "rarity": "Legendary",
        "description": "Some ancient civilization must have put this together. The parts are SUPER INTRICATE!",
        "icon": "ancient_watch_parts.png"
    },
    "Oddly Shaped Crystal": {
        "name": "Oddly Shaped Crystal",
        "type": "Component",
        "rarity": "Legendary",
        "description": "This crystal shard is shaped kinda like... an insect of some sort...",
        "icon": "oddly_shaped_crystal.png"
    },
    "Facehugger": {
        "name": "Facehugger",
        "type": "Component",
        "rarity": "Superior",
        "description": "It loves your face so much its sickening.",
        "icon": "facehugger.png"
    },
    "The Chrono Shifter": {
        "name": "The Chrono Shifter",
        "type": "Gadget",
        "rarity": "Legendary",
        "description": "Slow down time for everything but yourself! And then punch everyone in the neck!",
        "recipe": {
            "name": "Jollyscope",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Dusk Prism", "qty": 12}, {
                "name": "Ancient Watch Parts",
                "qty": 1
            }, {"name": "Jolly", "qty": 132}]
        },
        "icon": "the_chrono_shifter.png"
    },
    "Blimpsack": {
        "name": "Blimpsack",
        "type": "Component",
        "rarity": "Legendary",
        "description": "This Snorble sack is unusually durable and floaty. If only there were a use for something like that...",
        "icon": "blimpsack.png"
    },
    "Mini Dirigible": {
        "name": "Mini Dirigible",
        "type": "Gadget",
        "rarity": "Legendary",
        "description": "Why walk when you can BLIMP? Grants temporary flight for increased movement speed, and for traversing water!",
        "recipe": {
            "name": "Compressor",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Blimpsack", "qty": 1}, {
                "name": "Blood Louse",
                "qty": 12
            }, {"name": "Snorble Skin", "qty": 145}, {"name": "Blube", "qty": 116}]
        },
        "icon": "mini_dirigible.png"
    },
    "The Everliving Pulp": {
        "name": "The Everliving Pulp",
        "type": "Component",
        "rarity": "Legendary",
        "description": "This spur pulp throbs with the ENERGIES OF LIFE!",
        "icon": "the_everliving_pulp.png"
    },
    "The Blood Root": {
        "name": "The Blood Root",
        "type": "Weapon",
        "level": "Level 24",
        "rarity": "Legendary",
        "description": "Level 24 Hammer. Pulsatrating with the throbulent cardia of life, this hammer will kill everything.",
        "recipe": {
            "name": "Granvil",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "The Everliving Pulp", "qty": 1}, {
                "name": "Spur Gold",
                "qty": 6
            }, {"name": "Vampry", "qty": 6}, {"name": "Painsulin", "qty": 5}]
        },
        "icon": "the_blood_root.png"
    },
    "Physics Research": {
        "name": "Physics Research",
        "type": "Component",
        "rarity": "Legendary",
        "description": "With this knowledge, you can put these papers INTO A FOLDER!",
        "icon": "physics_research.png"
    },
    "Spacetime Folder": {
        "name": "Spacetime Folder",
        "type": "Gadget",
        "rarity": "Legendary",
        "description": "With the knowledge contained in this Spacetime Folder, you can fold spacetime to teleport yourself in battle!",
        "recipe": {
            "name": "Burnchurn",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Physics Research", "qty": 1}, {
                "name": "Lyff Leather",
                "qty": 92
            }, {"name": "Slurb Electrucus", "qty": 16}, {"name": "Flungus Brain", "qty": 33}]
        },
        "icon": "spacetime_folder.png"
    },
    "Fatfish": {
        "name": "Fatfish",
        "type": "Furniture",
        "rarity": "Superior",
        "description": "Its full of wonderful fish goodies!",
        "icon": "fatfish.png"
    },
    "Torso Demon": {
        "name": "Torso Demon",
        "type": "Resource",
        "rarity": "Normal",
        "description": "It got caught in a Geysir vent and pulled from the underworld. KILL IT!",
        "icon": "torso_demon.png"
    },
    "Torso Demon Skin": {
        "name": "Torso Demon Skin",
        "type": "Component",
        "rarity": "Legendary",
        "description": "Its rubbery, hot, and stretchy. It would make for a great coaster!",
        "icon": "torso_demon_skin.png"
    },
    "Demonic Boots": {
        "name": "Demonic Boots",
        "type": "Leg Armor",
        "level": "Level 27",
        "rarity": "Legendary",
        "description": "Level 27 Legendary Pants. These will keep your toes so hot, you cant help but RUN LIKE THE WINGS OF THE WIND!",
        "recipe": {
            "name": "Gastropestle",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Torso Demon Skin", "qty": 1}, {
                "name": "Hard Core",
                "qty": 19
            }, {"name": "Diamond", "qty": 5}, {"name": "Glaser Chargenub", "qty": 4}]
        },
        "icon": "demonic_boots.png"
    },
    "Ship Controls": {
        "name": "Ship Controls",
        "type": "Structure",
        "rarity": "Normal",
        "description": "This is useful for making sure you stay in space!",
        "icon": "ship_controls.png"
    },
    "Package": {
        "name": "Package",
        "type": "Component",
        "rarity": "Good",
        "description": "Whatever is inside this, it had better be important.",
        "icon": "package.png"
    },
    "Ship Floor": {
        "name": "Ship Floor",
        "type": "Floor",
        "rarity": "Normal",
        "description": "Its a floor! From your ship.",
        "icon": "ship_floor.png"
    },
    "Savannaporter": {
        "name": "Savannaporter",
        "type": "Teleporter",
        "rarity": "Normal",
        "description": "Slapping this will suck you through space and drop you RIGHT SMACK in the Savanna!",
        "icon": "savannaporter.png"
    },
    "Spaceporter": {
        "name": "Spaceporter",
        "type": "Teleporter",
        "rarity": "Normal",
        "description": "Want to go to SPAAAAAAAAAAAAAAACE? Now you can.",
        "icon": "spaceporter.png"
    },
    "Ship Tusk": {
        "name": "Ship Tusk",
        "type": "Structure",
        "rarity": "Normal",
        "description": "It keeps your ship pointed in the right direction using space magnets!",
        "icon": "ship_tusk.png"
    },
    "Volatile Sack": {
        "name": "Volatile Sack",
        "type": "Bomb",
        "rarity": "Normal",
        "description": "Theres something GOOFY about the sack of this Gassak gas sack sack. BETTER THROW IT AT SOMETHING FOR 175% OF YOUR DPS AS FIRE DAMAGE!",
        "icon": "volatile_sack.png"
    },
    "Crashed Flop Rocket": {
        "name": "Crashed Flop Rocket",
        "type": "Structure",
        "rarity": "Normal",
        "description": "Once majestically soaring through space, now majestically not soaring anywhere ever again.",
        "icon": "crashed_flop_rocket.png"
    },
    "Cryopod": {
        "name": "Cryopod",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Keep it lubey in here, or youll get stuck.",
        "icon": "cryopod.png"
    },
    "Space Chair": {
        "name": "Space Chair",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "This is where the space sits.",
        "icon": "space_chair.png"
    },
    "Space Table": {
        "name": "Space Table",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "This table is so sturdy it can hold at least five or six spaces.",
        "icon": "space_table.png"
    },
    "Spaceduck Spacepie": {
        "name": "Spaceduck Spacepie",
        "type": "Consumable",
        "rarity": "Good",
        "description": "Although mostly inedible, if you mix a spaceduck up with actual food, it makes for a FANTASTIC pie! Restores 162 HP.",
        "icon": "spaceduck_spacepie.png"
    },
    "Birdhouse": {
        "name": "Birdhouse",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "This milkshake will bring all the birds to the yard.",
        "recipe": {
            "name": "Refinery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Pipedirt Pipe", "qty": 17}, {
                "name": "Blastcrab Shell",
                "qty": 8
            }, {"name": "Blastcrab Hide", "qty": 4}]
        },
        "icon": "birdhouse.png"
    },
    "Bubble Machine": {
        "name": "Bubble Machine",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Because blowing bubbles yourself is far too time-consuming.",
        "recipe": {
            "name": "Refinery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Alloyonite", "qty": 3}, {
                "name": "Technium",
                "qty": 2
            }, {"name": "Gulanti Blowhole", "qty": 2}, {"name": "Oilbag", "qty": 4}]
        },
        "icon": "bubble_machine.png"
    },
    "Bombcatcher": {
        "name": "Bombcatcher",
        "type": "Trinket",
        "rarity": "Epic",
        "description": "Using gravity quantum particulate energy matrix multiplication, this little tool will cause you to not consume a bomb and incur no bomb cooldown 25% of the time when you throw it!",
        "recipe": {
            "name": "Tumbler",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Slurb Magnet", "qty": 11}, {
                "name": "Technium",
                "qty": 10
            }, {"name": "Slurb Electrucus", "qty": 6}, {"name": "Karboan", "qty": 58}]
        },
        "icon": "bombcatcher.png"
    },
    "Karboambox": {
        "name": "Karboambox",
        "type": "Furniture",
        "rarity": "Superior",
        "description": "Settle in for some smooth jazz, baby.",
        "recipe": {
            "name": "Tumbler",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Karboan", "qty": 16}, {
                "name": "Technium",
                "qty": 3
            }, {"name": "Glaser Stomachball", "qty": 3}]
        },
        "icon": "karboambox.png"
    },
    "Cookie Jar": {
        "name": "Cookie Jar",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "WHO STOLE THE COOKIES FROM WITHIN THIS MAGNIFICENT JAR!?",
        "recipe": {
            "name": "Gastropestle",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Hard Core", "qty": 12}, {"name": "Glaser Stomachball", "qty": 3}]
        },
        "icon": "cookie_jar.png"
    },
    "Easel": {
        "name": "Easel",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Fingerpainting would never be relevant, your mother always told you. Show her she was WRONG!",
        "recipe": {
            "name": "Centrifuge",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Coral Tubes", "qty": 1}, {
                "name": "Satgat Exoskeleton",
                "qty": 9
            }, {"name": "Snorble Skin", "qty": 8}, {"name": "Thrombyte Fibrin", "qty": 4}]
        },
        "icon": "easel.png"
    },
    "Rocketoob": {
        "name": "Rocketoob",
        "type": "Furniture",
        "rarity": "Superior",
        "description": "Be sure to point the fireworks end away from your parts.",
        "recipe": {
            "name": "Jackweaver",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Splinter", "qty": 12}, {"name": "Wojack Spice", "qty": 1}, {
                "name": "Boba",
                "qty": 1
            }, {"name": "Jolly Fulmar", "qty": 2}]
        },
        "icon": "rocketoob.png"
    },
    "Horizontal Blubelights": {
        "name": "Horizontal Blubelights",
        "type": "Floor Covering",
        "rarity": "Normal",
        "description": "In the event of a water landing, please follow the illuminated BLUBELIGHTS to your imminent doom.",
        "recipe": {
            "name": "Compressor",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Throak Fluoros", "qty": 1}, {"name": "Blube", "qty": 1}]
        },
        "icon": "horizontal_blubelights.png"
    },
    "Vertical Blubelights": {
        "name": "Vertical Blubelights",
        "type": "Floor Covering",
        "rarity": "Normal",
        "description": "Follow the blubelights TO YOUR BLUBEY DESTINY!",
        "recipe": {
            "name": "Compressor",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Throak Fluoros", "qty": 1}, {"name": "Blube", "qty": 1}]
        },
        "icon": "vertical_blubelights.png"
    },
    "Flower Arrangement": {
        "name": "Flower Arrangement",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "ITS AN ARRANGEMENT OF FLOWERS. THATS ALL IT IS. GET OVER IT.",
        "recipe": {
            "name": "Shredbasket",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Conjoined Perp", "qty": 1}, {
                "name": "Smashblossom Trunk",
                "qty": 11
            }, {"name": "Fanged Strangler", "qty": 1}, {"name": "Boreole", "qty": 1}]
        },
        "icon": "flower_arrangement.png"
    },
    "Flubbery": {
        "name": "Flubbery",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Probably one of the more flungus-like shrubberies youve seen, but itll get the job done.",
        "recipe": {
            "name": "Burnchurn",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Flungus Pod", "qty": 55}]
        },
        "icon": "flubbery.png"
    },
    "Gamebox": {
        "name": "Gamebox",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Theres a hole in the bottom... you put your games in there.",
        "recipe": {
            "name": "Tumbler",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Karboan", "qty": 12}, {"name": "Meltor", "qty": 4}, {
                "name": "Slurb Spine",
                "qty": 9
            }]
        },
        "icon": "gamebox.png"
    },
    "Genie Lamp": {
        "name": "Genie Lamp",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "You gotta rub it the right way, and then nothing happens. Genies arent real, you weirdo.",
        "recipe": {
            "name": "Gastropestle",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Diamond", "qty": 2}, {
                "name": "Glaser Chargenub",
                "qty": 2
            }, {"name": "Fanged Strangler", "qty": 1}]
        },
        "icon": "genie_lamp.png"
    },
    "Golden Catue": {
        "name": "Golden Catue",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Legends say if you put enough of these in your house, people will like you a lot less.",
        "recipe": {
            "name": "Granvil",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Spur Gold", "qty": 2}, {"name": "Bamli Horn", "qty": 46}]
        },
        "icon": "golden_catue.png"
    },
    "Blubber Burner": {
        "name": "Blubber Burner",
        "type": "Lighting",
        "rarity": "Normal",
        "description": "With its ability to burn for up to eight moments, shirk blubber makes for a very versatile lamp!",
        "recipe": {
            "name": "Shredbasket",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Shirk Blubber", "qty": 4}, {
                "name": "Smashblossom Trunk",
                "qty": 4
            }, {"name": "Furgrasp Antler", "qty": 2}, {"name": "Spiregg Yolk", "qty": 1}]
        },
        "icon": "blubber_burner.png"
    },
    "Grenamel Dog Sculpture": {
        "name": "Grenamel Dog Sculpture",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Definitely less maintenance than a non-grenamel dog sculpture.",
        "recipe": {
            "name": "Granvil",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Grenamel", "qty": 8}, {"name": "Bamli Horn", "qty": 46}]
        },
        "icon": "grenamel_dog_sculpture.png"
    },
    "Sackolantern": {
        "name": "Sackolantern",
        "type": "Lighting",
        "rarity": "Normal",
        "description": "WHY WOULD ANYONE MAKE THIS?",
        "recipe": {
            "name": "Compressor",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Snorble Airsak", "qty": 2}, {"name": "Ayeayes", "qty": 2}, {
                "name": "Blood Louse",
                "qty": 1
            }, {"name": "Throak Fluoros", "qty": 2}]
        },
        "icon": "sackolantern.png"
    },
    "Sticky Hammok": {
        "name": "Sticky Hammok",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "It will provide a good nights sleep, but you might need five showers in the morning.",
        "recipe": {
            "name": "Bioloom",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Throak Tentacle", "qty": 18}, {
                "name": "Throak Nematocyte",
                "qty": 2
            }, {"name": "Clossom", "qty": 2}]
        },
        "icon": "sticky_hammok.png"
    },
    "Grandrogynous Clock": {
        "name": "Grandrogynous Clock",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Looking at this clock, you cant tell what time it is.",
        "recipe": {
            "name": "Bioloom",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Extracted Tuber", "qty": 1}, {
                "name": "Throak Tentacle",
                "qty": 14
            }, {"name": "Bleghpod", "qty": 2}, {"name": "Dendrite Spine", "qty": 2}]
        },
        "icon": "grandrogynous_clock.png"
    },
    "Shock Guard": {
        "name": "Shock Guard",
        "type": "Gadget",
        "rarity": "Superior",
        "description": "This INCREDIBLE INVENTION summons 3 lightning balls that will shock your enemies when you strike them for 70% of your dps!",
        "recipe": {
            "name": "Jackweaver",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Charged Zug Molt", "qty": 4}, {"name": "Nurvaxon", "qty": 18}, {
                "name": "Myelar",
                "qty": 66
            }, {"name": "Dendrite Spine", "qty": 7}]
        },
        "icon": "shock_guard.png"
    },
    "Lumiball": {
        "name": "Lumiball",
        "type": "Lighting",
        "rarity": "Normal",
        "description": "Excuse me, sir... your ball is glowing.",
        "recipe": {
            "name": "Centrifuge",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Luminalgae", "qty": 1}, {"name": "Ayeayes", "qty": 2}, {
                "name": "Pyn",
                "qty": 1
            }, {"name": "Satgat Exoskeleton", "qty": 3}]
        },
        "icon": "lumiball.png"
    },
    "Pedometer": {
        "name": "Pedometer",
        "type": "Trinket",
        "rarity": "Superior",
        "description": "Its so exciting to keep count of your steps, that every 50 steps youll burst into a joyful sprint!",
        "recipe": {
            "name": "Bioloom",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Extracted Tuber", "qty": 5}, {
                "name": "Throak Fluoros",
                "qty": 41
            }, {"name": "Wojack Spice", "qty": 5}]
        },
        "icon": "pedometer.png"
    },
    "Polkadot Floor Covering": {
        "name": "Polkadot Floor Covering",
        "type": "Floor Covering",
        "rarity": "Normal",
        "description": "Thisll keep your little toesy woesies nice and comfy womfy!",
        "recipe": {
            "name": "Burnchurn",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Bluffluff", "qty": 1}]
        },
        "icon": "polkadot_floor_covering.png"
    },
    "Goldybank": {
        "name": "Goldybank",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Theres a hole in the top, so you can put your insanely huge piles of cash in there!",
        "recipe": {
            "name": "Granvil",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Spur Gold", "qty": 2}, {"name": "Bamstache", "qty": 11}]
        },
        "icon": "goldybank.png"
    },
    "Welcome Mat": {
        "name": "Welcome Mat",
        "type": "Floor Covering",
        "rarity": "Normal",
        "description": "Let your neighbors know theyre welcome to take your mat with this mat that tells your neighbors theyre welcome to take it!",
        "recipe": {
            "name": "Jackweaver",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Myelar", "qty": 1}, {"name": "Bleghpod", "qty": 1}, {
                "name": "Jolly Fulmar",
                "qty": 1
            }]
        },
        "icon": "welcome_mat.png"
    },
    "Pipette Floor Covering": {
        "name": "Pipette Floor Covering",
        "type": "Floor Covering",
        "rarity": "Normal",
        "description": "Definitely one of the worst surfaces youve walked on, but what the HECK?",
        "recipe": {
            "name": "Refinery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Pipedirt Pipe", "qty": 1}]
        },
        "icon": "pipette_floor_covering.png"
    },
    "Unwelcome Mat": {
        "name": "Unwelcome Mat",
        "type": "Floor Covering",
        "rarity": "Normal",
        "description": "Nothing says STAY OUT OF MY HOUSE better than this mat! Disclaimer: This mat does not speak.",
        "recipe": {
            "name": "Centrifuge",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Vampry", "qty": 1}, {"name": "Blood Louse", "qty": 1}, {
                "name": "Satgat Silk",
                "qty": 1
            }]
        },
        "icon": "unwelcome_mat.png"
    },
    "Thermometer": {
        "name": "Thermometer",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "When you need to know how hot it is, the only way to tell is with a person-sized thermometer.",
        "recipe": {
            "name": "Gastropestle",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Sodium Chunk", "qty": 1}, {"name": "Diamond", "qty": 2}, {
                "name": "Hard Core",
                "qty": 8
            }]
        },
        "icon": "thermometer.png"
    },
    "Cute Totem": {
        "name": "Cute Totem",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "AWWWW WOOK AT ITS WIDDLE FACES! WWWOOOOOWOOWOOO!",
        "recipe": {
            "name": "Shredbasket",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Smashblossom Trunk", "qty": 15}, {
                "name": "Shirk Beakfragment",
                "qty": 7
            }, {"name": "Emerald Smashborer", "qty": 2}]
        },
        "icon": "cute_totem.png"
    },
    "Party Animal": {
        "name": "Party Animal",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Its not a party until you ride in on one of these.",
        "recipe": {
            "name": "Burnchurn",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Flungus Airoot", "qty": 14}, {
                "name": "Flungus Pod",
                "qty": 14
            }, {"name": "Bluffluff", "qty": 9}, {"name": "Lyfftongue", "qty": 3}]
        },
        "icon": "party_animal.png"
    },
    "Power Crystal": {
        "name": "Power Crystal",
        "type": "Resource",
        "rarity": "Superior",
        "description": "Legends say this power crystal was once wielded by a powerful elderly Indian man.",
        "icon": "power_crystal.png"
    },
    "Battery": {
        "name": "Battery",
        "type": "Component",
        "rarity": "Good",
        "description": "This amazing device can power another amazing device for a short while!",
        "icon": "battery.png"
    },
    "Dish": {
        "name": "Dish",
        "type": "Component",
        "rarity": "Good",
        "description": "Waves of stuff bounce off the bowl shaped part and shoot out in directions toward things!",
        "icon": "dish.png"
    },
    "Comm Relay": {
        "name": "Comm Relay",
        "type": "Furniture",
        "rarity": "Epic",
        "description": "Great for communicating with the Bureau of Shipping! And probably other Bureaus also?",
        "recipe": {
            "name": "Crystal Kiln",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Power Crystal", "qty": 1}, {"name": "Dish", "qty": 1}, {
                "name": "Battery",
                "qty": 1
            }]
        },
        "icon": "comm_relay.png"
    },
    "Entanglement Ring": {
        "name": "Entanglement Ring",
        "type": "Trinket",
        "rarity": "Normal",
        "description": "The Tendraam use these circular roots as a symbol of eternal bonding. Also can be used as garnish.",
        "icon": "entanglement_ring.png"
    },
    "Hewgodooko Security Door": {
        "name": "Hewgodooko Security Door",
        "type": "Structure",
        "rarity": "Normal",
        "description": "This high-tech door requires a high-tech key!",
        "icon": "hewgodooko_security_door.png"
    },
    "Hewgodooko Security Key": {
        "name": "Hewgodooko Security Key",
        "type": "Device",
        "rarity": "Superior",
        "description": "This high-tech key probably goes into a high-tech door!",
        "icon": "hewgodooko_security_key.png"
    },
    "Golden Key": {
        "name": "Golden Key",
        "type": "Device",
        "rarity": "Superior",
        "description": "This key probably opens up a chest or something... something like that. WHO KNOWS?",
        "icon": "golden_key.png"
    },
    "Supply Crate": {
        "name": "Supply Crate",
        "type": "Component",
        "rarity": "Good",
        "description": "Its jam-packed with supplies!",
        "icon": "supply_crate.png"
    },
    "Tendraam Legacy Root": {
        "name": "Tendraam Legacy Root",
        "type": "Component",
        "rarity": "Good",
        "description": "Tendraam carry roots of Maarla as their most sentimental personal possession. It seems PRETTY USELESS!",
        "icon": "tendraam_legacy_root.png"
    },
    "Stickybomb": {
        "name": "Stickybomb",
        "type": "Bomb",
        "rarity": "Normal",
        "description": "It sticks everything... TO DEATH! Deals 75% of your DPS as physical damage.",
        "recipe": {
            "name": "Skinnery",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Wompit Leather", "qty": 3}, {"name": "Stick", "qty": 3}]
        },
        "icon": "stickybomb.png"
    },
    "Elixir of Slashing": {
        "name": "Elixir of Slashing",
        "type": "Consumable",
        "rarity": "Good",
        "description": "Pour this tasty concoction onto your weapon to give it a chance to cause bleeding! 3% chance to cause enemies to bleed upon striking. Elixir lasts 20 minutes.",
        "recipe": {
            "name": "Hearth",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Dusk Shard", "qty": 2}, {
                "name": "Straddlebark",
                "qty": 1
            }, {"name": "GrandWat Essence", "qty": 1}]
        },
        "icon": "elixir_of_slashing.png"
    },
    "Elixir of Precision": {
        "name": "Elixir of Precision",
        "type": "Consumable",
        "rarity": "Good",
        "description": "Drinking this pungent mixture innervates you with WILD ENERGY! Improves critical strike chance by 3%. Elixir lasts 20 minutes.",
        "recipe": {
            "name": "Hearth",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Dusk Shard", "qty": 2}, {"name": "Bulbi", "qty": 1}, {
                "name": "Zug Lug Essence",
                "qty": 1
            }]
        },
        "icon": "elixir_of_precision.png"
    },
    "Elixir of Longevity": {
        "name": "Elixir of Longevity",
        "type": "Consumable",
        "rarity": "Good",
        "description": "Wompits are known to live up to 700 years. And now, SO CAN YOU! Regenerate 0.50% of max HP every 2 seconds. Elixir lasts 20 minutes.",
        "recipe": {
            "name": "Hearth",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Log", "qty": 8}, {
                "name": "Baconweed",
                "qty": 2
            }, {"name": "Sterling Wompit Essence", "qty": 1}]
        },
        "icon": "elixir_of_longevity.png"
    },
    "Elixir of Venom": {
        "name": "Elixir of Venom",
        "type": "Consumable",
        "rarity": "Good",
        "description": "Pouring this steamy blend onto your weapon will cripple your enemies! 3% chance to poison enemies upon striking. Elixir lasts 20 minutes.",
        "recipe": {
            "name": "Hearth",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Bumpberry", "qty": 1}, {
                "name": "Flatstone",
                "qty": 7
            }, {"name": "Ancient Glutterfly Essence", "qty": 1}]
        },
        "icon": "elixir_of_venom.png"
    },
    "Elixir of Antivenom": {
        "name": "Elixir of Antivenom",
        "type": "Consumable",
        "rarity": "Good",
        "description": "By repeatedly dosing yourself with sunshroom chunks, you become more resistant to LITERALLY EVERY POISON EVER. Reduces poison damage taken by 15%. Elixir lasts 20 minutes.",
        "recipe": {
            "name": "Hearth",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Log", "qty": 8}, {
                "name": "Sunshroom",
                "qty": 2
            }, {"name": "Verdant Glidopus Essence", "qty": 1}]
        },
        "icon": "elixir_of_antivenom.png"
    },
    "Elixir of Sprints": {
        "name": "Elixir of Sprints",
        "type": "Consumable",
        "rarity": "Good",
        "description": "When the bottle touches your lips, you feel all tingly in your jibblies. 3% chance to gain turbo speed upon striking. Elixir lasts 20 minutes.",
        "recipe": {
            "name": "Cauldron",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Bleghpod", "qty": 1}, {
                "name": "Tusker",
                "qty": 3
            }, {"name": "Tempered Vomma Essence", "qty": 1}]
        },
        "icon": "elixir_of_sprints.png"
    },
    "Elixir of the Spood Beast": {
        "name": "Elixir of the Spood Beast",
        "type": "Consumable",
        "rarity": "Good",
        "description": "Spood Beasts have never been more tasty! Improves run speed by 5%. Elixir lasts 20 minutes.",
        "recipe": {
            "name": "Hearth",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Dusk Shard", "qty": 2}, {
                "name": "Spood Beast",
                "qty": 1
            }, {"name": "Filthy Tartil Essence", "qty": 1}]
        },
        "icon": "elixir_of_the_spood_beast.png"
    },
    "Elixir of Insulation": {
        "name": "Elixir of Insulation",
        "type": "Consumable",
        "rarity": "Good",
        "description": "Drinking this makes your skin feel rubbery and wubbery! Reduces electric damage taken by 15%. Elixir lasts 20 minutes.",
        "recipe": {
            "name": "Cauldron",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Grenamel", "qty": 2}, {"name": "Myelar", "qty": 6}, {
                "name": "Thrombyte Fibrin",
                "qty": 2
            }, {"name": "Wily Bamli Essence", "qty": 1}]
        },
        "icon": "elixir_of_insulation.png"
    },
    "Acidic Fish Food": {
        "name": "Acidic Fish Food",
        "type": "Seed",
        "rarity": "Good",
        "description": "Tossing this sweet little thing into the acid of the Bawg will attract a new school of fish!",
        "recipe": {
            "name": "Centrifuge",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Ayeayes", "qty": 10}, {"name": "Luminalgae", "qty": 1}, {
                "name": "Snorble Uvula",
                "qty": 4
            }]
        },
        "icon": "acidic_fish_food.png"
    },
    "Frozen Fish Food": {
        "name": "Frozen Fish Food",
        "type": "Seed",
        "rarity": "Good",
        "description": "It can withstand extreme pressures AND extreme cold! This will attract new schools of fish in the Tundra!",
        "recipe": {
            "name": "Tumbler",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Ventsleeper", "qty": 2}, {
                "name": "Boreole",
                "qty": 2
            }, {"name": "Glaser Chargenub", "qty": 2}]
        },
        "icon": "frozen_fish_food.png"
    },
    "Minitoomah": {
        "name": "Minitoomah",
        "type": "Component",
        "rarity": "Good",
        "description": "It wriggles and tries to grab onto stuff with tiny tendrils.",
        "icon": "minitoomah.png"
    },
    "Dead Minitoomah": {
        "name": "Dead Minitoomah",
        "type": "Component",
        "rarity": "Good",
        "description": "It doesnt have even a glimmer of life left in its bones.",
        "icon": "dead_minitoomah.png"
    },
    "Ynnix Artifact Top Fragment": {
        "name": "Ynnix Artifact Top Fragment",
        "type": "Component",
        "rarity": "Good",
        "description": "It shimmers and glursts with GLORIOUS YNNIX ENERGY!",
        "icon": "ynnix_artifact_top_fragment.png"
    },
    "Ynnix Artifact Bottom Fragment": {
        "name": "Ynnix Artifact Bottom Fragment",
        "type": "Component",
        "rarity": "Good",
        "description": "Is it REALLY the bottom if you flip it around? Yes, it is.",
        "icon": "ynnix_artifact_bottom_fragment.png"
    },
    "Baary Trophy": {
        "name": "Baary Trophy",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "This would definitely impres your house guests, if anyone would ever come to visit...",
        "icon": "baary_trophy.png"
    },
    "Baconweed Fairy Trophy": {
        "name": "Baconweed Fairy Trophy",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Because the Baconweed Fairy was too beautiful to be forgotten.",
        "icon": "baconweed_fairy_trophy.png"
    },
    "Blockstock Trophy": {
        "name": "Blockstock Trophy",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Much like the original, it is hard as a rock and ruthless.",
        "icon": "blockstock_trophy.png"
    },
    "Elixir of Warmth": {
        "name": "Elixir of Warmth",
        "type": "Consumable",
        "rarity": "Good",
        "description": "This delicious brew warms the very cockles of your soul. Reduces ice damage taken by 15%. Elixir lasts 20 minutes.",
        "recipe": {
            "name": "Pressure Cooker",
            "output_qty": 1,
            "type": "Workstation",
            "ingredients": [{"name": "Pipedirt Pipe", "qty": 6}, {
                "name": "Blastcrab Ignition Gland",
                "qty": 1
            }, {"name": "Icequill", "qty": 2}, {"name": "Pressurized Blastcrab Essence", "qty": 1}]
        },
        "icon": "elixir_of_warmth.png"
    },
    "Krakalaka": {
        "name": "Krakalaka",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "It uses pure KRAKENERGY to pry open even the toughest of packages.",
        "icon": "krakalaka.png"
    },
    "Goldbait Snare": {
        "name": "Goldbait Snare",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "The ideal way to catch something that loves... GOOOOLD!",
        "icon": "goldbait_snare.png"
    },
    "EMG Trophy": {
        "name": "EMG Trophy",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "In honor of you whooping some serious rockbutt.",
        "icon": "emg_trophy.png"
    },
    "IHO Trophy": {
        "name": "IHO Trophy",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "This hovering object was identified, and now... IT IS NO MORE!",
        "icon": "iho_trophy.png"
    },
    "Jessica Trophy": {
        "name": "Jessica Trophy",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Her horribleness will no longer strike fear into the hearts of... well, pretty much anyone!",
        "icon": "jessica_trophy.png"
    },
    "Poteti Trophy": {
        "name": "Poteti Trophy",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "When it comes to poteting, this poteti just couldnt potet.",
        "icon": "poteti_trophy.png"
    },
    "Toomah Trophy": {
        "name": "Toomah Trophy",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "If it comes back, youll just have to STAB IT AGAIN! AND AGAIN! AND AGAIN AND AGAIN. AND AGAIN. AND... AGAIN.",
        "icon": "toomah_trophy.png"
    },
    "Ynnix Trophy": {
        "name": "Ynnix Trophy",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "It was a tricky opponent, but not as tricky as you! OR WAS IT? Is this a trick? No, of course not. OR IS IT?",
        "icon": "ynnix_trophy.png"
    },
    "The Lens Left Fragment": {
        "name": "The Lens Left Fragment",
        "type": "Furniture",
        "rarity": "Legendary",
        "description": "It crackles with energy, though it seems somehow subdued.",
        "icon": "the_lens_left_fragment.png"
    },
    "The Lens Right Fragment": {
        "name": "The Lens Right Fragment",
        "type": "Furniture",
        "rarity": "Legendary",
        "description": "A chunk of the legendary Lens. You wonder what would happen if all the pieces came together...",
        "icon": "the_lens_right_fragment.png"
    },
    "The Lens Top Fragment": {
        "name": "The Lens Top Fragment",
        "type": "Furniture",
        "rarity": "Legendary",
        "description": "The top portion of the legendary Lens. Just being near it fills you with a sense of heroism and wonder.",
        "icon": "the_lens_top_fragment.png"
    },
    "Whirlstone": {
        "name": "Whirlstone",
        "type": "Resource",
        "rarity": "Normal",
        "description": "It makes you very sleepy.",
        "icon": "whirlstone.png"
    },
    "Juicejockey VacuHelm": {
        "name": "Juicejockey VacuHelm",
        "type": "Helm",
        "level": "Level 37",
        "rarity": "Legendary",
        "description": "Level 37 Helm. Made from the finest space materials, this helm can protect your head parts from just about anything!",
        "icon": "juicejockey_vacuhelm.png"
    },
    "Smash Racket": {
        "name": "Smash Racket",
        "type": "Gadget",
        "rarity": "Legendary",
        "description": "Holding this racket infuses your body with the power of a thousand quadropi. Use it to smash your enemies into wet, fishy dust!",
        "icon": "smash_racket.png"
    },
    "The Orb of Forn": {
        "name": "The Orb of Forn",
        "type": "Gadget",
        "rarity": "Legendary",
        "description": "This orb has seen a lot of use. Veeru technology lasts forever, though. So... NO PROBLEM!",
        "icon": "the_orb_of_forn.png"
    },
    "The Bubbler": {
        "name": "The Bubbler",
        "type": "Trinket",
        "rarity": "Epic",
        "description": "These little guys seem to endlessly reproduce through mitosis. Every 20 seconds, a new Bubbly appears and follows you. If it gets close to an enemy, it will explode for 200% of your dps!",
        "icon": "the_bubbler.png"
    },
    "Bingo Ball": {
        "name": "Bingo Ball",
        "type": "Component",
        "rarity": "Good",
        "description": "Although it looks like a regular tennis ball, it is extremely dense.",
        "icon": "bingo_ball.png"
    },
    "Quantum Electrodongle": {
        "name": "Quantum Electrodongle",
        "type": "Component",
        "rarity": "Good",
        "description": "Its the part of a ship that makes the ship not explode.",
        "icon": "quantum_electrodongle.png"
    },
    "Goldinox Wreckage": {
        "name": "Goldinox Wreckage",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Dependable. Rugged. Golden. Destroyed.",
        "icon": "goldinox_wreckage.png"
    },
    "Landed Flop Rocket": {
        "name": "Landed Flop Rocket",
        "type": "Structure",
        "rarity": "Normal",
        "description": "Its unclear why the Bureau would send this unreliable prototype as a Package Rescue vehicle, but... there it is.",
        "icon": "landed_flop_rocket.png"
    },
    "Space Debris": {
        "name": "Space Debris",
        "type": "Component",
        "rarity": "Good",
        "description": "Its space debris from a space explosion!",
        "icon": "space_debris.png"
    },
    "Seerfish": {
        "name": "Seerfish",
        "type": "Component",
        "rarity": "Good",
        "description": "Look into its eyes. You will see... What you mean to this fish.",
        "icon": "seerfish.png"
    },
    "Hewgodooko Trophy": {
        "name": "Hewgodooko Trophy",
        "type": "Furniture",
        "rarity": "Normal",
        "description": "Its kind of a big deal.",
        "icon": "hewgodooko_trophy.png"
    }
};

$master.api.creature = {
    "Glutterfly": {
        "name": ["Glutterfly Worker", "Glutterfly Drone", "Glutterfly Queen", "Ancient Glutterfly Drone", "Ancient Glutterfly Queen", "Bloated Glutterfly"],
        "type": "Glutterfly",
        "stone0": "Glutternet",
        "stone1": "Hivelighter",
        "description": "These glowing, gigantic insects seem to only come out at night. Their carapace is extremely tough, and they seem generally angry about most things.",
        "produce": "Glutterfly Wingdust",
        "symbiosis": "Poison Master",
        "toughness": 0,
        "poison_r": 90,
        "electric_r": 0,
        "fire_r": -20,
        "ice_r": 0,
        "drop":["Glow Juice","Glutterfly Chitin"],
        "icon": ["glutterfly_worker.png", "glutterfly_drone.png", "glutterfly_queen.png", "ancient_glutterfly_drone.png", "ancient_glutterfly_queen.png", "bloated_glutterfly.png"]
    },
    "Glidopus": {
        "name": ["Glidopus Hatchling", "Glidopus", "Glidopus Matriarch", "Verdant Glidopus", "Verdant Glidopus Matriarch", "Elder Glidopus"],
        "type": "Glidopus",
        "stone0": "Glidopus Love Balloon",
        "stone1": "Kaglidoscope",
        "description": "Hovering, three-tentacled cephalopods that make their homes in mud. The Glidopi seem to have an internal beak deep inside their bodies, used to grind food.",
        "produce": "Glidopus Larva",
        "symbiosis": "Aquatic Adrenaline",
        "toughness": 0,
        "poison_r": 20,
        "electric_r": -30,
        "fire_r": 80,
        "ice_r": 0,
        "drop":["Glidopus Siphon","Glidopus Ink","Glidopus Beak"],
        "icon": ["glidopus_hatchling.png", "glidopus.png", "glidopus_matriarch.png", "verdant_glidopus.png", "verdant_glidopus_matriarch.png", "elder_glidopus.png"]
    },
    "Wompit": {
        "name": ["Wompit", "Wompit Heifer", "Wompit Bull", "Sterling Wompit Heifer", "Sterling Wompit Bull", "Womplord"],
        "type": "Wompit",
        "stone0": "Wompit Garter",
        "stone1": "Wompogo Stick",
        "description": "These bouncy critters can be found all over the Savanna. They can usually be found munching on Sawgrass with their tough, flat teeth.",
        "produce": "Wompit Milk",
        "symbiosis": "Brawling",
        "toughness": 0,
        "poison_r": 50,
        "electric_r": 10,
        "fire_r": 50,
        "ice_r": 0,
        "drop":["Wompit Leather","Wompit Bone","Wompit Sinew","Wompit Toenail","Intact Wompit Heart"],
        "icon": ["wompit.png", "wompit_heifer.png", "wompit_bull.png", "sterling_wompit_heifer.png", "sterling_wompit_bull.png", "womplord.png"]
    },
    "Tartil": {
        "name": ["Tartil Larvy", "Tartil", "Tartil Pappy", "Filthy Tartil", "Filthy Tartil Pappy", "Blood Tartil"],
        "type": "Tartil",
        "stone0": "Tartil Barrel",
        "stone1": "Ten Tonne Bomb",
        "description": "Its not clear whether these creatures are made of tar or simply covered in tar. Whatever it is, theyre extremely sticky, and they dont seem too happy about it.",
        "produce": "Tartil Firedamp",
        "symbiosis": "Hot Belly",
        "toughness": 25,
        "poison_r": 0,
        "electric_r": 50,
        "fire_r": -25,
        "ice_r": 0,
        "drop":["Tartil Pitch","Petrified Amber","Tartil Tongue"],
        "icon": ["tartil_larvy.png", "tartil.png", "tartil_pappy.png", "filthy_tartil.png", "filthy_tartil_pappy.png", "blood_tartil.png"]
    },
    "Wat": {
        "name": ["Wat", "Pap Wat", "Mam Wat", "Pap GrandWat", "Mam GrandWat", "Ancient Shadowy Wat"],
        "type": "Wat",
        "stone0": "Wat Bat",
        "stone1": "Sleeping Bag",
        "description": "These little bat-like creatures group together into packs and then viciously swarm anything that comes near. But theyre super nice once you get to know them.",
        "produce": "Wuano",
        "symbiosis": "Venomous Speed",
        "toughness": 0,
        "poison_r": 0,
        "electric_r": 35,
        "fire_r": -20,
        "ice_r": 0,
        "drop":["Wat Wing","Wat Fur Tuft","Watfinger"],
        "icon": ["wat.png", "pap_wat.png", "mam_wat.png", "pap_grandwat.png", "mam_grandwat.png", "ancient_shadowy_wat.png"]
    },
    "Zug": {
        "name": ["Zug", "Zug Dug", "Zug Mug", "Zug Dug Lug", "Zug Mug Lug", "Zuguardian"],
        "type": "Zug",
        "stone0": "ZuglaBall",
        "stone1": "Perpetual Motion Machine",
        "description": "Zugs are so lazy that they try to avoid moving as much as possible. Because of this, their bodies are packed with a neverending supply of electricity, leftover from their normal metabolic processes.",
        "produce": "Charged Zug Molt",
        "symbiosis": "Static Charge",
        "toughness": 10,
        "poison_r": -30,
        "electric_r": 35,
        "fire_r": -30,
        "ice_r": 0,
        "drop":["Zug Shell","Zug Kneecap","Zug Sparkplug"],
        "icon": ["zug.png", "zug_dug.png", "zug_mug.png", "zug_dug_lug.png", "zug_mug_lug.png", "zuguardian.png"]
    },
    "Vomma": {
        "name": ["Vomma", "Vomma Momma", "Vomma Gramp", "Tempered Vomma Momma", "Tempered Vomma Gramp", "Sightless Vomma"],
        "type": "Vomma",
        "stone0": "Fauxsack",
        "stone1": "Vommophone",
        "description": "Vommas have such a powerful self-preservation instinct that they happily sacrifice their tadpole babies to save themselves. Its okay, though... they generate new babies every few seconds.",
        "produce": "Boba",
        "symbiosis": "Vombardier",
        "toughness": 25,
        "poison_r": -20,
        "electric_r": -20,
        "fire_r": 75,
        "ice_r": 0,
        "drop":["Vlap","Vompole","Vomma Babymaker"],
        "icon": ["vomma.png", "vomma_momma.png", "vomma_gramp.png", "tempered_vomma_momma.png", "tempered_vomma_gramp.png", "sightless_vomma.png"]
    },
    "Throak": {
        "name": ["Throak", "Elder Throak", "Giant Throak", "Elder Malicious Throak", "Giant Malicious Throak", "Bawgblood Throak"],
        "type": "Throak",
        "stone0": "Thrackle",
        "stone1": "Tripoon",
        "description": "The long, slender tendrils of the Throak can maneuver expertly through the Bawgs system of pores, cleaning them of debris and parasites.",
        "produce": "Throak Jelly",
        "symbiosis": "Staying Frosty",
        "toughness": 0,
        "poison_r": 20,
        "electric_r": -20,
        "fire_r": 0,
        "ice_r": 100,
        "drop":["Throak Polyp","Throak Fluoros","Throak Tentacle","Throak Nematocyte"],
        "icon": ["throak.png", "elder_throak.png", "giant_throak.png", "elder_malicious_throak.png", "giant_malicious_throak.png", "bawgblood_throak.png"]
    },
    "Snorble": {
        "name": ["Snorble", "Bloated Snorble", "Engorged Snorble", "Bloated Burnt Snorble", "Engorged Burnt Snorble", "Depressurized Snorble"],
        "type": "Snorble",
        "stone0": "Snorbelt",
        "stone1": "RC Car",
        "description": "Snorbles are incredibly loud creatures when provoked, but really they just like settling down and reading a good book.",
        "produce": "Snorble Mucusak",
        "symbiosis": "Inflated Insanity",
        "toughness": 0,
        "poison_r": 0,
        "electric_r": 0,
        "fire_r": 0,
        "ice_r": 0,
        "drop":["Snorble Skin","Snorble Airsak","Snorble Uvula"],
        "icon": ["snorble.png", "bloated_snorble.png", "engorged_snorble.png", "bloated_burnt_snorble.png", "engorged_burnt_snorble.png", "depressurized_snorble.png"]
    },
    "Satgat": {
        "name": ["Widdle Satgat", "Satgat", "Awkward Satgat", "Sensitive Satgat", "Awkward Sensitive Satgat", "Desaturated Satgat"],
        "type": "Satgat",
        "stone0": "Attractive Mask",
        "stone1": "Binoculars",
        "description": "Known as the most awkward of creatures, the Satgat hides behind its pointy hat to make sure nobody sees its puzzled expression.",
        "produce": "Satgat Silk",
        "symbiosis": "Cute Aggression",
        "toughness": 20,
        "poison_r": 10,
        "electric_r": -25,
        "fire_r": 50,
        "ice_r": 0,
        "drop":["Satgat Exoskeleton","Satgat Flesh","Satgat Chemoreceptors"],
        "icon": ["widdle_satgat.png", "satgat.png", "awkward_satgat.png", "sensitive_satgat.png", "awkward_sensitive_satgat.png", "desaturated_satgat.png"]
    },
    "Wojack": {
        "name": ["Wojack Digling", "Wojack", "Wojack Larvaguard", "Sticky Wojack", "Sticky Wojack Larvaguard", "Bleached Wojack"],
        "type": "Wojack",
        "stone0": "Wojack Soap",
        "stone1": "Mining Helmet",
        "description": "Is it a worm? Is it a squid? Is it a flower? Yes. It likes to spend a lot of time underground, eating hair follicle roots.",
        "produce": "Wojack Spice",
        "symbiosis": "Subterranean Resilience",
        "toughness": 0,
        "poison_r": 25,
        "electric_r": 0,
        "fire_r": 0,
        "ice_r": 0,
        "drop":["Wojack Petal","Wojack Sucker","Wojack Cornea","Wojack Cilia"],
        "icon": ["wojack_digling.png", "wojack.png", "wojack_larvaguard.png", "sticky_wojack.png", "sticky_wojack_larvaguard.png", "bleached_wojack.png"]
    },
    "Bamli": {
        "name": ["Bamli", "Bamli Stashster", "Bamli Charger", "Wily Bamli Stashster", "Wily Bamli Charger", "Raving Bamli"],
        "type": "Bamli",
        "stone0": "Bambukket",
        "stone1": "Hipster Bamglasses",
        "description": "Although it has a terrible diet, the Bamli seems to be in perfect shape, likely due to its ability to plug into the Bawg and siphon energy into itself. It may also have something to do with its amazing moustache.",
        "produce": "Painsulin",
        "symbiosis": "Moustache Power",
        "toughness": 0,
        "poison_r": 0,
        "electric_r": 40,
        "fire_r": 60,
        "ice_r": 20,
        "drop":["Bamstache","Bamli Horn","Bamli Flightbladder"],
        "icon": ["bamli.png", "bamli_stashster.png", "bamli_charger.png", "wily_bamli_stashster.png", "wily_bamli_charger.png", "raving_bamli.png"]
    },
    "Shirk": {
        "name": ["Shirk", "Gert Shirk", "Mersive Shirk", "Gert Berg Shirk", "Mersive Berg Shirk", "Redwing Shirk"],
        "type": "Shirk",
        "stone0": "Poorly Repaired Shirk Egg",
        "stone1": "Sharp Whistle",
        "description": "These amphibious birdfish are able to fly and swim at amazing speeds! They can chomp their beaks so hard it creates a sonic shockwave. Despite this, they make terrible dinner guests.",
        "produce": "Sodium Chunk",
        "symbiosis": "Sherp Berk Ermergerd",
        "toughness": 0,
        "poison_r": 60,
        "electric_r": 0,
        "fire_r": -30,
        "ice_r": 0,
        "drop":["Shirk Blubber","Shirk Beakfragment","Shirk Plumage","Shirk Saltgland"],
        "icon": ["shirk.png", "gert_shirk.png", "mersive_shirk.png", "gert_berg_shirk.png", "mersive_berg_shirk.png", "redwing_shirk.png"]
    },
    "Glaser": {
        "name": ["Glaser Fawn", "Glaser Doe", "Glaser Buck", "Royal Glaser Doe", "Royal Glaser Buck", "Greybearded Glaser"],
        "type": "Glaser",
        "stone0": "Gaze Catcher",
        "stone1": "Glazoo",
        "description": "By harnessing the electromagnetic field of the planet, Glasers can rub atoms together with their antlers to produce a powerful laser. They can also rub sticks together to make fire, but its way less impressive.",
        "produce": "Glaser Silk",
        "symbiosis": "Cold-Weather Grazing",
        "toughness": 0,
        "poison_r": -20,
        "electric_r": 50,
        "fire_r": -25,
        "ice_r": 80,
        "drop":["Glaser Antler Fragment","Glaser Hoof","Glaser Stomachball","Glaser Chargenub"],
        "icon": ["glaser_fawn.png", "glaser_doe.png", "glaser_buck.png", "royal_glaser_doe.png", "royal_glaser_buck.png", "greybearded_glaser.png"]
    },
    "Slurb": {
        "name": ["Slurb", "Horrible Slurb", "Monstrous Slurb", "Horrible Raging Slurb", "Monstrous Raging Slurb", "Sleepless Slurb"],
        "type": "Slurb",
        "stone0": "Magnetic Bracelet",
        "stone1": "Trampoline",
        "description": "This narcissistic snail-like creature can move so fast it becomes a blur. Though it doesnt really like to, since blurriness isnt the most attractive of features.",
        "produce": "Slurb Electrucus",
        "symbiosis": "Slurb Brain",
        "toughness": 20,
        "poison_r": 70,
        "electric_r": -10,
        "fire_r": 0,
        "ice_r": 0,
        "drop":["Slurbshell","Slurb Spine","Slurb Magnet"],
        "icon": ["slurb.png", "horrible_slurb.png", "monstrous_slurb.png", "horrible_raging_slurb.png", "monstrous_raging_slurb.png", "sleepless_slurb.png"]
    },
    "Lyff": {
        "name": ["Lyff", "Dueven Lyff", "Skwot Lyff", "Dueven Lyff Broh", "Skwot Lyff Broh", "Max Lyff"],
        "type": "Lyff",
        "stone0": "Lyff Toy Bauble",
        "stone1": "Barbell",
        "description": "Lyffs never evolved to have skulls, so they instead evolved the ability to instantly grow exploding ice shards around their brains instead. This was a much more complicated solution, but nature isnt perfect.",
        "produce": "Lyff Crystalshard",
        "symbiosis": "Healing Crystals",
        "toughness": 0,
        "poison_r": 0,
        "electric_r": 0,
        "fire_r": 60,
        "ice_r": 50,
        "drop":["Lyff Leather","Lyfftongue","Lyff Swimbladder","Lyff Donglespring"],
        "icon": ["lyff.png", "dueven_lyff.png", "skwot_lyff.png", "dueven_lyff_broh.png", "skwot_lyff_broh.png", "max_lyff.png"]
    },
    "Blastcrab": {
        "name": ["Blastcrabling", "Blastcrab", "Blastcrab Lord", "Pressurized Blastcrab", "Pressurized Blastcrab Lord", "Liquid-Cooled Blastcrab"],
        "type": "Blastcrab",
        "stone0": "Blastcrab Firebarrel",
        "stone1": "Cooler",
        "description": "It has a resilient shell that can withstand the intense heat and pressure that is constantly building up inside its body. It also enjoys tennis.",
        "produce": "Blastcrab Hydrocarbon",
        "symbiosis": "Heated Armor",
        "toughness": 0,
        "poison_r": 0,
        "electric_r": 0,
        "fire_r": 100,
        "ice_r": 0,
        "drop":["Blastcrab Shell","Blastcrab Hide","Blastcrab Ignition Gland"],
        "icon": ["blastcrabling.png", "blastcrab.png", "blastcrab_lord.png", "pressurized_blastcrab.png", "pressurized_blastcrab_lord.png", "liquid-cooled_blastcrab.png"]
    },
    "Gallum": {
        "name": ["Gallum", "Lumbering Gallum", "Gargantuan Gallum", "Lumbering Calcified Gallum", "Gargantuan Calcified Gallum", "Monochromatic Gallum"],
        "type": "Gallum",
        "stone0": "Puzzlecube",
        "stone1": "Galvanized Ribcage",
        "description": "A fusion of Tundra crystals and dead creature parts, this monster has a mystical aura around it. It seems self-conscious about its ribs.",
        "produce": "Gallium",
        "symbiosis": "Electric Perception",
        "toughness": 25,
        "poison_r": 100,
        "electric_r": -50,
        "fire_r": 0,
        "ice_r": 50,
        "drop":["Gallum Armor","Gallum Meat","Gallum Rib","Gallum Warpcore"],
        "icon": ["gallum.png", "lumbering_gallum.png", "gargantuan_gallum.png", "lumbering_calcified_gallum.png", "gargantuan_calcified_gallum.png", "monochromatic_gallum.png"]
    },
    "Gulanti": {
        "name": ["Gulanti", "Engorged Gulanti", "Swollen Gulanti", "Engorged Jumpy Gulanti", "Swollen Jumpy Gulanti", "Hotblooded Gulanti"],
        "type": "Gulanti",
        "stone0": "Surprise Grub",
        "stone1": "Insulated Sweater",
        "description": "This friendly little guy becomes horribly enraged when confronted by anything at all. Very hard to housebreak.",
        "produce": "Gulanti Zeolite",
        "symbiosis": "Shocking Greed",
        "toughness": 0,
        "poison_r": -50,
        "electric_r": 80,
        "fire_r": -70,
        "ice_r": 80,
        "drop":["Gulanti Calcite","Gulanti Chomper","Gulanti Blowhole","Gulanti Elecore"],
        "icon": ["gulanti.png", "engorged_gulanti.png", "swollen_gulanti.png", "engorged_jumpy_gulanti.png", "swollen_jumpy_gulanti.png", "hotblooded_gulanti.png"]
    }
};