export type System = {
  slug: string
  name: string
  tier: 'Flagship' | 'Supporting'
  problem: string
  users: string[]
  capabilities: string[]
  explanation: string
  basis: { real: string; recreated: string; proposed: string }
  workflow: string[]
  data: string[]
  security: string
  limitations: string
  relatedCases: string[]
}

export const fictionalOrg =
  'Harbourline Group is a fictional 120-person services company in Lagos with five departments. Every name, number and record in these demonstrations is synthetic.'

export const confidentialityStatement =
  'All demonstrations in this portfolio have been independently recreated for portfolio purposes. They use fictional organisations, fictional employee identities and synthetic data. They illustrate approaches and system designs informed by my professional experience; they are not copies of any employer’s internal systems, documents or data, and not every feature shown was implemented at a previous employer.'

export const systems: System[] = [
  {
    slug: 'hris',
    name: 'Integrated People Operations HRIS',
    tier: 'Flagship',
    problem: 'Employee information scattered across files, and recurring tasks that depend on memory, cause missed deadlines, inconsistent records and slow answers to simple questions.',
    users: ['HR administrators', 'Line managers', 'Employees', 'Leadership'],
    capabilities: ['Employee records and lifecycle', 'Leave requests and approvals', 'Probation tracking', 'Check-in and learning reminders', 'Management dashboard'],
    explanation: 'One central employee record drives every module. Leave flows from request to line manager approval to an updated balance; probation and check-in dates trigger reminders on their own.',
    basis: {
      real: 'Centralised records, leave with manager approval, probation, check-in and learning reminders, HR reporting and staff self-service, from the HRIS I built at Instollar.',
      recreated: 'All data, the interface and the dashboard shown here.',
      proposed: 'An audit log of record changes and per-manager dashboards.',
    },
    workflow: ['Employee record created at hire', 'Probation end date calculated', 'Manager reminded 30 and 7 days before', 'Review completed and outcome recorded', 'Lifecycle stage updates and the six-monthly cycle begins'],
    data: ['Employees: id, name, department, role, manager, start date, type, status', 'Leave: request, employee, type, dates, days, approver, status', 'Probation: employee, end date, review status, outcome', 'Check-ins and Learning: employee, due date, status'],
    security: 'Role-based access: employees see their own record, managers their team, HR the rest. Salary and sensitive personal data are limited to HR, and ownership sits with an HR account rather than a person.',
    limitations: 'A spreadsheet-based system has execution quotas and needs careful validation as headcount grows; it depends on documentation to stay maintainable.',
    relatedCases: ['custom-hris', 'people-operations-function'],
  },
  {
    slug: 'scorecard',
    name: 'Balanced Scorecard & Performance Management',
    tier: 'Flagship',
    problem: 'Strategy that never reaches daily work, and reviews that rely on general impressions.',
    users: ['Leadership', 'Managers', 'Employees', 'People Operations'],
    capabilities: ['Objective to KPI cascade', 'Weighted performance scorecards', 'Monthly, quarterly and six-monthly reviews', 'Development recommendations'],
    explanation: 'Pick an organisational objective and follow it down to the departmental objective and the individual KPIs that serve it, then see how a weighted assessment is scored.',
    basis: {
      real: 'Building a Balanced Scorecard with a CEO, cascading to departments and roles, the monthly, quarterly and six-monthly cycle, and weighted appraisal scoring, from Instollar.',
      recreated: 'Every objective, KPI, weight and rating shown.',
      proposed: 'Calibration views of rating distribution across managers.',
    },
    workflow: ['Objectives set across four perspectives', 'Departments set three to five objectives', 'Each role agrees four to six KPIs', 'Monthly check-ins log progress', 'Quarterly review adjusts targets', 'Six-monthly weighted assessment and summary'],
    data: ['Objectives: perspective, owner, period', 'Department objectives: objective, department', 'KPIs: employee, objective, target, weight', 'Reviews: period, component scores, overall, development needs'],
    security: 'Employees see only their own scorecard; managers see their direct reports; individual ratings never appear in organisation-wide views.',
    limitations: 'Quantitative KPIs suit some roles better than others, and no system can make managers hold good conversations.',
    relatedCases: ['strategy-to-performance'],
  },
  {
    slug: 'learning-hub',
    name: 'Employee Enablement & Learning Hub',
    tier: 'Flagship',
    problem: 'Knowledge locked in a few people, inconsistent onboarding, and development nobody tracks.',
    users: ['New hires', 'All employees', 'Managers', 'People Operations'],
    capabilities: ['Onboarding pathway', 'Policies and SOPs', 'Role resources and playbooks', 'Development plans', 'Progress tracking'],
    explanation: 'A new hire works through a staged onboarding pathway while their manager sees progress. Development plans tie each activity to a skill gap and a deadline.',
    basis: {
      real: 'The EVC Nigeria journey hub (recorded onboarding, buddy, policies, SOPs, sales playbooks, scripts, content calendars) and the Instollar L&D process.',
      recreated: 'All content, the interface and the combined onboarding and learning view.',
      proposed: 'Learning paths with prerequisites and short knowledge checks after key SOPs.',
    },
    workflow: ['Welcome link sent before day one', 'Week one checklist and buddy introduction', '30, 60 and 90 day steps', 'Manager confirms completion', 'Skill gaps from reviews become assigned learning'],
    data: ['Resources: type, audience, owner, last reviewed', 'Onboarding steps: phase, employee, status', 'Development plans: employee, skill gap, activity, due, status'],
    security: 'Internal access only; policy edits limited to owners; development plans visible to the employee, their manager and HR.',
    limitations: 'Content is only as good as its upkeep, and external course progress is self-reported.',
    relatedCases: ['employee-enablement', 'learning-and-development'],
  },
  {
    slug: 'recruitment',
    name: 'Recruitment & Assessment Framework',
    tier: 'Supporting',
    problem: 'Hiring decisions based on impressions, candidates compared on different criteria, and a weak handover into onboarding.',
    users: ['Hiring managers', 'People Operations', 'Interview panels'],
    capabilities: ['Requisition to offer workflow', 'CV screening against requirements', 'Role-specific assessments', 'Interview scorecards', 'Candidate comparison'],
    explanation: 'Every candidate passes the same stages and is scored on the same criteria, so the comparison at the end rests on evidence. Sort the shortlist by any stage to see how rankings shift.',
    basis: {
      real: 'Role-specific assessments with Google Forms and monitored practical exercises (Greenfield), the ATS-compatible CV screening tool and assessment tools (Instollar), and freelance shortlisting rubrics.',
      recreated: 'All roles, candidates, scores and templates.',
      proposed: 'Linking assessment scores to end-of-probation ratings to test which assessments predict success.',
    },
    workflow: ['Requisition approved', 'Job description from role template', 'Applications through one form', 'CV screening against must-haves', 'Role-specific assessment', 'Independent interview scorecards', 'Comparison and recorded decision', 'Hire record created in the HRIS'],
    data: ['Requisitions and Roles', 'Candidates: role, stage', 'Scores: candidate, stage, criterion, score, assessor', 'Decisions: outcome, rationale'],
    security: 'Candidate data visible only to the hiring team, with a defined retention period after which it is deleted.',
    limitations: 'Assessments need periodic checking against real job performance.',
    relatedCases: ['structured-recruitment', 'people-operations-function'],
  },
  {
    slug: 'analytics',
    name: 'People Analytics & Reporting',
    tier: 'Supporting',
    problem: 'Leaders making people decisions without clear, current information.',
    users: ['Leadership', 'Department managers', 'People Operations'],
    capabilities: ['Workforce composition', 'Joiners and leavers', 'Recruitment, leave and learning measures', 'Engagement pulse', 'Decision notes beside each chart'],
    explanation: 'Each chart carries a short note on what it might mean and which decision it supports, because a number nobody acts on is just decoration.',
    basis: {
      real: 'HR reporting at Instollar, pulse surveys at EVC Nigeria, and formal training in HR Analytics, People Analytics, HR data governance and Power BI.',
      recreated: 'Every figure and chart. This demonstration shows capability; it does not describe past implementation.',
      proposed: 'A Power BI version connected to the HRIS and attrition risk indicators.',
    },
    workflow: ['Monthly refresh from HRIS, recruitment, performance and learning data', 'Exceptions listed for HR', 'Summary sent to leadership'],
    data: ['Reporting layer keyed on employee id and department'],
    security: 'Groups smaller than five people are never shown separately, and no individual pay or performance appears in leadership-wide views.',
    limitations: 'Small organisations produce small numbers, so trends need careful reading.',
    relatedCases: ['custom-hris'],
  },
]

