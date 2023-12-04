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
});
