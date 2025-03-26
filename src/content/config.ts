// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const testimonials = defineCollection({
    schema: z.object({
        author: z.string(),
        date: z.date().optional(),
        title: z.string().optional(),
        imagePath: z.string(),
        alt: z.string().optional(),
        is_featured: z.boolean(),
    }),
});

const qrcPhotos = defineCollection({
    schema: z.object({
        name: z.string(),
        width: z.number(),
        height: z.number(),
        alt: z.string().optional(),
        imagePath: z.string(),
    }),
});

export const collections = {
    'testimonials': testimonials,
    'qrc_photos': qrcPhotos,
};