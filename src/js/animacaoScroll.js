const animationsScroll = {
  delay: 300,
  distance: "100%",
  origin: "left",
  duration: 1000,
};

export const animacao = {
  aplicaAnimacao() {
    ScrollReveal().reveal(".animationsScroll", animationsScroll);
  },
};
