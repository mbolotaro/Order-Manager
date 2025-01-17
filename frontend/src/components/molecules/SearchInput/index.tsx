import SearchIcon from "@/assets/icons/SearchIcon";
import Input from "@/components/atoms/Input";
import { SearchInputProps } from "./helpers/search-input-props";

export default function SearchInput(props: SearchInputProps) {
    return <Input 
        value={props.value} 
        onChange={props.onChange} 
        trim 
        icon={<SearchIcon size={20} styleType="text"/>}
        width={props.width}
        />
}