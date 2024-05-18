'use client'
import React, { useState } from "react";
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    VStack,
    Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { addEmployee } from "../router/router";
import { SetAlert } from './alert';
import { AxiosError } from "axios";

type FormData = {
    name: string;
    email: string;
    job_position: string;
    departament: string;
    actions: string;
};



export function AddEmployee() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
    const [alertStatus, setAlertStatus] = useState<"success" | "error" | null>(null);
    const [alertMessage, setAlertMessage] = useState<string>("");

    const onSubmit = async (dataBody: FormData) => {
      
            const data = await addEmployee(dataBody) 
            if(data.message == undefined ){
                setAlertStatus("success");
                setAlertMessage("Funcionário salvo com Sucesso"); 
                reset(); 
                
            }else{
                setAlertStatus("error");
                setAlertMessage("Não foi possível adicionar funcionário"); 
            }
          
     
     
   
    };
    return (
        <VStack spacing={4} align="center">
            <SetAlert alertMessage={alertMessage} alertStatus = {alertStatus} setAlertStatus={setAlertStatus}/>

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
                <FormControl isInvalid={!!errors.departament}>
                    <FormLabel htmlFor="departament">Departament</FormLabel>
                    <Input id="departament" type="text" {...register("departament", { required: true, validate: value => value.trim() !== '' })} />
                    {errors.departament && <Text color="red.500">Departament is required</Text>}
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