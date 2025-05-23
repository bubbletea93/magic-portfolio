import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Danh",
  lastName: "Nguyen",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.png",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [
    "English",
    // "Bahasa"
  ], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/bubbletea93",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/danh-nguyen-45562712b/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:dcnguyen0793@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Design engineer and builder</>,
  subline: (
    <>
      I'm Danh, a design engineer at <InlineCode>FLY</InlineCode>, where I craft
      intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "Danh Nguyen",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hi! Looking for an engineer? I'm the guy! I've been involved in
        delivering cloud solutions to enhance business operations within the IT
        field. Here's a quick rundown of my experience(s).
        <br></br>
        <br></br>
        My journey kickstarted at **Mindtree** in Redmond, Washington, as a
        vendor for Microsoft where I took on many unique challenges guided by my
        leads. I worked towards owning a critical piece of a project used to
        gather and report on high-cost resources across multiple Azure
        subscriptions. This provided valuable insight into resource utilization
        that highlighted areas for cost savings that were performed by our daily
        Web Jobs responsible for deleting or downgrading resources. Through the
        many unique technical challenges, I've learned the importance of
        scaling, reliability, and monitoring applications at an enterprise
        level.
        <br></br>
        <br></br>
        At **Nation Safe Drivers** in Boca Raton, Florida, I was a part of a
        team involved in modernizing legacy application. I was instrumental in
        implementing and refining NSD's cloud solutions for towing operations
        analytics, ensuring that our clients had seamless access to innovative
        solutions. My role demanded agile practices, technical expertise, and
        the ability to troubleshoot critical APIs crucial to roadside requests.
        <br></br>
        <br></br>
        Currently, I’m based in Sunrise, Florida but I'm open to exploring
        relocation and remote work opportunities. My eyes are set on growing
        further and collaborating with diverse talents in the industry. Send me
        a message and let’s connect.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Nails Spa BK",
        timeframe: "January 2021 – Present",
        role: "Freelance Developer",
        achievements: [
          "Created and maintained custom professional Next.js websites for clients in the health and beauty industry.",
          "Developed multi-lingual AI‑driven solution for answering calls, FAQ handling, appointment booking/cancellation with salon’s existing scheduling system.",
          "Integrated Twilio Voice to transfer callers to live operators on an as need basis.",
          "Created REST API Azure Functions in .NET for Conversational AI Agent to use as tools for managing appointments for salon."],
        images: [],
      },
      {
        company: "Nation Safe Drivers",
        timeframe: "July 2021 – October 2023",
        role: " Full Stack Software Engineer II",
        achievements: [
          "Responsible for tailoring the Client Qore platform for new clients, aligning the portal's appearance with the client's branding and ensuring accurate data feeds into the reporting modules.",
          "Provided support for the API used for handling roadside assistance requests.",
          "Participate in Agile rituals such as daily stand-ups, sprint planning, backlog refinement, and retrospectives to ensure efficient delivery and continuous improvement of solutions.",
        ],
        images: [],
      },
      {
        company: "Mindtree Ltd.",
        timeframe: "January 2019 – December 2020",
        role: "Software Engineer",
        achievements: [
          "Proactively monitored and troubleshooted crawler Web Jobs based in C# to ensure it ran smoothly.",
          "Implemented parallel API calls to speed up data collection across multiple subscriptions.",
          "Utilized Application Insights to monitor and track events throughout the duration of a crawl to enable prompt resolutions for failures.",
          "Implemented mechanisms to recover from the last known failure for crawler Web Job reducing the need redo work, saving time and resource.",
          "Analyzed and optimized slow-running queries using execution plans and query tuning suggestions to improve responsiveness of reports.",
          "Participate in daily SCRUM meetings to prioritize tasks as well as to identify and unblock any impediments during development."],
        images: [],
      },
      // {
      //   company: "FLY",
      //   timeframe: "2022 - Present",
      //   role: "Senior Design Engineer",
      //   achievements: [
      //     <>
      //       Redesigned the UI/UX for the FLY platform, resulting in a 20%
      //       increase in user engagement and 30% faster load times.
      //     </>,
      //     <>
      //       Spearheaded the integration of AI tools into design workflows,
      //       enabling designers to iterate 50% faster.
      //     </>,
      //   ],
      //   images: [
      //     // optional: leave the array empty if you don't want to display images
      //     {
      //       src: "/images/projects/project-01/cover-01.jpg",
      //       alt: "Once UI Project",
      //       width: 16,
      //       height: 9,
      //     },
      //   ],
      // },
      // {
      //   company: "Creativ3",
      //   timeframe: "2018 - 2022",
      //   role: "Lead Designer",
      //   achievements: [
      //     <>
      //       Developed a design system that unified the brand across multiple
      //       platforms, improving design consistency by 40%.
      //     </>,
      //     <>
      //       Led a cross-functional team to launch a new product line,
      //       contributing to a 15% increase in overall company revenue.
      //     </>,
      //   ],
      //   images: [],
      // },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Florida Atlantic University",
        description:
          "Bachelor of Science, Computer Engineering and Computer Science.",
      },
      {
        name: "Broward College",
        description: "Associate in Arts.",
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "React.js",
        description: "",
        images: [],
      },
      {
        title: "Node.js",
        description: "",
        images: [],
      },
      {
        title: "Microsoft Azure",
        description: "",
        images: [],
      },
      {
        title: "SSMS/SQL Query",
        description: "",
        images: [],
      },
      {
        title: ".NET Framework",
        description: "",
        images: [],
      },
      {
        title: "NextJS",
        description: "",
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
