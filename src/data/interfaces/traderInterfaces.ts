import { Material } from "./craftingInterfaces";

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

export class Trader extends Actor {
  materials: TraderMaterial[];

  constructor() {
    super();
    this.materials = [];
  }
}

export class Npc extends Actor {}
