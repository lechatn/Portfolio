// Contenu global du site : tout ce qui se modifie souvent est ici.
export const site = {
  name: 'Noé LECHAT',
  firstName: 'Noé',
  lastName: 'LECHAT',
  tagline: "Étudiant en informatique passionné par la data et l'IA",
  description:
    "Portfolio de Noé LECHAT, étudiant en informatique : compétences en data, IA et développement, et projets réalisés.",
  email: 'lechatnoe@gmail.com',
  formEndpoint: 'https://formspree.io/f/meoqkygz',
  cv: 'docs/CV_Noe_LECHAT.pdf', // dans /public/docs : remplacer le fichier pour mettre le CV à jour
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/noé-lechat-175b90265', icon: 'bxl-linkedin' },
    { label: 'GitHub', href: 'https://github.com/lechatn', icon: 'bxl-github' },
    { label: 'Instagram', href: 'https://www.instagram.com/noe_lechat/', icon: 'bxl-instagram' },
  ],
  // TODO : à remplacer par ton propre texte (un élément du tableau = un paragraphe).
  aboutTitle: 'Qui suis-je ?',
  about: [
    "Étudiant en informatique, je m'intéresse à la data, à l'IA et au développement.",
    'Texte de présentation à rédiger.',
  ],
};
