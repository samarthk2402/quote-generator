const GenerateButton = ({ onGenerate }) => {
  return (
    <button className="generateButton" onClick={onGenerate}>
      Generate
    </button>
  );
};

export default GenerateButton;
