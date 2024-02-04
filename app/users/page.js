import Link from "next/link"
async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')  
    if (!res.ok) {      
      throw new Error('Failed to fetch data')
    }   
    return res.json()
  }
const Page=async()=>{
    const users=await getUsers();
    console.log(users);
    return(
        <>
            <h2>Showing all users from API</h2>
            {
                users.map(user=>{return(
                    <div key={user.id}>
                        <h3><Link href={"/userdetail/"+user.id}>{user.name}</Link></h3>
                        <hr />
                    </div>
                )})
            }
        </>
    );
}
export default Page;