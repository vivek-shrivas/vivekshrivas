import "./css/Email.css";

const Email = () => {
  const email = "vivekshrivas.work@gmail.com";
  return (
    <div className="email-cnt delay-420">
      <p>
        <a href="mailto:vivekshrivas.work@gmail.com">{email}</a>
      </p>
    </div>
  );
};

export default Email;
