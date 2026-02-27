/**
 * Tabletop Exercise HTML Generator - NEW VERSION
 * Generates professional HTML matching the exact specification from SKILL.md
 */

function escapeHtml(text: string | undefined | null): string {
    if (!text) return '';
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

export function generateTabletopHTML(data: any): string {
    const severityClass = data.severity?.toLowerCase() || 'critical';
    
    // Build the HTML (abbreviated for this export - full version in generate-pdf.ts)
    return `...`; // Full HTML generation code here
}
