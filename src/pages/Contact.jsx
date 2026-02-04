import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters.')
    .max(50, 'Name must be less than 50 characters.'),
  email: z
    .string()
    .email('Please enter a valid email address.'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters.')
    .max(500, 'Message must be less than 500 characters.'),
});

const Contact = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    alert('Thank you for your message! I will get back to you soon.');
    form.reset();
  };

  return (
    <div className="container mx-auto px-6 py-20 max-w-4xl">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Let's Connect</h2>
            <p className="text-muted-foreground">
              Feel free to reach out through any of the following channels. I'm always interested in hearing about new opportunities and collaborations.
            </p>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-3">
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">jsson77@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-3">
                    <div>
                      <h3 className="font-semibold">Location</h3>
                      <p className="text-muted-foreground">Brooklyn, NY</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-3">
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-muted-foreground">(650) 678-2956</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold">GitHub</h3>
                    <div className="space-y-2">
                      <a 
                        href="https://github.com/johnfrommartin?tab=overview&from=2022-12-01&to=2022-12-31" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors block"
                      >
                        Professional Activity (Martin, 2022)
                      </a>
                      <a 
                        href="https://github.com/Nemsae" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors block"
                      >
                        Personal GitHub
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Send Me a Message</h2>
            <Card>
              <CardHeader>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FieldGroup>
                    <div className="space-y-2">
                      <FieldLabel htmlFor="name">Name</FieldLabel>
                      <Input
                        id="name"
                        {...form.register('name')}
                        placeholder="John Doe"
                        aria-invalid={form.formState.errors.name ? 'true' : 'false'}
                      />
                      {form.formState.errors.name && (
                        <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <FieldLabel htmlFor="email">Email</FieldLabel>
                      <Input
                        id="email"
                        type="email"
                        {...form.register('email')}
                        placeholder="john@example.com"
                        aria-invalid={form.formState.errors.email ? 'true' : 'false'}
                      />
                      {form.formState.errors.email && (
                        <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <FieldLabel htmlFor="message">Message</FieldLabel>
                      <Textarea
                        id="message"
                        {...form.register('message')}
                        placeholder="Your message here..."
                        rows={5}
                        className="min-h-[120px] resize-vertical"
                        aria-invalid={form.formState.errors.message ? 'true' : 'false'}
                      />
                      {form.formState.errors.message && (
                        <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>
                      )}
                    </div>
                  </FieldGroup>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;