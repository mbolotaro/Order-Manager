export interface ITextFieldProps {
    label: string;
    id: string;
    errorMessage?: string;
    disabled?: boolean;
    value: string;
    onChange?: (value: string) => void;
    
}