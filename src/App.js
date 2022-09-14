import './App.css';
import Header from './component/Header'
import MainVisual from './component/MainVisual';
import MainContent from './component/MainContent'

const App = () => {
  return (
    <div className="Wrap">
      <Header />
      <main>
        <MainVisual />
        <MainContent />
      </main>
    </div>
  );
}

export default App;