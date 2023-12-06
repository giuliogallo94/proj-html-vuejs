import { reactive } from "vue";

export const store = reactive({
  currentIndex: 0,
  navLinks: [
    {
      linkName: "Home",
      url: "#",
      isSelected: true,
    },
    {
      linkName: "About",
      url: "#",
      isSelected: false,
    },
    {
      linkName: "Services",
      url: "#",
      isSelected: false,
    },
    {
      linkName: "Blog",
      url: "#",
      isSelected: false,
    },
    {
      linkName: "Contact",
      url: "#",
      isSelected: false,
    },
    {
      linkName: "Portfolio",
      url: "#",
      isSelected: false,
    },
  ],
  servicesCard: [
    {
      name: "Data Analysis",
      url: "247",
    },
    {
      name: "SEO Optimization",
      url: "567",
    },
    {
      name: "Security Data",
      url: "538",
    },
    {
      name: "Branding Strategy",
      url: "566",
    },
  ],
  portfolio: [
    {
      title: "Satisfy Poster",
      subtitle: "Digital Experience",
      url: "a247b00b-3621-470f-b4b8-b3ac46f25907-1-790x576.jpg",
    },
    {
      title: "Basket of Flower on table",
      subtitle: "Branding Strategy",
      url: "8wa60okr-1-790x576.jpg",
    },
    {
      title: "Purinky Products",
      subtitle: "Digital Experience",
      url: "DRY-1-790x576.jpg",
    },
    {
      title: "Satisfy Poster",
      subtitle: "Branding Strategy",
      url: "a247b00b-3621-470f-b4b8-b3ac46f25907-1-790x576.jpg",
    },
    {
      title: "Mock-up",
      subtitle: "Branding Strategy",
      url: "84316050-0af0-49db-a53a-241d47ddad0e-2-790x576.jpg",
    },
  ],
  pricingCard: [
    {
      name: "Designing",
      subName: "PROCESS",
      price: "40",
      optionInfo: [
        { title: "Creative", features: "Design Enabled" },
        { title: "Vibrant", features: "Color Usage" },
        { title: "Eye", features: "Catching Design" },
        { title: "Extreme", features: "Typography" },
        { title: "Exceptional", features: "Design" },
      ],
      isSelected: false,
    },
    {
      name: "Developing",
      subName: "PRODUCT",
      price: "60",
      optionInfo: [
        { title: "Creative", features: "Design Enabled" },
        { title: "Vibrant", features: "Color Usage" },
        { title: "Eye", features: "Catching Design" },
        { title: "Extreme", features: "Typography" },
        { title: "Exceptional", features: "Design" },
      ],
      isSelected: true,
    },
    {
      name: "Supporting",
      subName: "CLIENTS",
      price: "80",
      optionInfo: [
        { title: "Creative", features: "Design Enabled" },
        { title: "Vibrant", features: "Color Usage" },
        { title: "Eye", features: "Catching Design" },
        { title: "Extreme", features: "Typography" },
        { title: "Exceptional", features: "Design" },
      ],
      isSelected: false,
    },
  ],
  blogSmallPosts: [
    {
      date: "April, 21, 2019",
      author: "Paul",
      title: "Clearing Corporations get SEBI not to invest in overnight funds",
      paragraph:
        "When, while the lovely valley teems with vapot around me, and the meridian sun s...",
    },
    {
      date: "April, 21, 2019",
      author: "Paul",
      title:
        "Shabnam Dhillion, wife of RSSB chied Gurinder Dhillon, passes away in London",
      paragraph:
        "When, while the lovely valley teems with vapot around me, and the meridian sun s...",
    },
  ],
  blogWidePosts: [
    {
      date: "April, 21, 2019",
      author: "Paul",
      title: "Amazon gets CCI nod to acquire 49% stake in",
      paragraph:
        "When, while the lovely valley teems with vapot around me, and the meridian sun s...",
    },
  ],
  testimonials: [
    {
      name: "Michkel Angel",
      position: "Marketing Manager",
      image: "szabo-viktor-1266895-unsplash-1024x1024.png",
      comment:
        "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper impenetrable follage of my trees, and but a thousand.",
      vote: 3,
    },
    {
      name: "Michkel Angel",
      position: "Marketing Manager",
      image: "philipe-cavalcante-539505-unsplash-1024x1024.png",
      comment:
        "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper impenetrable follage of my trees, and but a thousand.",
      vote: 3,
    },
    {
      name: "Michkel Angel",
      position: "Marketing Manager",
      image: "fabio-spinelli-695744-unsplash-1024x1024.png",
      comment:
        "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper impenetrable follage of my trees, and but a thousand.",
      vote: 3,
    },
  ],
  clients: [
    {
      name: "Golden",
      url: "client-1-1.png",
    },
    {
      name: "Sweety Cafeteria",
      url: "clienty-2.png",
    },
    {
      name: "Fastlane Sportswear",
      url: "clienty-4.png",
    },
    {
      name: "Mighty Furnitures",
      url: "client-5.png",
    },
    {
      name: "Jack Roller",
      url: "clienty-3.png",
    },
  ],
  ourContact: {
    name: "Phlox Corporate",
    address:
      "Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, Tx 76051",
    phone: "+99 (0) 101 0000 888",
    email: "info@yourdomain.com",
  },
  copyrights: "2020 Phlox. All Rights Reserved.",
  socials: [
    {
      name: "Instagram",
      icon: "fa-instagram",
    },
    {
      name: "Linkedin",
      icon: "fa-linkedin-in",
    },
    {
      name: "Facebook",
      icon: "fa-facebook-f",
    },
    {
      name: "Twitter",
      icon: "fa-twitter",
    },
  ],
  chat: {
    name: "Chat Bot Live",
    avatar: "_1",
    visible: false,
    messages: [
      {
        message: "Ciao, come posso aiutarti?",
        status: "received",
      },
    ],
  },
});
