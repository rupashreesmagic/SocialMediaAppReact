import Header from "./Components/Header";
import "./App.css";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";
import { useState } from "react";
import PostListProvider from "./Store/post-list-store";

function App() {
  const [selectedTab,setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div class="app-container">
      <Sidebar selectedTab = {selectedTab} setSelectedTab = {setSelectedTab} class = "sidebar"></Sidebar>
      <div class = "content">
        <Header></Header>
        {selectedTab === "Home" ? <PostList></PostList> : <CreatePost></CreatePost>}
        <Footer></Footer>
      </div>
    </div>
    </PostListProvider>
  );
}

export default App;
