const getUsers = async()=>{
    const response = await axios.get(`https://ums12.runasp.net/api/users`);
    return response.data;
}

const displayUsers = async()=>{
    try{
        const result = await getUsers();
    const users = result.users.map( (user)=>{
        return`
        <tr>
        <td>${user.name}</td>
        
        <td><img src="${user.imageURL}"/></td>
        <td><a href="./details.html?userId=${user.id}" class="btn btn-outline-primary">Details</a></td>
        <td><button class="btn btn-outline-danger" onclick="deleteUser(${user.id})">Delete</button>
        </tr>
        `
    }).join(' ');
   document.querySelector(".users .tbody").innerHTML = users;
    }catch(error){
        document.querySelector(".errorClass").classList.remove("d-none");
        
    }finally{
        document.querySelector(".loader").classList.add('d-none');
    }
    
}
displayUsers();



const deleteUser = async(id)=>{
        const response = await axios.delete(`https://ums12.runasp.net/api/users/${id}`);
        console.log(response);
}