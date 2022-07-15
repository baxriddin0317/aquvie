import React from 'react'

// imoprt components
import Contact from "../components/Contact";
import Footer from '../components/Footer';
import Header from "../components/header/Header";
import Jumbotron from "../components/Jumbotron";
import LastSection from "../components/LastSection";
import List from "../components/List";

function Content() {
  return (
    <div className="bacImg">
        <Header />
        <Jumbotron />
        <Contact />
        <List />
        <LastSection />
        <Footer />
    </div>
  )
}

export default Content