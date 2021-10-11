import "./IntroButton.css";

const IntroButton = () => {
  return (
    <div className="container">
      <button className="introButton">
        <a
          className="cvLink"
          href="https://drive.google.com/file/d/1ic1ISpgmbjZia5bpQb1ASq-ub_GhOrX5/view?usp=sharing"
        >
          Link to my CV
        </a>
      </button>
    </div>
  );
};

export default IntroButton;
