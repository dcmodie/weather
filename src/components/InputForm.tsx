import { useState } from 'react';
interface Props {
  fetchData: (index: number) => Promise<Response>;
}

//React.Dispatch<React.SetStateAction<number>>;
const InputForm: React.FC<Props> = ({ fetchData }) => {
  const [inValue, setInValue] = useState(0);
  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    fetchData(inValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="header-search">
          <span className="visually-hidden"></span>
        </label>
        <input
          type="text"
          placeholder="Enter Index"
          name="s"
          value={inValue}
          onChange={(e) => {
            setInValue(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default InputForm;
