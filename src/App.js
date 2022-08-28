import { Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Layout from "./components/layout/Index";
import BlogPage from "./components/blog/BlogPage";
import AuthorPage from "./components/author/AuthorPage";
import BlogsPage from "./components/blog/BlogsPage";
import AuthorsPage from "./components/author/AuthorsPage";
import ScrollToTop from "./components/shared/ScrollToTop";

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs/:slug" element={<BlogPage />} />
        <Route path="/authors/:slug" element={<AuthorPage />} />
        <Route path="/authors" element={<AuthorsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
