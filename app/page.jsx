import AnnouncementBar from "./components/Hero/Announcementbar";
import Navbar from "./components/Hero/Navbar";
import Hero from "./components/Hero/Hero";
import Gallery from "./components/Hero/Gallery";
import About from './components/About/About';
import Highlights from "./components/Highlights/Highlights";
import EventsSection from "./components/Events/EventsSection";
import FAQSection from "./components/FAQ/FAQSection";
import TestimonialsSection from "./components/TestMonials/TestimonialsSection";
import PartnersFooter from "./components/PartnersFooter/PartnersFooter";
import NewsletterSection from "./components/NewsLetter/NewsletterSection";
import NewsletterSectionDesktop from "./components/Desktop/NewsletterSectionDesktop";
import GalleryT from "./components/Events/GalleryT";
export default function Home() {
  return (
    <>
       <Navbar />
      <AnnouncementBar />
      <Hero />
       <Gallery />
       <About/>
      <Highlights/>
      <EventsSection/>
      <GalleryT/>
      <FAQSection/>
      <TestimonialsSection/>
      <PartnersFooter/>
      <NewsletterSection/>
      <NewsletterSectionDesktop/> 
    </>
  );
}
