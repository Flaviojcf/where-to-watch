import { Container } from "./styles";

interface InputProps {
    type: string;
    placeholder: string;
    value: string;
    setValue: (value: string) => void
}

export function Input({ type, placeholder, value, setValue }: InputProps) {
    return (
        <Container 
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(event) => setValue(event.target.value)}
        />
    )
}