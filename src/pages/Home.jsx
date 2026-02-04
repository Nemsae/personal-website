import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="flex flex-col items-center justify-center text-center space-y-8 mb-16">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            John Son
          </h1>
          <h2 className="text-xl font-medium text-muted-foreground sm:text-2xl md:text-3xl">
            Senior Software Engineer
          </h2>
        </div>
        
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Senior Software Engineer with 8+ years of experience leading the design, development, and deployment 
          of innovative software solutions. Hands-on Leader focused on working with cross-functional teams to bring new, 
          user-focused experiences to life while enhancing software quality, performance, and reliability at scale.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" variant="default">
            <Link to="/resume">View Resume</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground">
          PDF and DOCX formats available for download
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
        <div className="flex flex-col items-center space-y-2 p-6 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-black">
          <h3 className="text-lg font-semibold">Experience</h3>
          <p className="text-gray-600 dark:text-gray-400 text-center">8+ years leading software development</p>
        </div>
        <div className="flex flex-col items-center space-y-2 p-6 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-black">
          <h3 className="text-lg font-semibold">Technologies</h3>
          <p className="text-gray-600 dark:text-gray-400 text-center">JavaScript, TypeScript, React, Angular, Python</p>
        </div>
        <div className="flex flex-col items-center space-y-2 p-6 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-black">
          <h3 className="text-lg font-semibold">Focus</h3>
          <p className="text-gray-600 dark:text-gray-400 text-center">GenAI, Fullstack Development, Leadership</p>
        </div>
      </div>
    </div>
  );
};

export default Home;