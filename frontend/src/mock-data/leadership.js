const getLeadershipImage = imageName => {
  return 'https://ismp-us-east-1.s3.amazonaws.com/leadership/' + imageName;
};

const leadershipInfo = {
  officers: [
    {
      image: getLeadershipImage('img-jessica-fu@2x.jpg'),
      name: 'Jessica Fu',
      title: 'President',
      credentials: [
        {
          title: 'A.B. Economics, cum laude',
          organization: 'Harvard College'
        }
      ],
      current_job: {
        company: 'Red Bull',
        position: 'POS Supply Chain Planner'
      },
      linkedin_url: 'https://www.linkedin.com/in/jessica-fu-78625812/'
    },
    {
      image: getLeadershipImage('kenhsu.jpg'),
      name: 'Ken Hsu',
      title: 'Vice President',
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
      current_job: {
        company: 'Petco',
        position: 'Commercial Counsel & Director of Legal'
      },
      linkedin_url: 'https://www.linkedin.com/in/hsukenneth/'
    },
    {
      image: getLeadershipImage('jacobchang.jpg'),
      name: 'Jacob Chang',
      title: 'Secretary',
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
      current_job: {
        company: 'TechSoup Global',
        position: 'Associate General Counsel'
      },
      linkedin_url: 'https://www.linkedin.com/in/jacob-chang-b5001819/'
    },
    {
      image: getLeadershipImage('img-james-nam@2x.jpg'),
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
      current_job: {
        company: 'HCVT',
        position: 'Tax Accountant'
      },
      linkedin_url: 'https://www.linkedin.com/in/james-kuk-nam-8b201423/'
    }
  ],
  directors: [
    {
      image: getLeadershipImage('henrychen.jpg'),
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
      current_job: {
        company: 'IBM',
        position: 'Program Director'
      },
      linkedin_url: 'https://www.linkedin.com/in/henrychen/'
    },
    {
      image: getLeadershipImage('img-sara-hong@2x.jpg'),
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
      current_job: {
        company: 'UC Berkeley',
        position: 'Lecturer, College Writing Program'
      },
      staff_url: 'https://writing.berkeley.edu/staff/sara-hong'
    },
    {
      image: getLeadershipImage('img-bo-zheng@2x.jpg'),
      name: 'Bo Zheng',
      title: 'Director',
      credentials: [
        {
          title: 'Ph.D. Bioengineering',
          organization: 'UC Berkeley / UCSF'
        },
        {
          title: 'M.S - Bioengineering',
          organization: 'Stanford University'
        },
        {
          title: 'B.S - Electrical Engineering',
          organization: 'Stanford University'
        }
      ],
      current_job: {
        company: 'Impinj',
        position: 'Senior Communication Systems Engineer'
      },
      linkedin_url: 'https://www.linkedin.com/in/bozheng08/'
    },
    {
      image: getLeadershipImage('markborja.jpg'),
      name: 'Mark Borja',
      title: 'Director',
      credentials: [
        {
          title: 'Ph.D. Chemistry and Chemical Biology',
          organization: 'University of California, San Francisco'
        },
        {
          title: 'B.A. - Cell/Cellular and Molecular Biology',
          organization: 'UC Berkeley'
        }
      ],
      current_job: {
        company: 'CSU East Bay',
        position: 'Assistant Professor of Chemistry'
      },
      linkedin_url: 'https://www.linkedin.com/in/mark-borja-66897b34/'
    },
    {
      image: getLeadershipImage('img-fran-chan@2x.jpg'),
      name: 'Francisca Chan',
      title: 'Director',
      credentials: [
        {
          title: 'M.S. Geotechnical Engineering',
          organization: 'UC Berkeley'
        },
        {
          title: 'B.S. - Civil Engineering',
          organization: 'UC Berkeley'
        }
      ],
      current_job: {
        company: 'Partner Engineering and Science',
        position: 'Project Engineer'
      },
      linkedin_url: 'https://www.linkedin.com/in/franciscalopez/'
    },
    {
      image: getLeadershipImage('kitng.jpg'),
      name: 'Kit Ng',
      title: 'Director',
      credentials: [
        {
          title: 'Ph.D. Molecular, Cellular and Integrative Physiology',
          organization: 'UC Davis'
        },
        {
          title: 'B.S. - Chemistry',
          organization: 'UC Davis'
        }
      ],
      current_job: {
        company: 'Biola University',
        position: 'Assistant Professor of Biological Sciences'
      },
      linkedin_url: 'https://www.linkedin.com/in/kit-ng-2aa42561/'
    }
  ]
};

export default leadershipInfo;
