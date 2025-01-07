import Checkbox from "@/components/Atoms/Checkbox";
import Input from "@/components/Atoms/Input";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState<string | undefined>(undefined)
  const [checkbox, setCheckbox] = useState(false)
  return (
    <>
      <Head>
        <title>Gerenciador de Pedidos</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
      >
        <main>
          {/* <TextField  label="Nome do Cliente: " id="client-name"/> */}
          <Input value={value} onChange={value => setValue(value)} />
          <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
          </div>
          <Checkbox value={checkbox} onChange={(value) => setCheckbox(value)} />
          {checkbox}
        </main>
        <footer>
        </footer>
      </div>
    </>
  );
}