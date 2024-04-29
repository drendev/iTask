'use client'

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";
const User: React.FC = () => {
    const { data: session } =  useSession();
    const router = useRouter();

    if (!session) router.refresh();

    return <pre>{JSON.stringify(session)}</pre>;
}

export default User;