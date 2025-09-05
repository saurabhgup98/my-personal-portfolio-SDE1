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
  comingSoon?: boolean;
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
    id: 5,
    title: "Personal Portfolio",
    description: "Modern, responsive portfolio website built with React and TypeScript, showcasing professional experience, projects, and technical skills with clean design and smooth animations.",
    github: "https://github.com/saurabhgup98/my-personal-portfolio-SDE1",
    external: "https://my-personal-portfolio-sde-1.vercel.app/",
    tech: ["React", "TypeScript", "CSS3", "Vite"]
  },
  {
    id: 6,
    title: "Food Delivery Business App",
    description: "Comprehensive business management platform for food delivery services with restaurant management, order tracking, and analytics dashboard.",
    github: "https://github.com/saurabhgup98/food-delivery-business-app-sera",
    external: "https://food-delivery-business-app-sera.vercel.app/",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    comingSoon: false
  }
];
