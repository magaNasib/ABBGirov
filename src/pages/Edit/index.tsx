import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Outlet } from "react-router-dom";
export interface IEditFormValues {
    customerId: number
}
const EditPage = () => {

    const methods = useForm<IEditFormValues>({
        mode: "all",
    })

    return (
        <FormProvider {...methods}>
            <Outlet />
        </FormProvider>
    )
}

export default EditPage