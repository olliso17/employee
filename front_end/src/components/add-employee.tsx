'use client'
import React from "react";
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    VStack,
    Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import axios from "axios";

type FormData = {
    name: string;
    email: string;
    job_position: string;
    department: string;
    actions: string;
};



export function AddEmployee() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        try {
            await axios.post("/api/save-data", data); // Assuming the endpoint to save data is "/api/save-data"
            reset(); // Reset the form after successful submission
            console.log("Data saved successfully:", data);
        } catch (error) {
            console.error("Error saving data:", error);
        }
    };
    return (
        <VStack spacing={4} align="center">
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={!!errors.name}>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Input id="name" type="text" {...register("name", { required: true, validate: value => value.trim() !== '' })} />
                    {errors.name && <Text color="red.500">Name is required</Text>}
                </FormControl>
                <FormControl isInvalid={!!errors.email}>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input id="email" type="email" {...register("email", { required: true, validate: value => value.trim() !== '' })} />
                    {errors.email && <Text color="red.500">Email is required</Text>}
                </FormControl>
                <FormControl isInvalid={!!errors.job_position}>
                    <FormLabel htmlFor="job_position">Job Position</FormLabel>
                    <Input id="job_position" type="text" {...register("job_position", { required: true, validate: value => value.trim() !== '' })} />
                    {errors.job_position && <Text color="red.500">Job Position is required</Text>}
                </FormControl>
                <FormControl isInvalid={!!errors.department}>
                    <FormLabel htmlFor="department">Department</FormLabel>
                    <Input id="department" type="text" {...register("department", { required: true, validate: value => value.trim() !== '' })} />
                    {errors.department && <Text color="red.500">Department is required</Text>}
                </FormControl>
                <FormControl isInvalid={!!errors.actions}>
                    <FormLabel htmlFor="actions">Actions</FormLabel>
                    <Input id="actions" type="text" {...register("actions", { required: true, validate: value => value.trim() !== '' })} />
                    {errors.actions && <Text color="red.500">Actions is required</Text>}
                </FormControl>
                <Button type="submit" mt={4} colorScheme="blue">Submit</Button>
            </form>
        </VStack>
    );
}