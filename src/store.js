import { reactive } from "vue";

export const store = reactive({
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
      image: "philipe-cavalcante-539505-unsplash-1024x1024.png",
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
});
