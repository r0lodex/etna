$(function(){
    $("#CPosition").chained("#CJoblvl");
});

function addRow(content,morecontent)
{
    if (!document.getElementsByTagName) return;
    tabBody=document.getElementsByTagName("tbody").item(0);
    row=document.createElement("tr");
    cell1 = document.createElement("td");
    cell2 = document.createElement("td");
    textnode1=document.createTextNode(content);
    textnode2=document.createTextNode(morecontent);
    cell1.appendChild(textnode1);
    cell2.appendChild(textnode2);
    row.appendChild(cell1);
    row.appendChild(cell2);
    tabBody.appendChild(row);


}

function toggletableshow(sel)
{
    if(sel.value=="non-exec"){
        document.getElementById("startassessmentbtn").setAttribute("formaction","current-assessment-nonexec.html");
    }

    if(sel.value=="executive"){
        document.getElementById("startassessmentbtn").setAttribute("formaction","current-assessment-exec.html");
    }

    if(sel.value=="manager"){
        document.getElementById("startassessmentbtn").setAttribute("formaction","current-assessment-mgr.html");
    }
}

function certtableshow()
{
    document.getElementById("selectcoursetable").setAttribute("style","display:none;");
    document.getElementById("selectcerttable").setAttribute("style","display:block; overflow-x: auto; height: 200px;");
}

function coursetableshow()
{
    document.getElementById("selectcoursetable").setAttribute("style","display:block; overflow-x: auto; height: 200px;");
    document.getElementById("selectcerttable").setAttribute("style","display:none;");
}