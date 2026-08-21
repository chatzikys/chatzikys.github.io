export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  status: string;
  content: string;
}

/** Browser-safe YAML frontmatter parser (no Buffer dependency). */
function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const DELIMITER = '---';
  const trimmed = raw.trimStart();
  if (!trimmed.startsWith(DELIMITER)) return { data: {}, content: raw };

  const rest = trimmed.slice(3);
  const end = rest.indexOf('\n---');
  if (end === -1) return { data: {}, content: raw };

  const yamlBlock = rest.slice(0, end).trim();
  const content = rest.slice(end + 4).trimStart();

  const data: Record<string, unknown> = {};
  for (const line of yamlBlock.split('\n')) {
    const colon = line.indexOf(':');
    if (colon === -1) continue;
    const key = line.slice(0, colon).trim();
    const val = line.slice(colon + 1).trim();
    // Handle YAML arrays: `tags: [a, b]` or `tags: [a,b]`
    if (val.startsWith('[') && val.endsWith(']')) {
      data[key] = val
        .slice(1, -1)
        .split(',')
        .map((s) => s.trim().replace(/^['"]|['"]$/g, ''))
        .filter(Boolean);
    } else {
      data[key] = val.replace(/^['"]|['"]$/g, '');
    }
  }
  return { data, content };
}

const projectFiles = import.meta.glob('../content/projects/*.md', { query: '?raw', import: 'default', eager: true });

export function getProjects(): Project[] {
  const projects = Object.entries(projectFiles).map(([path, rawContent]) => {
    // Extract slug from path
    const slug = path.split('/').pop()?.replace('.md', '') || '';

    // Parse frontmatter (browser-safe, no gray-matter/Buffer)
    const { data, content } = parseFrontmatter(rawContent as string);
    
    return {
      slug,
      title: typeof data.title === 'string' ? data.title : 'Untitled',
      description: typeof data.description === 'string' ? data.description : '',
      tags: Array.isArray(data.tags) ? data.tags.filter((tag): tag is string => typeof tag === 'string') : [],
      date: typeof data.date === 'string' ? data.date : '',
      status: typeof data.status === 'string' ? data.status : 'Unknown',
      content,
    };
  });

  return projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getProjects().find((p) => p.slug === slug);
}
