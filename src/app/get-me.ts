"use server"

import {get} from "@/app/util/fetch";

export default async function getMe() {
    return get('users/me');
}