import type { z } from 'astro/zod';
import MetaDefaultImage from '@/assets/images/meta-default.jpg';
import avatar from '@/assets/images/avatar.png';
import type { seoSchemaWithoutImage } from '@/content.config';
import astroConfig from 'astro.config.mjs';

export type AuthorInfo = {
  name: string;
  avatar: any;
  headline: string;
  username?: string;
  location?: string;
  pronouns?: string;
}

export type Seo = z.infer<typeof seoSchemaWithoutImage> & {
  image?: any;
}

type DefaultConfigurationType = {
  baseUrl: string,
  author: AuthorInfo;
  seo: Seo;
}

export const DEFAULT_CONFIGURATION: DefaultConfigurationType = {
  baseUrl: astroConfig.site || 'https://psi-mon.com',
  author: {
    avatar,
    name: 'Simon Plutz',
    headline: 'Senior Software Engineer & Game Developer',
    username: 'splutz',
    location: 'Munich, Germany',
    pronouns: 'He/Him',
  },
  seo: {
    title: 'Simon Plutz - Software Engineer Portfolio',
    description: 'Portfolio of Simon Plutz, Senior Software Engineer specializing in game development, web applications, and interactive systems',
    type: 'website',
    image: MetaDefaultImage,
    twitter: {
      creator: '@splutz'
    },
    robots: 'index, follow',
  }
};