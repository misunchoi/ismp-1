const getProgramImage = imageName => {
  return 'https://ismp-us-east-1.s3.amazonaws.com/program/' + imageName;
};

export const programInstructions = [
  {
    icon: 'wordpress forms',
    title: 'Apply',
    blurbHtml: '<p>Submit application <a href="/apply">here</a></p>'
  },
  {
    icon: 'group',
    title: 'Attend a Meet & Greet Orientation',
    blurbHtml:
      '<p>After you apply, you will receive an email on the times and dates for the orientation. If you did not get an email with the orientation dates within a week of applying, please <a href="mailto:info@internationalmentorship.org">contact us</a></p>'
  },
  {
    icon: 'calendar alternate outline',
    title: '6 Weeks',
    blurbHtml:
      '<p>Meet with your mentor once a week for 6 weeks, in person or online</p>'
  },
  {
    icon: 'thumbs up outline',
    title: 'You Decide',
    blurbHtml:
      '<p>After 6 weeks, you and your mentor can decide how frequently you want to meet with your mentor. You can also decide to stop meeting your mentor as well.</p>'
  }
];

export const programDetails = [
  {
    headerImage: getProgramImage('program_america.jpg'),
    title: 'Transitioning to America',
    blurb:
      'Make your transition to America go as smoothly as possible! Learn about time management skills, surviving your 1st week in America, time management, how to talk to Americans, study skills, and tips on making new friends.'
  },
  {
    headerImage: getProgramImage('program_english.jpg'),
    title: 'English Training: Conversations and Writing',
    blurb:
      'English is difficult to master, especially in the university setting. Improve your speaking skills with your mentor and get help preparing for interviews. Learn basic and advanced English writing techniques for organizing your essays, improving your grammar, and even crafting your resumes.'
  },
  {
    headerImage: getProgramImage('program_grad.jpg'),
    title: 'How to Succeed in Grad School',
    blurb:
      'Grad students face different expectations and challenges than those of undergraduate students. Learn how to manage your time, interact with lab mates and professors, write more effectively, and search for a job after graduation.'
  },
  {
    headerImage: getProgramImage('program_apply.jpg'),
    title: 'Applying to US Colleges',
    blurb:
      'We will break down the admissions process and different important aspects as you plan to study abroad in America.  We will cover practical tips for choosing the right school, preparing your application, and writing your personal statements.'
  }
];
