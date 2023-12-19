const api="https://api.github.com/users"
fetch(api)
.then(res=>res.json())
.then((data)=>
    data.map((user)=>{
 var tbody=document.querySelector("tbody")
 console.log(user)
 var tr=document.createElement("tr")
 tr.innerHTML=`
  <td>${user.id}</td>
  <td>${user.login}</td>
  <td><img height="150px" src="${user.avatar_url}" alt=""></td> 
  <td>${user.type}</td>
 `
tbody.appendChild(tr)
    })
    )
