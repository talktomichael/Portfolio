// Everything a visitor can use to reach Michael lives here.
// Update these values and rebuild; no other file needs to change.

export const site = {
  name: 'Michael Ebong',
  role: 'People Operations, HR Systems & Organisational Effectiveness',
  theme: 'From People Processes to Organisational Systems',
  location: 'Lagos, Nigeria',
  email: 'ebongmichael17@gmail.com',
  phoneDisplay: '+234 812 019 8191',
  phoneE164: '+2348120198191',
  linkedin: 'https://www.linkedin.com/in/michael-ebong-21a710196/',
  // Replace public/Michael-Ebong-CV.pdf to update the CV. The file name stays the same.
  cvPath: `${import.meta.env.BASE_URL}Michael-Ebong-CV.pdf`,
  cvFileName: 'Michael-Ebong-CV.pdf',
  formspreeEndpoint: 'https://formspree.io/f/mnpdnygy',
  intro:
    'I design and improve the systems, processes and people practices that help organisations operate more effectively.',
}

export const whatsappUrl = `https://wa.me/${site.phoneE164.replace('+', '')}`

// Statements for the hero typewriter. Each one is paired with the part of the
// people system it describes, so the system map can light the matching stage.
export const typewriterStatements: { text: string; stage: string }[] = [
  { text: 'I turn fragmented people processes into structured systems.', stage: 'structure' },
  { text: 'I connect organisational objectives to employee performance.', stage: 'perform' },
  { text: 'I build HR workflows that take repetitive work off the table.', stage: 'records' },
  { text: 'I design development that is intentional, assigned and tracked.', stage: 'develop' },
  { text: 'I make hiring decisions rest on evidence, not impressions.', stage: 'hire' },
  { text: 'I give leaders reliable information about their people.', stage: 'insight' },
]
