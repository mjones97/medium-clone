import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArticlesList from "./components/ArticlesList";
import Article from "./components/Article";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="container flex flex-row justify-evenly mx-auto">
          <main className="articles-list-wrapper">
            <Routes>
              <Route path="/" element={<ArticlesList />} />
              <Route path="/article/:id" element={<Article />} />
            </Routes>
          </main>
          <div className="sidebar-wrapper">
            <Sidebar />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;