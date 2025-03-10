import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { DateTimePicker } from './ui/date-time-picker'
import Spinner from './Spinner'

// Update schema to use Date type for better type checking
const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
    datetime: z.date({
        required_error: "Please select a date and time",
        invalid_type_error: "That's not a valid date",
    }),
})

type FormData = z.infer<typeof formSchema>

type ScheduleMeetingFormProps = {
    onSubmit?: (data: FormData) => void;
}
export default function ScheduleMeetingForm({ onSubmit }: ScheduleMeetingFormProps) {
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            datetime: new Date()
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
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter name..." {...field} />
                            </FormControl>
                            <FormDescription>
                                This is meeting public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="datetime"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Start At</FormLabel>
                            <FormControl>
                                <DateTimePicker
                                    value={field.value}
                                    onChange={field.onChange}
                                    onBlur={field.onBlur}
                                    name={field.name}
                                    ref={field.ref}
                                />
                            </FormControl>
                            <FormDescription>
                                Select the date and time for your meeting.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className='w-full' type="submit">{form.formState.isSubmitting ? <Spinner /> : "Create Meeting"}</Button>
            </form>
        </Form>
    )
}