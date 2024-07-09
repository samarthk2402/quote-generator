const Quote = ({ text, author }) => {
  return (
    <div className="quoteContainer">
      <h3 className="quote">{text}</h3>
      <h4 className="author">{author ? author : null}</h4>
    </div>
  );
};

export default Quote;
