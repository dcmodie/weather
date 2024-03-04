import { useState } from 'react';
interface Props {
  fetchData: (lat: number, lon: number) => Promise<void>;
}

//React.Dispatch<React.SetStateAction<number>>;
const InputForm: React.FC<Props> = ({ fetchData }) => {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    fetchData(lat, lon);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Lat"
          value={lat}
          onChange={(e) => {
            setLat(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Lon"
          value={lon}
          onChange={(e) => {
            setLon(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default InputForm;
