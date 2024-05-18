'use client'
import React, { useState, useEffect } from "react";
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    VStack,
    Text,
    Spinner,
    Link 
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { SetAlert } from './alert';
import { editEmployee, getEmployeeById } from "../router/router";

type FormData = {
    name: string;
    email: string;
    job_position: string;
    departament: string;
    actions: string;
};

type EditEmployeeProps = {
    employeeId: string;
};

export function EditEmployee({ employeeId }: EditEmployeeProps) {
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FormData>();
    const [loading, setLoading] = useState(true);
    const [alertStatus, setAlertStatus] = useState<"success" | "error" | null>(null);
    const [alertMessage, setAlertMessage] = useState<string>("");

    useEffect(() => {
        const fetchEmployeeData = async () => {
            try {
                const employeeData = await getEmployeeById(employeeId);
                setValue("name", employeeData.name);
                setValue("email", employeeData.email);
                setValue("job_position", employeeData.job_position);
                setValue("departament", employeeData.departament);
                setValue("actions", employeeData.actions);
                setLoading(false);
            } catch (error) {
                setAlertStatus("error");
                setAlertMessage("Não foi possível buscar os dados do funcionário");
                setLoading(false);
            }
        };
       
        fetchEmployeeData();
    }, [employeeId, setValue]);

    const onSubmit = async (dataBody: FormData) => {
       
           const data= await editEmployee(employeeId, dataBody)
            if(data.message == undefined ){
                setAlertStatus("success");
                setAlertMessage("Funcionário editado com Sucesso"); 
                reset(); 
                
            }else{
                setAlertStatus("error");
                setAlertMessage("Não foi possível editar funcionário"); 
            }
    };

    if (loading) {
        return <Spinner />;
    }

    return (
        <VStack spacing={4} align="center">
            <SetAlert alertMessage={alertMessage} alertStatus={alertStatus} setAlertStatus={setAlertStatus} />

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
                <VStack spacing={4} align="flex-start">
                    <Link href="/">
                        <Button type="submit" mt={4} colorScheme="blue">Submit</Button>
                    </Link>
                </VStack>
            </form>
        </VStack>
    );
}
