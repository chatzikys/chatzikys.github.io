import matter from 'gray-matter';

export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  status: string;
  content: string;
}

const projectFiles = import.meta.glob('../content/projects/*.md', { as: 'raw', eager: true });

export function getProjects(): Project[] {
  const projects = Object.entries(projectFiles).map(([path, rawContent]) => {
    // Extract slug from path
    const slug = path.split('/').pop()?.replace('.md', '') || '';
    
    // Parse frontmatter
    const { data, content } = matter(rawContent as string);
    
    return {
      slug,
      title: data.title || 'Untitled',
      description: data.description || '',
      tags: data.tags || [],
      date: data.date || '',
      status: data.status || 'Unknown',
      content,
    };
  });

  return projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getProjects().find((p) => p.slug === slug);
}
