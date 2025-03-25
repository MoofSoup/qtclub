// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const featuredTestimonials = defineCollection({
    schema: z.object({
        author: z.string(),
        date: z.date().optional(),
        title: z.string().optional(),
    }),
});

const testimonials = defineCollection({
    schema: z.object({
        author: z.string(),
        date: z.date().optional(),
        title: z.string().optional(),
    }),
});

const qrcPhotos = defineCollection({
    schema: z.object({
        name: z.string(),
        width: z.number(),
        height: z.number(),
    }),
});

export const collections = {
    'featured_testimonials': featuredTestimonials,
    'testimonials': testimonials,
    'qrc_photos': qrcPhotos,
};