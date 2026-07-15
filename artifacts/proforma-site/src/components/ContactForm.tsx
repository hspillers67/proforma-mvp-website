import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { useLocation } from "wouter";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company is required"),
  phone: z.string().optional(),
  projectType: z.string({
    required_error: "Please select a project type",
  }),
  message: z.string().min(10, "Please provide some details about your project"),
});

type FormValues = z.infer<typeof formSchema>;

function encodeFormData(data: Record<string, string>) {
  return Object.entries(data)
    .map(([k, v]) => encodeURIComponent(k) + "=" + encodeURIComponent(v))
    .join("&");
}

export default function ContactForm() {
  const [, setLocation] = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      projectType: undefined,
      message: "",
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData({
          "form-name": "contact",
          name: data.name,
          email: data.email,
          company: data.company,
          phone: data.phone ?? "",
          projectType: data.projectType,
          message: data.message,
        }),
      });
      setLocation("/thank-you");
    } catch {
      form.setError("root", {
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
        <form
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
      >
        <input type="hidden" name="form-name" value="contact" />

          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            <label>
              Don't fill this out if you're human: <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </div>


          
          

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Jane Doe" {...field} className="bg-background" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Work Email</FormLabel>
                <FormControl>
                  <Input placeholder="jane@company.com" type="email" {...field} className="bg-background" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input placeholder="Acme Corp" {...field} className="bg-background" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number <span className="text-muted-foreground font-normal">(Optional)</span></FormLabel>
                <FormControl>
                  <Input placeholder="(555) 123-4567" {...field} className="bg-background" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="projectType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Select the main focus of your project" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Branded Apparel">Branded Apparel</SelectItem>
                  <SelectItem value="Tradeshow Giveaways">Tradeshow Giveaways</SelectItem>
                  <SelectItem value="Signage & Banners">Signage & Banners</SelectItem>
                  <SelectItem value="Print">Print</SelectItem>
                  <SelectItem value="Kits & Packages">Kits & Packages</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Details</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about timelines, quantities, or specific challenges..."
                  className="min-h-[120px] resize-none bg-background"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {form.formState.errors.root && (
          <p className="text-sm text-destructive">{form.formState.errors.root.message}</p>
        )}

        <Button
          type="submit"
          className="w-full h-12 text-base font-semibold bg-secondary hover:bg-secondary/90 text-white shadow-md transition-all"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            "Let's Talk"
          )}
        </Button>
      </form>
    </Form>
  );
}
