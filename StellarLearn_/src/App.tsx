import { useState } from 'react';
import { Starfield } from './components/Starfield';
import { Landing } from './pages/Landing';
import { Dashboard } from './pages/Dashboard';
import { Quests } from './pages/Quests';
import { Mentor } from './pages/Mentor';
import { Flashcards } from './pages/Flashcards';
import { Achievements } from './pages/Achievements';
import { Settings } from './pages/Settings';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <Landing onNavigate={setCurrentPage} />;
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentPage} />;
      case 'quests':
        return <Quests onNavigate={setCurrentPage} />;
      case 'mentor':
        return <Mentor onNavigate={setCurrentPage} />;
      case 'flashcards':
        return <Flashcards onNavigate={setCurrentPage} />;
      case 'achievements':
        return <Achievements onNavigate={setCurrentPage} />;
      case 'settings':
        return <Settings onNavigate={setCurrentPage} />;
      default:
        return <Landing onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="relative min-h-screen">
      <Starfield />
      <div className="relative z-10">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
