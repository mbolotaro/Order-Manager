
import OrderCRUD from "@/components/Templates/OrderCRUD";
import DefaultLayout from "@/layouts/DefaultLayout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gerenciador de Pedidos</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <OrderCRUD/>
      </DefaultLayout>
    </>
  );
}