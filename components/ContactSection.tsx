"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    // Placeholder: No backend, just reset
    reset();
  };

  return (
    <section id="contact" className="py-16 max-w-lg mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">Contact</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input placeholder="Name" {...register("name")} />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
        <Input placeholder="Email" {...register("email")} />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
        <Textarea placeholder="Message" rows={5} {...register("message")} />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}
        <Button type="submit" className="w-full">
          Send Message
        </Button>
        {isSubmitSuccessful && (
          <p className="text-green-600 text-center">
            Message sent! (Demo only)
          </p>
        )}
      </form>
    </section>
  );
}
