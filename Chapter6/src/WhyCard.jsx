function WhyCard({ img, title, body }) {
  return (
    <div className="card">
      <div className="card-body">
        <img src={img} alt={title} />
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
      </div>
    </div>
  );
}

export default WhyCard;
