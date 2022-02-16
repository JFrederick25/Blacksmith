export class PlayerMaterial {
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

export class Material {
  name: string;
  baseType: string;
  craftingRank: number;
  price: number;
  description: string;
  }
}

export class WeaponType {
  name: string;
  value: number;
}

export class Magic {
  name: string;
  rank: number;
  value: number;
}

export class BuildWeapon {
  material: Material;
  weaponType: WeaponType;
  magic: Magic;

  constructor() {
    this.material = new Material();
    this.weaponType = new WeaponType();
    this.magic = new Magic();
  }
}
