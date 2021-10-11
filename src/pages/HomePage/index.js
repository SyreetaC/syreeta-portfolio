import profileImage from "../../images/Portfolio photo 3.jpg";
import IntroductionBox from "../../components/IntroductionBox";

const HomePage = () => {
  return (
    <div>
      <div className="main-content">
        <IntroductionBox />
        <div className="image-container">
          <img
            className="profile-photo"
            alt="Syreeta Cummings"
            src={profileImage}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
