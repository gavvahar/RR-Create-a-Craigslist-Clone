// Import data
import { postings } from "./postings";
// Import components
import "./App.css";
import Directory from "./Components/Directory";
import Gallery from "./component/gallery";

function App() {
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        {/* Your content will go here! */}
        <Directory />
        <Gallery postings={postings} />
      </div>
    </div>
  );
}

export default App;
