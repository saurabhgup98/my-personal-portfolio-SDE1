import todoAppImage from '../../assets/todo-app.png';
import foodDeliveryImage from '../../assets/food-delivery-sera.png';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  imagePosition: 'left' | 'right';
  github: string;
  external: string;
  tech: string[];
}

export interface OtherProject {
  id: number;
  title: string;
  description: string;
  github: string;
  external: string;
  tech: string[];
}

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Food Delivery Platform",
    description: "A comprehensive food delivery platform with restaurant listings, menu management, and order tracking. Built with modern web technologies, featuring real-time updates, payment integration, and responsive design for seamless mobile experience.",
    image: foodDeliveryImage,
    imagePosition: 'left',
    github: "https://github.com/saurabhgup98/food-Delivery-SERA",
    external: "https://food-delivery-sera.vercel.app/",
    tech: ["React", "Node.js", "MongoDB", "Stripe API"]
  },
  {
    id: 2,
    title: "Todo Application",
    description: "A modern, responsive todo application built with React. Features include task management, filtering, and local storage persistence. The app provides an intuitive interface for organizing daily tasks with clean design and smooth animations.",
    image: todoAppImage,
    imagePosition: 'right',
    github: "https://github.com/saurabhgup98/todo-frontend",
    external: "https://todo-frontend-beta-three-78.vercel.app/",
    tech: ["React", "TypeScript", "CSS3", "Local Storage"]
  }
];

export const OTHER_PROJECTS: OtherProject[] = [
  {
    id: 3,
    title: "E-Commerce Dashboard",
    description: "Admin dashboard for managing e-commerce operations with analytics, inventory management, and order processing.",
    github: "https://github.com/yourusername/ecommerce-dashboard",
    external: "https://ecommerce-dashboard.com",
    tech: ["React", "Node.js", "PostgreSQL", "Chart.js"]
  },
  {
    id: 4,
    title: "Weather App",
    description: "Real-time weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    github: "https://github.com/yourusername/weather-app",
    external: "https://weather-app-demo.com",
    tech: ["React", "OpenWeather API", "Geolocation", "CSS3"]
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects, skills, and professional experience with modern design.",
    github: "https://github.com/yourusername/portfolio",
    external: "https://portfolio-demo.com",
    tech: ["React", "TypeScript", "Framer Motion", "SCSS"]
  },
  {
    id: 6,
    title: "Chat Application",
    description: "Real-time chat application with user authentication, message history, and file sharing capabilities.",
    github: "https://github.com/yourusername/chat-app",
    external: "https://chat-app-demo.com",
    tech: ["React", "Socket.io", "Express", "MongoDB"]
  }
];
