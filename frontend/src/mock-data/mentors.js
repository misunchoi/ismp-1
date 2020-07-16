// For Mentors component
// API will need to be able to support getting mentors grouped by school
function getMentorImage(imageName) {
  return (
    'https://ismp-us-east-1.s3.amazonaws.com/mentors/headshots/' + imageName
  );
}

//function createMentorJson(
//  name,
//  linkedin_url = '',
//  image = getMentorImage('Empty-Female_500x500.jpg'),
//  credentials = [],
//  current_job = { company: 'some company', position: 'some position' },
//  fun_facts = '',
//) {
//  return {
//    image: image,
//    name: name,
//    credentials: credentials,
//    current_job: current_job,
//    fun_facts: fun_facts,
//    linkedin_url: linkedin_url,
//  };
//}

function createCampusJson(
  name,
  location = '',
  blurb = '',
  logo_img_url = '',
  facebook_link = '',
  instagram_link = ''
) {
  return {
    name: name,
    location: location,
    blurb: blurb,
    logo_img_url: logo_img_url,
    facebook_link: facebook_link,
    instagram_link: instagram_link
  };
}
const mentors = {
  usc: {
    campus: {
      name: 'University of Southern California',
      location: 'Los Angeles, CA',
      blurb:
        'The University of Southern California is one of the world’s leading private research universities. An anchor institution in Los Angeles, a global center for arts, technology and international business, USC’s diverse curricular offerings provide extensive opportunities for interdisciplinary study and collaboration with leading researchers in highly advanced learning environments.',
      logo_img_url: '',
      facebook_link: '',
      instagram_link: ''
    },
    mentors: [
      {
        image: getMentorImage('Irene-Thomas_500x500.jpg'),
        name: 'Irene Thomas',
        credentials: [
          {
            title: 'M.S. Structural Engineering, Mechanics, and Materials',
            organization: 'UC Berkeley'
          },
          {
            title: 'B.S. Civil Engineering',
            organization: 'UC Berkeley'
          }
        ],
        current_job: {
          company: 'Arup',
          position: 'Senior Structural Engineer'
        },
        fun_facts: 'Been to over 15 countries',
        linkedin_url: 'https://www.linkedin.com/in/irene-heung-369893ba/'
      },
      {
        image: getMentorImage('Joel-Letro_500x500.jpg'),
        name: 'Joel Letro',
        credentials: [
          {
            title: 'B.S., Bioengineering and Biomedical Engineering',
            organization: 'UC Berkeley'
          }
        ],
        current_job: {
          company: 'LQ Digital',
          position: 'Director, Optimization'
        },
        fun_facts: '',
        linkedin_url: 'https://www.linkedin.com/in/joel-letro-7814494a/'
      },
      {
        image: getMentorImage('Jerome-Gonzaga_500x500.jpg'),
        name: 'Jerome Gonzaga',
        credentials: [
          {
            title: 'M.S., Project & Construction Management',
            organization: 'UC Berkeley'
          },
          {
            title: 'B.S., Civil Engineering',
            organization: 'UC Berkeley'
          }
        ],
        current_job: {
          company: 'UC Irvine',
          position: 'Associate Construction Project Manager'
        },
        fun_facts:
          'Loves watermelon and can say “watermelon” in 12 different languages',
        linkedin_url: 'https://www.linkedin.com/in/jerome-gonzaga-eit-pmp/'
      }
    ]
  },
  ucb: {
    campus: {
      name: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      blurb:
        'The University of California was founded in 1868, born out of a vision in the State Constitution of a university that would "contribute even more than California\'s gold to the glory and happiness of advancing generations."',
      logo_img_url: '',
      facebook_link: '',
      instagram_link: ''
    },
    mentors: [
      {
        image: getMentorImage('Mimi-Chen_500x500.jpg'),
        name: 'Mimi Chen',
        credentials: [
          {
            title: 'B.A., Asian Studies',
            organization: 'UC Berkeley'
          }
        ],
        current_job: {
          company: 'Marcus & Millichap',
          position: 'Marketing Coordinator'
        },
        fun_facts: 'Knows pi to the 35th digit',
        linkedin_url: 'https://www.linkedin.com/in/minghsichen'
      },
      {
        image: getMentorImage('Daniel-Liu_500x500.jpg'),
        name: 'Daniel Liu',
        credentials: [
          {
            title: 'B.S. Electrical Engineering & Computer Science',
            organization: 'UC Berkeley'
          }
        ],
        current_job: {
          company: 'Splunk Inc.',
          position: 'Software Engineer'
        },
        fun_facts: 'Also a wedding pianist for more than 10 weddings',
        linkedin_url: 'https://www.linkedin.com/in/daniel-liu-744a7081/'
      },
      {
        image: getMentorImage('Marissa-Brooks_500x500.jpg'),
        name: 'Marissa Brooks',
        credentials: [
          {
            title: 'B.A. Integrative Biology',
            organization: 'UC Berkeley'
          }
        ],
        current_job: {
          company: 'Penumbra Inc.',
          position: 'Product Surveillance Specialist'
        },
        fun_facts: 'Will eat anything banana flavored.',
        linkedin_url: ''
      },
      {
        image: getMentorImage('Nancy-Huang_500x500.jpg'),
        name: 'Nancy Huang',
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
        current_job: {
          company: 'Honor Home Care',
          position: 'Data Analyst'
        },
        fun_facts:
          "I'm ambidextrous - helpful when I need to split different tasks between 2 hands (e.g. right hand for fork, left hand for knife)",
        linkedin_url: 'https://www.linkedin.com/in/nancy-huang94'
      }
    ]
  },
  ucla: {
    campus: {
      name: 'University of California, Los Angeles',
      location: 'Los Angeles, CA',
      blurb:
        "We doubt the critics, reject the status quo and see opportunity in dissatisfaction. Our campus, faculty and students are driven by optimism. It is not naïve; it is essential. And it has fueled every accomplishment, allowing us to redefine what's possible, time after time. This can-do perspective has brought us 14 Nobel Prizes, 14 faculty MacArthur Fellows, 118 NCAA titles and more Olympic medals than most nations. Our faculty and alumni helped create the Internet and pioneered reverse osmosis. And more than 140 companies have been created based on technology developed at UCLA.",
      logo_img_url: '',
      facebook_link: '',
      instagram_link: ''
    },
    mentors: [
      {
        image: getMentorImage('Andrew-Chen_500x500.jpg'),
        name: 'Andrew Chen',
        credentials: [
          {
            title: 'M.S., Marshall School of Business',
            organization: 'USC'
          },
          {
            title: 'B.S., Business Administration',
            organization: 'UC Berkeley'
          }
        ],
        current_job: {
          company: 'Mothership',
          position: 'Senior Data Analyst'
        },
        fun_facts:
          "I love to listen to all kinds of podcasts (politics, public policy, philosophy, and technology), I'm a lifelong Laker fan.",
        linkedin_url: 'https://www.linkedin.com/in/andrewgchen90/'
      },
      {
        image: getMentorImage('Angela-Chen_500x500.jpg'),
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
        current_job: {
          company: 'MedWatchers',
          position: 'Pharmacist'
        },
        fun_facts: 'I am trilingual (Taiwanese, Mandarin, English)',
        linkedin_url: 'https://www.linkedin.com/in/shen-angela/'
      },
      {
        image: getMentorImage('Alex-Lee_500x500.jpg'),
        name: 'Alex Lee',
        credentials: [
          {
            title: 'B.A. Molecular and Cellular Biology',
            organization: 'UC Berkeley'
          }
        ],
        current_job: {
          company: 'UCLA: Molecular and Medical Pharmacology',
          position: 'PhD Candidate'
        },
        fun_facts:
          'Learning how to cook new dishes from different countries around the world',
        linkedin_url: 'https://www.linkedin.com/in/alexander-lee-b0098862/'
      }
    ]
  },
  uci: {
    campus: {
      name: 'University of California, Irvine',
      location: 'Irvine, CA',
      blurb:
        'In 1965, the University of California, Irvine was founded with a mission to catalyze the community and enhance lives through rigorous academics, cutting-edge research, and dedicated public service. Today, we draw on the unyielding spirit of our pioneering faculty, staff and students who arrived on campus with a dream to inspire change and generate new ideas. We believe that true progress is made when different perspectives come together to advance our understanding of the world around us. And we enlighten our communities and point the way to a better future. At UCI, we shine brighter.',
      logo_img_url: '',
      facebook_link: '',
      instagram_link: ''
    },
    mentors: [
      {
        image: getMentorImage('Jon-Eng_500x500.jpg'),
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
        current_job: {
          company: 'Iterable',
          position: 'Senior Machine Learning Engineer'
        },
        fun_facts:
          'Once won a chopstick competition where I had to pick out metal marbles from a box.',
        linkedin_url: 'https://www.linkedin.com/in/jwsyeng/'
      },
      {
        image: getMentorImage('Larry-Tan_500x500.jpg'),
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
        current_job: {
          company: 'DataTree by First American',
          position: 'Senior Data Analyst'
        },
        fun_facts: 'Learned 6 languages and speaks 3 languages fluently',
        linkedin_url: 'https://www.linkedin.com/in/larry-tan-32212348/'
      },
      // TODO: Picture
      // createMentorJson("Raymond Yan"),
      {
        image: getMentorImage('Stacy-Spiva_500x500.jpg'),
        name: 'Stacy Song',
        credentials: [
          {
            title: 'B.S. Public Health',
            organization: 'UC Berkeley'
          }
        ],
        current_job: {
          company: 'HackerOne',
          position: 'Technical Writer'
        },
        fun_facts:
          "I'm afraid of monkeys even though I was born in the year of the monkey.",
        linkedin_url: 'https://www.linkedin.com/in/stacyspiva/'
      }
    ]
  },
  ucsd: {
    campus: {
      name: 'University of California, San Diego',
      location: 'San Diego, CA',
      blurb:
        'Recognized as one of the top 15 research universities worldwide, our culture of collaboration sparks discoveries that advance society and drive economic impact. Everything we do is dedicated to ensuring our students have the opportunity to become changemakers, equipped with the multidisciplinary tools needed to accelerate answers to our world’s most pressing issues.',
      logo_img_url: '',
      facebook_link: '',
      instagram_link: ''
    },
    mentors: [
      {
        image: getMentorImage('Ryan-Lathan_500x500.jpg'),
        name: 'Ryan Lathan',
        credentials: [
          {
            title: 'B.S. Economics',
            organization: 'UCSD'
          }
        ],
        current_job: {
          company: 'Inseego',
          position: 'UX, UI Engineer'
        },
        fun_facts: 'He helped to design this website with his UX skills.',
        linkedin_url: 'https://www.linkedin.com/in/ryan-lathan-a84b1513b/'
      },
      {
        image: getMentorImage('Douglas-Chan_500x500.jpg'),
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
        current_job: {
          company: 'Google',
          position: 'Software Engineer'
        },
        fun_facts: 'Used to be an archery instructor',
        linkedin_url: 'https://www.linkedin.com/in/douglaschan32167/'
      }
      // TODO: Picture
      // {
      //   image: getMentorImage('Empty-Female_500x500.jpg'),
      //   name: 'Micaela Trujillo',
      //   credentials: [
      //     {
      //       title: 'B.S. Mathematics and Linguistics',
      //       organization: 'UCSD'
      //     }
      //   ],
      //   current_job: {
      //     company: 'Procede Software',
      //     position: 'Quality Assurance Engineer'
      //   },
      //   fun_facts: '',
      //   linkedin_url: 'https://www.linkedin.com/in/micaela-trujillo-3b487710a/'
      // }
    ]
  },
  uw: {
    campus: {
      name: 'University of Washington',
      location: 'Seattle, WA',
      blurb:
        'The UW is one of the world’s preeminent public universities. Our impact on individuals, our region and the world is profound — whether we are launching young people into a boundless future or confronting the grand challenges of our time through undaunted research and scholarship. Ranked No. 14 in the world on the 2018 Academic Ranking of World Universities, the UW educates more than 54,000 students annually. We turn ideas into impact and transform lives and our world.',
      logo_img_url: '',
      facebook_link: '',
      instagram_link: ''
    },
    mentors: [
      {
        image: getMentorImage('Kevin-Limkrailassiri_500x500.jpg'),
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
        current_job: {
          company: 'Neal Analytics',
          position: 'Data Scientist'
        },
        fun_facts: 'People say I can eat a ton.',
        linkedin_url:
          'https://www.linkedin.com/in/kevin-limkrailassiri-a949698b/'
      },
      // TODO: Picture
      // {
      //   image: getMentorImage('Empty-Male_500x500.jpg'),
      //   name: 'Howard Noz',
      //   credentials: [
      //     {
      //       title: 'M.S. Biomedical Engineering',
      //       organization: 'UC Riverside'
      //     },
      //     {
      //       title: 'B.S. Mechanical Engineering',
      //       organization: 'UC Berkeley'
      //     }
      //   ],
      //   current_job: {
      //     company: 'UPS',
      //     position: 'Software Developer'
      //   },
      //   fun_facts:
      //     "I'm known for being able to imitate certain people so well, I have fooled even the person being imitated that I caught them on camera doing something",
      //   linkedin_url: 'https://www.linkedin.com/in/howardnoz/'
      // },
      {
        image: getMentorImage('Ana-Zhong_500x500.jpg'),
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
        current_job: {
          company: 'UW Department of Spanish & Portuguese',
          position: 'Pre-doctoral Instructor'
        },
        fun_facts: "Grew up in Panama, so I'm fluent in Spanish",
        linkedin_url: 'https://www.linkedin.com/in/ana-zhong-a6a708105/'
      }
    ]
  },
  // TODO: No mentors with pictures
  // diablo_valley_college: {
  //   campus: {
  //     name: 'Diablo Valley College',
  //     location: 'Pleasant Hill,CA ',
  //     blurb:
  //       'Since our capital city’s first days, people have traveled here for many reasons. They come to explore the past and to chart new futures. They come to ask questions and to seek expert answers. They come to start discourse and to remember in silence. They come to demand change and to be that change. They come to grow. They come to learn. They come to make history and join the ranks alongside many prominent GW alumni.',
  //     logo_img_url: '',
  //     facebook_link: '',
  //     instagram_link: ''
  //   },
  //   mentors: [
  //     // createMentorJson("Larry Tung", 'https://www.linkedin.com/in/tunglarry/'),
  //     // createMentorJson("Jenny Young")
  //   ]
  // },
  gwu: {
    campus: {
      name: 'The George Washington University',
      location: 'Washington, DC',
      blurb:
        'Since our capital city’s first days, people have traveled here for many reasons. They come to explore the past and to chart new futures. They come to ask questions and to seek expert answers. They come to start discourse and to remember in silence. They come to demand change and to be that change. They come to grow. They come to learn. They come to make history and join the ranks alongside many prominent GW alumni.',
      logo_img_url: '',
      facebook_link: '',
      instagram_link: ''
    },
    mentors: [
      {
        image: getMentorImage('Maggie-Hacker_500x500.jpg'),
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
        current_job: {
          company: 'GWU',
          position: 'Research Administrator'
        },
        fun_facts:
          'Never lived more than an hour from the town I was born until I moved to China for a year to study Chinese',
        linkedin_url: 'https://www.linkedin.com/in/maggie-hacker/'
      }
    ]
  },
  gmu: {
    campus: {
      name: 'The George Mason University',
      location: 'Fairfax, VA',
      blurb:
        "Our identity was forged in 1972 on Virginia's strong ideals of academic excellence and service. Today, that spirit energizes us as a leader in scholarship and research; preparing graduates to meet the complex needs of a rapidly changing world.",
      logo_img_url: '',
      facebook_link: '',
      instagram_link: ''
    },
    mentors: [
      {
        image: getMentorImage('May-Huang_500x500.jpg'),
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
        current_job: {
          company: 'County of Fairfax',
          position: 'Project Manager, Capital Facilities'
        },
        fun_facts: '',
        linkedin_url: 'https://www.linkedin.com/in/may-huang-p-e-4192538/'
      },
      {
        image: getMentorImage('Xin-Huang_500x500.jpg'),
        name: 'Xin Huang',
        credentials: [
          {
            title: 'B.S. Electrical Engineering',
            organization: 'University of Washington'
          }
        ],
        current_job: {
          company: 'Federal Reserve Bank',
          position: 'Database Administrator'
        },
        fun_facts: '',
        linkedin_url: 'https://www.linkedin.com/in/xin-z-huang/'
      },
      {
        image: getMentorImage('Wongwaree-Chen_500x500.jpg'),
        name: 'Wongwaree "Arie" Chen',
        credentials: [
          {
            title: 'B.A. Cognitive Science',
            organization: 'UC Berkeley'
          }
        ],
        current_job: {
          company: 'Progammer Analyst',
          position: 'County of Fairfax'
        },
        fun_facts: 'I love to cook and I cook to destress.',
        linkedin_url: 'https://www.linkedin.com/in/wongwaree-c-504b31144/'
      },
      {
        image: getMentorImage('Philip-Chen_500x500.jpg'),
        name: 'Philip Chen',
        credentials: [
          {
            title: 'B.A. Architecture',
            organization: 'UC Berkeley'
          }
        ],
        current_job: {
          company: 'U.S. Army Corps of Engineers',
          position: 'Project Engineer'
        },
        fun_facts:
          'Has never been to China even though both his parents were born there.',
        linkedin_url: 'https://www.linkedin.com/in/philip-chen-03a22331/'
      }
    ]
  },
  uom: {
    campus: {
      name: 'University of Maryland, College Park',
      location: 'College Park, MD',
      blurb:
        "The University of Maryland, College Park is the state's flagship university and one of the nation's preeminent public research universities. A global leader in research, entrepreneurship and innovation, the university is home to more than 41,000 students, 14,000 faculty and staff, and 377,000 alumni all dedicated to the pursuit of Fearless Ideas. Located just outside Washington, D.C., we discover and share new knowledge every day through our renowned research enterprise and programs in academics, the arts and athletics. And we are committed to social entrepreneurship as the nation’s first “Do Good” campus.",
      logo_img_url: '',
      facebook_link: '',
      instagram_link: ''
    },
    mentors: [
      {
        image: getMentorImage('Angela-Kim_500x500.jpg'),
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
        current_job: {
          company: 'University System of Maryland',
          position: 'Accountant'
        },
        fun_facts: '',
        linkedin_url: 'https://www.linkedin.com/in/angela-kim-87b9a696/'
      },
      {
        image: getMentorImage('David-Kim_500x500.jpg'),
        name: 'David Kim',
        credentials: [
          {
            title: 'B.S. Microbiology',
            organization: 'UT Austin'
          }
        ],
        current_job: {
          company: 'Omnitech Solutions, Inc.',
          position: 'Software Quality Assurance Tester'
        },
        fun_facts: 'I was a cheerleader in high school.',
        linkedin_url: 'https://www.linkedin.com/in/minjaikim/'
      }
    ]
  },
  uta: {
    campus: {
      name: 'University of Texas, Austin',
      location: 'Austin, TX',
      blurb:
        'The University of Texas at Austin, founded in 1883, ranks among the 40 best universities in the world. It supports some 51,000 diverse students with top national programs across 18 colleges and schools. And as Texas’ leading research university, UT attracts more than $650 million annually for discovery.',
      logo_img_url: '',
      facebook_link: '',
      instagram_link: ''
    },
    mentors: [
      {
        image: getMentorImage('Annie-Glass_500x500.jpg'),
        name: 'Annie Glass',
        credentials: [
          {
            title: 'B.S. Molecular Environmental Biology',
            organization: 'UC Berkeley'
          }
        ],
        current_job: {
          company: 'Aceable',
          position: 'Agile Coach'
        },
        fun_facts: '',
        linkedin_url: 'https://www.linkedin.com/in/anniehglass/'
      },
      {
        image: getMentorImage('Wesker-Lei_500x500.jpg'),
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
        current_job: {
          company: 'Revionics',
          position: 'Data Science Analyst'
        },
        fun_facts: '',
        linkedin_url: 'https://www.linkedin.com/in/kin-wesker-lei/'
      },
      {
        image: getMentorImage('Henry-Chen_500x500.jpg'),
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
        current_job: {
          company: 'IBM',
          position: 'Program Director'
        },
        fun_facts:
          "I love trying all kinds of new foods--I just don't eat carbs!",
        linkedin_url: 'https://www.linkedin.com/in/henrychen/'
      }
      // createMentorJson("Stephanie Lei"),
    ]
  },
  sac: {
    campus: {
      name: 'California State University, Sacramento',
      location: 'Sacramento, CA',
      blurb:
        'We are California’s capital university, providing world-class, affordable education in the political, cultural, and economic heart of the Golden State. We are a recognized leader in education, innovation, and engagement, dedicated to the belief that there are no limits to our students’ potential for excellence and success. We are powering the capital region though groundbreaking partnerships and more than 230,000 proud Hornet alumni. We are a vibrant and diverse community, united by our shared intellectual curiosity, commitment to improving the world around us, and passion for redefining the possible.',
      logo_img_url: '',
      facebook_link: '',
      instagram_link: ''
    },
    mentors: [
      {
        image: getMentorImage('Gary-Chang_500x500.jpg'),
        name: 'Gary Chang',
        credentials: [
          {
            title: 'JD',
            organization: 'UC Davis'
          }
        ],
        current_job: {
          company: 'California Department of Public Health',
          position: 'Attorney III'
        },
        fun_facts:
          'Once upon a time I was good at math and science (Neurobiology major in college!).',
        linkedin_url: 'https://www.linkedin.com/in/gary-chang-5848281/'
      },
      {
        image: getMentorImage('Angel-Fong_500x500.jpg'),
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
        current_job: {
          company: 'California Environmental Protection Agency',
          position: 'Environmental Scientist'
        },
        fun_facts: 'I lived in Japan for 9 years. ',
        linkedin_url: 'https://www.linkedin.com/in/angel-fong-161baa112/'
      }
    ]
  },
  ucd: {
    campus: {
      name: 'University of California, Davis',
      location: 'Davis, CA',
      blurb:
        'UC Davis is the home of the Aggies — go-getters, change makers and problem solvers who make their mark at one of the top public universities in the United States. Since we first opened in 1908, we’ve been known for standout academics, sustainability and Aggie Pride as well as valuing the Northern California lifestyle. These themes are woven into our 100-plus-year history and our reputation for solving problems related to food, health, the environment and society.',
      logo_img_url: '',
      facebook_link: '',
      instagram_link: ''
    },
    mentors: [
      {
        image: getMentorImage('Sandra-Lee_500x500.jpg'),
        name: 'Sandra Lee',
        credentials: [
          {
            title: 'MBA',
            organization: 'UC Berkeley, Haas School of Business'
          },
          {
            title: 'B.A. Economics',
            organization: 'UC Berkeley'
          },
          {
            title: 'CFA Level 2',
            organization: 'CFA Institute'
          }
        ],
        current_job: {
          company: 'TechnipFMC',
          position: 'Senior Financial Analyst'
        },
        fun_facts: '',
        linkedin_url: 'https://www.linkedin.com/in/sandra-kim-lee-890a5413/'
      },
      {
        image: getMentorImage('Conrad-Chu_500x500.jpg'),
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
        current_job: {
          company: 'e.ventures / Munchery',
          position: 'Venture Capital Investor / CTO/Co-founder'
        },
        fun_facts: 'My first job was making movies for Hollywood',
        linkedin_url: 'https://www.linkedin.com/in/conradchu/'
      },
      // createMentorJson("Lee Yang"),
      {
        image: getMentorImage('Madelyn-Lam_500x500.jpg'),
        name: 'Madelyn Lam',
        credentials: [
          {
            title: 'B.S. Computer Science',
            organization: 'Sacramento State University'
          }
        ],
        current_job: {
          company: 'CALpers',
          position: 'Lead, Senior Developer'
        },
        fun_facts: '',
        linkedin_url: 'https://www.linkedin.com/in/madelyn-bachiller-78919863/'
      }
    ]
  },
  umn: {
    campus: {
      name: 'University of Minnesota, Twin Cities',
      location: 'Minneapolis, MN',
      blurb:
        'The flagship University of Minnesota Twin Cities is the state’s land-grant university and one of the most prestigious public research universities in the nation. Our 3,900 faculty include members of the National Academy of Sciences, the National Academy of Engineering, and the Institute of Medicine, plus the American Academy of Arts and Sciences, among other bodies. Current and former faculty have won Guggenheim Fellowships, MacArthur Fellowships (“genius grants"), Nobel Prizes, and other significant honors.',
      logo_img_url: '',
      facebook_link: '',
      instagram_link: ''
    },
    mentors: [
      {
        image: getMentorImage('Esther-Zhu_500x500.jpg'),
        name: 'Esther Zhu',
        credentials: [
          {
            title: 'B.S. Management Information Systems(MIS) & Accounting',
            organization: 'University of Minnesota-Carlson School of Management'
          }
        ],
        current_job: {
          company: 'EY, Sustainability Advocate',
          position: 'Senior Risk Advisory Consultant'
        },
        fun_facts: '',
        linkedin_url: 'https://www.linkedin.com/in/mengting-esther-zhu/'
      },
      {
        image: getMentorImage('Ian-Beh_500x500.jpg'),
        name: 'Ian Beh',
        credentials: [
          {
            title: 'B.S. Computer Science',
            organization: 'University of Minnesota'
          }
        ],
        current_job: {
          company: 'Affinity Plus Credit Union',
          position: 'Developer'
        },
        fun_facts: 'I enjoy playing ultimate frisbee!',
        linkedin_url: 'https://www.linkedin.com/in/ian-beh-6a299b154/'
      },
      {
        image: getMentorImage('Jon-Fu_500x500.jpg'),
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
        current_job: {
          company: 'Target',
          position: 'UI/UX Designer'
        },
        fun_facts:
          'I am addicted to iced coffee, but absolutely cannot stand hot coffee...even when it is negative degrees outside.',
        linkedin_url: 'https://www.linkedin.com/in/jonathanefu/'
      }
    ]
  },
  occ: {
    campus: {
      name: 'Orange Coast College',
      location: 'Costa Mesa, CA',
      blurb:
        'Orange Coast College (OCC) is a public community college in Costa Mesa in Orange County, California. It was founded in 1947, with its first classes opening in the fall of 1948. It provides Associate of Art and Associate of Science degrees, certificates of achievement, and lower-division classes transferable to other colleges and universities. The school enrolls approximately 24,000 undergraduate students. In terms of population size, Orange Coast College is the third largest college in Orange County.',
      logo_img_url: '',
      facebook_link: '',
      instagram_link: ''
    },
    mentors: [
      {
        image: getMentorImage('Sharon-Tung_500x500.jpg'),
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
        current_job: {
          company: 'Iron Chef',
          position: 'Clinical Dietitian'
        },
        fun_facts: '',
        linkedin_url: 'https://www.linkedin.com/in/sharon-tung-ms-rdn-18b37792/'
      },
      {
        image: getMentorImage('Eileen-Salvador_500x500.jpg'),
        name: 'Eileen Salvador',
        credentials: [
          {
            title: 'B.S. Business Administration',
            organization: 'UC Riverside'
          }
        ],
        current_job: {
          company: 'Glidewell Dental',
          position: 'Operations Support Specialist'
        },
        fun_facts: '',
        linkedin_url: 'https://www.linkedin.com/in/eileen-hong-a95189101/'
      },
      {
        image: getMentorImage('David-Tung_500x500.jpg'),
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
        current_job: {
          company: 'Tanium',
          position: 'Senior Software Engineer'
        },
        fun_facts: '',
        linkedin_url: 'https://www.linkedin.com/in/david-tung-087b1168/'
      }
    ]
  },
  unc: {
    campus: createCampusJson('UNC Chapel Hill'),
    mentors: [
      {
        image: getMentorImage('Connie-Xiong_500x500.jpg'),
        name: 'Connie Xiong',
        credentials: [
          {
            title: 'M.S. Environment Management',
            organization: 'Duke University'
          },
          {
            title: 'B.S. Environmental Science, UC San Diego',
            organization: 'UC San Diego'
          }
        ],
        current_job: {
          company: '',
          position: ''
        },
        fun_facts: 'I love spicy food including hot pot'
      }
      // createMentorJson("Justin Yu"),
      // createMentorJson("Linda Yu"),
    ]
  },
  rutgers: {
    campus: createCampusJson('Rutgers'),
    mentors: [
      {
        image: getMentorImage('Matthew-Sallady_500x500.jpg'),
        name: 'Matthew Sallady',
        credentials: [
          {
            title: 'M.D.',
            organization: 'Western University'
          },
          {
            title: 'B.S. Biology',
            organization: 'UC Riverside'
          }
        ],
        current_job: {
          company: 'Hunterdon Medical Center',
          position: 'Medical Resident'
        },
        fun_facts: 'Studied abroad in Argentina and is fluent in Spanish',
        linkedin_url: 'https://www.linkedin.com/in/matthew-sallady-425777a5/'
      }
      // createMentorJson("Justin Yu"),
      // createMentorJson("Linda Yu"),
    ]
  }
};

export default mentors;
