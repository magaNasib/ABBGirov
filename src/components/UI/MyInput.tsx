import { FormLabel, Input, InputGroup, InputRightElement, Spinner } from "@chakra-ui/react";
import React, { forwardRef } from "react";
export type InputProps = {
    placeholder?: string;
    type?: string;
    label: string;
    disabled?: boolean;
    value?: string | number;
    onChange: any;
    isLoading?: boolean;
    // onBlur: Noop
};

export const MyInput = forwardRef<HTMLInputElement, InputProps>(
    ({ label, isLoading, ...props }, forwardedRef) => (
        <>
            <FormLabel>{label}</FormLabel>
            <InputGroup display={'flex'} flexDirection={'column'}>
                <Input {...props} ref={forwardedRef} />
                {isLoading && (
                    <InputRightElement children={<Spinner thickness='4px' speed='.65s' emptyColor='gray.200' color='blue.500' />} />
                )}
            </InputGroup>
        </>
    )
);
MyInput.displayName = 'MyInput';