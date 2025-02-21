import React from "react";
import { GiJetFighter } from "react-icons/gi";
import HomeCrouser from "../HomeCrouser/HomeCrouser";


const slides = [
 
  {
    image: "images/image-1.jpg",
    title: "Explore the Mountains",
    description: "Discover breathtaking mountain views and adventure trails.",
  },
  {
    image: "images/image-2.jpg",
    title: "Beachside Paradise",
    description: "Relax at the most beautiful beaches around the world.",
  },
  {
    image: "images/image-3.jpg",
    title: "Cultural Wonders",
    description: "Experience the rich heritage and traditions of different cultures.",
  },
  {
    image: "images/image-4.jpg",
    title: "Desert Safari Adventures",
    description: "Ride through the golden dunes and experience the desert life.",
  },

]

const Home = () => {
  return (
    <>
   
    <HomeCrouser slides={slides} />
    
    
    </>
  );
};

export default Home;
