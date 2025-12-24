const getUsers = async()=>{
    const response = await axios.get(`https://ums12.runasp.net/api/users`);
    return response.data;
}


const displayUsers = async()=>{
    const result = await getUsers();
    const users = result.users.map( (user)=>{
        return`
        <tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.age}</td>
        <td><img src="${user.imageURL}"/></td>
        <td><button class="btn btn-outline-danger" onclick="deleteUser(${user.id})">Delete</button>
        </tr>
        `
    }).join(' ');
   document.querySelector(".users .tbody").innerHTML = users;
}
displayUsers();


const deleteUser = async(id)=>{
        const response = await axios.delete(`http://ums12.runasp.net/api/users/${id}`);
        console.log(response);
}