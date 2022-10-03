import './App.css';
import { Container } from "react-bootstrap"
import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import PostFeed from "./components/PostsFeed";
import NewsFeed from "./components/NewsFeed";
import Profile from "./components/Profile";
import LessonListings from "./components/LessonListings";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/posts" element={<PostFeed />} />
        <Route exact path="/news" element={<NewsFeed />} />
        <Route exact path="/lessons" element={<LessonListings />} />
      </Routes>
    </div>
  );
}

export default App;
