module.exports = {
  siteUrl: 'https://www.iamliesa.com',
  languageCode: 'en-US',

  // color theme
  theme: {
    primary: '#93b46f',
    fontPrimary: '#333333',
    backgroundPrimary: '#fff',
  },

  // can be specified in frontmatter
  title: 'Ia.Liesa',
  // can be specified in frontmatter
  description:
    'German copywriter freelancer and social media consultant helping your company to succeed with content marketing.',

  // can be specified in frontmatter
  author: 'Liesa Huppertz',
  // can be specified in frontmatter
  keywords: [
    'social media',
    'content marketing',
    'nutritions',
    'health',
    'fitness',
    'digital nomad',
    'freelancer',
    'consultant',
    'german',
    'female entrepreneur blog',
  ],

  hashtags: ['#socialmedia', '#consultant', '#nutritions'],

  pagination: 10,

  blog: {
    // provide a link which is used with article's slug to edit article by reader
    // specify: provide contribute property as whole URL in frontmatter
    contributeBase:
      'https://github.com/rwieruch/blog_iamliesa_content/tree/master/blog',

    // provide an order of categories for the blog page
    featuredCategories: ['content marketing', 'health'],

    // how many posts should show up per category on /blog
    limit: 4,
  },

  categories: {
    slug: '/categories',
    slugSuffix: 'learn-',
  },

  // analytics defined in .env file
  analytics: {
    enabled: true,
  },

  // goodie shown below each blog post
  goodie: {
    enabled: false,
    header: 'The Road to React',
    text:
      'Learn React by building real world applications. No setup configuration. No tooling. Plain React in 200+ pages of learning material. Learn React like <strong>33.000+ readers</strong>.',
    img: 'img/page/cover.png',
    cta: 'Get the Book for free',
    ctaSecondary: 'Get it on Amazon.',
    url: 'https://www.getrevue.co/profile/rwieruch',
    urlSecondary: 'https://amzn.to/2LHjxRB',
  },

  // Navigation

  navigation: [{ to: '/', label: 'About' }, { to: '/blog', label: 'Blog' }],

  // Landing Page

  hero: {
    header: 'I am Liesa',
    subheader:
      'Social Media Enthusiast and strong believer in "Live and Learn"',
  },
  about: {
    enabled: true,
    header: 'About me',
    subheader: 'Something you should know.',
    social: [
      {
        icon: 'linkedinRound',
        url: 'https://www.linkedin.com/in/liesahuppertz/',
      },
      {
        icon: 'instagramRound',
        url: 'https://www.instagram.com/i_am_liesa/',
      },
      {
        icon: 'twitterRound',
        url: 'https://twitter.com/i_am_liesa',
      },
      { icon: 'email', url: 'mailto:liesa.huppertz@gmail.com' },
    ],
    text: `
      <p>Hi there, I am Liesa, a german freelance copywriter and content marketing expert from Berlin.</p>

      <p>Content Marketing is about more than simply writing articles or blog posts. It's a strategy used to target your audience right; it's a marketing approach to attract and retain a clearly defined audience. Copywriting on the other hand is used to finally make the pitch - after having applied your content marketing strategy. That's why both skills go hand in hand. As a copywriter and content marketer I can help you target your audience right. I can help you figure out how to address them, what tone of voice to use best and what kind of content works in your niche. With great copywriting skills we will then be able to make the final pitch.</p>

      <p>A few words about myself:</p>

      <p>I'm a strong believer in living and learning. In my opinion that's what furthers out of the box thinking and eventually makes you an expert in your field.</p>

      <p>I think that expertise derives from two things mainly: ambition and passion. Both are characteristics that describe me very well. I just love what I do and that's what makes it easy to always learn more, do more and get better and better.</p>

      <p>By the way, I am a <strong>German</strong> native speaker but also comfortable in <strong>English</strong>.</p>
    `,
  },
  services: {
    enabled: true,
    header: 'What I offer',
    subheader: 'A selection of my skills.',
    items: [
      {
        icon: 'feather',
        label: 'Content',
        description:
          'A good story connects a company and its customer. I write engaging and on-brand content, which is well-grounded by research and data-analysis if needed.',
      },
      {
        icon: 'heart',
        label: 'Social Media',
        description:
          "Social Media means more than scheduling a post once in a while. It's about community engagement, influencers, channel analysis and quality content.",
      },
      {
        icon: 'influencer',
        label: 'Influencer',
        description:
          'Identifying influencers in a domain is a key aspect to growth. I know what to look for in an influencer to get the best coverage for your company.',
      },

      {
        icon: 'searchData',
        label: 'SEO',
        description:
          'Good content has two purposes mainly: being found by Google and connecting company and customer. I make sure not only that your content is found online but also that it sounds great.',
      },
      {
        icon: 'megaphone',
        label: 'Public Relations',
        description:
          "Journalist outreach, writing press releases and organizing events are just a few things I learned during my career in PR. Let me help you getting your company's name out there.",
      },
      {
        icon: 'growth',
        label: 'Growth',
        description:
          'One needs to have a large set of skills to grow a business. I think outside of the box to identify the most efficient and effective ways to help you grow your company.',
      },
    ],
  },
  portfolio: {
    enabled: true,
    header: 'Portfolio',
    subheader: 'An excerpt of my professional work.',
    items: [
      {
        label: 'Publications',
        description: 'Copywriting and PR',
        url: '/publications',
      },
      {
        label: 'Influencer Marketing',
        description: 'Cooperations',
        url: '/influencer-marketing',
      },
      {
        label: 'Learning and Teaching',
        description: 'Personal Projects',
        url: '/learn-and-teach',
      },
    ],
  },
  vita: {
    enabled: true,
    header: 'Vita',
    subheader: 'My professional story.',
    items: [
      {
        label: 'Adventures in Australia',
        description:
          '<p>Going to Australia after my graduation was perfect for personal growth. I picked up several jobs, travelled around the continent and had a frugal live.</p>',
        year: '2008 - 2009',
      },
      {
        label: 'Master of Arts',
        description:
          '<p>I graduated with a master of arts in applied media research. Primarily the subject statistics gave me a foundation to understand data sets and use them for storytelling.</p>',
        year: '2009 - 2015',
      },
      {
        label: 'Saxony Medical Association',
        description:
          "<p>That's where I first interned in the field of Public Relations. I learned how to write press releases, managing a PR campaign and contributing content in a CMS.</p>",
        year: '2012 - 2013',
      },
      {
        label: 'Thailand',
        description:
          "<p>Thailand woke up my interest for Southeast Asia. I enjoy diving into different cultures, to learn about their life and to reflect it on my own life. It shouldn't be my last Asian experience.</p>",
        year: '2013',
      },
      {
        label: 'Online Marketing Agency Wortweiss',
        description:
          '<p>The first time I came in touch with self-employment in my field of expertise. In the wortweiss agency I applied a lot of my learnings in SEO and content creation in a practical way.</p>',
        year: '2013 - 2015',
      },
      {
        label: 'Fashion Label Avelon',
        description:
          '<p>In Amsterdam I interned at the fashion label Avelon. I wanted to be as close as possible to the product. Understanding the mission behind the product makes it possible to write great content and press releases.</p>',
        year: '2014',
      },
      {
        label: 'Startup Culture at Wimdu',
        description:
          '<p>In Berlin I had to experience the startup culture. It was all about working smart to get stuff done. At Wimdu I was responsible for publications, cooperation management and PR campaigns.</p>',
        year: '2015',
      },
      {
        label: 'Agency Work',
        description:
          '<p>After working in a Startup, my goal was to experience the bustling life in an agency. In the fashion domain I worked in a full service agency to cover the PR and Social Media department.</p>',
        year: '2016',
      },
      {
        label: 'Freelance',
        description:
          '<p>During the last years, I have completed several freelance jobs to continuously improve my skills in my field of expertise. Apart from quality content and SEO I also offer Social Media and Influencer Marketing now as a full-time freelancer.</p>',
        year: '2013 - TODAY',
      },
    ],
  },
  testimonial: {
    enabled: true,
    header: 'Testimonials',
    subheader: 'What my clients are saying.',
    items: [
      {
        label: 'Elena Miebach',
        sublabel: 'Greenyogashop',
        description:
          'Creative, passionate and professional. Liesa knows her business. She is easy to work with and delivers quality work, always before deadline. She is a great support for all tasks related to content creation, copywriting and PR.',
        url: 'https://www.greenyogashop.com/blog',
      },
      {
        label: 'Maike Bork',
        sublabel: 'Head of Brand at Delivery Hero GmbH',
        description:
          'As an external copywriter, Liesa is a great help to the entire team. She has adapted to our brand as well as to our tone of voice and audience extremely fast and has an excellent writing style. She is also able to nail the tone of voice for different online & offline channels, for Sales, and Social Media precisely and to the fullest satisfaction. Liesa is always reliable and does all the tasks quickly and carefully. The cooperation is always uncomplicated and super nice.',
        url: 'https://www.lieferheld.de',
      },
      {
        label: 'Caro Hobler',
        sublabel: 'Head of Content at Gymondo',
        description:
          'As an external writer, Liesa fits in very well with our brand and target group. She has a natural, modern writing style and writes well-researched blog posts for our online magazine. Working together is productive and enjoyable: Liesa is fast, careful, reliable and totally nice.',
        url: 'https://www.gymondo.de/magazin/author/liesa-huppertz',
      },
    ],
  },
  newsletter: {
    enabled: true,
    header: 'JOIN THE MOVEMENT',
    subheader: 'Be part of an incredible community of digital entrepreneurs.',
    items: [
      'Join an inspiring community of nomads conquering the world',
      'Learn everything you need to know to start your online business',
      'See what it takes to travel the world while doing business',
      'Get inspired for your next journey',
    ],
    url: 'https://www.getrevue.co/profile/wayfaringsociety',
  },
  footer: {
    copyright: '© Liesa Huppertz',
    social: [
      {
        icon: 'linkedinRound',
        url: 'https://www.linkedin.com/in/liesahuppertz/',
      },
      {
        icon: 'instagramRound',
        url: 'https://www.instagram.com/i_am_liesa/',
      },
      {
        icon: 'twitterRound',
        url: 'https://twitter.com/i_am_liesa',
      },
      {
        icon: 'email',
        url: 'mailto:hello@iamliesa.com',
      },
    ],
    links: [
      {
        label: 'Privacy & Terms',
        url: '/legal',
      },
    ],
  },

  // Social Media

  share: ['facebook', 'twitter', 'linkedin'],
  follow: ['instagram', 'facebook'],
  socialHandles: {
    instagram: 'i_am_liesa',
    twitter: 'i_am_liesa',
    github: 'iamliesa',
    facebook: 'iAmLiesa',
  },
  disqus: {
    enabled: true,
    shortname: 'https-www-iamliesa-com',
    prefix: '',
    suffix: '',
  },
};
