import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./CustomToursPage.module.css";
import custom_photo_1 from "../../assets/images/custom/photo_1.jpg";
import custom_photo_2 from "../../assets/images/custom/photo_2.jpg";
import custom_photo_3 from "../../assets/images/custom/photo_3.jpg";
import custom_photo_4 from "../../assets/images/custom/photo_4.jpg";
import custom_photo_5 from "../../assets/images/custom/photo_5.jpg";
import custom_photo_6 from "../../assets/images/custom/photo_6.jpg";

const fullImgs = [
  custom_photo_1,
  custom_photo_2,
  custom_photo_3,
  custom_photo_4,
  custom_photo_5,
  custom_photo_6,
];

const CustomToursPage = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className={styles.custom}>
          <h3 className="custom__title">Custom Tours</h3>
          <p className={styles.custom__description}>
            Discover Japan on your terms with our Custom Tours. Whether you're a
            first-time visitor looking for a personalized adventure or a
            seasoned traveler who's already explored the classic sights, we’re
            here to craft a unique experience tailored to your interests. From
            hidden gems to cultural deep dives, let us design a journey that
            reflects your individual preferences and passions. Reach out to us,
            and together we’ll create the perfect itinerary just for you
          </p>
          <div className={styles.excursion__imgs}>
            {fullImgs.map((item, index) => (
              <img
                className={styles.excursion__img}
                key={index}
                src={item}
                alt="excursion_image"
              />
            ))}
          </div>
        </div>
        <p className={styles.custom__contact}>
          We can set-up a call or chat and walk through all your questions. Feel free to
          contact below
        </p>
      </main>
      <Footer />
    </>
  );
};

export default CustomToursPage;
