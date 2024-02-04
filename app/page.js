"use client";
import { useRouter } from "next/navigation";
const Page=()=>{
    const router=useRouter();
    return(
        <>
            <h2>Home</h2>
            <p>
                Some text for Home goes here. Some text for Home goes here. Some text for Home goes here. Some text for Home goes here. Some text for Home goes here. 
            </p>
            <p>
                <input type="button" value="Go to feedback" onClick={()=>router.push("/feedback")} />
            </p>
        </>
    );
}
export default Page;