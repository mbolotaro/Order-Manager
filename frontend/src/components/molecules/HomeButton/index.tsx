import Link from "next/link";
import { HomeButtonStyle } from "./style";
import Image from "next/image";

export default function HomeButton() {
    return <HomeButtonStyle>
        <Link href="/">
            <Image src="/logo.png" width={50} height={50} alt="Ip logo" priority/>
            <h1>Manager</h1>
        </Link>
    </HomeButtonStyle>
}