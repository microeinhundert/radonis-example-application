import { useFlashMessages } from "@microeinhundert/radonis";
import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { useId, useState } from "react";

export function useFormField({
  name,
  label,
  description,
  id,
  defaultValue,
  ...restProps
}: (InputHTMLAttributes<HTMLInputElement> | TextareaHTMLAttributes<HTMLTextAreaElement>) & {
  name: string;
  label: string;
  description?: string;
}) {
  const randomId = useId();
  const { get$ } = useFlashMessages();

  /**
   * Value and error states
   */
  const [value, setValue] = useState(defaultValue ?? get$(name));
  const [error, setError] = useState(get$(`errors.${name}`));

  /**
   * Touched and dirty states
   */
  const [touched, setTouched] = useState(false);
  const [dirty, setDirty] = useState(false);

  /**
   * IDs
   */
  const inputId = id ?? randomId;
  const descriptionId = `description-${inputId}`;
  const errorId = `error-${inputId}`;

  const getInputProps = (
    overrides?: InputHTMLAttributes<HTMLInputElement> | TextareaHTMLAttributes<HTMLTextAreaElement>
  ): Record<string, unknown> => ({
    ...restProps,
    name,
    "id": inputId,
    "aria-invalid": error ? "true" : "false",
    "aria-describedby": error ? errorId : description ? descriptionId : undefined,
    ...overrides,
    "onChange": (event) => {
      (overrides ?? restProps)?.onChange?.(event);

      if (event.defaultPrevented) return;

      setDirty(true);
      setError("");
      setValue(event.target.value);
    },
    "onBlur": (event) => {
      (overrides ?? restProps)?.onBlur?.(event);

      if (event.defaultPrevented) return;

      setTouched(true);
    },
  });

  const getLabelProps = () => ({
    htmlFor: inputId,
  });

  const getDescriptionProps = () => ({
    id: descriptionId,
  });

  const getErrorProps = () => ({
    id: errorId,
  });

  return {
    name,
    label,
    description,
    //
    value,
    setValue,
    //
    error,
    setError,
    //
    touched,
    setTouched,
    //
    dirty,
    setDirty,
    //
    getInputProps,
    getLabelProps,
    getDescriptionProps,
    getErrorProps,
  };
}
