export class PlayerMaterial {
  name: string;
  material: Material;
  quantity: number;
  value: number;

  constructor(name: string, q?: number, p?: number) {
    this.name = name;
    this.material = new Material();
    this.material.name = name;
    this.material.price = p || 0;
    this.quantity = q || 0;
    this.value = 0;
  }
}

export class Material {
  name: string;
  baseType: string;
  craftingRank: number;
  price: number;
}

export class WeaponType {
  name: string;
}

export class Magic {
  name: string;
}

export class BuildWeapon {
  material: Material;
  weaponType: WeaponType;
  magic: Magic;
}
