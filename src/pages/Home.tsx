import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';

interface ContactInfo {
  icon: React.ComponentType<any>;
  label: string;
  value: string;
  href: string;
}

interface SocialLink {
  icon: React.ComponentType<any>;
  label: string;
  href: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

const Home: React.FC = () => {
  const contactInfo: ContactInfo[] = [
    { icon: Mail, label: 'Email', value: 'jsson77@gmail.com', href: 'mailto:jsson77@gmail.com' },
    { icon: Phone, label: 'Phone', value: '(650) 678-2956', href: 'tel:6506782956' },
    { icon: MapPin, label: 'Location', value: 'Brooklyn, NY', href: '#' },
  ];

  const socialLinks: SocialLink[] = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/johnfrommartin' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
  ];

  const skills: string[] = [
    'JavaScript', 'TypeScript', 'React', 'Angular', 'Node.js', 
    'Python', 'LangGraph', 'FastAPI', 'PostgreSQL', 'MongoDB'
  ];

  const experiences: Experience[] = [
    {
      title: 'Senior Software Engineer',
      company: 'PubMatic',
      period: '2022 - 2025',
      description: 'Led GenAI chat assistant development with Angular, LangGraph, and Python FastAPI. Drove accessibility initiatives and company-wide tool adoption.'
    },
    {
      title: 'Software Engineer',
      company: 'Martin (Acquired by PubMatic)',
      period: '2018 - 2022',
      description: 'Served as Code Owner for all frontend products. Led marketing site development and trader dashboard creation.'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="border-b-4 border-foreground py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            John Son
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-6">
            Senior Software Engineer
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            8+ years leading the design, development, and deployment of innovative software solutions. 
            Hands-on Leader focused on cross-functional collaboration and bringing user-focused experiences to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="border-2 border-foreground">
              <Download className="mr-2 h-5 w-5" />
              <Link to="/resume">Download Resume</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-foreground">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="border-b-4 border-foreground py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactInfo.map((item: ContactInfo, index: number) => (
              <Card key={index} className="border-4 border-foreground bg-transparent hover:bg-card transition-colors">
                <CardContent className="p-6 text-center">
                  <item.icon className="h-8 w-8 mx-auto mb-4 text-foreground" />
                  <h3 className="font-semibold mb-2">{item.label}</h3>
                  <a 
                    href={item.href}
                    className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.value}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-b-4 border-foreground py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {skills.map((skill: string, index: number) => (
              <div 
                key={index} 
                className="border-4 border-foreground bg-transparent hover:bg-card p-4 text-center transition-colors rounded-lg"
              >
                <span className="font-medium text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="border-b-4 border-foreground py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {experiences.map((exp: Experience, index: number) => (
              <Card key={index} className="border-4 border-foreground bg-transparent hover:bg-card transition-colors">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                  <p className="text-lg text-muted-foreground mb-1">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-4 font-medium">{exp.period}</p>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Connect</h2>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social: SocialLink, index: number) => (
              <Button
                key={index}
                variant="outline"
                size="lg"
                className="border-2 border-foreground hover:bg-card transition-colors"
                asChild
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <social.icon className="h-5 w-5" />
                  <span className="ml-2">{social.label}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;