AI-Powered Learning Application ( Ai Tutor FYP )

*Project Summary*

The project aims to build an AI-powered learning application. The application will allow admins to create personalized courses with chapters, questions, and configurations for different types of examinations. Students can engage with the AI assistant for learning, testing, and feedback. The app will have features like course creation using forms or JSON, automated paper corrections using AI, user authentication and authorization, and a payment system for purchasing credits to access AI-powered features.

*Project Objectives*

Personalized Learning: Develop an AI-powered learning platform that provides personalized learning experiences for students.

Course Management: Enable admins to create and manage courses, including adding chapters, questions, and configurations for examinations.

AI-Powered Testing: Implement an automated paper correction system using AI to provide students with scores and feedback on their tests.

User Authentication and Authorization: Implement a secure authentication and authorization system to manage user roles (admin, student) and access to the application.

*Project Implementation Method*

Technology Stack:
Front-end: Next.js
Database: Prisma
API: tRPC
Payment Gateway: Stripe
CSS Framework: Tailwind CSS
Application Development:

Set up the Next.js project, configure Prisma, and integrate tRPC.
Implement user authentication and authorization using Clerk.
Create API routes and tRPC clients for server-side interactions.
Design and implement the user interface using Tailwind CSS.
Develop the admin dashboard for creating and managing courses.
Implement the AI-powered testing and feedback system.
Integrate the Stripe payment system for purchasing credits.
Testing and Deployment:

Implement unit and integration tests to ensure the application's functionality.
Set up a continuous integration and deployment pipeline for the project.
Deploy the application to a hosting platform (e.g., Vercel, Netlify).
Benefits of the Project
The AI-powered learning platform will provide students with personalized learning experiences, automated paper corrections, and timely feedback, leading to improved student engagement, understanding, and overall academic performance. Admins will have a streamlined process for creating and managing courses, with the ability to configure examinations and assessments, while the integration of a payment system will enable the platform to generate revenue through AI-powered features. The use of modern technologies, such as Next.js, Prisma, and tRPC, will ensure the platform's scalability, flexibility, and ease of maintenance, catering to the evolving needs of users, both students and administrators.

Technical Details of Final Deliverable
Front-end:

Next.js for building the user interface and managing server-side rendering.
Tailwind CSS for styling the components and providing a consistent design system.
React Hook Form for managing form state and validation.
Cloudinary for handling image uploads and storage.
Back-end:

Prisma for defining the data models and interacting with the database.
tRPC for creating type-safe API routes and handling server-side logic.
Clerk for user authentication and authorization.
Stripe for integrating the payment system.
Database:

Prisma will be used to define the database schema and perform migrations.
The database will store information about courses, chapters, questions, users, and transactions.
Testing and Deployment:

Unit tests and integration tests will be implemented using different frameworks.
A CI/CD pipeline will be set up to automatically build, test, and deploy the application to a hosting platform.
This is a Next.js project bootstrapped with create-next-app.

Getting Started
First, run the development server:

bash
Copy
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.

This project uses next/font to automatically optimize and load Inter, a custom Google Font.

Learn More
To learn more about Next.js, take a look at the following resources:

Next.js Documentation - learn about Next.js features and API.
Learn Next.js - an interactive Next.js tutorial.
You can check out the Next.js GitHub repository - your feedback and contributions are welcome!

Deploy on Vercel
The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out our Next.js deployment documentation for more details.