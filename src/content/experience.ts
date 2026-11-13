export type Role = {
  org: string
  title: string
  period: string
  place: string
  summary: string
  highlights: string[]
  caseStudies: string[]
  featured?: boolean
}

export const roles: Role[] = [
  {
    org: 'Instollar Technologies Limited',
    title: 'People Operations Lead',
    period: 'September 2025 to Present',
    place: 'Lagos',
    summary:
      'Rebuilt the People Operations function of a growing technology company, connected company objectives to individual performance, and built the HR system that runs it.',
    highlights: [
      'Rebuilt the function across nine HR areas and revised more than 15 policies',
      'Partnered with the CEO on a Balanced Scorecard followed by every department',
      'Conceived and built an HRIS for 34 employees with a live staff self-service portal',
      'Designed an integrated Learning and Development process',
      'Built an ATS-compatible CV screening tool for high-volume recruitment',
    ],
    caseStudies: ['people-operations-function', 'strategy-to-performance', 'custom-hris', 'learning-and-development'],
    featured: true,
  },
  {
    org: 'Greenfield Catering Ltd',
    title: 'People Operations & Social Media Manager',
    period: 'December 2024 to August 2025',
    place: 'Lagos',
    summary:
      'Brought structure to recruitment with role-specific assessments, and combined People Operations with employer branding and internal engagement.',
    highlights: [
      'Designed role-specific assessments using Google Forms and monitored practical exercises',
      'Supported recruitment across senior and junior positions',
      'Coordinated engagement, training, feedback and internal communication',
    ],
    caseStudies: ['structured-recruitment'],
    featured: true,
  },
  {
    org: 'EVC Nigeria Limited',
    title: 'HR Executive',
    period: 'March 2023 to November 2024',
    place: 'Remote',
    summary:
      'Ran HR operations remotely for a real estate company of more than 100 employees, most in target-based sales roles, and built the journey that took new sales staff from onboarding to target.',
    highlights: [
      'Managed recruitment, digital onboarding, records and training for 100+ employees',
      'Built and wrote a Google Sites enablement hub from onboarding to meeting target',
      'Introduced monthly training, pulse surveys and People Check-In meetings',
    ],
    caseStudies: ['employee-enablement'],
    featured: true,
  },
  {
    org: 'Freelance',
    title: 'Recruitment & Candidate Assessment',
    period: '',
    place: 'Remote',
    summary:
      'Candidate mapping and shortlisting for roles across several organisations, using custom scoring rubrics and tiered shortlists.',
    highlights: ['Custom scoring rubrics per role', 'Tiered shortlists with clear rationale'],
    caseStudies: [],
  },
  {
    org: 'Kreatesell',
    title: 'Product Marketing Executive',
    period: 'October 2022 to February 2023',
    place: 'Ibadan',
    summary:
      'Led a six-person team, used performance data to judge and improve campaigns, and worked with product teams to turn customer needs into product improvements.',
    highlights: ['Led a six-person team', 'Data-led evaluation of campaigns', 'Cross-functional work with product'],
    caseStudies: [],
  },
  {
    org: 'Freelance',
    title: 'Social Media Manager',
    period: 'September 2020 to October 2022',
    place: 'Remote',
    summary:
      'Managed digital communication for multiple clients and built repeatable content, community and referral processes with their sales teams.',
    highlights: ['Repeatable content and campaign processes', 'Referral processes with sales teams'],
    caseStudies: [],
  },
]

export const journey = [
  {
    period: '2020 to 2023',
    title: 'Learning how organisations create value',
    body: 'Freelance digital work and then leading a six-person product marketing team at Kreatesell taught me to read performance data, judge whether effort was producing results, and work across functions. Good outcomes came from coordinated systems, not individual effort alone.',
  },
  {
    period: '2023 to 2024',
    title: 'Understanding people operations at scale',
    body: 'At EVC Nigeria I ran HR remotely for more than 100 people. Supporting that many people without being in the room forced structure: digital onboarding, documented policy, a resource hub, regular check-ins. Organised information meant people worked more consistently and needed less hand-holding.',
  },
  {
    period: '2024 to 2025',
    title: 'Seeing what structured decisions change',
    body: 'At Greenfield Catering, role-specific assessments showed me how much more consistent hiring becomes when candidates are measured against defined criteria rather than general impressions.',
  },
  {
    period: '2025 to present',
    title: 'Building the function and the system together',
    body: 'At Instollar the threads came together: rebuilding the function, cascading strategy into performance, designing L&D, and building the HRIS and self-service portal that hold it all in place. My thinking moved from improving single processes to designing a system in which they support each other.',
  },
]
