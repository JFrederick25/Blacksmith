import { Magic, Material, WeaponType } from "./craftingInterfaces";

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

export class Trader extends Actor {
  materials: TraderMaterial[];
  magicMaterials: string[];
  weaponDesigns: TraderWeaponDesign[];
  magicSpells: Magic[];

  constructor() {
    super();
    this.materials = [];
    this.magicMaterials = [];
    this.weaponDesigns = [];
    this.magicSpells = [];
  }
}

export class Npc extends Actor {}
