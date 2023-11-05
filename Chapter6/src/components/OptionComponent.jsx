function OptionComponent({ name, option, value, onChange }) {
  const valueOption = [...option];
  return (
    <div>
      <select name={name} id={name} className="form-select" value={value} onChange={onChange}>
        {valueOption.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default OptionComponent;
