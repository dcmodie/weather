interface CCellProps {
  open: boolean;
  setOpen: () => void;
  index: number;
  data: { title: string; content: string };
}
//{ title: 'c', content: 'cccccccccc' }
const CCell = ({ open, setOpen, index, displayData }) => {
  const cellClicked = () => {
    if (open !== index) {
      setOpen(index);
    }
  };
  return (
    <div onClick={cellClicked} className="cell">
      <div>{displayData.title}</div>
      <div className={open === index ? 'open-cel' : 'closed-cell'}>
        {displayData.content}
      </div>
    </div>
  );
};
export default CCell;
//<div className={open === index ? 'open-cel' : 'closed-cell'}>content</div>
