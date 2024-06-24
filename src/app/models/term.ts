export interface LGBTQTerm {
  name: string;
  imageSrc?: string;
  flagSrc?: string;
  celeb?: string;
  types: Type[];
}

export interface Type {
  name: string;
  definition: string;
}
