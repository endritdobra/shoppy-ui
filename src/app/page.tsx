import Image from "next/image";
import getMe from "@/app/get-me";

export default async function Home() {
    const me = await getMe();
    console.log(me);
    return (
        <>Test</>
    );
}
