import "./App.css";
import Quote from "./Components/Quote.js";
import GenerateButton from "./Components/GenerateButton.js";
import { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState("Click the button to generate a quote");
  const [author, setAuthor] = useState("");
  const [generate, setGenerate] = useState(false);
  const url = "https://quotes15.p.rapidapi.com/quotes/random/?language_code=en";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "59f99a53b4msh38753797affb843p116dc4jsn317d1aebcd78",
      "x-rapidapi-host": "quotes15.p.rapidapi.com",
    },
  };

  const onGenerate = () => {
    setGenerate(true);
  };

  useEffect(() => {
    if (generate) {
      const fetchQuote = async () => {
        try {
          const response = await fetch(url, options);
          const result = await response.json();
          console.log(result);
          console.log(result.originator.name);
          setQuote(result.content);
          setAuthor(result.originator.name);
        } catch (error) {
          console.error(error);
        }
      };

      fetchQuote();

      setGenerate(false);
    } // eslint-disable-next-line
  }, [generate]);

  return (
    <div className="App">
      <h1>Quote generator</h1>
      <Quote text={quote} author={author} />
      <GenerateButton onGenerate={onGenerate} />
    </div>
  );
}

export default App;
