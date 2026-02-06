import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-20 max-w-4xl">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About Me</h1>
        </div>
        
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Professional Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Senior Software Engineer with 8+ years of experience leading the design, development, and deployment 
                of innovative software solutions for both startups and enterprise companies. Hands-on Leader focused on working 
                with cross-functional teams to bring new, user-focused experiences to life while enhancing software quality, 
                performance, and reliability at scale.
              </p>
            </CardContent>
          </Card>
          
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Expertise & Focus Areas</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Fullstack Development, Frontend & UI/UX, AI/ML, Gen AI, LLMs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Backend & Infrastructure, Cloud Architecture, API Design & Microservices</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Strategic Planning & Execution, Project Management, Coaching & Mentorship</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Cross-functional Collaboration and Team Leadership</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Software Quality, Scalability, Performance, and Accessibility</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Professional Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                I believe in writing clean, maintainable code while staying current with emerging technologies. 
                My approach combines technical excellence with strong communication skills, enabling me to bridge 
                the gap between business requirements and technical implementation. I'm particularly passionate about 
                making web applications accessible to all users and mentoring the next generation of developers.
              </p>
            </CardContent>
          </Card>
          
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Recent Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Recently, I've led company-wide initiatives for session playback implementation, accessibility 
                improvements, and the migration of a React codebase to Angular. I've also contributed to cutting-edge 
                GenAI projects that are shaping the future of our platform.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;