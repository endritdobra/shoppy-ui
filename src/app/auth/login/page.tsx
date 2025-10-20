"use client"

import {Stack, Link, TextField, Button} from "@mui/material";
import NextLink from "next/link";
import {useActionState} from "react";
import login from "@/app/auth/login/login";

export default function LoginPage() {
    const [state, formAction] = useActionState(login, { error: "" });
    return <form action={formAction} className='w-full max-w-xs'>
        <Stack spacing={2}>
            <TextField
                name="email"
                label="Email"
                variant="outlined"
                type="email"
                helperText={state.error}
                error={!!state.error}
            />
            <TextField
                name="password"
                label="Password"
                variant="outlined"
                type="password"
                helperText={state.error}
                error={!!state.error}
            />
            <Button type="submit" variant="contained">
                Login
            </Button>
            <Link component={NextLink} href="/auth/signup" className="self-center">Signup</Link>
        </Stack>
    </form>;
}