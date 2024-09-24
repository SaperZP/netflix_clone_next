import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { UseFormReturn, FieldValues, Path } from "react-hook-form";
import { Input } from "./ui/input";

interface InputProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: keyof T;
  label: string;
  type?: string;
  placeholder?: string;
}

const FormInput = <T extends FieldValues>({
  form,
  name,
  label,
  type = "text",
  placeholder,
}: InputProps<T>) => {
  return (
    <FormField
      control={form.control}
      name={name as Path<T>}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} type={type} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
