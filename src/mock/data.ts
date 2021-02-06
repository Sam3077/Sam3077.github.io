import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sam Hirsch | Computer Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Developer portfolio for Sam HIrsch', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "I'm",
  name: 'Sam Hirsch',
  subtitle: "Computer Engineering student, Research Assistant, and Entrepreneur",
  cta: "Learn more",
  caption: "University of Utah, Salt Lake City UT"
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `I am currently an undergraduate pursuing a Bachelor's Degree in Computer Engineering at the University of Utah
   where I am also a Research Assistant with the Compiler Technology to Optimize Performance (CTOP) group, and focus on developing methods
   to automatically optimize low-level software.`,
  paragraphTwo: `I am interested in computer design, embedded systems, high-performance computing, and virtual reality technology.
   I previously interned with Lucid Software in Utah and Streamroot, now a subsidiary of CenturyLink, in Paris, France. Currently, I am working with
   Rexchanger, an early-stage startup, to build out a peer-to-peer outdoor gear rental platform.`,
  paragraphThree: `I'm passionate about entrepreneurship and have worn many hats at many different startups including a few of my own. I previously ran
   my own startup from the University of Utah's Lassonde Entrepreneurship Institute and I was the director of the High School Utah Entrepreneurship Challenge.`,
  resume: null, // if no resume, the button will not show up
};

export const experienceData = [
  {
    id: nanoid(),
    img: 'ctop.png',
    position: 'Undergraduate Research Assistant',
    location: 'University of Utah',
    info: `I am researching methods to automatically tune C code with the Compiler Technology to Optimize Performance group (CTOP) and 
     Dr. Mary Hall, the director of the School of Computing. The project is in conjunction with work being done at Argonne National Labs.`,
    info2: `I largely work with developer guided code optimizations for C kernal functions using architecture-oriented optimizations. Recently I
     was able to ~15x speedup with an lu kernel function as detailed <a target="_blank" href="https://docs.google.com/document/d/1boxzzEzg6gh10RLhNm1Cqd3PR_llUGXxK3c_moExU5E/edit?usp=sharing">here.</a>`,
    start: 'May 2020',
    url: 'http://ctop.cs.utah.edu/ctop/'
  },
  {
    id: nanoid(),
    img: 'rexchanger.jpg',
    position: 'Chief Technology Officer',
    location: "Rexchanger - Salt Lake City, Utah",
    info: `I currently lead the full-stack development of Rexchanger's software, a peer-to-peer outdoor rental platform. I also prioritize 
     and plan the development road-map and manage all technical communication.`,
    info2: `The backed is written with Python and Django and is hosted with Docker on AWS. The mobile app is cross-platform and is written with Flutter and Dart.`,
    url: "http://www.rexchanger.com",
    start: "Aug. 2019"
  },
  {
    id: nanoid(),
    img: 'streamroot.png',
    position: 'Web and Media Compatibility Intern',
    location: "Streamroot - Paris, France",
    info: `I moved to Paris for several months to work with Streamroot, a cutting-edge video streaming technology company. While there, I developed a new 
     system for running internal QA. I built an iOS app and integrated it with the deployment chain to ensure seamless QA of new SDK builds. I also built
     a companion webapp and CLI with bash and JavaScript to enable easy viewing of live logs from the SDK and the ability to push test configurations to several devices at once.`,
    info2: `This project was particularly difficult because Streamroot's technology is an SDK that has little to no visible affect on the user experience.
     Additionally, their tech relies on a swarm of users simultaneously accessing the same content so it was difficult to reliably test their software. I detailed
     my project on the <a href="https://link.medium.com/JSUY3NqCM9" target="_blank">company blog.<a>`,
    start: "Sept. 2019",
    end: "Jan. 2020",
    url: "https://streamroot.io/"
  },
  {
    id: nanoid(),
    img: 'lucid.png',
    position: 'Software Engineering Intern',
    location: 'Lucid Software - Salt Lake City, Utah',
    info: `During my freshman year of college, I had the opportunity to do a summer internship with Lucid Software where I maintained and improved their Android app.
     I built their new process of photo uploading which was a major feature in the 2.0 app release. I also developed, tested, and compared new mobile
     rendering methods.`,
    start: "May 2018",
    end: "Aug. 2018",
    url: "https://lucid.co/"
  }
];

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'guitar_hero.jpg',
    title: '16-bit RISC Computer and Guitar Hero Game',
    info: `Designed a fully-functional digital computer with Verilog-HDL and an FPGA board. The CPU was based on the RISC
     processor and instruction set. Then my team and I wrote a Guitar Hero clone that runs on our CPU, in our custom assembly language, that
     live-transcribes music.`,
    info2: `The full system interfaces with an Arduino running FFT to convert the AC music signal to digestable, DC signals as well as 
     a Raspberry Pi that manges the Bluetooth communication with the controller.`,
    url: 'https://youtu.be/ORIMPqAItE8',
    repo: 'https://github.com/kieblade/3710-project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'arcade.png',
    title: 'VR Arcade for Paralyzed Patients',
    info: `Worked with four other students to create a virtual reality arcade using Unity and SteamVR. We worked with a team
     from the University of Utah hospital to integrate the "Sip and Puff" device to make the game accessible to paralyzed patients
     and help them practice using the device.`,
    info2: `I largely worked on integrating the hardware with Unity and synchronizing controls with the rendering frame-rate as well
     as the creation and development of a "pinball" game in the arcade.`,
    url: 'https://drive.google.com/file/d/1Rew4fND8UDp787JqNvtZUz4gt2nleL_R/view?usp=sharing',
    repo: 'https://github.com/Bamuir3/EvilMangoVR', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'memory.png',
    title: 'Re-implementation of malloc and free in C',
    info: `Only used the "mem_map" and "mem_pagesize" system calls to request memory space. Achieved 60%
     performance compared to the libc implementation and 83% mapped memory utilization when run through a 
     rigorous benchmark.`,
    info2: '',
    repo: 'https://github.com/Sam3077/cs4400-malloc/blob/main/mm.c', // if no repo, the button will not show up
    isPrivate: true
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Feel free to reach out!',
  btn: '',
  email: 'sam.hirsch66@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/shirsch75/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Sam3077',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
