const getUser = async()=>{
    const params = new URLSearchParams(location.search);
    const userId = params.get('userId');
    const response = await axios.get(`https://ums12.runasp.net/api/users/${userId}`)
    if(response.status == 200){
        return response.data;
    }
}

const displayData = async()=>{
    const response = await getUser();
    console.log(response);

    document.querySelector(".userName").textContent = response.data.name;
    document.querySelector(".userEmail").textContent = response.data.email;
    document.querySelector(".userAge").textContent = response.data.age;
    document.querySelector(".userPhoto").textContent = response.data.image;
}
displayData();