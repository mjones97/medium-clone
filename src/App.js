import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import ArticlesList from "./components/ArticlesList";
import Article from "./components/Article";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  const [sidebarFixed, setSidebarFixed] = useState(false);

  const handleScroll = () => {
    const main = document.querySelector('.articles-list-wrapper');
    
    if (main.scrollTop + main.clientHeight >= main.scrollHeight) {
      setSidebarFixed(true);
    } else {
      setSidebarFixed(false);
    }
  };

  useEffect(() => {
    const main = document.querySelector('.articles-list-wrapper');
    main.addEventListener('scroll', handleScroll);
    
    return () => {
      main.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="container flex flex-row justify-center mx-auto gap-20 p-4 relative">
          <main className="overflow-auto articles-list-wrapper" style={{ maxHeight: 'calc(100vh - 4rem)' }}>
            <Routes>
              <Route path="/" element={<ArticlesList />} />
              <Route path="/article/:id" element={<Article />} />
            </Routes>
          </main>
          <aside
            className={`sidebar-wrapper pl-clamp ${sidebarFixed ? 'fixed' : ''}`}
            style={{
              top: sidebarFixed ? 'auto' : '4rem',
              bottom: sidebarFixed ? '0' : 'auto',
            }}
          >
            <Sidebar />
          </aside>
        </div>
      </div>
    </Router>
  );
}

export default App;