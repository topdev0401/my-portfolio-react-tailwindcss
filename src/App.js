
import React, { useState, useEffect } from "react";

import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from "./components/Footer";
import Nav from './components/Nav';
import Profile from './components/Profile';
import Services from './components/Services';
import Work from './components/Work';

function App() {
 
  const [profileData, setProfileData] = useState({});
  // const [serviceData, setServiceData] = useState({});
  // const [workData, setWorkData] = useState({});
  // const [contactData, setContactData] = useState({});
  // const [socialData, setSocailData] = useState({});
  // const [portfolioData, setPortfolioData] = useState({});
  let count = 1;
  useEffect(() => {
    fetch('/myData.json')
      .then((res) => res.json())
      .then((data) => {
        setProfileData(data);
        // setProfileData({
        //   name : data.main.name,
        //   occupation : data.main.occupation,
        //   image : data.main.image,
        // });
        // setServiceData(data.main.services);
        // setContactData(data.main?.contact);
        // setSocailData(data.main?.social);
        // setWorkData(data.resume.work);
        // setPortfolioData(data.portfolio);
      });
  }, []);


  return (
    <>
      <Nav />
      <Profile data={profileData.main}/>
      <Services data={profileData.main}/>
      <Experience data={profileData.main}/>
      <Work data={profileData.main}/>
      <Contact data={profileData.main} />
      <Footer data={profileData.main}/>
    </>
  );
}

export default App;
