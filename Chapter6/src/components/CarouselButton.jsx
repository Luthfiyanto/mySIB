function CarouselButton({ type }) {
  const data = {
    prev: "carousel-control-prev",
    prevIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style={{ color: " rgba(0, 0, 0, 1)" }} fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
      </svg>
    ),
    next: "carousel-control-next",
    nextIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style={{ color: "rgba(0, 0, 0, 1)" }} fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
      </svg>
    ),
  };

  const className = type === "prev" ? "carousel-control-prev" : "carousel-control-next";
  const icon =
    type === "prev" ? (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style={{ color: " rgba(0, 0, 0, 1)" }} fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style={{ color: "rgba(0, 0, 0, 1)" }} fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
      </svg>
    );

  return (
    <button className={className} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide={type}>
      {icon}
    </button>
  );
}

export default CarouselButton;
