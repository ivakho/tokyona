import React from "react";
import "./Excursions.css";
import OptionCard from "../OptionCard/OptionCard";
import excursion_1_photo_1 from "../../assets/images/excursions/excursion_1/photo_1.jpg";
import excursion_1_photo_2 from "../../assets/images/excursions/excursion_1/photo_2.jpg";
import excursion_1_photo_3 from "../../assets/images/excursions/excursion_1/photo_3.jpg";
import excursion_1_photo_4 from "../../assets/images/excursions/excursion_1/photo_4.jpg";
import excursion_1_photo_5 from "../../assets/images/excursions/excursion_1/photo_5.jpg";
import excursion_1_photo_6 from "../../assets/images/excursions/excursion_1/photo_6.jpg";
import excursion_2_photo_1 from "../../assets/images/excursions/excursion_2/photo_1.jpg";
import excursion_2_photo_2 from "../../assets/images/excursions/excursion_2/photo_2.jpg";
import excursion_2_photo_3 from "../../assets/images/excursions/excursion_2/photo_3.jpg";
import excursion_3_photo_1 from "../../assets/images/excursions/excursion_3/photo_1.jpg";
import excursion_3_photo_2 from "../../assets/images/excursions/excursion_3/photo_2.jpg";
import excursion_3_photo_3 from "../../assets/images/excursions/excursion_3/photo_3.jpg";
import excursion_3_photo_4 from "../../assets/images/excursions/excursion_3/photo_4.jpg";
import excursion_3_photo_5 from "../../assets/images/excursions/excursion_3/photo_5.jpg";
import excursion_3_photo_6 from "../../assets/images/excursions/excursion_3/photo_6.jpg";

export const EXCURSIONS_INFO = [
  {
    img: excursion_1_photo_1,
    fullImgs: [
      excursion_1_photo_1,
      excursion_1_photo_2,
      excursion_1_photo_3,
      excursion_1_photo_4,
      excursion_1_photo_5,
      excursion_1_photo_6,
    ],
    title: "Tokyo's Hidden Bites & Nightlife Adventure",
    fullDescription: (
      <>
        Discover Tokyo's culinary secrets on this exclusive food tour, where
        you'll savor the best of Japan's hidden gems and iconic eateries. Dive
        into a world of authentic flavors as we guide you through a selection of
        secret local spots, world-renowned cafes, and vibrant street food
        stalls. Experience the true essence of Tokyo's food culture, from
        mouth-watering ramen and sushi to delightful Japanese sweets that will
        leave you craving more.
        <br />
        <br />
        As the night unfolds, we'll explore some of Tokyo's top bars, each
        offering a unique atmosphere—from intimate speakeasies to lively
        izakayas. Enjoy expertly crafted cocktails and sample local sake,
        immersing yourself in the city's dynamic nightlife. Perfect for food
        lovers and adventurers alike, this tour offers an unforgettable taste of
        Tokyo's hidden culinary treasures.
      </>
    ),
    link: "/excursions",
    id: "1",
  },
  {
    img: excursion_2_photo_1,
    fullImgs: [excursion_2_photo_1, excursion_2_photo_2, excursion_2_photo_3],
    title: (
      <>
        Anime Wonderland:
        <br />
        Discover Tokyo's Otaku Culture
      </>
    ),
    fullDescription: (
      <>
        Dive into the heart of Tokyo’s vibrant anime and manga culture on this
        immersive Anime Wonderland Tour. This guided excursion takes you through
        the most iconic anime hotspots in the city, including Akihabara, the
        epicenter of otaku culture, and Nakano Broadway, a treasure trove of
        rare collectibles and vintage manga. Visit the Ghibli Museum, where the
        magical world of Studio Ghibli comes to life, and explore the themed
        cafes inspired by popular anime series. Perfect for anime enthusiasts,
        this tour provides a unique look at the studios, shops, and hidden gems
        that have shaped the world of Japanese animation. Or go visit Odaiba and
        have a look at this futuristic site and famous Gundam show
      </>
    ),
    link: "/excursions",
    id: "2",
  },
  {
    img: excursion_3_photo_1,
    fullImgs: [
      excursion_3_photo_1,
      excursion_3_photo_2,
      excursion_3_photo_3,
      excursion_3_photo_4,
      excursion_3_photo_5,
      excursion_3_photo_6
    ],
    title: (
      <>
        Mystical Tokyo:
        <br />
        Through Temples and Spiritual Sites
      </>
    ),
    fullDescription: (
      <>
        Dive into the ancient spirit of Tokyo on this guided tour through the
        city's most sacred and mystical sites. Explore the serene Asakusa
        Temple, experience the tranquility of Meiji Shrine, and discover hidden
        gems that reflect Japan’s rich spiritual traditions. This tour will take
        you beyond the surface, revealing the rituals, legends, and spiritual
        essence that define Tokyo’s unique blend of past and present.
      </>
    ),
    link: "/excursions",
    id: "3",
  },
];

const Excursions = () => {
  return (
    <section className="excursions__section">
      <h1 className="excursions__title">Excursions</h1>
      <div className="excursions__container">
        {EXCURSIONS_INFO.map((item, index) => (
          <OptionCard
            id={item.id}
            key={index}
            img={item.img}
            title={item.title}
            link={item.link}
            titleSize={"27px"}
          />
        ))}
      </div>
    </section>
  );
};

export default Excursions;
