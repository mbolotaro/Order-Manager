import SearchIcon from "@/assets/icons/SearchIcon";
import Input from "@/components/Atoms/Input";
import { ISearchInputProps } from "./helpers/search-input-props.interface";

export default function SearchInput(props: ISearchInputProps) {
    return <Input value={props.value} onChange={props.onChange} trim icon={<SearchIcon size={20} styleType="text"/>}/>
}