async function getUser(id) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id)  
    if (!res.ok) {      
      throw new Error('Failed to fetch data')
    }   
    return res.json()
  }
const Page=async({params})=>{
    const user=await getUser(params.uid);
    return(
        <>
            <h3>Showing detail of userid : {params.uid} </h3>
            Name : {user.name} <br />
            Username : {user.username} <br />
            Email : {user.email} <br />
            Website : {user.website} <br />
            City : {user.address.city}<br />
            Company name : {user.company.name}
        </>
    );
}
export default Page;