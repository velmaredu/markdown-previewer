import './assets/styles/App.css';
import NavigationBar from './components/NavigationBar';
import MarkdownPreviewer from './components/MarkdownPreviewer';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <MarkdownPreviewer
      options={{ breaks: true, gfm: true, pedantic: false}}/>
    </div>
  );
}

export default App;
