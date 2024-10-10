import React from "react";
import "../styles/homehero.css";

const HomeHero = () => {
  // const images = [
  //   {
  //     title: "learn",
  //     image:
  //       "https://cdn.unstop.com/uploads/images/home/home-hero-learn.png?d=324x406",
  //     link: "https://unstop.com/courses",
  //   },
  //   {
  //     title: "practice",
  //     image:
  //       "https://cdn.unstop.com/uploads/images/home/home-hero-practice.png?d=324x406",
  //     link: "https://unstop.com/practice",
  //   },
  //   {
  //     title: "mentorships",
  //     image:
  //       "https://cdn.unstop.com/uploads/images/home/home-hero-mentorships.png?d=324x406",
  //     link: "https://unstop.com/mentor",
  //   },
  // ];


  const images = [
    {
      title: 'Overall',
      image: "https://cdn.unstop.com/uploads/images/home/home-hero-learn.png?d=324x406",
      link: '#',
      scores: [
        { name: 'Player 1', points: 100 },
        { name: 'Player 2', points: 90 },
        { name: 'Player 3', points: 85 },
        { name: 'Player 4', points: 80 },
        { name: 'Player 5', points: 75 },
      ],
      category: 'Overall'
    },
    {
      title: 'Daily',
      image: "https://cdn.unstop.com/uploads/images/home/home-hero-practice.png?d=324x406",
      link: '#',
      scores: [
        { name: 'Player 1', points: 200 },
        { name: 'Player 2', points: 190 },
        { name: 'Player 3', points: 180 },
        { name: 'Player 4', points: 170 },
        { name: 'Player 5', points: 160 },
      ],
      category: 'Daily'
    },
    {
      title: 'Themewise',
      image: "https://cdn.unstop.com/uploads/images/home/home-hero-mentorships.png?d=324x406",
      link: '#',
      scores: [
        { name: 'Player 1', points: 150 },
        { name: 'Player 2', points: 140 },
        { name: 'Player 3', points: 130 },
        { name: 'Player 4', points: 120 },
        { name: 'Player 5', points: 110 },
      ],
      category: 'Themewise'
    }
  ];
  



  return (
    <section className="home-hero">
      <div className="home-hero-container container">
        <div className="home-hero-left">
          <h1>
            Welcome
            <br />
            <strong>Lorem, ipsum dolor.</strong>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quaerat animi quae voluptatum consectetur quos consequuntur provident suscipit odit cum.
          </p>
        </div>
        <div className="home-hero-right">
          <span>
          <h1 style={{fontSize: "45px", margin: "7px", marginBottom: "10px" , fontWeight: "400"}}>Leaderboard</h1>
          </span>
          <div className="home-hero-right-images">
            {images.map((ele, index) => {
              return (
              <div className="home-hero-card" key={ele.image}>
                <div className="home-hero-image">
                  {/* Front Side */}
                  <div className="home-hero-card-front">
                    <span className="home-hero-card-title-front">{ele.title}</span> {/* Title on Front */}
                    <a href={ele.link}>
                      <img src={ele.image} alt={ele.title} />
                    </a>
                  </div>
                  {/* Back Side */}
                  <div className="home-hero-card-back">
                    <span className="home-hero-card-title-back">{ele.title}</span> {/* Title on Back */}
                    <h3>Top 5 Players</h3>
                    <ul>
                      {ele.scores.map((score, idx) => (
                        <li key={idx}>{`${idx + 1}. ${score.name}: ${score.points} pts`}</li>
                      ))}
                    </ul>
                    <p>{ele.category} Scores</p>
                  </div>
                </div>
              </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeHero;
