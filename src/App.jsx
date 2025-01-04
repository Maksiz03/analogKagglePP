import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Competitions from './components/Competitions';
import Courses from './components/Courses';
import Footer from './components/Footer';
import ForWho from './components/ForWho';
import Header from './components/Header';
import Hero from './components/Hero';
import News from './components/News';
import CompetitionHero from './components/CompetitionHero';
import CompetitionTabs from './components/competitionTabs';
import СompetitionTabsNow from './components/СompetitionTabsNow.jsx';
import CompetitionList from './components/CompetitionList.jsx';
import LearningHero from './components/LearningHero.jsx';
import BeginnerCourses from './components/BeginnerCourses.jsx';
import BeginnerCoursesTabsNow from './components/BeginnerCoursesTabsNow.jsx';
import BeginnerCourseslist from './components/BeginnerCourseslist.jsx';
import ComHero from './components/ComHero.jsx';
import TabMenu from './components/TabMenu.jsx';
import './index.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ForWho />
            <Competitions />
            <Courses />
            <News />
            <Footer />
          </>
        } />
        <Route path="/Competitions" element={
          <>
          <CompetitionHero />
          <CompetitionTabs />
          <СompetitionTabsNow/>
          <CompetitionList/>
          <Footer />
          </>
          } />
          <Route path="/learning" element={
            <>
            <LearningHero />
            <BeginnerCourses/>
            <BeginnerCoursesTabsNow/>
            <BeginnerCourseslist/>
            <Footer />
            </>
            } />
            <Route path="/forum" element={
            <>
            <Footer />
            </>
            } />
            <Route path="/faq" element={
            <>
            <Footer />
            </>
            } />
            <Route path="/contact" element={
            <>
            <Footer />
            </>
            
            } />
            <Route path="/Competition" element={
            <>
            <ComHero/>
            <TabMenu />
            <Footer />
            </>
            } />

      </Routes>
      
    </Router>
  );
};

export default App;
