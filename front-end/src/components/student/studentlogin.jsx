// "use client"

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from "../ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "../ui/form";
import { Input } from "../ui/input";


const formSchema = z.object({
  email: z.string().email().min(2).max(50),
  password: z.string().min(8).max(30)
})


  // 1. Define your form.
  const form = useForm({ 
    resolver: zodResolver(formSchema), 
    defaultValues: {
      username: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
export default function StudentLogin(){

    return (

        <>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField control={form.control} name="username" render={({ field }) => (
            <FormItem > 
              <FormLabel>Username</FormLabel> 
              <FormControl> 
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription >
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
                                                                                )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
        </>

    )


}