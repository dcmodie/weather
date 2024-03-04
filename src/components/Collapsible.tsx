import { useState } from 'react';
import CCell from './CCell';

export interface CContent {
  title: string;
  content: string;
}

interface CProps {
  data: CContent[];
}

const Collapsible: React.FC<CProps> = ({ data }) => {
  const [open, setOpen] = useState<number>(0);

  const renderData = () => {
    return data.map((item, index) => {
      return (
        <CCell
          index={index}
          open={open}
          setOpen={setOpen}
          displayData={item}
        ></CCell>
      );
    });
  };

  return <div>{renderData()}</div>;
};
export default Collapsible;
