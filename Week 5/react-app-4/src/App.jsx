// App.js
import React from 'react';
import Header from './components/Header';
import Profiles from './components/Profiles';

function App() {
  const profilesData = [
    {
      id: 1,
      title: "News App using ReactJS (Parsing XML RSS feed to JSON)",
      description: "News App using ReactJS (Parsing XML to JSON) Photo by Christina Morillo from Pexels/Live Demo:",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      author: "Mehul Kohli",
      date: "Aug 12, 2020 04:22",
      authorImage: "https://i.pravatar.cc/150?img=11"
    },
    {
      id: 2,
      title: "Medium Like Blogging App Using Angular 9 and Firebase",
      description: "Creating a Medium Like Blog App Using Angular 9 and Firebase Photo by Miguel Á. Padrrián from Pexels/Live Demo:",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      author: "Mehul Kohli",
      date: "Jul 10, 2020 10:59",
      authorImage: "https://i.pravatar.cc/150?img=12"
    },
    {
      id: 3,
      title: "COVID-19 Tracker (Statistics) app Using Angular",
      description: "COVID-19 Tracker (Statistics) app Using Angular Dark Mode Demo/Introduction: Everyone is aware",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&h=400&fit=crop",
      author: "Mehul Kohli",
      date: "Apr 04, 2020 08:46",
      authorImage: "https://i.pravatar.cc/150?img=13"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fff] dark:bg-[#16171d]">
      <div className="max-w-[1126px] mx-auto min-h-screen flex flex-col border-x border-[#e5e4e7] dark:border-[#2e303a] bg-[#fff] dark:bg-[#16171d]">
        <Header />
        <main className="flex-1 px-6 py-8 md:px-8">
          <Profiles profiles={profilesData} />
        </main>
      </div>
    </div>
  );
}

export default App;