export const systemBySlug = (slug: string) => systems.find((s) => s.slug === slug)

// ---------- Synthetic data for the interactive previews ----------

export const departments = ['Operations', 'Sales', 'Customer Experience', 'Finance', 'People & Admin'] as const

export type Employee = {
  id: string
  name: string
  dept: (typeof departments)[number]
  role: string
  start: string
  stage: 'Probation' | 'Confirmed' | 'Onboarding'
  leaveLeft: number
  probationDays?: number
}

export const employees: Employee[] = [
  { id: 'HG-041', name: 'Ada Nwosu', dept: 'Customer Experience', role: 'Customer Experience Officer', start: '2025-02-03', stage: 'Confirmed', leaveLeft: 14 },
  { id: 'HG-087', name: 'Tunde Bakare', dept: 'Sales', role: 'Sales Executive', start: '2026-07-14', stage: 'Probation', leaveLeft: 8, probationDays: 12 },
  { id: 'HG-063', name: 'Zainab Yusuf', dept: 'Finance', role: 'Finance Analyst', start: '2025-11-03', stage: 'Confirmed', leaveLeft: 17 },
  { id: 'HG-092', name: 'Chidi Okeke', dept: 'Operations', role: 'Field Coordinator', start: '2026-08-25', stage: 'Probation', leaveLeft: 6, probationDays: 54 },
  { id: 'HG-018', name: 'Funmi Adeyemi', dept: 'People & Admin', role: 'HR Officer', start: '2024-04-15', stage: 'Confirmed', leaveLeft: 9 },
  { id: 'HG-095', name: 'Ibrahim Musa', dept: 'Operations', role: 'Operations Associate', start: '2026-11-02', stage: 'Onboarding', leaveLeft: 3 },
  { id: 'HG-074', name: 'Grace Etim', dept: 'Sales', role: 'Key Account Manager', start: '2026-03-02', stage: 'Confirmed', leaveLeft: 11 },
  { id: 'HG-089', name: 'Kelechi Obi', dept: 'Customer Experience', role: 'Support Specialist', start: '2026-08-04', stage: 'Probation', leaveLeft: 5, probationDays: 33 },
]

