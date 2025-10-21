export const CV_DATA_FR = {
  photo: 'photo.jpg',
  contact: {
    label: 'Contact',
    nom: 'DERVAUX Gautier',
    email: 'gautier_dervaux@hotmail.com',
    telephone: '+33 7 49 01 40 92',
    linkedin: 'https://linkedin.com/in/gautier-dervaux'
  },
  poste: "Software Engineer Tech Lead",

  description:
    'Tourné vers le fonctionel et la coopération,\n je suis à la recherche d\'un projet captivant dans une équipe dynamique.',
  experiences: {
    label: 'Expériences',
    items: [
      {
        titre: 'Software Engineer Tech Lead',
        entreprise: 'Median Technologies',
        periode: 'Depuis 2021 (4 ans)',
        description: '',
        challenges: 'Intégration, Performance, mise à l\'échelle',
        items: [
          "Design et intégration dans l'écosystème applicatif.",
          "Recherche et implémentation d'une pipeline d'import robuste, transparente, facilement maintenable et évolutive.",
          "Encadrement, montée en compétences d'une équipe de développeurs."
        ]
      },
      {
        titre: 'Software Engineer Developer',
        entreprise: 'Median Technologies',
        periode: '2020-2021',
        description: '',
        challenges: 'Design de modèle de données, CI/CD, Support, Analyse fonctionnelle',
        items: [
          'Développement full-stack Angular Dotnet',
          'Création et maintenance d\'un cluster Kubernetes',
          'Migration d\'un déploiement en docker compose sur vm vers cluster kube',
          'Analyse de données utilisateurs',
          'Support utilisateurs',
          'Analyse de besoin fonctionnelle et technique'
        ]
      }
    ],
    icone: 'fas fa-briefcase'
  },
  formations: {
    label: 'Parcours académique',
    items: [
      {
        diplome: "Maîtrise professionnelle en génie Informatique (Bac+7)",
        ecole: 'Polytechnique Montréal',
        annee: '2018-2020'
      },
      {
        diplome: "Diplôme d'ingénieur",
        ecole: "IMT Atlantique (ex Télécom Bretagne) & Eurécom (Sophia Antipolis)",
        annee: '2016-2020'
      },
      {
        diplome: 'License 3 de Mathématiques',
        ecole: 'Université Bretagne Occidentale',
        annee: '2016-2017',
        display: false
      },
      {
        diplome: 'Classe préparatoire aux grandes écoles, filière MP*',
        ecole: 'Lycée Faidherbe, Lille',
        annee: '2014-2016'
      },
      {
        diplome: 'Baccalauréat Scientifique, mention Très Bien',
        ecole: "Lycée Francais Charles de Gaulle, Londres",
        annee: '2014'
      }
    ],
    icone: 'fas fa-graduation-cap'
  },
  bullet_section: [
    {
      label: 'Framework et langages',
      items: [
        'Microsoft Dotnet',
        'Asp.NET - Entity Framework',
        'Angular - Jest, RxJs',
        'SQL',
        'Python'
      ],
      icone: 'fas fa-code'
    },
    {
      label: 'Outils',
      items: [
        'Copilot / Gemini',
        'Jira - Confluence',
        'Service Now',
        'Suite Microsoft Office',
        'Jupyter Notebook',
        'Postman'
      ],
      icone: 'fas fa-tools'
    },
    {
      label: 'Formation',
      items: [
        'Product Owner',
        'Santé Securité au Travail',
        'Equipier de premier intervention',
        'Représentant du personnel'
      ],
      icone: 'fas fa-book-open'
    },
    {
      label: 'Langues',
      items: ['Français', 'Anglais - Bilingue', 'Allemand - Intérmédiaire'],
      icone: 'fas fa-language'
    },
    {
      label: 'Loisirs',
      items: ['Patinage Artistique', 'Foot en salle', 'Cuisine', 'Escape Game'],
      icone: 'fas fa-heart'
    }
  ]
};
