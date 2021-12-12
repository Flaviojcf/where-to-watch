import { Container } from "./styles";

interface ButtonProps {
    type: "button" | "submit" | "reset";
    title: string;
    onClick: () => void;
    disabled?: boolean;
}

export function Button({ title, type, onClick, disabled = false }: ButtonProps) {
    return (
        <Container type={type} onClick={onClick} disabled={disabled}>
            {title}
        </Container>
    )
}