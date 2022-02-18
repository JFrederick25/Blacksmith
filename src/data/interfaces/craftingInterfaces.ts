export class PlayerMaterial {
  name: string;
  material: Material;
  quantity: number;
  value: number;

  constructor(name: string, quantity?: number, price?: number, description?: string) {
    this.name = name;
    this.material = new Material();
    this.material.name = name;
    this.material.price = price || 0;
    this.material.description = description || '';
    this.quantity = quantity || 0;
    this.value = 0;
  }
}

export class PlayerMagicMaterial {
  name: string;
  magicMaterial: MagicMaterial;
  quantity: number;
  value: number;

  constructor(name: string, quantity?: number, price?: number) {
    this.name = name;
    this.magicMaterial = new MagicMaterial();
    this.magicMaterial.name = name;
    this.magicMaterial.value = price || 0;
    //this.magicMaterial.description = d || '';
    this.quantity = quantity || 0;
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

export class FinishingMaterial {
  name: string;
  rank: number;
  value: number;
}

export class WeaponType {
  name: string;
  rank: number;
  value: number;
  requiredMaterial: number;
}

export class Magic {
  name: string;
  rank: number;
  value: number;
  magicMaterial: MagicMaterial;
  magicMaterialRequired: number;
}

export class MagicMaterial {
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
