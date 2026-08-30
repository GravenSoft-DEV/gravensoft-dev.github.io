import { announcementPosts } from "./blogs/announcements";

export interface BlogMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  file: string;
  tags: string[];
}

export const BLOG_POSTS: BlogMeta[] = [
  ...announcementPosts
];