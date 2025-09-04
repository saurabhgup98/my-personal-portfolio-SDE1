export interface Job {
  id: string;
  company: string;
  title: string;
  period: string;
  shortDescription: string;
  fullDescription: string[];
  techStack: string[];
  achievements: string[];
}

export const JOBS: Job[] = [
  {
    id: 'nessa',
    company: 'Nessa Software Labs',
    title: 'SDE-1 Full Stack',
    period: 'Jan 2022 - March 2025',
    shortDescription: 'Led development of multi-tenant SaaS platforms for medical billing and pharmacy operations, achieving 30% efficiency improvement and 20% cost reduction.',
    fullDescription: [
      'Multi-Tenant SaaS for Medical Billing: Led development of a multi-tenant SaaS platform automating medical billing, boosting efficiency by 30% and cutting operational costs by 20%. Built scalable, secure REST APIs with Java and Spring Boot, implemented Spring Security, and conducted comprehensive API validation using Postman.',
      'Frontend Development: Translated Figma designs into responsive, production-ready React + TypeScript interfaces ensuring seamless API integration and end-to-end testing. Achieved 100% API integration test coverage for pharmacy operations platform.',
      'Backend Architecture: Engineered optimized MySQL schemas for high-performance queries and smooth backend integration. Collaborated on API design and built robust endpoints with Java and Spring Boot, rigorously tested via Postman.',
      'Cloud Deployment & Additional Projects: Deployed backend on AWS Elastic Beanstalk and EC2, achieving high availability and scalability. Developed inventory management system using PHP and MySQL, built productivity platform with PHP frontend and Spring Boot backend, and designed responsive React.js website for U.S. client significantly enhancing their digital presence.'
    ],
    techStack: ['Java', 'Spring Boot', 'React', 'TypeScript', 'AWS', 'MySQL', 'PHP', 'Spring Security'],
    achievements: ['30% efficiency improvement', '20% cost reduction', 'Multi-tenant SaaS architecture', '100% API test coverage']
  },
  {
    id: 'nessa2',
    company: 'Nessa Software Labs (Intern)',
    title: 'SDE-Intern',
    period: 'Jan 2022 - March 2025',
    shortDescription: 'Collaborated on e-commerce platform development and contributed to digital pharmacy SaaS solution design, focusing on scalability and user experience.',
    fullDescription: [
      'E-commerce Platform Development: Collaborated on building a robust e-commerce site with Node.js backend and React.js frontend, delivering seamless functionality and exceptional user experience. Implemented responsive design principles and optimized performance for enhanced user engagement.',
      'In-House SaaS for Digital Pharmacy: Contributed to the design and product roadmap for a scalable SaaS solution, introducing innovative features to streamline pharmacy operations and boost user satisfaction. Collaborated with product teams to define technical requirements and implementation strategies.',
      'Technical Architecture: Designed and implemented scalable backend services using Node.js, ensuring robust API endpoints and efficient data handling. Built responsive React.js frontend components with focus on accessibility and cross-browser compatibility.',
      'Product Strategy & Innovation: Participated in product roadmap planning sessions, providing technical insights for feature development. Introduced innovative solutions that improved operational efficiency and enhanced user experience across pharmacy management workflows.'
    ],
    techStack: ['Node.js', 'React.js', 'JavaScript', 'MongoDB', 'Express.js', 'REST APIs', 'Product Strategy'],
    achievements: ['E-commerce platform development', 'SaaS product roadmap contribution', 'Innovative feature implementation', 'User experience optimization']
  },
  {
    id: 'byjus',
    company: 'BYjus',
    title: 'Business Development Executive',
    period: 'Jan 2022 - March 2025',
    shortDescription: 'Guided students in understanding the value of BYjus app, conducted technical demonstrations, and managed sales meetings to drive application adoption.',
    fullDescription: [
      'Student Guidance & Technical Support: Made students understand the need and benefits of BYjus app, guiding them through technicalities and demonstrating how the app can make their study process easy and efficient.',
      'Sales & Meeting Management: Set up and conducted meetings with students and parents, effectively communicating the value proposition and successfully closing sales of the BYjus application.',
      'Product Knowledge & Communication: Developed deep understanding of BYjus educational platform to effectively explain features, benefits, and technical aspects to potential customers.',
      'Business Development: Contributed to business growth by identifying student needs, building relationships, and converting prospects into satisfied BYjus app users.'
    ],
    techStack: ['Sales & Communication', 'Product Demonstration', 'Customer Relationship Management', 'Business Development'],
    achievements: ['Student guidance & support', 'Sales meeting management', 'Product knowledge expertise', 'Business development success']
  }
];
