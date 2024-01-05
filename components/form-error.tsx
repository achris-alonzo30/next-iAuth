import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
    message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
    if (!message) return null
    return (
        <div className="flex items-center gap-x-2 bg-destructive/15 p-2 text-destructive rounded-md">
            <ExclamationTriangleIcon className="w-5 h-5" />
            <span>{message}</span>
        </div>
    )
}