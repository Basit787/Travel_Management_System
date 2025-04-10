export const getDescription = (description) => {
  return description.slice(0, 200) + "...";
};

export const scrollToTop = () => {
  window.scrollTo({ top: true, behavior: "smooth" });
};
