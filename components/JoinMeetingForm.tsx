import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Spinner from './Spinner'

// Update schema to use Date type for better type checking
const formSchema = z.object({
    url: z.string().url(),
})

type FormData = z.infer<typeof formSchema>

type JoinMeetingFormProps = {
    onSubmit?: (data: FormData) => void;
}
export default function JoinMeetingForm({ onSubmit }: JoinMeetingFormProps) {
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            url: "",
        },
    })

    async function onSubmitForm(values: FormData) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
        await onSubmit?.(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmitForm)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="url"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Meeting Link</FormLabel>
                            <FormControl>
                                <Input placeholder="Paste meeting link here..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className='w-full' type="submit">{form.formState.isSubmitting ? <Spinner /> : "Join Now"}</Button>
            </form>
        </Form>
    )
}