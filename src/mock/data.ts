import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sam Hirsch | Computer Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Developer portfolio for Sam Hirsch', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "I'm",
  name: 'Sam Hirsch',
  subtitle: 'Computer Engineer, Researcher, and Entrepreneur',
  cta: 'Learn more',
  caption: 'University of Utah, Salt Lake City UT',
};

// ABOUT DATA
export const aboutData = {
  img: 'headshot.png',
  paragraphOne: `I am currently an undergraduate completing a Bachelor's Degree in Computer Engineering at the University of Utah
   where I am also a Research Assistant with the Center for Parallel Computing.`,
  paragraphTwo: `I am interested in computer design, embedded systems, high-performance computing (HPC), and virtual reality technology.
   I previously did research with Lawrence Berkeley National Laboratory on code for HPC GPU accelerators and I am currently synthesizing my 
   results into a research paper.`,
  paragraphThree: `I'm passionate about entrepreneurship and have worn many hats at many different startups including a few of my own. I previously ran
   my own startup from the University of Utah's Lassonde Entrepreneurship Institute and I was the director of the High School Utah Entrepreneurship Challenge.`,
  resume: '/resume.pdf', // if no resume, the button will not show up
};

export const experienceData = [
  {
    id: nanoid(),
    img: 'cpcu.jpg',
    position: 'Undergraduate Research Assistant',
    location: 'University of Utah',
    start: 'Sept. 2021',
    url: 'http://www.parallel.utah.edu/',
    info: `I currently work with the Center for Parallel Computing to expand on my research done at Berkeley (see below). I wrote a framework to automatically
      generate benchmarking code to test different kernels on different computers. This allows us to collect many results with minimal effort.`,
    info2: `I am also working to synthesize my research and results into a final research paper. This paper will present the performance gains from
      using our memory layout tool on different systems with different kernels. `,
  },
  {
    id: nanoid(),
    img: 'lbnl.jpg',
    position: 'Summer Research Assistant',
    location: 'Lawrence Berkeley National Laboratory',
    start: 'May 2021',
    end: 'Aug. 2021',
    url: 'https://lbl.gov',
    info: `I worked on an HPC developer tool that does a unique way to layout vectors in memory to optimize for large stencil-based operations and kernels.
      This work was done as part of the <a target="_blank" href="https://www.exascaleproject.org/">Exascale Computing Project</a>, so I was able to work on
      experimental supercomputer systems from AMD and Intel.`,
    info2: `During my work, I interfaced directly with researchers at other national labs, AMD, Intel, and NVIDIA when I had architecture-specific questions and 
      to share results between teams.`,
  },
  {
    id: nanoid(),
    img: 'ctop.png',
    position: 'Undergraduate Research Assistant',
    location: 'University of Utah',
    info: `I performed research into methods of C code tuning with the Compiler Technology to Optimize Performance group (CTOP) and 
     Dr. Mary Hall, the director of the School of Computing. The project was done in conjunction with work being done at Argonne National Labs.`,
    info2: `I largely worked with developer guided code optimizations for C kernel functions using architecture-oriented optimizations. I
     was ultimately able to achieve ~15x speedup with an lu kernel function as detailed <a target="_blank" href="https://docs.google.com/document/d/1boxzzEzg6gh10RLhNm1Cqd3PR_llUGXxK3c_moExU5E/edit?usp=sharing">here.</a>`,
    start: 'May 2020',
    end: 'April 2021',
    url: 'http://ctop.cs.utah.edu/ctop/',
  },
  {
    id: nanoid(),
    img: 'rexchanger.jpg',
    position: 'Chief Technology Officer',
    location: 'Rexchanger - Salt Lake City, Utah',
    info: `I lead the full-stack development of Rexchanger's software, a peer-to-peer outdoor rental platform. I also prioritized
     and planned the development road-map and managed all technical communication.`,
    info2: `The backed is written with Python and Django and is hosted with Docker on AWS. The mobile app is cross-platform and is written with Flutter and Dart.`,
    url: 'http://www.rexchanger.com',
    start: 'Aug. 2019',
  },
  {
    id: nanoid(),
    position: 'Teaching Assistant',
    location: 'University of Utah',
    info: `I was previously a Teaching Assistant for ECE 2210, Electrical Engineering for Non-Majors, and ECE 3700, Intro to Digital System Design.
     In 2210, I was in charge of creating and leading labs and helping students learn the fundamentals of electrical engineering. Although 
     the course is for non-majors, it is surprisingly rigorous and covers a wide range of topics. In ECE 3700, I was the exam grader and I also assisted with general course concepts. I often created videos for students to follow
     for some more difficult processes that weren't covered in-depth in lectures. I also helped students with whatever they may need in the course!`,
    info2: `I am currently a TA for ECE 3710, Computer Design Lab. I am the only TA for this course, so I wear a lot of different hats.
      Since this is a project-based lab class I primarily help students with their questions and their design. This course focusses on CPU design with Verilog and covers a range of operations from ALU control, to memory mapping, to instruction management and processing.`,
  },
  {
    id: nanoid(),
    img: 'streamroot.png',
    position: 'Web and Media Compatibility Intern',
    location: 'Streamroot - Paris, France',
    info: `I moved to Paris for several months to work with Streamroot, a cutting-edge video streaming technology company. While there, I developed a new 
     system for running internal QA. I built an iOS app and integrated it with the deployment chain to ensure seamless QA of new SDK builds. I also built
     a companion webapp and CLI with bash and JavaScript to enable easy viewing of live logs from the SDK and the ability to push test configurations to several devices at once.`,
    info2: `This project was particularly difficult because Streamroot's technology is an SDK that has little to no visible affect on the user experience.
     Additionally, their tech relies on a swarm of users simultaneously accessing the same content so it was difficult to reliably test their software. I detailed
     my project on the <a href="https://link.medium.com/JSUY3NqCM9" target="_blank">company blog.</a>`,
    start: 'Sept. 2019',
    end: 'Jan. 2020',
    url: 'https://streamroot.io/',
  },
  {
    id: nanoid(),
    img: 'lucid.png',
    position: 'Software Engineering Intern',
    location: 'Lucid Software - Salt Lake City, Utah',
    info: `During my freshman year of college, I had the opportunity to do a summer internship with Lucid Software where I maintained and improved their Android app.
     I built their new process of photo uploading which was a major feature in the 2.0 app release. I also developed, tested, and compared new mobile
     rendering methods.`,
    start: 'May 2018',
    end: 'Aug. 2018',
    url: 'https://lucid.co/',
  },
];

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'mesh.jpg',
    title: 'Peer-to-peer Autonomous Vehicle Communication',
    info: `This is my undergraduate senior project at the University of Utah and it is currently undergoing development. Our ultimate goal is to
      develop a method for real-time communication between vehicles and a strategy for making use of communicated information.`,
    info2: `The first stage of this project was to implement a rudimentary form of autonomous driving. Our current model uses a mixture of computer vision,
      LIDAR data, and real-time routing to achieve basic autonomy.`,
    repo: 'https://github.com/MercuryMesh',
  },
  {
    id: nanoid(),
    img: 'guitar_hero.jpg',
    title: '16-bit RISC Computer and Guitar Hero Game',
    info: `Designed a fully-functional digital computer with Verilog-HDL and an FPGA board. The CPU was based on the RISC
     processor and instruction set. Then my team and I wrote a Guitar Hero clone that runs on our CPU, in our custom assembly language, that
     live-transcribes music.`,
    info2: `The full system interfaces with an Arduino running FFT to convert the AC music signal to useable, DC signals as well as 
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
    isPrivate: true,
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
