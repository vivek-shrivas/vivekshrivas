import "./css/Header.css";
import CustomButton from "./CustomButton";

function Header() {
  const resume = "src/components/documents/VivekShrivasResume.pdf";

  return (
    <header>
      <div className="logo delay-0">
        <span>VS</span>
      </div>
      <div className="header-content">
        <ul className="header-content-list">
          <li>
            <a className="header-item delay-0">
              <span>01.</span> About
            </a>
          </li>
          <li>
            <a className="header-item delay-75">
              <span>02.</span> Experience
            </a>
          </li>
          <li>
            <a className="header-item delay-150">
              <span>03.</span> Work
            </a>
          </li>
          <li>
            <a className="header-item delay-210">
              <span>04.</span> Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="btn-cnt delay-280">
        <CustomButton url={resume} buttonName="Resume" />
      </div>
    </header>
  );
}

export default Header;
