export interface Blog {
  id: string;
  slug: string;
  title: string;
  content: string;
  authorId: string;
  tags: string[];
  publishedDate: string;
}
