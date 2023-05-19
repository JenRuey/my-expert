import Checkbox, { CheckboxProps } from "expo-checkbox";
import React, { LegacyRef } from "react";
import { Control, useController } from "react-hook-form";
import { TextInput, TextInputProps } from "react-native";

type FormInputType = {
  name: string;
  control: Control<any, any>;
  defaultValue?: string;
} & Omit<TextInputProps, "onChangeText" | "value" | "defaultValue">;

export const FormInput = React.forwardRef(({ name, control, defaultValue, ...rest }: FormInputType, ref: LegacyRef<TextInput> | undefined) => {
  const { field } = useController({ name, control, defaultValue: defaultValue || "" });

  return <TextInput ref={ref} value={field.value} onChangeText={field.onChange} {...rest} />;
});

type FormCheckBoxType = {
  name: string;
  control: Control<any, any>;
  defaultValue?: boolean;
} & Omit<CheckboxProps, "onValueChange" | "value">;

export const FormCheckBox = React.forwardRef(({ name, control, defaultValue, ...rest }: FormCheckBoxType, ref: LegacyRef<Checkbox> | undefined) => {
  const { field } = useController({ name, control, defaultValue: defaultValue || false });

  return <Checkbox ref={ref} value={field.value} onValueChange={(data) => field.onChange({ target: { value: data } })} {...rest} />;
});
