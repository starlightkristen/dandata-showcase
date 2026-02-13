export interface DailyLog {
  id: string;
  project_id: string;
  date: string;
  weather: string;
  crew_size: number;
  hours_worked: number;
  work_completed: string;
  issues?: string;
}

export const mockDailyLogs: DailyLog[] = [
  {
    id: 'log_001',
    project_id: 'proj_001',
    date: '2026-02-10',
    weather: 'Clear, 52°F',
    crew_size: 3,
    hours_worked: 8,
    work_completed: 'Installed cabinet hardware, completed first coat of wall paint',
    issues: 'Delayed start due to material delivery'
  },
  {
    id: 'log_002',
    project_id: 'proj_002',
    date: '2026-02-10',
    weather: 'Cloudy, 48°F',
    crew_size: 2,
    hours_worked: 7,
    work_completed: 'Rough plumbing completed, wall framing inspection passed'
  },
  {
    id: 'log_003',
    project_id: 'proj_001',
    date: '2026-02-09',
    weather: 'Rain, 45°F',
    crew_size: 3,
    hours_worked: 8,
    work_completed: 'Countertop installation, electrical rough-in completed'
  }
];
