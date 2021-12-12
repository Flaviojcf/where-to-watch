import { Container } from "./styles";

interface ButtonProps {
    type: "button" | "submit" | "reset";
    title: string;
}

export function Button({ title, type }: ButtonProps) {
    return (
        <Container type={type}>
            {title}
        </Container>
    )
}