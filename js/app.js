function getMyCount(event){
    event.preventDefault();
    let reponame = document.getElementById('countQueryRepositoryInput').value;
    let issuename = document.getElementById('countQueryIssuesInput').value;
    let table = document.getElementsByTagName('table')[0];
    let thead = table.getElementsByTagName('thead')[0];
    let headerrows = thead.getElementsByTagName('tr')[0];
    let th = headerrows.getElementsByTagName('th');
    
    let issueindex; 
    for(let i = 0; i < th.length; i++ ) {
        if(issuename === th[i].innerText) {
            issueindex = i;
            
        }
    }
    let tbody = table.getElementsByTagName('tbody')[0];
    let bodyrows = tbody.getElementsByTagName('tr');
    
    let bodyrowarr = Array.from(bodyrows);
    let reporow = bodyrowarr.find(row => {
        let th  = row.getElementsByTagName('th')[0];
        return  th.innerText === reponame;
    })
    let count = reporow.getElementsByTagName('td')[issueindex - 1].innerText;
    document.getElementById('count').innerHTML = `${reponame} ` + count; 
}