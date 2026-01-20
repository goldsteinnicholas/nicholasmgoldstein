import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Simple parser to extract episodes from podcast.ts
// This is a basic implementation - for production, consider using a TypeScript parser
function parseEpisodesFromTS(content) {
  const episodes = [];
  
  // Find the episodes array
  const arrayMatch = content.match(/private episodes: Episode\[\] = \[([\s\S]*?)\];/);
  if (!arrayMatch) return episodes;
  
  const arrayContent = arrayMatch[1].trim();
  if (!arrayContent || arrayContent.includes('// Episodes will be added')) {
    return episodes; // Empty array
  }
  
  // Simple regex to match episode objects
  // This handles basic TypeScript object syntax
  const episodeRegex = /\{\s*slug:\s*['"]([^'"]+)['"],\s*title:\s*['"]([^'"]+)['"],\s*description:\s*['"]([^'"]+)['"],\s*date:\s*['"]([^'"]+)['"](?:,\s*duration:\s*['"]([^'"]*)['"])?(?:,\s*audioUrl:\s*['"]([^'"]*)['"])?(?:,\s*episodeNumber:\s*(\d+))?\s*\}/g;
  
  let match;
  while ((match = episodeRegex.exec(arrayContent)) !== null) {
    episodes.push({
      slug: match[1],
      title: match[2],
      description: match[3],
      date: match[4],
      duration: match[5] || undefined,
      audioUrl: match[6] || undefined,
      episodeNumber: match[7] ? parseInt(match[7], 10) : undefined
    });
  }
  
  return episodes;
}

function generateRSSFeed() {
  const podcastPath = join(__dirname, '../src/pieces/podcast.ts');
  const podcastContent = readFileSync(podcastPath, 'utf-8');
  
  // Parse episodes from TypeScript file
  const episodes = parseEpisodesFromTS(podcastContent);
  
  // Podcast metadata
  const podcastTitle = 'Countercultural Tech w/ Nick Goldstein';
  const podcastDescription = 'A podcast exploring the countercultural perspectives on technology, startups, AI, and the future of innovation. Hosted by Nick Goldstein.';
  const podcastLink = 'https://nicholasmgoldstein.com/countercultural-tech';
  const podcastLanguage = 'en-us';
  const podcastAuthor = 'Nick Goldstein';
  const podcastEmail = 'nick@nicholasmgoldstein.com'; // Update with actual email
  const podcastImageUrl = 'https://nicholasmgoldstein.com/emstrata.png'; // Update with podcast image if available
  
  // Build RSS XML
  const rssItems = episodes.map(episode => {
    const pubDate = new Date(episode.date).toUTCString();
    const guid = `${podcastLink}/episode/${episode.slug}`;
    const episodeLink = `${podcastLink}/episode/${episode.slug}`;
    
    let itemXml = `    <item>
      <title><![CDATA[${episode.title}]]></title>
      <description><![CDATA[${episode.description}]]></description>
      <link>${episodeLink}</link>
      <guid isPermaLink="true">${guid}</guid>
      <pubDate>${pubDate}</pubDate>`;
    
    if (episode.audioUrl) {
      // audioUrl should be a Cloudinary URL (e.g., https://res.cloudinary.com/.../audio.mp3)
      const audioSize = episode.audioSize || 0; // File size in bytes - required for RSS feeds
      const audioType = episode.audioType || 'audio/mpeg'; // MIME type, typically 'audio/mpeg' for MP3s
      itemXml += `
      <enclosure url="${episode.audioUrl}" length="${audioSize}" type="${audioType}"/>`;
    }
    
    if (episode.duration) {
      itemXml += `
      <itunes:duration>${episode.duration}</itunes:duration>`;
    }
    
    itemXml += `
    </item>`;
    
    return itemXml;
  }).join('\n');
  
  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title><![CDATA[${podcastTitle}]]></title>
    <link>${podcastLink}</link>
    <description><![CDATA[${podcastDescription}]]></description>
    <language>${podcastLanguage}</language>
    <copyright>Copyright ${new Date().getFullYear()} ${podcastAuthor}</copyright>
    <managingEditor>${podcastEmail} (${podcastAuthor})</managingEditor>
    <webMaster>${podcastEmail} (${podcastAuthor})</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <pubDate>${episodes.length > 0 ? new Date(episodes[0].date).toUTCString() : new Date().toUTCString()}</pubDate>
    <ttl>60</ttl>
    <itunes:author>${podcastAuthor}</itunes:author>
    <itunes:summary><![CDATA[${podcastDescription}]]></itunes:summary>
    <itunes:owner>
      <itunes:name>${podcastAuthor}</itunes:name>
      <itunes:email>${podcastEmail}</itunes:email>
    </itunes:owner>
    <itunes:image href="${podcastImageUrl}"/>
    <itunes:category text="Technology"/>
    <itunes:category text="Business"/>
    <itunes:explicit>false</itunes:explicit>
${rssItems}
  </channel>
</rss>`;
  
  // Write RSS feed to public directory
  const outputPath = join(__dirname, '../public/countercultural-tech/rss.xml');
  const outputDir = dirname(outputPath);
  
  // Create directory if it doesn't exist
  if (!mkdirSync(outputDir, { recursive: true })) {
    // Directory already exists or was created
  }
  
  writeFileSync(outputPath, rssXml, 'utf-8');
  console.log(`RSS feed generated at: ${outputPath}`);
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateRSSFeed();
}

export { generateRSSFeed };
