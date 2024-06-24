export interface LGBTQTerm {
  name: string;
  imageSrc?: string;
  types: Type[];
}

export interface Type {
  name: string;
  definition: string;
}
