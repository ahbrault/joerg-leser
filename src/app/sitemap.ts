import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const routes = [
        '',
    ];

    return routes.map(route => ({
        url: `https://www.joergleser.com${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 1,
    }));
}
