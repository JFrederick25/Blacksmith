export class PlayerMaterial {
  name: string;
  material: Material;
  quantity: number;
  cost: number;

  constructor(name: string) {
    this.name = name;
    this.material = new Material();
    this.material.name = name;
    this.material.price = 3;
    this.quantity = 0;
    this.cost = 9;
  }
}

export class Material {
  name: string;
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
