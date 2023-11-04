import { useState } from "react";
import FaqDropdown from "./components/FAQ-Dropdown";

function FAQ() {
  const [open, setOpen] = useState(false);
  const data = [
    {
      question: "Apa saja syarat yang dibutuhkan?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sequi aliquid hic id similique beatae ratione pariatur sunt, harum maiores?",
    },
    {
      question: "Berapa hari minimal sewa mobil lepas kunci?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sequi aliquid hic id similique beatae ratione pariatur sunt, harum maiores?",
    },
    {
      question: "Berapa hari sebelumnya sabaiknya booking sewa mobil?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sequi aliquid hic id similique beatae ratione pariatur sunt, harum maiores?",
    },
    {
      question: "Apakah Ada biaya antar-jemput?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sequi aliquid hic id similique beatae ratione pariatur sunt, harum maiores?",
    },
    {
      question: "Bagaimana jika terjadi kecelakaan?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sequi aliquid hic id similique beatae ratione pariatur sunt, harum maiores?",
    },
  ];
  return (
    <section id="FAQ">
      <article id="FAQ_title">
        <h3>Frequently Asked Question</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
      </article>
      <article id="question">
        {data.map((item) => (
          <FaqDropdown key={item.question} question={item.question} answer={item.answer} />
        ))}
      </article>
    </section>
  );
}

export default FAQ;
