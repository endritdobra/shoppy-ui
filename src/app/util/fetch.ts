import {API_URL} from "@/app/constants/api";
import {getErrorMessage} from "@/app/util/errors";
import {cookies} from "next/headers";

const getHeaders = async () => {
    const cookieStore = await cookies();
    return {
        Cookie: cookieStore.toString()
    }
}


export const post = async (path: string, formData: FormData) => {
    const res = await fetch(`${API_URL}/${path}`, {
        method: "POST",
        headers: {
            ...(await getHeaders()),
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
    });
    const parsedRes = await res.json();
    if (!res.ok) {
        return {error: getErrorMessage(parsedRes)};
    }
    return {error: ""}
}

export const get = async (path: string) => {
    const res = await fetch(`${API_URL}/${path}`, {
        headers: {
            ...(await getHeaders()),
        }
    });
    return res.json();
}