import { Magic, MagicMaterial, Material, WeaponType } from "./craftingInterfaces";

export class Actor {
  name: string;
  role: string;
  location: string;
}

export class TraderMaterial {
  name: string;
  material: Material;
  quantity: number;
  value: number;

  constructor(name: string, q?: number, p?: number, d?: string) {
    this.name = name;
    this.material = new Material();
    this.material.name = name;
    this.material.price = p || 0;
    this.material.description = d || '';
    this.quantity = q || 0;
    this.value = 0;
  }
}

export class TraderWeaponDesign {
  name: string;
  weapontype: WeaponType;
  price: number;
  quantity: number;

  constructor(name: string, price?: number) {
    this.name = name;
    this.price = price || 0;
    this.quantity = 0;
  }
}

export class TraderMagicMaterial {
  name: string;
  magicMaterial: MagicMaterial;
  price: number;
  quantity: number;

  constructor(name: string, price?: number, quantity?: number) {
    this.name = name;
    this.price = price || 0;
    this.quantity = quantity || 0;
  }
}

export class TraderMagicSpell {
  name: string;
  Magic: Magic;
  price: number;
  quantity: number;
  
  constructor(name: string, price?: number) {
    this.name = name;
    this.price = price || 0;
    this.quantity = 0;
  }
}

export class Quest {
  unlock: any;
  requestDialog: string;
  completion: any;
  completionDialog: string;
  reward: any;
  accepted: boolean = false;

  // the anys can be either:
  // reputation: number, money: number, actor: Actor, weapon: FinishedWeapon, material: PlayerMaterial
  // finished weapon properties: (material, weaponType, quantity, value)
  // player material properties: (material, quantity)
}

export class Trader extends Actor {
  materials: TraderMaterial[];
  magicMaterials: TraderMagicMaterial[];
  weaponDesigns: TraderWeaponDesign[];
  magicSpells: TraderMagicSpell[];
  dialogs: string[];
  quests: Quest[];

  constructor() {
    super();
    this.materials = [];
    this.magicMaterials = [];
    this.weaponDesigns = [];
    this.magicSpells = [];
    this.dialogs = [];
    this.quests = [];
  }
}

export class Npc extends Actor {
  dialogs: string[];
  quests: Quest[];

  constructor() {
    super();
    this.dialogs = [];
    this.quests = [];
  }
}
