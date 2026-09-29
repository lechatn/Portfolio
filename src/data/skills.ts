import projects from './projects.json';

export interface Skill {
  id: string; // doit correspondre aux valeurs de `tech` dans projects.json
  name: string;
  icon: string; // classe Boxicons
  color: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'data',
    title: 'Data & IA',
    icon: 'bxs-data',
    description:
      "Conception, administration et utilisation de bases de données, préparation de données et modélisation prédictive en Python.",
    skills: [
      { id: 'python', name: 'Python', icon: 'bxl-python', color: '#f0f8ff' },
      { id: 'pandas', name: 'Pandas', icon: 'bx-table', color: '#96d1d1' },
      { id: 'scikit-learn', name: 'scikit-learn', icon: 'bx-brain', color: '#f7762e' },
      { id: 'fastapi', name: 'FastAPI', icon: 'bx-bolt-circle', color: '#4da5a0' },
      { id: 'sql', name: 'SQL', icon: 'bxs-data', color: '#a0a0a0' },
      { id: 'postgresql', name: 'PostgreSQL', icon: 'bxl-postgresql', color: '#4a8cc0' },
      { id: 'mongodb', name: 'MongoDB', icon: 'bxl-mongodb', color: '#4da53f' },
    ],
  },
  {
    id: 'dev',
    title: 'Développement',
    icon: 'bx-code-alt',
    description:
      "Développement web depuis 4 ans, avec de solides compétences back-end et une bonne maîtrise du front-end.",
    skills: [
      { id: 'javascript', name: 'JavaScript', icon: 'bxl-javascript', color: '#e9d44d' },
      { id: 'typescript', name: 'TypeScript', icon: 'bxl-typescript', color: '#4a8ad4' },
      { id: 'html', name: 'HTML', icon: 'bxl-html5', color: '#dd4b24' },
      { id: 'css', name: 'CSS', icon: 'bxl-css3', color: '#4baee8' },
      { id: 'react', name: 'React', icon: 'bxl-react', color: '#61dbfb' },
      { id: 'angular', name: 'Angular', icon: 'bxl-angular', color: '#e8385a' },
      { id: 'go', name: 'Golang', icon: 'bxl-go-lang', color: '#00a9d2' },
      { id: 'java', name: 'Java', icon: 'bxl-java', color: '#3d97e0' },
      { id: 'php', name: 'PHP', icon: 'bxl-php', color: '#ffffff' },
      { id: 'cpp', name: 'C# / C++', icon: 'bxl-c-plus-plus', color: '#659ad2' },
      { id: 'websockets', name: 'WebSockets', icon: 'bx-transfer', color: '#96d1d1' },
    ],
  },
  {
    id: 'tools',
    title: 'Outils & méthodes',
    icon: 'bx-git-branch',
    description:
      "Organisation, planification et coordination des tâches en équipe, avec les outils de versionnement et de suivi de projet.",
    skills: [
      { id: 'github', name: 'GitHub', icon: 'bxl-github', color: '#96d1d1' },
      { id: 'trello', name: 'Trello', icon: 'bxl-trello', color: '#96d1d1' },
      { id: 'docker', name: 'Docker', icon: 'bxl-docker', color: '#2b9be0' },
      { id: 'postman', name: 'Postman', icon: 'bx-pen', color: '#f7762e' },
    ],
  },
];

export const softSkills = [
  { name: 'Collaboration', icon: 'bx-group', text: "Habitué au travail en équipe, j'adapte mes actions aux besoins du groupe et je respecte les délais." },
  { name: 'Autonomie', icon: 'bxs-battery-full', text: "Capable de gérer mon temps et mes priorités, je prends des initiatives pour atteindre mes objectifs." },
  { name: 'Adaptation', icon: 'bx-sync', text: "J'aborde de nouvelles technologies rapidement, en autodidacte quand il le faut." },
  { name: 'Esprit logique', icon: 'bx-bulb', text: "J'aime résoudre des problèmes de façon structurée et communiquer clairement les résultats." },
];

// Projets qui utilisent une compétence (preuve de mise en pratique).
export function projectsFor(skillId: string) {
  return projects.filter((p) => p.tech.includes(skillId));
}

export function skillById(id: string): Skill | undefined {
  return skillGroups.flatMap((g) => g.skills).find((s) => s.id === id);
}