export const leaveRequests = [
  { id: 'LR-311', employee: 'Ada Nwosu', type: 'Annual', from: '24 Nov', to: '26 Nov', days: 3, manager: 'Customer Experience lead' },
  { id: 'LR-312', employee: 'Grace Etim', type: 'Annual', from: '1 Dec', to: '5 Dec', days: 5, manager: 'Sales lead' },
  { id: 'LR-313', employee: 'Zainab Yusuf', type: 'Sick', from: '13 Nov', to: '13 Nov', days: 1, manager: 'Finance lead' },
]

export const cascade = [
  {
    perspective: 'Customer',
    objective: 'Improve customer retention across all service lines',
    dept: 'Customer Experience',
    deptObjective: 'Resolve customer issues faster and more completely',
    role: 'Customer Experience Officer',
    kpis: ['90% of tickets resolved within 24 hours', 'Customer satisfaction of 4.3 out of 5 or higher', 'Repeat-contact rate below 8%'],
  },
  {
    perspective: 'Financial',
    objective: 'Grow recurring revenue by 20% this year',
    dept: 'Sales',
    deptObjective: 'Convert more qualified leads into retained accounts',
    role: 'Key Account Manager',
    kpis: ['12 new retained accounts per quarter', 'Account renewal rate of 85%', 'Pipeline reviewed with manager every month'],
  },
  {
    perspective: 'Internal Process',
    objective: 'Deliver every service on schedule and to standard',
    dept: 'Operations',
    deptObjective: 'Cut rework on field jobs',
    role: 'Field Coordinator',
    kpis: ['95% of jobs completed on schedule', 'Rework below 5% of jobs', 'Daily job log submitted by 6pm'],
  },
  {
    perspective: 'Learning and Growth',
    objective: 'Build the capabilities the next stage of growth needs',
    dept: 'People & Admin',
    deptObjective: 'Make development intentional and tracked',
    role: 'HR Officer',
    kpis: ['Every skill gap has an assigned action within 14 days', '80% of learning completed by deadline', 'All monthly check-ins logged'],
  },
]

export const onboardingSteps = [
  { phase: 'Week one', items: ['Policies read and acknowledged', 'Tools and accounts set up', 'Meet your buddy', 'Watch the recorded welcome sessions'] },
  { phase: 'First 30 days', items: ['Complete role SOP walkthroughs', 'Shadow two experienced colleagues', 'First check-in with manager'] },
  { phase: 'Days 31 to 60', items: ['Agree KPIs with manager', 'Finish the role learning track'] },
  { phase: 'Days 61 to 90', items: ['Probation review prepared', 'Development plan agreed'] },
]

export const candidates = [
  { name: 'Candidate A', screening: 17, assessment: 33, interview: 34 },
  { name: 'Candidate B', screening: 18, assessment: 27, interview: 31 },
  { name: 'Candidate C', screening: 14, assessment: 30, interview: 25 },
  { name: 'Candidate D', screening: 16, assessment: 35, interview: 29 },
  { name: 'Candidate E', screening: 19, assessment: 22, interview: 27 },
]

export const analytics = {
  headcount: [
    { label: 'Operations', value: 46 },
    { label: 'Sales', value: 27 },
    { label: 'Customer Experience', value: 24 },
    { label: 'Finance', value: 12 },
    { label: 'People & Admin', value: 11 },
  ],
  movement: {
    months: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    joiners: [1, 2, 0, 1, 2, 1, 0, 2, 1, 2, 1, 1],
    leavers: [0, 1, 1, 0, 1, 0, 2, 1, 1, 0, 1, 1],
  },
  learning: [
    { label: 'Operations', value: 68 },
    { label: 'Sales', value: 61 },
    { label: 'Customer Experience', value: 84 },
    { label: 'Finance', value: 79 },
    { label: 'People & Admin', value: 90 },
  ],
}
