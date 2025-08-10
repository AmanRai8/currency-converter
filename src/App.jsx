
import ConverterForm from "./components/ConverterForm";
import GitHubCorner from "./components/GitHubCorner";
import ConstellationEffect from "./personalComponent/ConstellationEffect";

const App = () => {
  return (
    <>
      <ConstellationEffect />
      <div className="currency-converter">
        {/* Github corner button */}
        <GitHubCorner
          repoUrl="https://github.com/AmanRai8/currency-converter"
          position="left" // or "right"
        />
        <h2 className="converter-title">Currency Converter</h2>
        <ConverterForm />
      </div>
    </>
  );
};

export default App;
