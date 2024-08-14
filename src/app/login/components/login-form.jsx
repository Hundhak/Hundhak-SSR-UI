"use client"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../../../components/ui/form"


const userFormSchema = z.object({
  username: z.string().min(2, {message: "Användarnamn måste innehålla minst 2 tecken."})
  .max(20, {message: "Användarnamn får inte vara längre än 20 tecken."}),
  email: z.string().email({ message: "Du måste använda en giltig epostadress."}),
  password: z.string().min(8, {message: "Lösenord måste innehålla minst 8 tecken."})
  .max(100, {message: "Lösenord får inte vara längre än 100 tecken."}),
})

export default function LoginForm() {

  const form = useForm({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: ""
    }
  })

  function onSubmit(values) {
    console.log(values)
  }

  return (
     <div className="mx-auto max-w-md space-y-6 py-6">
      <Card>
        <CardContent className="space-y-4 pt-5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField 
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Användarnamn</FormLabel>
                    <FormControl>
                      <Input placeholder="Pyrenéerhund" {...field} />
                    </FormControl>
                    {form.formState.errors.username && <FormMessage>{form.formState.errors.username.message}</FormMessage>}
                  </FormItem>
                )}
              />
              <FormField 
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@example.com" {...field} />
                    </FormControl>
                    {form.formState.errors.email && <FormMessage>{form.formState.errors.email.message}</FormMessage>}
                  </FormItem>
                )}
              />
              <FormField 
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lösenord</FormLabel>
                    <FormControl>
                      <Input placeholder="************" type="password" {...field} />
                    </FormControl>
                    {form.formState.errors.password && <FormMessage>{form.formState.errors.password.message}</FormMessage>}
                    <FormDescription>
                      <Link href={'#'} className="text-muted-foreground hover:text-gray-400 underline" prefetch={false}>Glömt lösenordet?</Link>
                    </FormDescription>
                  </FormItem>
                )}
              />
              {/*Outcomment to get a Remember me box*/
              /* <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div> */} 
              <Button type="submit" className="w-full" variant="secondary">
                Logga in
              </Button>
              <FormMessage>
                <Link href={'#'} className="text-muted-foreground hover:text-gray-400 underline pl-28" prefetch={false}>Inget konto? Skapa ett här</Link>
              </FormMessage>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
