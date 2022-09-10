// Import data
import { postings } from "./postings";
// Import components
import "./App.css";
import Directory from "./component/Directory";
import Gallery from "./component/gallery";
import Searchbar from "./component/Searchbar";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        {/* Your content will go here! */}
        <Searchbar />
        <Directory />
        <Sidebar />
        <Gallery postings={postings} />
      </div>
    </div>
  );
}

export default App;
