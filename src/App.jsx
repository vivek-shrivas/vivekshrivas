import "./App.css";
import Socials from "./components/Socials.jsx";
import Header from "./components/Header.jsx";
import Email from "./components/Email.jsx";
import Content from "./components/Content.jsx";
function App() {
  return (
    <>
      <div className="app-cnt">
        <Header />
        <div className="app-cnt--content">
          <Content />
        </div>
        <Socials />
        <Email />
      </div>
    </>
  );
}

export default App;
