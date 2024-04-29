
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation'

const page = async () => {
    const session = await getServerSession(authOptions);

    if(session?.user){
        return <h2 className="text-2xl"> Employee page - welcome back {session?.user.username}</h2>
    }

    return redirect("/sign-in");
};

export default page;