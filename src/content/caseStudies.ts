export type Block =
  | { p: string }
  | { list: string[] }
  | { steps: string[] }
  | { table: { head: string[]; rows: string[][] } }
  | { note: string }

export type Section = { id: string; title: string; blocks: Block[] }

export type CaseStudy = {
  slug: string
  title: string
  org: string
  role: string
  period: string
  theme: string
  summary: string
  featured: boolean
  demo: string // system slug
  sections: Section[]
}

const confidential =
  'Organisational details are generalised to respect confidentiality. Artefacts shown on this site are recreated with fictional content.'

export const caseStudies: CaseStudy[] = [
  {
    slug: 'people-operations-function',
    title: 'Building and Restructuring a People Operations Function',
    org: 'Instollar Technologies Limited',
    role: 'People Operations Lead',
    period: 'September 2025 to Present',
    theme: 'Structure',
    summary:
      'Taking a function that existed mostly in name and rebuilding it across nine HR areas, with documented processes, a revised policy set and the tools to run it.',
    featured: true,
    demo: 'hris',
    sections: [
      {
        id: 'context',
        title: 'Context',
        blocks: [
          { p: 'Instollar is a growing Lagos technology company. People-related work had grown around immediate needs rather than around a designed function. My brief was to lead People Operations and give it a structure that could carry the organisation as it grew.' },
          { note: confidential },
        ],
      },
      {
        id: 'challenge',
        title: 'Challenge',
        blocks: [
          { p: 'When I joined, the function existed mostly in name. There were generic policies, a basic handbook and a staff database, but nothing solid enough to run People Operations on. Each HR activity depended on whoever performed it, which made consistency hard and meant knowledge left with people.' },
        ],
      },
      {
        id: 'diagnosis',
        title: 'Observation and diagnosis',
        blocks: [
          { p: 'I looked at the whole employee lifecycle rather than at isolated tasks, and asked the same three questions of each area: is there a defined way this is done, who owns it, and what does it produce?' },
          { p: 'The answer pointed to three needs that had to come before any single process could improve:' },
          { list: ['A map of every HR responsibility across the lifecycle', 'A documented process for each, so it could be repeated consistently', 'Supporting documentation, so employees and managers knew what to expect'] },
        ],
      },
      {
        id: 'approach',
        title: 'My approach',
        blocks: [
          { list: [
            'Organise HR work into lifecycle areas so nothing is handled ad hoc.',
            'Document first, because an unwritten process cannot be followed, improved or handed on.',
            'Treat policies and the handbook as working tools, not formalities.',
            'Design every process so technology could support it later.',
          ] },
        ],
      },
      {
        id: 'implementation',
        title: 'Design and implementation',
        blocks: [
          { p: 'I rebuilt the function’s foundations end to end. The scope:' },
          { table: { head: ['HR area', 'What I built'], rows: [
            ['Recruitment', 'Structured assessment tools, an ATS-compatible CV screening tool and a recruitment workflow, including for an associates programme run with Jobberman'],
            ['Onboarding', 'New onboarding documents, starter pack and onboarding checklist'],
            ['Employee records', 'Staff database rebuilt into a working HRIS'],
            ['Performance', 'Scorecard-based cycle and role-specific appraisal templates with weighted scoring'],
            ['Engagement', 'Staff engagement activities and feedback mechanisms'],
            ['Learning and development', 'An integrated L&D process from skill gap to completion'],
            ['HR administration', 'Standardised workflows such as leave, and HR reporting'],
            ['Employee relations', 'Documented policies and procedures'],
            ['Documentation', 'More than 15 revised policies with a policy report, a rebuilt handbook and employment documentation'],
          ] } },
        ],
      },
      {
        id: 'contribution',
        title: 'My specific contribution',
        blocks: [
          { p: 'I owned the restructure: mapping the function, documenting every process, revising the policies and handbook, and building the recruitment, onboarding, reporting and feedback tools. The performance framework was developed in partnership with the CEO and managers.' },
        ],
      },
      {
        id: 'outcome',
        title: 'Outcome and learning',
        blocks: [
          { p: 'The organisation now runs on documented, repeatable processes across nine HR areas, more than 15 revised policies backed by a policy report, a rebuilt handbook and onboarding pack, and standardised workflows that support continuity and accountability.' },
          { p: 'Restructuring a function is mostly about making implicit work explicit. The hardest and most valuable part is agreeing who owns what. Writing the documents is the easy bit.' },
        ],
      },
      {
        id: 'artefacts',
        title: 'Supporting artefacts',
        blocks: [
          { list: ['Employee lifecycle diagram', 'People Operations operating model: area, owner, output', 'SOP structure template', 'Generic handbook table of contents'] },
          { note: 'Artefacts are recreated for a fictional organisation. No Instollar documents are published.' },
        ],
      },
    ],
  },
  {
    slug: 'strategy-to-performance',
    title: 'Connecting Business Strategy to Employee Performance',
    org: 'Instollar Technologies Limited',
    role: 'People Operations Lead, with the CEO and managers',
    period: 'September 2025 to Present',
    theme: 'Strategy and performance',
    summary:
      'A Balanced Scorecard built with the CEO, cascaded into departmental and individual targets, and kept alive by a review rhythm every department followed.',
    featured: true,
    demo: 'scorecard',
    sections: [
      {
        id: 'context',
        title: 'Context',
        blocks: [{ p: 'Leadership set annual business objectives. For those objectives to be met, they had to show up in what departments and individuals were responsible for, week to week.' }],
      },
      {
        id: 'challenge',
        title: 'Challenge',
        blocks: [{ p: 'The gap between strategy and daily work is common. Leaders know what the company must achieve; employees know their tasks; the link between the two is unclear. Reviews drift into general conversations about effort, and nobody can say whether individual work moves the organisation forward.' }],
      },
      {
        id: 'diagnosis',
        title: 'Observation and diagnosis',
        blocks: [
          { p: 'A working performance system needed two things: a clear line from organisational objectives to individual targets, and a rhythm of review that kept those targets in conversation all year.' },
          { p: 'The Balanced Scorecard fitted because it looks at performance from several perspectives, not only financial results. The rhythm mattered as much as the scorecard. A scorecard reviewed once a year is a document; one reviewed monthly is a management tool.' },
        ],
      },
      {
        id: 'approach',
        title: 'My approach',
        blocks: [{ list: [
          'Start with leadership: build the scorecard with the CEO from the annual objectives.',
          'Cascade through departments: translate each objective into departmental targets.',
          'Define roles with managers, who understand the work and must own the conversations.',
          'Build a layered review rhythm, each layer with its own purpose.',
          'Use reviews to surface development needs that feed the L&D process.',
        ] }],
      },
      {
        id: 'implementation',
        title: 'Design and implementation',
        blocks: [
          { steps: ['Organisational objectives', 'Departmental targets', 'Role-specific KPIs and responsibilities', 'Reviews against those KPIs', 'Development actions where gaps appear'] },
          { table: { head: ['Review', 'Frequency', 'Purpose'], rows: [
            ['Check-in', 'Monthly', 'Track progress, remove obstacles, keep targets visible'],
            ['Quarterly review', 'Every three months', 'Assess progress against KPIs and adjust targets when conditions change'],
            ['Management assessment', 'Every six months', 'Formal weighted assessment across competence, KPIs and behaviour; identify development needs'],
          ] } },
        ],
      },
      {
        id: 'contribution',
        title: 'My specific contribution',
        blocks: [{ p: 'The scorecard was built in partnership with the CEO, and role responsibilities were defined with managers. I designed and coordinated the review cycle, developed role-specific appraisal templates with weighted scoring, automated check-in reminders through the HRIS, and linked review outcomes to development planning.' }],
      },
      {
        id: 'outcome',
        title: 'Outcome and learning',
        blocks: [
          { p: 'Annual objectives now cascade into departmental and individual targets, and the monthly, quarterly and six-monthly cycle is followed by every department.' },
          { p: 'The scorecard is the easy part. The real work is helping managers hold regular, honest conversations against it. Automated reminders help the rhythm hold; manager commitment is what makes it useful.' },
        ],
      },
      {
        id: 'artefacts',
        title: 'Supporting artefacts',
        blocks: [
          { list: ['Fictional Balanced Scorecard', 'Cascade diagram', 'Review calendar', 'Blank appraisal template showing the weighted structure'] },
          { note: 'No Instollar objectives, targets, weights or ratings are published.' },
        ],
      },
    ],
  },
  {
    slug: 'custom-hris',
    title: 'Developing a Custom HRIS and Automating HR Workflows',
    org: 'Instollar Technologies Limited',
    role: 'People Operations Lead; designer and builder',
    period: 'September 2025 to Present',
    theme: 'Systems and technology',
    summary:
      'An HR information system on Google Sheets and Apps Script for 34 employees, with automated reminders and a live self-service portal for payslips, leave, learning and performance.',
    featured: true,
    demo: 'hris',
    sections: [
      {
        id: 'context',
        title: 'Context',
        blocks: [{ p: 'The organisation already worked in Google Workspace. HR information sat in spreadsheets, and recurring HR tasks depended on someone remembering them. Staff came to HR to ask simple things: how much leave is left, whether payslips were out.' }],
      },
      {
        id: 'challenge',
        title: 'Challenge',
        blocks: [{ p: 'Recurring HR work is predictable. Probation ends on known dates, check-ins are monthly, leave needs approval, learning has deadlines. Without automation, HR spends its days chasing dates, and anything missed lands on employees. A slipped probation review or a wrong leave balance damages trust in the function.' }],
      },
      {
        id: 'diagnosis',
        title: 'Observation and diagnosis',
        blocks: [
          { p: 'The information needed already existed; it just wasn’t organised to trigger action. The organisation didn’t need more data. It needed its data to drive reminders, approvals and reports, and to be visible to the staff it was about.' },
          { table: { head: ['Consideration', 'Commercial HRIS', 'Custom Google Workspace HRIS'], rows: [
            ['Cost', 'Per-employee subscription', 'No additional licence cost'],
            ['Fit', 'Organisation adapts to the software', 'Built around the organisation’s own processes'],
            ['Learning curve', 'New platform for staff', 'Familiar tools: Sheets, Forms, email'],
            ['Data ownership', 'Held on a vendor platform', 'Held in the organisation’s own Drive'],
            ['Trade-off', 'Richer features and vendor support', 'Depends on careful design and documentation'],
          ] } },
        ],
      },
      {
        id: 'approach',
        title: 'My approach',
        blocks: [
          { p: 'The design intent in one line: take repetitive tasks out of HR’s hands, track what needs to be tracked, and give staff direct insight into their own information.' },
          { list: [
            'Centralise first, so every workflow draws on one record.',
            'Keep a separate sheet for each HR function, which simplifies permissions and maintenance.',
            'Automate rule-based events only; approvals and ratings stay with people.',
            'Route leave approvals to line managers, who hold the context.',
          ] },
        ],
      },
      {
        id: 'implementation',
        title: 'Design and implementation',
        blocks: [
          { p: 'Google Sheets is the database. Google Forms handles simple input such as leave requests. Google Apps Script, the programming language built into Google Workspace, reads the sheets, runs calculations and sends email on a schedule.' },
          { table: { head: ['Module', 'What it does', 'Automation'], rows: [
            ['Employee records', 'Central record: role, start date, line manager, status', 'Feeds every other module'],
            ['Leave', 'Requests, line manager approval, policy-based balances with proration', 'Request and approval notifications, balance updates'],
            ['Performance check-ins', 'Monthly schedule per employee', 'Reminders to managers'],
            ['Probation', 'End dates and review status', 'Reminders before probation ends'],
            ['L&D', 'Assigned activities and due dates', 'Deadline reminders'],
            ['Reporting', 'Headcount, leave and activity views', 'Operational visibility for HR and management'],
          ] } },
          { p: 'On top of the same sheets, I built a staff self-service portal, now live and in use. It has its own login; payslips released to all staff with a single monthly notification; leave balances and requests with manager approval; learning and onboarding views; a performance tab with probation status and appraisal results; birthday reminders; and an admin dashboard for HR.' },
        ],
      },
      {
        id: 'contribution',
        title: 'My specific contribution',
        blocks: [{ p: 'I was the mind behind the system end to end: identifying the need, choosing the approach, designing the data structure, modules, workflows and automations, building it in Google Sheets and Apps Script, and maintaining it.' }],
      },
      {
        id: 'outcome',
        title: 'Outcome and learning',
        blocks: [
          { p: 'Information for 34 employees lives in one place. Leave, check-in notifications, probation reminders and development deadlines run automatically, and staff check their own payslips, leave and learning in the portal instead of asking HR.' },
          { p: 'The design work mattered more than the code. Deciding what each sheet holds, who owns each field and which events trigger action determined whether the system was reliable, and that clear structure is what made the portal possible.' },
        ],
      },
      {
        id: 'artefacts',
        title: 'Supporting artefacts',
        blocks: [
          { list: ['Data model diagram', 'Automation map: event, trigger, recipient', 'Leave approval workflow', 'Synthetic screenshots in the HRIS demonstration'] },
          { note: 'No real employee data, payroll data or company scripts are published.' },
        ],
      },
    ],
  },
  {
    slug: 'learning-and-development',
    title: 'Building an Integrated Learning and Development Process',
    org: 'Instollar Technologies Limited',
    role: 'People Operations Lead',
    period: 'September 2025 to Present',
    theme: 'Development',
    summary:
      'Turning development from occasional training into a tracked process: skill gaps and requests in, recommended courses assigned with deadlines, completion monitored and discussed at review.',
    featured: true,
    demo: 'learning-hub',
    sections: [
      {
        id: 'context',
        title: 'Context',
        blocks: [{ p: 'With the performance cycle running, reviews were surfacing where people needed to grow. The organisation needed a way to act on those needs every time, not occasionally.' }],
      },
      {
        id: 'challenge',
        title: 'Challenge',
        blocks: [{ p: 'In many organisations learning happens in bursts: a workshop here, a course someone found there. Nothing links it to skill gaps, nobody knows who is developing what, and there is no way to tell whether it was finished or made a difference.' }],
      },
      {
        id: 'diagnosis',
        title: 'Observation and diagnosis',
        blocks: [{ p: 'Every learning activity needed four things to be manageable: an origin (why it was assigned), an owner, a deadline and a completion record. Without them, development can’t be managed or connected to performance.' }],
      },
      {
        id: 'approach',
        title: 'My approach',
        blocks: [{ list: [
          'Gather needs through three channels: the staff portal, monthly check-ins, and requests made to line managers.',
          'Recommend relevant courses against each need rather than leaving people to search alone.',
          'Assign activities formally, with deadlines, so they can be tracked.',
          'Track deadlines in the HRIS with automated reminders.',
          'Bring learning back into later check-ins and reviews.',
        ] }],
      },
      {
        id: 'implementation',
        title: 'Design and implementation',
        blocks: [{ steps: ['Identify skill gaps from reviews and manager input', 'Gather development needs from employees', 'Recommend courses or activities for each need', 'Assign with a deadline', 'Track progress in the L&D record', 'Monitor completion with automated reminders', 'Discuss application at the next check-in or review'] }],
      },
      {
        id: 'contribution',
        title: 'My specific contribution',
        blocks: [{ p: 'I designed the process, set up tracking and reminders, coordinated recommendations and assignments, and monitored completion. Skill gaps were identified with managers through performance discussions.' }],
      },
      {
        id: 'outcome',
        title: 'Outcome and learning',
        blocks: [
          { p: 'Development is now a process with an input, an owner, a deadline and a record, connected to performance reviews.' },
          { p: 'Tracking completion is useful, but the value comes from the link to performance. Learning that never comes up again in a check-in tends to be forgotten.' },
        ],
      },
      {
        id: 'artefacts',
        title: 'Supporting artefacts',
        blocks: [{ list: ['L&D process diagram', 'Fictional L&D tracker', 'Individual development plan template'] }],
      },
    ],
  },
  {
    slug: 'employee-enablement',
    title: 'Employee Enablement and Knowledge Management',
    org: 'EVC Nigeria Limited',
    role: 'HR Executive (remote)',
    period: 'March 2023 to November 2024',
    theme: 'Information access',
    summary:
      'A Google Sites hub, written end to end, that took new real estate sales staff from recorded onboarding to meeting target, for a remote workforce of more than 100.',
    featured: false,
    demo: 'learning-hub',
    sections: [
      {
        id: 'context',
        title: 'Context',
        blocks: [{ p: 'EVC Nigeria is a real estate company. I ran HR operations remotely for more than 100 employees, most of them in target-based sales roles. Without being in the room, information and the path to becoming good at the job had to reach people without depending on one-to-one conversations.' }],
      },
      {
        id: 'challenge',
        title: 'Challenge',
        blocks: [{ p: 'In a growing workforce, essential knowledge sits with a few experienced people. New hires learn unevenly depending on who they ask, and policies are applied inconsistently because nobody can find them. In sales, the gap between a new starter and a strong performer is largely a knowledge gap.' }],
      },
      {
        id: 'diagnosis',
        title: 'Observation and diagnosis',
        blocks: [{ p: 'This was an information access problem with a development dimension. If guidance is centralised, organised around what a person is trying to do, and easy to reach, it cuts repeated questions, makes practice consistent and lets people develop at their own pace. Remote work made that more important.' }],
      },
      {
        id: 'approach',
        title: 'My approach',
        blocks: [{ list: [
          'One central place for organisational knowledge instead of scattered files.',
          'Organised as a journey, from first day to meeting target.',
          'A buddy for every new hire, alongside the resources.',
          'Regular human touchpoints: monthly training, pulse surveys and People Check-In meetings.',
        ] }],
      },
      {
        id: 'implementation',
        title: 'Design and implementation',
        blocks: [
          { p: 'I built the hub on Google Sites as a guided journey for new sales staff:' },
          { table: { head: ['Stage', 'What the hub provided'], rows: [
            ['Onboarding', 'Recorded onboarding sessions, HR policies and SOPs'],
            ['Settling in', 'A buddy assigned to each new hire'],
            ['Understanding the industry', 'Training on what real estate sales involves'],
            ['Learning to sell', 'Selling traditionally and digitally, with sales scripts'],
            ['Building a pipeline online', 'Social media content calendars covering up to three months'],
            ['Growing proficiency', 'Curated people to follow and model'],
            ['Meeting target', 'Playbooks connecting all of it to the role’s targets'],
          ] } },
        ],
      },
      {
        id: 'contribution',
        title: 'My specific contribution',
        blocks: [{ p: 'I built the hub alone and wrote all of its content, including the playbooks, scripts and content calendars. I also ran HR operations, onboarding, records and documentation for the workforce, and introduced monthly training, pulse surveys and People Check-Ins.' }],
      },
      {
        id: 'outcome',
        title: 'Outcome and learning',
        blocks: [
          { p: 'Staff had one place for policies, SOPs, onboarding and role-specific learning, and new sales hires had a clear path from day one to target. Knowledge-sharing became consistent across teams instead of depending on who you asked.' },
          { p: 'A hub is only as useful as its organisation and upkeep. Arranging it around what an employee is trying to do, rather than which department wrote it, made the difference.' },
        ],
      },
      {
        id: 'artefacts',
        title: 'Supporting artefacts',
        blocks: [{ list: ['Hub information architecture', 'Generic 30, 60 and 90 day onboarding journey', 'SOP template'] }],
      },
    ],
  },
  {
    slug: 'structured-recruitment',
    title: 'Structured Recruitment and Candidate Assessment',
    org: 'Greenfield Catering Ltd',
    role: 'People Operations & Social Media Manager',
    period: 'December 2024 to August 2025',
    theme: 'Decision quality',
    summary:
      'Role-specific assessments, from scored Google Forms to monitored practical exercises, so hiring decisions across senior and junior roles rested on comparable evidence.',
    featured: false,
    demo: 'recruitment',
    sections: [
      {
        id: 'context',
        title: 'Context',
        blocks: [{ p: 'Greenfield Catering was recruiting across senior and junior positions. My role combined People Operations with employer branding, so I was responsible both for attracting candidates and for helping the business choose well among them.' }],
      },
      {
        id: 'challenge',
        title: 'Challenge',
        blocks: [{ p: 'When hiring relies on CVs and unstructured interviews, decisions lean on impressions. Candidates are compared on different criteria, strong people are missed, and decisions are hard to explain.' }],
      },
      {
        id: 'diagnosis',
        title: 'Observation and diagnosis',
        blocks: [{ p: 'Different roles need evidence of different things, and none of it shows reliably on a CV. A short, role-specific assessment completed before interview gives every candidate the same chance to show ability, and gives managers the same basis for comparison.' }],
      },
      {
        id: 'approach',
        title: 'My approach',
        blocks: [{ list: [
          'Role-specific preliminary assessments built around what each role requires.',
          'Different approaches for different seniority levels.',
          'Scored Google Forms for consistent questions, and practical exercises that were observed and monitored.',
          'Screening on assessment results, with clear communication at every stage.',
          'Employer branding and LinkedIn visibility to strengthen the candidate pool.',
        ] }],
      },
      {
        id: 'implementation',
        title: 'Design and implementation',
        blocks: [
          { steps: ['Define role requirements', 'Attract candidates through job posts and employer branding', 'Screen applications against requirements', 'Administer the role-specific assessment', 'Shortlist on combined evidence', 'Interview the shortlist', 'Managers decide; the decision is communicated'] },
          { p: 'Alongside recruitment I coordinated engagement, training, feedback and internal communication, using employee insight to spot workforce needs.' },
        ],
      },
      {
        id: 'contribution',
        title: 'My specific contribution',
        blocks: [{ p: 'I designed the recruitment process and every assessment, coordinated recruitment end to end and ran employer branding. Final hiring decisions sat with the hiring managers.' }],
      },
      {
        id: 'outcome',
        title: 'Outcome and learning',
        blocks: [
          { p: 'Structured assessments supported recruitment across senior and junior roles. I have since applied the same approach as a freelance recruiter, mapping and shortlisting candidates for several organisations with custom scoring rubrics.' },
          { p: 'Structure helps candidates as well as employers. A clear, relevant assessment tells people what the role involves and signals a well-run organisation.' },
        ],
      },
      {
        id: 'artefacts',
        title: 'Supporting artefacts',
        blocks: [{ list: ['Recruitment workflow', 'Fictional preliminary assessment', 'Interview scorecard template', 'Candidate comparison matrix'] }],
      },
    ],
  },
]

export const caseStudyBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug)
