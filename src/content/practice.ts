export const capabilities = [
  {
    title: 'People Operations & Strategy',
    body:
      'I start with how the organisation works and what it is trying to achieve, then shape people practices around that: structure, roles, performance and development that serve the business rather than sit beside it.',
    points: ['Function design across the employee lifecycle', 'Balanced Scorecard and KPI cascades', 'Policies, handbooks and HR governance'],
  },
  {
    title: 'HR Systems & Process Development',
    body:
      'I map a process before I automate it. Then I build practical tools in Google Sheets, Forms and Apps Script that keep information in one place and take reminders, approvals and routine tracking off HR’s desk.',
    points: ['Custom HRIS and staff self-service', 'Workflow automation and notifications', 'ATS-compatible screening and assessment tools'],
  },
  {
    title: 'Organisational Effectiveness',
    body:
      'I look at how people, responsibilities, information and performance fit together, and fix the joins: who owns what, how knowledge moves, and whether the system still runs when one person is away.',
    points: ['Onboarding and enablement journeys', 'Knowledge hubs and SOPs', 'Reporting that informs decisions'],
  },
]

export type Principle = {
  id: string
  title: string
  belief: string
  why: string
  practice: string
  evidence: string
  illustration: string
}

export const principles: Principle[] = [
  {
    id: 'structure',
    title: 'Structure creates consistency',
    belief: 'People are treated fairly and work effectively when the processes that affect them are defined, documented and applied the same way every time.',
    why: 'Without structure, outcomes depend on who handles the task. Two new hires get different onboarding; two candidates are judged on different criteria. That creates unfairness, errors and risk.',
    practice: 'When I take on an HR area, my first question is whether the process is written down and whether everyone follows the same version. Documenting comes before improving.',
    evidence: 'At Instollar I rebuilt People Operations around documented, repeatable processes across nine areas, from recruitment and onboarding to employee relations, and revised more than 15 policies.',
    illustration: 'Employee lifecycle map with a process, owner and output for each stage.',
  },
  {
    id: 'strategy',
    title: 'People strategy must connect to business strategy',
    belief: 'HR activity only creates value when it serves what the organisation is trying to achieve.',
    why: 'Reviews, training and engagement can look busy without moving the business. When individual responsibilities trace back to company objectives, people know why their work matters and managers can see where effort goes.',
    practice: 'I start performance and development work from the organisation’s objectives and work downward, not from generic job descriptions.',
    evidence: 'I partnered with the CEO at Instollar to build a Balanced Scorecard and cascade annual objectives into departmental and individual targets, reviewed by every department.',
    illustration: 'Cascade from organisational objective to departmental target to individual KPI.',
  },
  {
    id: 'development',
    title: 'Employee development should be intentional',
    belief: 'Development works when it responds to identified needs, is assigned deliberately and is tracked to completion.',
    why: 'Occasional training that is not tied to skill gaps or performance spends time and money without clear benefit.',
    practice: 'I link development to performance conversations and keep a record of what was assigned, by when, and whether it was completed.',
    evidence: 'At Instollar I designed an integrated L&D process from skill gap to completion. At EVC Nigeria I built a learning journey that took new sales staff from onboarding to meeting target.',
    illustration: 'L&D tracker linking each activity to a skill gap and a deadline.',
  },
  {
    id: 'technology',
    title: 'Technology should simplify People Operations',
    belief: 'HR technology is valuable when it removes repetitive work and makes good processes easy to follow, not when it simply looks modern.',
    why: 'Growing organisations often cannot justify an expensive platform, and expensive platforms fail when processes are unclear. A simpler tool built around a clear process often delivers more.',
    practice: 'I design the process first, then choose the simplest technology that supports it. I automate what is repetitive, rule-based and easy to forget.',
    evidence: 'I conceived and built a Google Sheets and Apps Script HRIS for 34 employees, with a live staff self-service portal for payslips, leave, learning and performance.',
    illustration: 'Automation map: which events trigger which notifications.',
  },
  {
    id: 'information',
    title: 'Good decisions require reliable information',
    belief: 'Decisions about people should rest on accurate, organised and current information.',
    why: 'When employee information is scattered across files and inboxes, simple questions such as who is on probation or how much leave is left take too long, and leaders decide on partial pictures.',
    practice: 'I centralise records early, define what each field means and who maintains it, and design reports around the questions managers actually ask.',
    evidence: 'At EVC Nigeria I strengthened staff records for more than 100 employees. At Instollar the HRIS became the single source for employee information and HR reporting.',
    illustration: 'HRIS data structure and a people analytics dashboard.',
  },
  {
    id: 'sustainability',
    title: 'Sustainable systems should work beyond individual involvement',
    belief: 'A People Operations function is only as strong as what remains when its key person is unavailable.',
    why: 'Many HR functions in growing organisations live in one person’s head. When that person is away, continuity goes with them.',
    practice: 'I document processes, build self-service resources and automate routine reminders so the system keeps running without me chasing it.',
    evidence: 'The EVC Nigeria hub let staff find policies, SOPs and playbooks without asking. The Instollar portal lets staff see their own leave, payslips and learning without coming to HR.',
    illustration: 'Self-service enablement hub and SOP structures.',
  },
]

