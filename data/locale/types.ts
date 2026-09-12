export interface ContentBundle {
  home: typeof import("@/data/HomeFooterContent").content;
  about: typeof import("@/data/AboutContent").default;
  blog: typeof import("@/data/BlogContent").blog;
  gallery: typeof import("@/data/GalleryContent").content;
  productsPage: typeof import("@/data/ProductsContent").content;
  products: typeof import("@/data/Products").PRODUCTS;
  services: typeof import("@/data/ServicesContent").services;
  research: typeof import("@/data/R&DContent").rANDd;
}

export type DeepPartial<T> = T extends readonly unknown[]
  ? T
  : T extends object
    ? { [Key in keyof T]?: DeepPartial<T[Key]> }
    : T;

export type ContentOverrides = DeepPartial<ContentBundle>;
