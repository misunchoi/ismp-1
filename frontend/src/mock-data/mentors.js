// For Mentors component
// API will need to be able to support getting mentors grouped by school

const mentors = {
  'University of California, San Diego': [
    {
      image: 'http://jessewoo.github.io/images/ismp/jessicafu.jpg',
      name: 'Jessica Fu',
      title: '',
      credentials: [
        {
          title: 'A.B. Economics, cum laude',
          organization: 'Harvard College'
        }
      ],
      current_job: 'POS Supply Chain Planner at Red Bull'
    },
    {
      image: 'http://jessewoo.github.io/images/ismp/kenhsu.jpg',
      name: 'Ken Hsu',
      title: '',
      credentials: [
        {
          title: 'B.A. Political Science and Film',
          organization: 'UC Berkeley'
        },
        {
          title: 'J.D.',
          organization: 'UC Berkeley'
        }
      ],
      current_job: 'Commercial Counsel and Director of Legal at Petco'
    },
    {
      image: 'http://jessewoo.github.io/images/ismp/sarahong.jpg',
      name: 'Sara Hong',
      title: 'Director',
      credentials: [
        {
          title: 'Ph.D. English Literature',
          organization: 'Boston College'
        },
        {
          title: 'B.A. - English Literature',
          organization: 'Wellesley College'
        }
      ],
      current_job: 'Lecturer, College Writing Program, UC Berkeley'
    }
  ],
  'University of California, Los Angeles': [
    {
      image: 'http://jessewoo.github.io/images/ismp/jacobchang.jpg',
      name: 'Jacob Chang',
      title: 'Secretary',
      credentials: [
        {
          title: 'B.S. Bioengineering',
          organization: 'UC Berkeley'
        },
        {
          title: 'J.D.',
          organization: 'UC Davis'
        }
      ],
      current_job: 'Associate General Counsel at TechSoup Global'
    },
    {
      image: 'http://jessewoo.github.io/images/ismp/jamesnam.jpg',
      name: 'James Nam',
      title: 'Treasurer',
      credentials: [
        {
          title: 'B.A. Economics',
          organization: 'UC Berkeley'
        },
        {
          title: 'B.S. Accounting',
          organization: 'San Francisco State University'
        },
        {
          title: 'MBT',
          organization: 'USC'
        },
        {
          title: 'CPA',
          organization: ''
        }
      ],
      current_job: 'Tax Accountant at HCVT'
    },
    {
      image: 'http://jessewoo.github.io/images/ismp/henrychen.jpg',
      name: 'Henry Chen',
      title: 'Director',
      credentials: [
        {
          title: 'B.S. Electrical Engineering & Computer Science',
          organization: 'UC Berkeley'
        },
        {
          title: 'MBA',
          organization: 'UT Austin'
        }
      ],
      current_job: 'Program Director, IBM'
    }
  ]
  // {
  //   image: 'http://jessewoo.github.io/images/ismp/henrychen.jpg',
  //   name: 'Henry Chen',
  //   title: 'Director',
  //   credentials: [
  //     'B.S. Electrical Engineering & Computer Science, UC Berkeley',
  //     'MBA from UT Austin'
  //   ],
  //   current_job: 'Program Director, IBM',
  // },
  // {
  //   image: 'http://jessewoo.github.io/images/ismp/sarahong.jpg',
  //   name: 'Sara Hong',
  //   title: 'Director',
  //   credentials: [
  //     'B.A. Wellesley College - English Literature',
  //     'Ph.D. Boston College - English Literature'
  //   ],
  //   current_job: 'Lecturer, College Writing Program, UC Berkeley',
  // },
  // {
  //   image: 'http://jessewoo.github.io/images/ismp/bozheng.jpg',
  //   name: 'Bo Zheng',
  //   title: 'Director',
  //   credentials: [
  //     'B.S. Electrical Engineering - Stanford University',
  //     'M.S. Bioengineering - Stanford University',
  //     'Ph.D. Bioengineering - UC Berkeley / UCSF'
  //   ],
  //   current_job: 'Senior Communication Systems Engineer, Impinj',
  // },
  // {
  //   image: 'http://jessewoo.github.io/images/ismp/markborja.jpg',
  //   name: 'Mark Borja',
  //   title: 'Director',
  //   credentials: [
  //     'B.A. - Biochemistry, UC Berkeley',
  //     'Ph.D. -Chemistry & Chemical Biology, UCSF'
  //   ],
  //   current_job: 'Assistant Professor of Chemistry, CSU East Bay',
  // },
  // {
  //   image: 'http://jessewoo.github.io/images/ismp/franciscachan.jpeg',
  //   name: 'Francisca Chan',
  //   title: 'Director',
  //   credentials: [
  //     'B.S. Civil and Environmental Engineering, UC Berkeley',
  //     'M.S. Geotechnical Engineering, UC Berkeley'
  //   ],
  //   current_job: 'Project Engineer, Partner Engineering and Science',
  // },
  // {
  //   image: 'http://jessewoo.github.io/images/ismp/kitng.jpg',
  //   name: 'Kit Ng',
  //   title: 'Director',
  //   credentials: [
  //     'B.S. Chemistry, UC Davis',
  //     'Ph.D. Molecular, Cellular and Integrative Physiology, UC Davis'
  //   ],
  //   current_job: 'Assistant Professor of Biological Sciences, Biola University',
  // }
};

export default mentors;
