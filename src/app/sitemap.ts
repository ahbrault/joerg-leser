import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://www.joergleser.com';

    const routes = [
        '/en',
        '/fr'
    ];

    return routes.map(route => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: route === '/en' ? 1 : 0.9, // '/en' est prioritaire comme point d'entrée
    }));
}
