export const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/20 rounded-full bg-white/20 backdrop-blur">
        <a
          className="nav-item"
          data-section="home"
          onClick={() => scrollToSection("home")}
        >
          Home
        </a>
        <a
          className="nav-item"
          data-section="pro"
          onClick={() => scrollToSection("pro")}
        >
          Projects
        </a>
        <a
          className="nav-item"
          data-section="testimonials"
          onClick={() => scrollToSection("testimonials")}
        >
          Testimonials
        </a>
        <a
          className="nav-item"
          data-section="about"
          onClick={() => scrollToSection("about")}
        >
          About
        </a>
        <a
          className="nav-item"
          data-section="contact"
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
