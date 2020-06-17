// For Mentors component
// API will need to be able to support getting mentors grouped by school

const mentors = {
  usc: {
    campus: {
      location: 'Los Angeles, CA',
      blurb:
        'USC advances knowledge, addresses pressing societal needs and creates a university enriched by diverse perspectives where all individuals can flourish.',
      logo_img_url: '',
      facebook_link: '',
      instagram_link: ''
    },
    mentors: [
      {
        image: 'https://react.semantic-ui.com/images/wireframe/image.png',
        name: 'Joel Letro',
        credentials: [
          {
            title: 'BS, Bioengineering and Biomedical Engineering',
            organization: 'UC Berkeley'
          }
        ],
        current_job: 'Director, Optimization at LQ Digital',
        fun_facts: '',
        linkedin_url: 'https://www.linkedin.com/in/joel-letro-7814494a/'
      },
      {
        image: 'http://jessewoo.github.io/images/ismp/kenhsu.jpg',
        name: 'Jerome Gonzaga',
        credentials: [
          {
            title: 'B.S., Civil Engineering',
            organization: 'UC Berkeley'
          },
          {
            title: 'M.S., Project & Construction Management',
            organization: 'UC Berkeley'
          }
        ],
        current_job: 'Associate Construction Project Manager at UC Irvine',
        fun_facts:
          'Loves watermelon and can say “watermelon” in 12 different languages',
        linkedin_url: 'https://www.linkedin.com/in/jerome-gonzaga-eit-pmp/'
      }
    ]
  },
  ucb: {
    campus: {
      location: 'Berkeley, CA',
      blurb:
        'UC Berkeley advances knowledge, addresses pressing societal needs and creates a university enriched by diverse perspectives where all individuals can flourish.',
      logo_img_url: '',
      facebook_link: '',
      instagram_link: ''
    },
    mentors: [
      {
        image: '',
        name: 'Mimi Chen',
        credentials: [
          {
            title: 'B.A., Asian Studies',
            organization: 'UC Berkeley'
          }
        ],
        current_job: 'Marketing Coordinator, Marcus & Millichap',
        fun_facts: 'Knows pi to the 35th digit',
        linkedin_url: 'https://www.linkedin.com/in/minghsichen'
      },
      {
        image: '',
        name: 'Daniel Liu',
        credentials: [
          {
            title: 'B.S. Electrical Engineering & Computer Science',
            organization: 'UC Berkeley'
          }
        ],
        current_job: 'Software Engineer, Splunk Inc.',
        fun_facts: 'Also a wedding pianist for more than 10 weddings',
        linkedin_url: 'https://www.linkedin.com/in/daniel-liu-744a7081/'
      },
      {
        image: '',
        name: 'Marissa Brooks',
        credentials: [
          {
            title: 'B.A. Integrative Biology',
            organization: 'UC Berkeley'
          }
        ],
        current_job: 'Product Surveillance Specialist, Penumbra Inc.',
        fun_facts: 'Will eat anything banana flavored.',
        linkedin_url: ''
      }
    ]
  },
  ucla: {
    campus: {
      location: 'Los Angeles, CA',
      blurb:
        'UCLA advances knowledge, addresses pressing societal needs and creates a university enriched by diverse perspectives where all individuals can flourish.',
      logo_img_url: '',
      facebook_link: '',
      instagram_link: ''
    },
    mentors: [
      {
        image: '',
        name: 'Andrew Chen',
        credentials: [
          {
            title: 'MBA, Marshall School of Business',
            organization: 'USC'
          },
          {
            title: 'BS, Business Administration',
            organization: 'UC Berkeley'
          }
        ],
        current_job: 'Senior Data Analyst, Mothership',
        fun_facts:
          "I love to listen to all kinds of podcasts (politics, public policy, philosophy, and technology), I'm a lifelong Laker fan.",
        linkedin_url: 'https://www.linkedin.com/in/andrewgchen90/'
      },
      {
        image: '',
        name: 'Angela Chen',
        credentials: [
          {
            title: 'PharmD.',
            organization: 'USC'
          },
          {
            title: 'B.S. Biology',
            organization: 'UC Berkeley'
          }
        ],
        current_job: 'Pharmacist, MedWatchers',
        fun_facts: 'I am trilingual (Taiwanese, Mandarin, English)',
        linkedin_url: 'https://www.linkedin.com/in/shen-angela/'
      },
      {
        image: '',
        name: 'Alex Lee',
        credentials: [
          {
            title: 'B.A. Molecular and Cellular Biology',
            organization: 'UC Berkeley'
          }
        ],
        current_job: 'PhD Candidate, UCLA: Molecular and Medical Pharmacology',
        fun_facts:
          'Learning how to cook new dishes from different countries around the world',
        linkedin_url: 'https://www.linkedin.com/in/alexander-lee-b0098862/'
      }
    ]
  },
  uci: {
    campus: {
      location: 'Irvine, CA',
      blurb:
        'UCI advances knowledge, addresses pressing societal needs and creates a university enriched by diverse perspectives where all individuals can flourish.',
      logo_img_url: '',
      facebook_link: '',
      instagram_link: ''
    },
    mentors: [
      {
        image: '',
        name: 'Jonathan Eng',
        credentials: [
          {
            title: 'M.S. Artificial Intelligence',
            organization: 'UC Berkeley'
          },
          {
            title: 'B.S. Computer Science & Business Administration',
            organization: 'UC Berkeley'
          }
        ],
        current_job: 'Senior Machine Learning Engineer, Iterable',
        fun_facts:
          'Once won a chopstick competition where I had to pick out metal marbles from a box.',
        linkedin_url: 'https://www.linkedin.com/in/jwsyeng/'
      },
      {
        image: '',
        name: 'Larry Tan',
        credentials: [
          {
            title: 'M.S. Industrial Engineering and Operations Research',
            organization: 'UC Berkeley'
          },
          {
            title: 'B.S. Industrial Engineering and Operations Research',
            organization: 'UC Berkeley'
          }
        ],
        current_job: 'Senior Data Analyst, DataTree by First American',
        fun_facts: 'Learnd 6 languages and speaks 3 languages fluently',
        linkedin_url: 'https://www.linkedin.com/in/larry-tan-32212348/'
      },
      {
        image: '',
        name: 'Stacy Song',
        credentials: [
          {
            title: 'B.S. Public Health',
            organization: 'UC Berkeley'
          }
        ],
        current_job: 'Technical Writer, HackerOne',
        fun_facts:
          "I'm afraid of monkeys even though I was born in the year of the monkey.",
        linkedin_url: 'https://www.linkedin.com/in/stacyspiva/'
      }
    ]
  },
  uscd: {
    campus: {
      location: 'San Diego, CA',
      blurb:
        'UCSD advances knowledge, addresses pressing societal needs and creates a university enriched by diverse perspectives where all individuals can flourish.',
      logo_img_url: '',
      facebook_link: '',
      instagram_link: ''
    },
    mentors: [
      {
        image: '',
        name: 'Ryan Lathan',
        credentials: [
          {
            title: 'B.S. Economics',
            organization: 'UCSD'
          }
        ],
        current_job: 'UX, UI Engineer, Inseego',
        fun_facts: 'He helped to design this website with his UX skills.',
        linkedin_url: 'https://www.linkedin.com/in/ryan-lathan-a84b1513b/'
      },
      {
        image: '',
        name: 'Douglas Chan',
        credentials: [
          {
            title: 'M.S. Computer Science & Engineering',
            organization: 'UCSD'
          },
          {
            title: 'B.S. Electrical Engineering & Computer Science',
            organization: 'UC Berkeley'
          }
        ],
        current_job: 'Software Engineer, Google',
        fun_facts: 'Used to be an archery instructor',
        linkedin_url: 'https://www.linkedin.com/in/douglaschan32167/'
      },
      {
        image: '',
        name: 'Micaela Trujillo ',
        credentials: [
          {
            title: 'B.S. Mathematics and Linguistics',
            organization: 'UCSD'
          }
        ],
        current_job: 'Quality Assurance Engineer, Procede Software',
        fun_facts: '',
        linkedin_url: 'https://www.linkedin.com/in/micaela-trujillo-3b487710a/'
      }
    ]
  },
  uw: {
    campus: {
      location: 'Seattle, WA',
      blurb:
        'University of Washington advances knowledge, addresses pressing societal needs and creates a university enriched by diverse perspectives where all individuals can flourish.',
      logo_img_url: '',
      facebook_link: '',
      instagram_link: ''
    },
    mentors: [
      {
        image: '',
        name: 'Kevin Limkrailassiri',
        credentials: [
          {
            title: 'PhD, Mechanical Engineering',
            organization: 'UC Berkeley'
          },
          {
            title: 'B.S. Mechanical Engineering',
            organization: 'UC Berkeley'
          }
        ],
        current_job: 'Data Scientist, Neal Analytics',
        fun_facts: 'People say I can eat a ton.',
        linkedin_url:
          'https://www.linkedin.com/in/kevin-limkrailassiri-a949698b/'
      },
      {
        image: '',
        name: 'Howard Noz',
        credentials: [
          {
            title: 'M.S. Biomedical Engineering',
            organization: 'UC Riverside'
          },
          {
            title: 'B.S. Mechanical Engineering',
            organization: 'UC Berkeley'
          }
        ],
        current_job: 'Software Developer, UPS',
        fun_facts:
          "I'm known for being able to imitate certain people so well, I have fooled even the person being imitated that I caught them on camera doing something",
        linkedin_url: 'https://www.linkedin.com/in/howardnoz/'
      },
      {
        image: '',
        name: 'Ana Zhong',
        credentials: [
          {
            title: 'M.Ed. Curriculum & Instruction',
            organization: 'University of Washington'
          },
          {
            title: 'B.A. Applied Linguistics',
            organization: 'UC Los Angeles'
          }
        ],
        current_job:
          'Pre-doctoral Instructor, UW Department of Spanish & Portuguese',
        fun_facts: "Grew up in Panama, so I'm fluent in Spanish",
        linkedin_url: 'https://www.linkedin.com/in/ana-zhong-a6a708105/'
      }
    ]
  },
  gwu: {
    campus: {
      location: 'Washington, DC',
      blurb:
        'The George Washington University advances knowledge, addresses pressing societal needs and creates a university enriched by diverse perspectives where all individuals can flourish.',
      logo_img_url: '',
      facebook_link: '',
      instagram_link: ''
    },
    mentors: [
      {
        image: '',
        name: 'Maggie Hacker',
        credentials: [
          {
            title: 'B.S. Nutrition',
            organization: 'University of Minnesota'
          },
          {
            title: 'Certified TEFL Instructor',
            organization: 'University of Minnesota'
          }
        ],
        current_job: 'Research Administrator, GWU',
        fun_facts:
          'Never lived more than an hour from the town I was born until I moved to China for a year to study Chinese',
        linkedin_url: 'https://www.linkedin.com/in/maggie-hacker/'
      }
    ]
  },
  gmu: {
    campus: {
      location: 'Fairfax, VA',
      blurb:
        'George Mason University advances knowledge, addresses pressing societal needs and creates a university enriched by diverse perspectives where all individuals can flourish.',
      logo_img_url: '',
      facebook_link: '',
      instagram_link: ''
    },
    mentors: [
      {
        image: '',
        name: 'May Huang',
        credentials: [
          {
            title: 'M.Eng. Civil and Environmental Engineering',
            organization: 'UC Berkeley'
          },
          {
            title: 'B.S. Civil and Environmental Engineering',
            organization: 'UC Berkeley'
          },
          {
            title: 'Registered Professional Engineer in CA, DC, VA',
            organization: ''
          }
        ],
        current_job: 'Project Manager, Capital Facilities, County of Fairfax',
        fun_facts: '',
        linkedin_url: 'https://www.linkedin.com/in/may-huang-p-e-4192538/'
      },
      {
        image: '',
        name: 'Xin Huang',
        credentials: [
          {
            title: 'B.S. Electrical Engineering',
            organization: 'University of Washington'
          }
        ],
        current_job:
          'Database Administrator, Contractor for the Federal Reserve Bank',
        fun_facts: '',
        linkedin_url: 'https://www.linkedin.com/in/xin-z-huang/'
      }
    ]
  },
  uom: {
    campus: {
      location: 'College Park, MD',
      blurb:
        'University of Maryland advances knowledge, addresses pressing societal needs and creates a university enriched by diverse perspectives where all individuals can flourish.',
      logo_img_url: '',
      facebook_link: '',
      instagram_link: ''
    },
    mentors: [
      {
        image: '',
        name: 'Angela Kim',
        credentials: [
          {
            title: 'Master in Professional Accounting',
            organization: 'UT Austin'
          },
          {
            title: 'B.S. Mathematics & B.S. Economics',
            organization: 'UT Austin'
          }
        ],
        current_job: 'Accountant, University System of Maryland',
        fun_facts: '',
        linkedin_url: 'https://www.linkedin.com/in/angela-kim-87b9a696/'
      },
      {
        image: '',
        name: 'David Kim',
        credentials: [
          {
            title: 'B.S. Microbiology',
            organization: 'UT Austin'
          }
        ],
        current_job:
          'Software Quality Assurance Tester, Omnitech Solutions, Inc.',
        fun_facts: 'I was a cheerleader in high school.',
        linkedin_url: 'https://www.linkedin.com/in/minjaikim/'
      }
    ]
  },
  uta: {
    campus: {
      location: 'Austin, TX',
      blurb:
        'UT Austin advances knowledge, addresses pressing societal needs and creates a university enriched by diverse perspectives where all individuals can flourish.',
      logo_img_url: '',
      facebook_link: '',
      instagram_link: ''
    },
    mentors: [
      {
        image: '',
        name: 'Annie Glass',
        credentials: [
          {
            title: 'B.S. Molecular Environmental Biology',
            organization: 'UC Berkeley'
          }
        ],
        current_job: 'Agile Coach, Aceable',
        fun_facts: '',
        linkedin_url: 'https://www.linkedin.com/in/anniehglass/'
      },
      {
        image: '',
        name: 'Wesker Lei',
        credentials: [
          {
            title: 'Ph.D. Materials Science',
            organization: 'UT Austin'
          },
          {
            title: 'B.S. Chemistry',
            organization: 'UC Berkeley'
          }
        ],
        current_job: 'Data Science Analyst, Revionics',
        fun_facts: '',
        linkedin_url: 'https://www.linkedin.com/in/kin-wesker-lei/'
      },
      {
        image: '',
        name: 'Henry Chen',
        credentials: [
          {
            title: 'MBA General Management',
            organization: 'UT Austin'
          },
          {
            title: 'B.S. Electrical Engineering',
            organization: 'UC Berkeley'
          }
        ],
        current_job: 'Program Director, IBM',
        fun_facts:
          "I love trying all kinds of new foods--I just don't eat carbs!",
        linkedin_url: 'https://www.linkedin.com/in/henrychen/'
      }
    ]
  },
  sac: {
    campus: {
      location: 'Sacramento, CA',
      blurb:
        'Sac State advances knowledge, addresses pressing societal needs and creates a university enriched by diverse perspectives where all individuals can flourish.',
      logo_img_url: '',
      facebook_link: '',
      instagram_link: ''
    },
    mentors: [
      {
        image: '',
        name: 'Gary Chang',
        credentials: [
          {
            title: 'JD',
            organization: ''
          }
        ],
        current_job: 'Attorney III, California Department of Public Health',
        fun_facts:
          'Once upon a time I was good at math and science (Neurobiology major in college!).',
        linkedin_url: 'https://www.linkedin.com/in/gary-chang-5848281/'
      },
      {
        image: '',
        name: 'Angel Fong',
        credentials: [
          {
            title: 'B.S. Environmental Science',
            organization: 'UC Davis'
          },
          {
            title: 'minored Geographic information system',
            organization: 'UC Davis'
          }
        ],
        current_job:
          'Environmental Scientist, California Environmental Protection Agency ',
        fun_facts: 'I lived in Japan for 9 years. ',
        linkedin_url: 'https://www.linkedin.com/in/angel-fong-161baa112/'
      }
    ]
  },
  ucd: {
    campus: {
      location: 'Davis, CA',
      blurb:
        'UC Davis advances knowledge, addresses pressing societal needs and creates a university enriched by diverse perspectives where all individuals can flourish.',
      logo_img_url: '',
      facebook_link: '',
      instagram_link: ''
    },
    mentors: [
      {
        image: '',
        name: 'Sandra Lee',
        credentials: [
          {
            title: 'MBA',
            organization: 'UC Berkeley, Haas School of Business'
          },
          {
            title: 'BA Economics',
            organization: 'UC Berkeley'
          },
          {
            title: 'CFA Level 2',
            organization: 'CFA Institute'
          }
        ],
        current_job: 'Senior Financial Analyst, TechnipFMC',
        fun_facts: '',
        linkedin_url: 'https://www.linkedin.com/in/sandra-kim-lee-890a5413/'
      },
      {
        image: '',
        name: 'Conrad Chu',
        credentials: [
          {
            title: 'MFA Academy of Art University',
            organization: 'San Francisco'
          },
          {
            title: 'B.S. Electrical Engineering Computer Science',
            organization: 'UC Berkeley'
          }
        ],
        current_job:
          'Venture Capital Investor, e.ventures CTO/Co-founder, Munchery',
        fun_facts: 'My first job was making movies for Hollywood',
        linkedin_url: 'https://www.linkedin.com/in/conradchu/'
      }
    ]
  },
  umn: {
    campus: {
      location: 'Minneapolis, MN',
      blurb:
        'University of Minnesota advances knowledge, addresses pressing societal needs and creates a university enriched by diverse perspectives where all individuals can flourish.',
      logo_img_url: '',
      facebook_link: '',
      instagram_link: ''
    },
    mentors: [
      {
        image: '',
        name: 'Esther Zhu',
        credentials: [
          {
            title: 'B.S. Management Information Systems(MIS) & Accounting',
            organization: 'University of Minnesota-Carlson School of Management'
          }
        ],
        current_job:
          'Senior Risk Advisory Consultant at EY, Sustainability Advocate',
        fun_facts: '',
        linkedin_url: 'https://www.linkedin.com/in/mengting-esther-zhu/'
      },
      {
        image: '',
        name: 'Ian Beh',
        credentials: [
          {
            title: 'B.S. Computer Science',
            organization: 'University of Minnesota'
          }
        ],
        current_job: 'Developer, Affinity Plus Credit Union',
        fun_facts: 'I enjoy playing ultimate frisbee!',
        linkedin_url: 'https://www.linkedin.com/in/ian-beh-6a299b154/'
      },
      {
        image: '',
        name: 'Jon Fu',
        credentials: [
          {
            title: 'M.S. Interactive Design',
            organization: 'University of Minnesota'
          },
          {
            title: 'B.S. Visual Communication',
            organization: 'UC Davis'
          }
        ],
        current_job: 'UI/UX Designer, Target',
        fun_facts:
          'I am addicted to iced coffee, but absolutely cannot stand hot coffee...even when it is negative degrees outside.',
        linkedin_url: 'https://www.linkedin.com/in/jonathanefu/'
      }
    ]
  },
  occ: {
    campus: {
      location: 'Costa Mesa, CA',
      blurb:
        'OCC advances knowledge, addresses pressing societal needs and creates a university enriched by diverse perspectives where all individuals can flourish.',
      logo_img_url: '',
      facebook_link: '',
      instagram_link: ''
    },
    mentors: [
      {
        image: '',
        name: 'Sharon Tung',
        credentials: [
          {
            title: 'M.S. Nutrition Sciences',
            organization: 'Loma Linda University'
          },
          {
            title: 'B.S. Nutrition Sciences',
            organization: 'UC Berkeley'
          }
        ],
        current_job: 'Clinical Dietitian, Iron Chef',
        fun_facts: '',
        linkedin_url: 'https://www.linkedin.com/in/sharon-tung-ms-rdn-18b37792/'
      },
      {
        image: '',
        name: 'Eileen Salvador',
        credentials: [
          {
            title: 'B.S. Business Administration',
            organization: 'UC Riverside'
          }
        ],
        current_job: 'Operations Support Specialist at Glidewell Dental',
        fun_facts: '',
        linkedin_url: 'https://www.linkedin.com/in/eileen-hong-a95189101/'
      },
      {
        image: '',
        name: 'David Tung',
        credentials: [
          {
            title: 'M.S. Electrical Engineering',
            organization: 'UC Berkeley'
          },
          {
            title: 'B.S. Electrical Engineering and Computer Science',
            organization: 'UC Berkeley'
          }
        ],
        current_job: 'Senior Software Engineer at Tanium',
        fun_facts: '',
        linkedin_url: 'https://www.linkedin.com/in/david-tung-087b1168/'
      }
    ]
  }
};

export default mentors;
