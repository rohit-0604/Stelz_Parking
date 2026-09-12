import ABOUT_CONTENT from "@/data/AboutContent";
import { blog } from "@/data/BlogContent";
import { content as gallery } from "@/data/GalleryContent";
import { content as home } from "@/data/HomeFooterContent";
import { content as productsPage } from "@/data/ProductsContent";
import { PRODUCTS as products } from "@/data/Products";
import { services } from "@/data/ServicesContent";
import { rANDd as research } from "@/data/R&DContent";
import type { ContentBundle } from "./types";

export const BASE_CONTENT: ContentBundle = { home, about: ABOUT_CONTENT, blog, gallery, productsPage, products, services, research };
