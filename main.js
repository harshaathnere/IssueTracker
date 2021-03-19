document.getElementById('issueInputForm').addEventListener('submit',saveIssue);

function savaIssue(e){
var issueDesc = document.getElementById('issuesDecInput').value;
var issueSeverity = document.getElementById('issuesServerityInput').value;
var assignedTo = document.getElementById('issuesAssignedInput').value;
var issueId = chance.guid();
var status = 'Open';

var issue = {
    id: issueId,
   description: issueDesc,
   severity: issueSeverity,
   assinedTo: assignedTo
}
}

function fetchIssues(){
    var issues = JSON.parse(localStorage).getItem('issues');
    var issueList = document.getElementById('issueList');
    issuesList.innerHTML = '';
     for(var i=0;i<issues.length;i++){
         var id = issues[i].id;
         var desc = issues[i].description;
         var severity = issues[i].severity;
         var assignedTo = issues[i].assignedTo;
         var status = issues[i].status;

         issuesList.innerHTML ='<div class="well>' +
                                 '<h6>Issue ID:' + id +'</h6>'+
                                     '<p><span class="label label-info">' + status +'</span></p>' +
                                     '<h3>' +desc +'</h3>' +
                                     '<p><span class="glyphicon glyphicon-time"></span>' +severity +'</p>' +
                                     '<p><span class="glyphicon glyphicon-user"></span>' + assignedTo +'</p>'
                                     '<a href="#"  onClick="setStatusClosed(\''+id+'\')" class="btn btn-warning">Close</a>' +
                                     '<a href="#" onClick="deleteIssue(\''+id+'\')" class="btn btn-danger">Delete</a>' +
                                     '=</div>';
     }
}
