import taylorImg from "./assets/img/taylor.jpg";
import raulImg from "./assets/img/raul-angel.jpg";
import sarahImg from "./assets/img/sarah-brown.jpg";
import CarouselCard from "./CarouselCard";
import CarouselButton from "./components/CarouselButton";

function Carousel() {
  const data = [
    {
      name: "Taylor",
      image: taylorImg,
      rate: 5,
      comment:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum voluptas nemo corporis. Fugiat, est distinctio accusantium reprehenderit quis consequuntur maxime dicta architecto aspernatur consectetur nihil necessitatibus repellat nemo eligendi blanditiis?",
    },
    {
      name: "Raul Angel",
      image: raulImg,
      rate: 4,
      comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt nulla magni optio commodi fugiat voluptatem, odio laudantium dicta, tenetur, expedita repellendus? Vel, iste. Unde, deserunt distinctio.",
    },
    {
      name: "Sarah Brown",
      image: sarahImg,
      rate: 5,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, voluptatem. Nulla consequuntur ratione cupiditate consequatur ipsa? Quae nam dicta accusamus vel ab dolor nihil molestiae iure ipsa, laudantium consequuntur, voluptates excepturi dolore? Aliquid, minima!",
    },
  ];

  const carouselIndicator = data.map((_, i) => {
    if (i == 0) {
      return <button type="button" key={_.name} style={{ backgroundColor: " rgba(0, 0, 0, 1)" }} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>;
    } else {
      return <button type="button" key={_.name} style={{ backgroundColor: " rgba(0, 0, 0, 1)" }} data-bs-target="#carouselExampleCaptions" data-bs-slide-to={i} aria-label={i + 1}></button>;
    }
  });
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">{carouselIndicator}</div>
      <div className="carousel-inner">
        {data.map((item, i) => (
          <CarouselCard key={item.name} data={item} index={i} />
        ))}
      </div>
      <CarouselButton type={"prev"} />
      <CarouselButton type={"next"} />
    </div>
  );
}

export default Carousel;
