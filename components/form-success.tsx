import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormSuccessProps {
    message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
    if (!message) return null
    return (
        <div className="flex items-center gap-x-2 bg-emerald-100 p-2 text-emerald-500 rounded-md">
            <CheckCircledIcon className="w-5 h-5" />
            <span>{message}</span>
        </div>
    )
}