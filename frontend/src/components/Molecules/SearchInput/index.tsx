import SearchIcon from "@/assets/icons/SearchIcon";
import Input from "@/components/Atoms/Input";
import { useState } from "react";

export default function SearchInput() {
    const [value, setValue] = useState('')
    return <Input value={value} onChange={(value) => setValue(value)} icon={<SearchIcon size={20} styleType="text"/>}/>
}