function getCollegeImage(imageName) {
  return 'https://ismp-us-east-1.s3.amazonaws.com/campus/' + imageName;
}

const colleges = [
  {
    name: 'Berkeley City College',
    abbr: 'bcc',
    active: true,
    imageUrl: getCollegeImage('berkeleycitycollege.jpg')
  },
  {
    name: 'Cal State University East Bay',
    abbr: 'csueb',
    active: true,
    imageUrl: getCollegeImage('csueb.jpg')
  },
  {
    name: 'Diablo Valley College',
    abbr: 'dvc',
    active: true,
    imageUrl: getCollegeImage('dvc.jpg')
  },
  {
    name: 'George Mason University',
    abbr: 'gmu',
    active: true,
    imageUrl: getCollegeImage('georgemason.jpg')
  },
  {
    name: 'George Washington University',
    abbr: 'gwu',
    active: true,
    imageUrl: getCollegeImage('georgewashington.jpg')
  },
  {
    name: 'Orange Coast College',
    abbr: 'occ',
    active: true,
    imageUrl: getCollegeImage('occ.jpg')
  },
  {
    name: 'Rutgers University',
    abbr: 'rutgers',
    active: true,
    imageUrl: getCollegeImage('rutgers.jpg')
  },
  {
    name: 'California State University, Sacramento',
    abbr: 'sac',
    active: true,
    imageUrl: getCollegeImage('sacstate.jpg')
  },
  {
    name: 'University of California, Berkeley',
    abbr: 'ucb',
    active: true,
    imageUrl: getCollegeImage('ucb.jpg')
  },
  {
    name: 'University of California, Davis',
    abbr: 'ucd',
    active: true,
    imageUrl: getCollegeImage('ucdavis.jpg')
  },
  {
    name: 'University of California, Irvine',
    abbr: 'uci',
    active: true,
    imageUrl: getCollegeImage('uci.jpg')
  },
  {
    name: 'University of California, Los Angeles',
    abbr: 'ucla',
    active: true,
    imageUrl: getCollegeImage('ucla.jpg')
  },
  {
    name: 'University of California, San Diego',
    abbr: 'ucsd',
    active: true,
    imageUrl: getCollegeImage('ucsd.jpg')
  },
  {
    name: 'University of North Carolina',
    abbr: 'unc',
    active: true,
    imageUrl: getCollegeImage('unc.jpg')
  },
  {
    name: 'University of Maryland, College Park',
    abbr: 'uom',
    active: true,
    imageUrl: getCollegeImage('umd.jpg')
  },
  {
    name: 'University of Minnesota',
    abbr: 'umn',
    active: true,
    imageUrl: getCollegeImage('umn.jpg')
  },
  {
    name: 'University of North Carolina',
    abbr: 'unc',
    active: true,
    imageUrl: getCollegeImage('unc.jpg')
  },
  {
    name: 'University of Southern California',
    abbr: 'usc',
    active: true,
    imageUrl: getCollegeImage('usc.jpg')
  },
  {
    name: 'The University of Texas at Austin',
    abbr: 'uta',
    active: true,
    imageUrl: getCollegeImage('utaustin.jpg')
  },
  {
    name: 'University of Washington',
    abbr: 'uw',
    active: true,
    imageUrl: getCollegeImage('uw.jpg')
  }
];

export default colleges;
