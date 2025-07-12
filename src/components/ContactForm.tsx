import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { SendEmail } from "./SendEmail";
import { portfolioConfig } from "@/config/portfolio.config";

const ContactForm = () => {
  return (
    <Card className="w-full max-w-md mx-auto bg-card border-border">
      <form
        action={async (FormData) => {
          "use server";
          await SendEmail(FormData);
        }}
      >
        <CardHeader>
          <CardTitle className="icon_underline text-card-foreground">Send me a mail.</CardTitle>
          <CardDescription>
            Get in touch with {portfolioConfig.name}. I'll get back to you soon!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
            <Label htmlFor="name" className="text-card-foreground">Name</Label>
            <Input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="bg-background border-border text-foreground"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
            <Label htmlFor="email" className="text-card-foreground">Email</Label>
            <Input
              type="email"
              name="SenderEmail"
              required
              placeholder="Enter your email"
              className="bg-background border-border text-foreground"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
            <Label htmlFor="message" className="text-card-foreground">Your Message</Label>
            <textarea
              placeholder="Your message here..."
              name="message"
              required
              className="resize-none flex min-h-[80px] w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            ></textarea>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Submit
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ContactForm;
