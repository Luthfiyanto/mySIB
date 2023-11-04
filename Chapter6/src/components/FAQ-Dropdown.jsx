import { useState } from "react";

function FaqDropdown({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="FAQ_item">
      <button className="question_btn" type="button" onClick={() => setOpen(!open)}>
        <span>{question}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
        </svg>
      </button>
      {open && <p className="answer">{answer}</p>}
    </div>
  );
}

export default FaqDropdown;
