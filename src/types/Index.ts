export interface Dimensional {
    material: string;
    dimension1: string;
    dimension2: string;
    sqft: string;
    pricePerSqft: string;
}

export interface Nondimensional {
    material: string;
    size: string;
    quantity: string;
    pricePerUnit: string;
}

export interface Project {
    mesage: string;
    project: {
        dimensionalMaterial: Dimensional[];
        nondimensionalMaterial: Nondimensional[];
        projectName: string;
        totalPrice: number;
        _id: string;
    };
}
