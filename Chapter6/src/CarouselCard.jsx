import star from "./assets/img/Star 1.svg";
function CarouselCard({ data, index }) {
  const { name, image, rate, comment } = data;

  const rateElement = Array(rate)
    .fill()
    .map((_, i) => <img src={star} key={i} alt="rate" />);
  return (
    <div className={index == 0 ? "carousel-item active" : "carousel-item"}>
      <div className="carousel-caption">
        <div>
          <img src={image} alt={name} className="profil_pict" />
        </div>
        <div className="review_item">
          <div className="rate">{rateElement}</div>
          <p>{comment}</p>
          <h5>{name}</h5>
        </div>
      </div>
    </div>
  );
}

export default CarouselCard;
