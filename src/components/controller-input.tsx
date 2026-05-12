import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";
import { Field, FieldDescription, FieldError, FieldLabel } from "./ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useState } from "react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { Button } from "./ui/button";
import { Eye, EyeOff } from "lucide-react";

interface InputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  placeholder?: string;
  type?: "text" | "password" | "email" | "select";
  options?: { label: string; value: string }[];
  description?: string;
}

const ControllerInput = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type,
  options,
  description,
}: InputProps<T>) => {
  const [showPassword, setShowPassWord] = useState(false);

  const toggleVisibility = () => setShowPassWord((prev) => !prev);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={name}>{label}</FieldLabel>
          {type === "select" ? (
            <Select onValueChange={field.onChange} value={field.value ?? ""}>
              <SelectTrigger id={name}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {options?.map(({ label, value }) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : (
            <InputGroup>
              <InputGroupInput
                {...field}
                type={name === "password" ? (showPassword ? "text" : "password") : ""}
                id={name}
                placeholder={placeholder}
                autoComplete="off"
              />
              {name === "password" && (
                <InputGroupAddon align="inline-end">
                  {
                    <Button
                      type="button"
                      variant={"ghost"}
                      className="hover:bg-transparent hover:text-foreground cursor-pointer"
                      onClick={toggleVisibility}
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </Button>
                  }
                </InputGroupAddon>
              )}
            </InputGroup>
          )}
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          {description && !fieldState.invalid && (
            <FieldDescription>{description}</FieldDescription>
          )}
        </Field>
      )}
    />
  );
};

export default ControllerInput;
