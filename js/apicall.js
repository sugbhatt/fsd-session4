function getRepositories() {
    return new Promise((resolve, reject) =>  {
        const httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', 'https://gitlab-cts.stackroute.in/api/v3/projects');
        httpRequest.setRequestHeader('PRIVATE-TOKEN', 'R59fNpi29Q6e2mYUi44Q');
        httpRequest.onreadystatechange = () => {
            if(httpRequest.readyState == XMLHttpRequest.DONE){
                if(httpRequest.status === 200) {
                    resolve(JSON.parse(httpRequest.response));
                } else {
                    reject(new Error('some internal error occurred'));
                }
                
            } 
        }
        httpRequest.send();        
    })
}

getRepositories().then((repositories) => {
    // console.log(repositories);
    const tbody = document.getElementsByTagName('tbody')[0];
    let trowstring = '';
    repositories.forEach(repo => {
        trowstring = trowstring + `
        <tr>
        <th>${repo.path_with_namespace}</th>
        <td>4</td>
        <td>${repo.open_issues_count}</td>
        <td>2</td>
        </tr>`
    });
    tbody.innerHTML = trowstring;
    
}).catch(error => {
    console.log(error);
    
})
