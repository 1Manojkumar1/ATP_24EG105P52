import Profile from "./Profile"

function Profiles(){
  const profiles = [
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
    },
    {
    id: 4,
    title: "E-commerce UI with React and Tailwind CSS",
    description: "A modern e-commerce UI built with React and Tailwind CSS featuring responsive layouts and reusable components.",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&h=400&fit=crop",
    author: "Arjun Mehta",
    date: "Sep 05, 2020 09:30",
    authorImage: "https://i.pravatar.cc/150?img=14"
  },
  {
    id: 5,
    title: "Chat Application using Socket.io and Node.js",
    description: "Real-time chat application using Socket.io with Node.js backend, React frontend,Tailwind CSS and Database MongoDB with Mongoose.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    author: "Sneha Reddy",
    date: "Oct 01, 2020 11:15",
    authorImage: "https://i.pravatar.cc/150?img=15"
  },
  {
    id: 6,
    title: "Task Manager App with Drag and Drop",
    description: "A Trello-like task manager app with drag-and-drop functionality using React Beautiful DnD.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
    author: "Rahul Sharma",
    date: "Nov 18, 2020 14:40",
    authorImage: "https://i.pravatar.cc/150?img=16"
  },
  {
    id: 7,
    title: "Weather App using OpenWeather API",
    description: "A simple weather app fetching real-time data from OpenWeather API with search functionality.",
    image: "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?w=600&h=400&fit=crop",
    author: "Priya Nair",
    date: "Dec 22, 2020 07:25",
    authorImage: "https://i.pravatar.cc/150?img=17"
  },
  {
    id: 8,
    title: "Portfolio Website with React and Framer Motion",
    description: "Animated portfolio website using React and Framer Motion with smooth transitions.",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=600&h=400&fit=crop",
    author: "Karan Patel",
    date: "Jan 10, 2021 16:10",
    authorImage: "https://i.pravatar.cc/150?img=18"
  },
  {
    id: 9,
    title: "Authentication System with JWT",
    description: "Secure authentication system using JWT, Node.js, and MongoDB with protected routes.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    author: "Ananya Gupta",
    date: "Feb 14, 2021 12:00",
    authorImage: "https://i.pravatar.cc/150?img=19"
  }
  ];
  return(
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10 bg-violet-100">
      {
        profiles.map((profile)=>(
          <Profile profileObj={profile} key={profile.id}/>
        ))
      }
    </div>
  )
}

export default Profiles