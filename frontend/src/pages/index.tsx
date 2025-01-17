import DefaultLayout from "@/components/templates/Default";
import OrderCRUD from "@/components/templates/OrderCRUD";
import Head from "next/head";

export default function OrderPage() {
    return <>
    <Head>
        <title>Gerenciador de Pedidos</title>
    </Head>
    <DefaultLayout>
        <OrderCRUD/>
    </DefaultLayout>
    </>
}