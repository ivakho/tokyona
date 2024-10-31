import React from "react";
import "./Tour.css";
import day_1_img from "../../assets/images/day_1.jpg";
import day_2_img from "../../assets/images/day_2.jpg";
import day_3_img from "../../assets/images/day_3.jpg";
import day_4_img from "../../assets/images/day_4.jpg";
import day_5_img from "../../assets/images/day_5.jpg";
import day_6_img from "../../assets/images/day_6.jpg";
import day_7_img from "../../assets/images/day_7.jpg";
import day_8_img from "../../assets/images/day_8.jpg";
import day_9_img from "../../assets/images/day_9.jpg";
import day_10_img from "../../assets/images/day_10.jpg";
import day_11_img from "../../assets/images/day_11.jpg";
import TourCard from "../TourCard/TourCard";

const TOUR_INFO = [
  {
    title: "Arrival",
    description: (
      <>
        Arrival in Japan, airport pickup, hotel check-in. Walk through the
        historic district of Tokyo, visit the shopping street and Sensoji
        Temple.
        <br />
        <br />
        Head to the waterfront with a view of Tokyo Sky Tree. After that,
        heading to Akihabara, a district known not only for anime but also for
        electronics and arcade games (not casino types, but various arcade
        machines).
      </>
    ),
    img: day_1_img,
  },
  {
    title: "Heart of Tokyo",
    description: (
      <>
        Start the day at the famous Shibuya Crossing, walk to the fashionable
        Harajuku district. Here, you can visit Yoyogi Park and Meiji Shrine. In
        the evening, move to Shinjuku, where you can see a musical light show on
        the Tokyo Metropolitan Government Building. Check out the 3D
        advertisements and the local red-light district.
        <br />
        <br />
        Optionally, you can replace or add a visit to Shin-Okubo, a unique
        neighborhood near Shinjuku, also known as “Little Korea.”
      </>
    ),
    img: day_2_img,
  },
  {
    title: "Imperial Palace and Ginza",
    description: (
      <>
        The Imperial Palace is located in the very center of Tokyo, in a
        prestigious business district. You can visit the beautiful garden
        adjacent to the palace. Afterward, visit Ginza – less traditional Asian
        atmosphere, more luxury boutiques, brands, and glamour.
      </>
    ),
    img: day_3_img,
  },
  {
    title: "Meguro and Shiba Park",
    description: (
      <>
        Both are pleasant places for walks and photo sessions. In Meguro,
        there’s the famous cherry blossom alley with lanterns that appears
        online every year, and one of the world’s largest Starbucks, offering
        expertly made tea and coffee, a wide variety of food, and signature
        cocktails.
        <br />
        <br />
        Shiba Park offers the best view of Tokyo Tower, with nearby quiet
        streets perfect for photos and another temple to discover.
      </>
    ),
    img: day_4_img,
  },
  {
    title: "Osaka",
    description: (
      <>
        Departure to Osaka on one of the world’s fastest trains, the Shinkansen.
        On a clear day, you can see Mount Fuji from the window during the trip.
        Hotel check-in, visit the famous Osaka Castle, and Umeda Sky Building,
        which offers a stunning view of the city, followed by an evening in the
        lively Dotonbori district.
      </>
    ),
    img: day_5_img,
  },
  {
    title: "Kyoto",
    description: (
      <>
        After bustling Osaka, return to traditional Japan and spend the day in
        Kyoto. Visit the famous Fushimi Inari Shrine with its red gates and
        Kiyomizu-dera – the Temple of Pure Water. Nearby is the Gion district,
        where you might spot real geishas if you’re lucky.
      </>
    ),
    img: day_6_img,
  },
  {
    title: "Dive in traditions",
    description: (
      <>
        Visit the Arashiyama Bamboo Grove, try on traditional kimono/yukata, and
        take a break to connect with nature in the moss garden of Gio-ji Temple,
        surrounded by the aura of a tragic love story. Also, visit Kinkaku-ji
        Temple to admire the majestic Golden Pavilion.
      </>
    ),
    img: day_7_img,
  },
  {
    title: "Deers in Nara",
    description: (
      <>
        A packed day starts with a trip to the small town of Uji, considered the
        birthplace of matcha tea. This is also the setting for the last ten
        chapters of the world-renowned Japanese literary work “The Tale of
        Genji.”
        <br />
        <br />
        After experiencing the calm and steady rhythm of this place and tasting
        matcha, head to Nara. This city is famous for its free-roaming deer and,
        of course, Todai-ji Temple – the largest wooden structure in the world.
      </>
    ),
    img: day_8_img,
  },
  {
    title: "Mt. Fuji and Hot Springs",
    description: (
      <>
        Take the Shinkansen back, but not yet to Tokyo.
        <br />
        <br />
        Instead, to a small village by Lake Kawaguchi, which offers stunning
        views of Mount Fuji from everywhere. Check into a traditional Japanese
        ryokan with a hot spring and relax.
      </>
    ),
    img: day_9_img,
  },
  {
    title: "Odaiba",
    description: (
      <>
        Arrive in Tokyo, leave your luggage at the hotel, and head to Odaiba.
        This artificial island in Tokyo Bay features beautiful modern
        architecture, a beach with water access, a mini Statue of Liberty,
        Rainbow Bridge, and a life-sized Gundam statue.
        <br />
        <br />
        You can easily spend the whole day on Odaiba – there’s an interactive
        museum of science and innovation (robots and everything that comes to
        mind with those words), and teamLab, a next-generation digital art
        museum offering a unique experience.
      </>
    ),
    img: day_10_img,
  },
  {
    title: "Departure",
    description: "Check out and transfer to the airport.",
    img: day_11_img,
  },
];

const Tour = () => {
  return (
    <section className="tour__section">
      <h1 className="tour__title">Classic Tour</h1>
      <div className="tour__container">
        {TOUR_INFO.map((item, index) => (
          <TourCard
            key={index}
            day={++index}
            title={item.title}
            description={item.description}
            img={item.img}
            isReversed={index % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
};

export default Tour;
