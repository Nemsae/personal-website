import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Resume = () => {
  return (
    <div className="container mx-auto px-6 py-20 max-w-4xl">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">John Son - Senior Software Engineer</h1>
          <div className="text-center text-muted-foreground">
            <p>Brooklyn, NY</p>
            <p>jsson77@gmail.com | (650) 678-2956</p>
          </div>
        </div>
        
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold border-b pb-2">Summary</h2>
          <Card>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Senior Software Engineer with 8+ years of experience leading the design, development, and deployment of innovative software 
                solutions for both startups and enterprise companies. Hands-on Leader focused on working with cross-functional teams to bring new, 
                user-focused experiences to life while enhancing software quality, performance, and reliability at scale.
              </p>
            </CardContent>
          </Card>
        </section>
        
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold border-b pb-2">Relevant Experience</h2>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Senior Software Engineer
                <span className="text-sm font-normal text-muted-foreground">2022 - 2025</span>
              </CardTitle>
              <CardDescription>PubMatic</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Drove the design, development, and release of features for an agent orchestrator and shared chat UI service for PubMatic's GenAI chat assistant with a team of 4 senior engineers using Angular, LangGraph, and Python FastAPI.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Implemented a backend planning feature for the Chat UI to answer complex user queries/messages that require multiple agents to answer, to allow the agent orchestrator to create and execute a plan/sequence of agents.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Led the design of the frontend implementation of the Chat UI as a shared library, which enabled the UI teams to seamlessly deploy onto UI codebases/products.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Led the on-time development and delivery of an LLM-based orchestration framework to route, plan, and execute multi-agent workflows for multi-intent user queries and improve the robustness of user chats with multiple intents.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Spearheaded the company-wide adoption of the FullStory session playback tool by evaluating vendors, partnering with Legal/SecOps to ensure adherence to PII, GDPR, and CCPA requirements, and authoring engineering documentation complete with high-level objectives, the current state of observability, and vendor trials/PoCs that supported adoption.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Drove the execution of an engineering initiative to improve accessibility (a11y) practices by introducing Angular a11y ESLint rules, automating scans for WebdriverIO E2E testing, and providing HTTP hooks for enforcing Jenkins CI/CD quality gates.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Minimized accessibility errors by performing accessibility static code analysis during development, leveraging the vendor's scanning library in end-to-end test suites, and utilizing the vendor API for approval checks in the deployment pipeline.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Migrated Martin's React codebase to PubMatic's Angular codebase while maintaining the performance of PubMatic's Demand Side Platform for purchasing advertising space on the open web during the migration.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Maintained and shipped features for a shared UI library of design components, including the FullStory session playback tool integration and the GenAI Chat Assistant.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Implemented and drove the adoption of a shared UI service for FullStory using Typescript and Angular.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Software Engineer
                <span className="text-sm font-normal text-muted-foreground">2018 - 2022</span>
              </CardTitle>
              <CardDescription>Martin (Acquired by PubMatic)</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Served as the Code Owner for the design and development of all frontend products, including analytics dashboards, the marketing website, and the demand side platform product using D3, Next.js, and React.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Led the build-out of an interactive and responsive public marketing site for both investors and potential customers.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Designed and delivered marketing agency trader dashboards that help traders build an in-depth understanding of spend, conversions, keywords, and ROAS using React and D3.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Developed the web architecture for the company's flagship Demand Side Platform/SaaS product that enables traders to create new advertising campaigns and monitor campaign performance.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Collaborated with PMs, EMs, and ICs to translate business needs into actionable sprints, support feature scoping, and drive the end-to-end delivery of all project deliverables while onboarding and mentoring a junior engineer.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Authored and refined technical documentation to facilitate team knowledge sharing and professional development.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
        
        <section className="space-y-6 mt-12">
          <h2 className="text-2xl font-semibold border-b pb-2">Additional Experience</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Software Engineer (Contract)
                <span className="text-sm font-normal text-muted-foreground">2017 - 2018</span>
              </CardTitle>
              <CardDescription>Basepaws</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Contract development work on various web applications and features.</p>
            </CardContent>
          </Card>
        </section>
        
        <section className="space-y-6 mt-12">
          <h2 className="text-2xl font-semibold border-b pb-2">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Engineering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Fullstack Development, Frontend & UI/UX, AI/ML, Gen AI, LLMs, Backend & Infrastructure, Cloud Architecture, 
                  API Design, RESTful Web Services, Microservices, Testing & Code Coverage, CI/CD, DevOps, Software Quality, Scalability, 
                  Performance, Observability, Reliability, Automation, Cybersecurity, Accessibility, Code Reviews, Documentation, Agile
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Leadership & Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-3">
                  <strong>Leadership:</strong> Strategic Planning & Execution, Project Management, Coaching & Mentorship, Cross-functional Collaboration
                </p>
                <p className="text-muted-foreground text-sm">
                  <strong>Technology:</strong> JavaScript, Typescript, React, Redux, D3, Angular, Node.js, Python, Langraph, Langfuse, PostgreSQL, MongoDB
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <div className="text-center space-y-4">
          <h3 className="text-lg font-semibold">Download Resume</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="/resume.pdf" download="John-Son-Resume-2026.pdf">
                Download PDF
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="/resume.docx" download="John-Son-Resume-2026.docx">
                Download DOCX
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;