import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Outlet } from "react-router-dom";
export interface IEditFormValues {
    customerId: string
}
const EditPage = () => {

    const methods = useForm<IEditFormValues>({
        mode: "all",
        defaultValues:{
            customerId:''
        }
    })

    return (
        <FormProvider {...methods}>
            <Outlet />
        </FormProvider>
    )
}

export default EditPage