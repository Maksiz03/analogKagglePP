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
            </>
            } />
      </Routes>
      
    </Router>
  );
};

export default App;
