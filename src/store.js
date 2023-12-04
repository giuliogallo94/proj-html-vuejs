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
});