export const framework = [
  {
    name: 'Understand',
    summary: 'Learn how the organisation operates: objectives, structure, people, constraints and the tools already in use.',
    example: 'Before rebuilding HR at Instollar, I mapped what each HR area involved, who owned it and how work actually got done.',
  },
  {
    name: 'Diagnose',
    summary: 'Identify process gaps, inefficiencies and risks, and separate symptoms from causes.',
    example: 'A missed probation review is a symptom. The cause is usually that nobody is reminded and probation dates are not tracked in one place.',
  },
  {
    name: 'Design',
    summary: 'Develop a framework, process or system that addresses the cause and fits the organisation’s size and capacity.',
    example: 'A performance cycle of monthly check-ins, quarterly reviews and six-monthly assessments, rather than one annual appraisal.',
  },
  {
    name: 'Implement',
    summary: 'Turn the design into workflows, tools, responsibilities and procedures, and introduce them to the people who will use them.',
    example: 'Building the HRIS, switching on automated reminders, and making sure managers knew what each check-in should cover.',
  },
  {
    name: 'Evaluate',
    summary: 'Check adoption and effect. Are people using it? Is it producing better information and decisions?',
    example: 'Confirming that check-ins happen on schedule across departments and that development activities finish by their deadlines.',
  },
  {
    name: 'Improve',
    summary: 'Refine the system using feedback, data and the organisation’s changing needs, then begin again.',
    example: 'Extending the HRIS into a staff self-service portal once the core records and automations were stable.',
  },
]

export const techPrinciples = [
  ['Map before you automate', 'Automating an unclear process only makes the confusion faster.'],
  ['One source of truth', 'Consistent fields, formats and identifiers so every module draws on the same data.'],
  ['Designed workflows', 'Each process has defined steps, triggers, inputs and outputs.'],
  ['Clear approvals', 'Every workflow names who submits, who approves and who is told.'],
  ['Automate the routine', 'Reminders and calculations are automated; judgement stays with people.'],
  ['Visibility', 'Managers see what they need without asking HR to compile it.'],
  ['Access control', 'Employees see their own records, managers their teams, HR the rest.'],
  ['Maintainability', 'Documented tools in widely available technology that someone else can run.'],
]

export const learning = [
  {
    area: 'Human Resource Management',
    sources: ['Introduction to Human Resource Management, Coursera'],
    learned: 'The HR function across the employee lifecycle, and the role of policy and employee relations.',
    applied: 'Rebuilding a whole People Operations function lifecycle-first at Instollar.',
  },
  {
    area: 'People management and development',
    sources: ['HR for People Managers Specialization, University of Minnesota'],
    learned: 'How managers set expectations, give feedback and develop people.',
    applied: 'Check-in and review frameworks simple enough for managers to run every month.',
  },
  {
    area: 'Recruitment and employer branding',
    sources: ['Certificate in Employer Branding, LinkedIn Learning'],
    learned: 'Attracting talent and presenting an organisation honestly to candidates.',
    applied: 'Employer branding and structured assessment at Greenfield Catering.',
  },
  {
    area: 'HR and People Analytics',
    sources: ['Human Resources Analytics, University of California, Irvine', 'People Analytics, University of Pennsylvania (Wharton)'],
    learned: 'Using workforce data to describe and diagnose issues, and testing whether measures predict outcomes.',
    applied: 'Reporting designed around decisions; the People Analytics demonstration.',
  },
  {
    area: 'HR data and governance',
    sources: ['HR Data Preparation and Governance, Microsoft'],
    learned: 'Cleaning, structuring and protecting employee data.',
    applied: 'Defining fields, owners and access rules before building the HRIS.',
  },
  {
    area: 'Power BI and visualisation',
    sources: ['Microsoft Power BI Data Analytics Learning Path, Microsoft Learn'],
    learned: 'Data models and dashboards that leaders can read quickly.',
    applied: 'Dashboards in the HRIS and analytics demonstrations.',
  },
]

export const otherLearning = [
  'Project Management, Udemy',
  'Fundamentals of Digital Marketing, Google Digital Garage',
  'Search Engine Optimization Fundamentals, Coursera',
  'B.Sc. Geography and Environmental Management, University of Ilorin (2019)',
]

export const technical = [
  ['Google Sheets', 'Structure HR data as a working database with validation, lookups and summary views.'],
  ['Google Apps Script', 'Automate reminders, notifications, approvals and calculations on top of Sheets and Forms.'],
  ['Google Forms', 'Standardise how information comes in: leave requests, feedback, assessments.'],
  ['Google Workspace & Sites', 'Organise documentation and build resource hubs people actually use.'],
  ['HRIS development', 'Design modules, data structures and workflows for HR operations.'],
  ['Microsoft Excel', 'Analysis, tracking and reporting.'],
  ['Documentation', 'Policies, handbooks, SOPs, templates and playbooks written to be followed.'],
]
