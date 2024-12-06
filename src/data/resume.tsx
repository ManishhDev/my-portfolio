import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Mohit Goyal",
  initials: "MG",
  url: "https://www.mohitg.xyz",
  location: "New Delhi , India",
  locationLink:
    "https://www.google.com/maps/place/New+Delhi,+Delhi/@28.5272523,77.0438272,11z/data=!3m1!4b1!4m6!3m5!1s0x390cfd5b347eb62d:0x52c2b7494e204dce!8m2!3d28.6139298!4d77.2088282!16zL20vMGRsdjA?entry=ttu",
  description:
    "B.Tech CSE student with a passion for ML, MERN, and open-source. Turning ideas into code and contributing to the tech community.",
  summary:
    "As a student of Computer Science Engineering in [Bharati Vidyapeeth’s College of Engineering](/#education), I am driven by a passion to push the boundaries of technology. My focus is on AI, machine learning and data science, where I’m trying to create innovative solutions. I am proficient in MERN stack for web development and have a strong foundation in C and Java. Open-source collaborations and hackathons enhance my creativity, allowing me to turn ideas into amazing projects. I believe in the power of technology to shape a better future and am always eager to connect with fellow innovators for an exciting collaboration. Let’s explore how we can use tech to make a difference! [See my full resume here](https://drive.google.com/file/d/1uVnOJP_woSQnmFYgiWoz6RNcjk9hDM-g/view?usp=sharing)",
  avatarUrl: "/pf.png",
  skills: [
    "React",
    "Node.js",
    "Python",
    "Typescript",
    "Machine Learning",
    "Java",
    "C++",
    "Postman",
    "Pytorch",
    "Next js",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://medium.com/@mohit098", icon: NotebookIcon, label: "Blog" },
    { href: "/#projects", icon: CodeIcon, label: "Projects" },
    // { href: "#", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: "mohitgoyal09042006@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/MohitGoyal09",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mohit-goyal09",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ByteMohit",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@mohitgoyal1326",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:mohitgoyal090442006@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "GirlScript Summer of Code",
      href: "https://atomic.finance",
      badges: [],
      location: "Online",
      title: "Contributor",
      logoUrl: "/girlscriptsoc_logo.jpeg",
      start: "May 2024",
      end: "August 2024",
      description:
        "Contributed to an open-source task management application, implementing task filtering and sorting using React hooks and context API. Improved cross-browser compatibility and refactored Express.js routes for RESTful design. Enhanced data integrity by adding Joi input validation on both client and server sides. Updated API and component documentation to facilitate easier onboarding for new contributors. Actively participated in code reviews, improving code quality through collaboration.",
    },
  ],
  education: [
    {
      school: "Bharati Vidyapeeth's College of Engineering",
      href: "https://bvcoend.ac.in/",
      degree:
        "Bachelor of Technology - BTech, Computer Science and Engineering",
      logoUrl: "/college_logo.jpeg",
      start: "2023",
      end: "2027",
    },
    {
      school: "Sumermal Jain Public school ",
      href: "https://www.sumermaljainpublicschool.edu.in/",
      degree: "High School Diploma",
      logoUrl: "/school.jpeg",
      start: "2019",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "SmartiCalc",
      href: "https://github.com/MohitGoyal09/SmartiCalc",
      dates: "September 2024",
      active: true,
      description:
        "Developed a sleek, intuitive calculator inspired by the Apple Calculator, using React and TypeScript. Equipped with advanced problem-solving features, it showcases skills in modern UI design and API integration.",
      technologies: [
        "React js",
        "Typescript",
        "Tailwind Css",
        "Python",
        "ShadCn",
        "Mantine",
        "Google’s Gemini API",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://chatcollect.com",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/MohitGoyal09/SmartiCalc",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cal.jpg",
      video: "",
    },
    {
      title: "Music Acadmey",
      href: "https://github.com/MohitGoyal09/musicacademy",
      dates: "November 2024",
      active: true,
      description:
        "Built a responsive and visually appealing landing page for a music institution using Next.js and Acerenity UI. This project demonstrates expertise in creating clean, modern designs with seamless navigation and optimized performance.",
      technologies: ["Next js", "Aceternity ui"],
      links: [
        {
          type: "Source",
          href: "https://github.com/MohitGoyal09/musicacademy",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://musicacademy-iota.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/music.jpg",
      video: "",
    },
    {
      title: "TextractAI",
      href: "https://github.com/MohitGoyal09/TextractAI",
      dates: "September 2024",
      active: true,
      description:
        "Created an AI-driven tool for seamless text extraction and summarization from PDF files, using React.js and Google’s Gemini API. This project highlights expertise in advanced API integrations, React components, and intuitive UI design for improved user experience.",
      technologies: [
        "React.js",
        "TailwindCSS",
        "ShadCn",
        "Google’s Gemini API",
        "Git",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://llm.report",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/MohitGoyal09/TextractAI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/pdf.jpg",
      // video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Food Vision Tansformer",
      href: "https://github.com/MohitGoyal09/FoodVison-Big",
      dates: "November 2024",
      active: true,
      description:
        "Built a Vision Transformer (ViT) model to efficiently classify images using self-attention mechanisms. Implemented with PyTorch and fine-tuned on a curated dataset, achieving high accuracy. This project demonstrates proficiency in transformer-based architectures and advanced deep learning techniques for visual tasks.",
      technologies: ["Pytorch", "Hugging Face", "Gardio"],
      links: [
        {
          type: "Source",
          href: "https://github.com/MohitGoyal09/FoodVison-Big",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/gradio.jpg",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "CodeClash 1.0",
      dates: "April 18th - 19th, 2024",
      location: "New Delhi, India",
      description:
        "Developed Sahayak , a rescue disaster coordination web application.",
      image: "/206.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      win: "seocnd",
      links: [],
    },
    {
      title: "WIEHack 5.0",
      dates: "April 22th - 23th, 2024",
      location: "New Delhi, India",
      description:
        "Developed SheSkati, a web application to connect rural women with lawyers and provide legal education. Built using HTML, CSS, and JavaScript, with an intuitive interface designed in Figma. Integrated a Botpress-powered chatbot for immediate assistance and legal guidance. This project addresses the critical need for legal support among underserved communities through accessible technology. SheSkati showcases the potential of web development to create impactful social solutions. ",
      image: "/wie.jpg",
      win: "First place",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ayush-that/WieHack",
        },
        {
          title: "Demo",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://wie-hack-iota.vercel.app/",
        },
      ],
    },
    {
      title: "SummerHack 1.0",
      dates: "April 26 , 2024",
      location: "New Delhi, India",
      description:
        "Developed a Stock Prediction model used various Machine learning algorithims and used strealit for Ui.",
      icon: "public",
      image: "/hack.jpg",
      win: "lol",
      links: [],
    },
    // {
    //   title: "DeveloperWeek Hackathon",
    //   dates: "February 3rd - 4th, 2018",
    //   location: "San Francisco, California",
    //   description:
    //     "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
    //   links: [
    //     {
    //       title: "Github",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/cryptotrends/cryptotrends",
    //     },
    //   ],
    // },
    // {
    //   title: "HackDavis",
    //   dates: "January 20th - 21st, 2018",
    //   location: "Davis, California",
    //   description:
    //     "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
    //   win: "Best Data Hack",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/my6footprint",
    //     },
    //     {
    //       title: "ML",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/my6footprint-machine-learning",
    //     },
    //     {
    //       title: "iOS",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/CarbonWallet",
    //     },
    //     {
    //       title: "Server",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/wallet6-server",
    //     },
    //   ],
    // },
    // {
    //   title: "ETH",
    //   dates: "October 13th - 15th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
    //   links: [
    //     {
    //       title: "Organization",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/ethdocnet",
    //     },
    //   ],
    // },
    // {
    //   title: "Hack The North",
    //   dates: "September 15th - 17th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a virtual reality application allowing users to see themselves in third person.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Streamer Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/justinmichaud/htn2017",
    //     },
    //     {
    //       title: "Client Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/RTSPClient",
    //     },
    //   ],
    // },
    // {
    //   title: "Hack The 6ix",
    //   dates: "August 26th - 27th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/ShareShip/ShareShip",
    //     },
    //     {
    //       title: "Site",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://share-ship.herokuapp.com/",
    //     },
    //   ],
    // },
    // {
    //   title: "Stupid Hack Toronto",
    //   dates: "July 23rd, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/nsagirlfriend/nsagirlfriend",
    //     },

    //   ],
    // },
    // {
    //   title: "Global AI Hackathon - Toronto",
    //   dates: "June 23rd - 25th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
    //   win: "1st Place Winner",
    //   links: [
    //     {
    //       title: "Article",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/TinySamosas/",
    //     },
    //   ],
    // },
    // {
    //   title: "McGill AI for Social Innovation Hackathon",
    //   dates: "June 17th - 18th, 2017",
    //   location: "Montreal, Quebec",
    //   description:
    //     "Developed realtime facial microexpression analyzer using AI",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
    //   links: [],
    // },
    // {
    //   title: "Open Source Circular Economy Days Hackathon",
    //   dates: "June 10th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
    //   win: "1st Place Winner",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/genecis",
    //     },
    //   ],
    // },
    // {
    //   title: "Make School's Student App Competition 2017",
    //   dates: "May 19th - 21st, 2017",
    //   location: "International",
    //   description: "Improved PocketDoc and submitted to online competition",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
    //   win: "Top 10 Finalist | Honourable Mention",
    //   links: [
    //     {
    //       title: "Medium Article",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
    //     },
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/pocketdoc-react-native",
    //     },
    //   ],
    // },

    // {
    //   title: "Waterloo Equithon",
    //   dates: "May 5th - 7th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/pocketdoc-react-native",
    //     },
    //   ],
    // },

    // {
    //   title: "StartHacks I",
    //   dates: "March 4th - 5th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
    //   win: "1st Place Winner",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source (Mobile)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-ionic",
    //     },
    //     {
    //       title: "Source (Server)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-rails",
    //     },
    //   ],
    // },
    // {
    //   title: "QHacks II",
    //   dates: "February 3rd - 5th, 2017",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed a mobile game which enables city-wide manhunt with random lobbies",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source (Mobile)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/human-huntr-react-native",
    //     },
    //     {
    //       title: "Source (API)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/human-huntr-rails",
    //     },
    //   ],
    // },
  ],
} as const;
