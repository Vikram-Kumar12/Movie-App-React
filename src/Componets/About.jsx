import React from "react";
import { useNavigate } from "react-router-dom";
function About() {
    const navigate = useNavigate()
    return (

      <div className="w-full h-full bg-gray-900 text-white p-10 overflow-hidden overflow-y-auto">
        {/* Welcome Section */}
        <h1 className="text-3xl font-bold mb-4">
            <i onClick={()=> navigate(-1)} className="ri-arrow-left-fill hover:text-[#6556cd] cursor-pointer"></i>
            <span className="ml-1 hover:scale-105">About Us</span>
        </h1>
        <p className="text-lg mb-6 w-[80%]">
          Welcome to <span className="font-bold text-blue-400 cursor-pointer text-xl">JustWatch</span> , your ultimate destination for discovering, exploring, and enjoying the magic of movies and TV shows. Whether you're a casual viewer or a die-hard fan, our platform is designed with you in mind.
        </p>
  
        {/* Our Mission */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 hover:scale-105 w-fit">Our Mission</h2>
          <p className="text-lg w-[80%]">
            Our mission is to connect fans with the latest and greatest in entertainment. We aim to provide a seamless platform that allows you to explore trending TV shows, timeless classics, and blockbuster hits effortlessly.
          </p>
        </section>
  
        {/* What We Offer */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 hover:scale-105 w-fit">What We Offer</h2>
          <ul className="list-disc list-inside text-lg text-blue-200">
            <li>
              <span className="text-lg font-semibold ">Discover TV Shows and Movies : </span> <span className="text-white">Explore a wide range of content, from new releases to top-rated classics.</span>
            </li>
            <li>
              <span className="text-lg font-semibold ">Personalized Experience :</span>
              <span className="text-white">Customize your searches based on categories, genres, and ratings.</span> 
            </li>
            <li>
              <span className="text-lg font-semibold ">Infinite Scrolling :</span> <span className="text-white">Dive deeper into our vast library with seamless scrolling.</span>
            </li>
            <li>
              <span className="text-lg font-semibold ">Up-to-Date Content :</span> <span className="text-white">Stay ahead with regularly updated information on your favorite shows and movies.</span>
            </li>
          </ul>
        </section>
  
        {/* Why Choose Us */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 w-fit hover:scale-105">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-lg text-blue-200">
            <li>
              <span>Comprehensive Library :</span> <span className="text-white">A curated selection of TV shows and movies across genres.</span>
            </li>
            <li>
              <span>User-Friendly Design :</span> <span className="text-white">Intuitive navigation and attractive interface.</span>
            </li>
            <li>
              <span>Passion for Entertainment :</span> <span className="text-white">We are movie buffs just like you, dedicated to delivering the best experience.</span>
            </li>
            <li>
              <span>Reliable and Fast :</span> <span className="text-white">Powered by robust APIs for accurate and up-to-date information.</span>
            </li>
          </ul>
        </section>
  
        {/* Join Our Community */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 w-fit hover:scale-105">Join Our Community</h2>
          <p className="text-lg w-[80%]">
            At <span className="font-bold text-blue-400 cursor-pointer text-xl">JustWatch </span>, it's not just about movies and TV shows—it's about connecting people who share a love for storytelling. Follow us on social media, share your reviews, and become part of our growing community.
          </p>
        </section>
  
        {/* Contact Us */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 w-fit hover:scale-105">Get in Touch</h2>
          <p className="text-lg">
            We'd love to hear from you! If you have any suggestions, feedback, or inquiries, feel free to contact us at{" "}
            <a href="mailto:your-email@example.com" className="text-blue-400 underline">
              your-email@example.com
            </a>
            .
          </p>
        </section>
  
        {/* Thank You Section */}
        <p className="text-lg font-semibold">
          Thank you for trusting <span className="font-bold text-blue-400 cursor-pointer text-xl">JustWatch</span> as your guide to the world of entertainment. Sit back, relax, and let the adventure begin!
        </p>
      </div>
    );
  }
  
  export default About;
  