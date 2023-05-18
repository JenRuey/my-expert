import React, { LegacyRef } from "react";
import { Control, useController } from "react-hook-form";
import { TextInput, TextInputProps } from "react-native";

type InputType = {
  name: string;
  control: Control<any, any>;
  defaultValue?: string;
} & Omit<TextInputProps, "onChangeText" | "value" | "defaultValue">;

const Input = React.forwardRef(({ name, control, defaultValue, ...rest }: InputType, ref: LegacyRef<TextInput> | undefined) => {
  const { field } = useController({ name, control, defaultValue: defaultValue || "" });

  return <TextInput ref={ref} value={field.value} onChangeText={field.onChange} {...rest} />;
});

export default Input;
