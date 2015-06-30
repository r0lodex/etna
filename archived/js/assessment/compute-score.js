function computepsdmNonexec(){
    alert('Your Problem Solving & Decision Making Score is 20%. Your Proficiency level for Problem Solving & Decision Making is 1');

    var comptable = document.getElementById('nonexeccomptable');

    comptable.rows[1].cells[3].innerHTML = '1';
    comptable.rows[1].cells[5].innerHTML = '20%';

}

function computeteamworkNonexec(){
    alert('Your Teamwork Score is 20%. Your Proficiency level for Teamwork Making is 1');

    var comptable = document.getElementById('nonexeccomptable');

    comptable.rows[2].cells[3].innerHTML = '1';
    comptable.rows[2].cells[5].innerHTML = '20%';

}

function computeinterpcommNonexec(){
    alert('Your Interpersonal Communication Score is 60%. Your Proficiency level for Interpersonal Communication is 3');

    var comptable = document.getElementById('nonexeccomptable');

    comptable.rows[3].cells[3].innerHTML = '3';
    comptable.rows[3].cells[5].innerHTML = '60%';

}


function computeofficeadminNonexec(){
    alert('Your Office Admin Skills Score is 40%. Your Proficiency level for Office Admin Skills is 2');

    var comptable = document.getElementById('nonexeccomptable');

    comptable.rows[4].cells[3].innerHTML = '2';
    comptable.rows[4].cells[5].innerHTML = '40%';

}

function computeselfimprovementNonexec(){
    alert('Your Self Improvement/Motivation Score is 80%. Your Proficiency level for Self Improvement/Motivation is 4');

    var comptable = document.getElementById('nonexeccomptable');

    comptable.rows[5].cells[3].innerHTML = '4';
    comptable.rows[5].cells[5].innerHTML = '80%';

}

function computetimestressNonexec(){
    alert('Your Time & Stress Management Score is 20%. Your Proficiency level for Time & Stress Management is 1');

    var comptable = document.getElementById('nonexeccomptable');

    comptable.rows[6].cells[3].innerHTML = '1';
    comptable.rows[6].cells[5].innerHTML = '20%';

}

function computepurchaseNonexec(){
    alert('Your Purchasing & Negotiation Score is 40%. Your Proficiency level for Purchasing & Negotiation is 2');

    var comptable = document.getElementById('nonexeccomptable');

    comptable.rows[7].cells[3].innerHTML = '2';
    comptable.rows[7].cells[5].innerHTML = '40%';

}

function computetradetermsNonexec(){
    alert('Your Trade Terms & Operations Score is 40%. Your Proficiency level for Trade Terms & Operations is 2');

    var comptable = document.getElementById('nonexeccomptable');

    comptable.rows[8].cells[3].innerHTML = '2';
    comptable.rows[8].cells[5].innerHTML = '40%';

}

function computewarehouseNonexec(){
    alert('Your Warehousing & Logistics Score is 40%. Your Proficiency level for Warehousing & Logistics is 2');

    var comptable = document.getElementById('nonexeccomptable');

    comptable.rows[9].cells[3].innerHTML = '2';
    comptable.rows[9].cells[5].innerHTML = '40%';

}

function computecustomNonexec(){
    alert('Your Custom & Shipping is 40%. Your Proficiency level for Custom & Shipping is 2');

    var comptable = document.getElementById('nonexeccomptable');

    comptable.rows[10].cells[3].innerHTML = '2';
    comptable.rows[10].cells[5].innerHTML = '40%';

}


/*Computing score Executive*/

function computeCMgmtExec(){

    /*Group each of the question possible answers*/
    
    var question1 = document.getElementsByName("CMgmtQ1");
    var answer1 = 0;
    for(i=0;i<question1.length;i++){
        if(question1[i].checked){
            answer1++;
            break;
        }
    }

    var question2 = document.getElementsByName("CMgmtQ2");
    var answer2 = 0;
    for(i=0;i<question2.length;i++){
        if(question2[i].checked){
            answer2++;
            break;
        }
    }

    var question3 = document.getElementsByName("CMgmtQ3");
    var answer3 = 0;
    for(i=0;i<question3.length;i++){
        if(question3[i].checked){
            answer3++;
            break;
        }
    }

    if(answer1 && answer2 && answer3){
        
        /*When any of the question is lacking answer, prompt for answer, if answered display score an proficiency level*/
        
        document.getElementsByName("answerCMgmt").setAttribute("data-dismiss","modal");
        alert('Your Conflict Management Score is 40%. Your Proficiency level for Conflict Management is 2');

        var comptable = document.getElementById('execcomptable');

        comptable.rows[1].cells[3].innerHTML = '2';
        comptable.rows[1].cells[5].innerHTML = '40%';
    }else{
        document.getElementsByName("answerCMgmt").setAttribute("data-dismiss","#");
        alert("Please answer all the question provided to get your score. Thank you.");
        return false;
    }

}

function computepsdmExec(){
    alert('Your Problem Solving & Decision Making Score is 60%. Your Proficiency level for Problem Solving & Decision Making is 3');

    var comptable = document.getElementById('execcomptable');

    comptable.rows[2].cells[3].innerHTML = '3';
    comptable.rows[2].cells[5].innerHTML = '60%';

}

function computeteamworkExec(){
    alert('Your Teamwork Score is 20%. Your Proficiency level for Teamwork is 1');

    var comptable = document.getElementById('execcomptable');

    comptable.rows[3].cells[3].innerHTML = '1';
    comptable.rows[3].cells[5].innerHTML = '20%';

}

function computeinterpcommExec(){
    alert('Your Interpersonal Communication Score is 80%. Your Proficiency level for Teamwork is 4');

    var comptable = document.getElementById('execcomptable');

    comptable.rows[4].cells[3].innerHTML = '4';
    comptable.rows[4].cells[5].innerHTML = '80%';

}

function computeselfimprovementExec(){
    alert('Your Self Improvement or Motivation Score is 80%. Your Proficiency level for elf Improvement or Motivation is 4');

    var comptable = document.getElementById('execcomptable');

    comptable.rows[5].cells[3].innerHTML = '4';
    comptable.rows[5].cells[5].innerHTML = '80%';

}

function computesupervisoryExec(){
    alert('Your Supervisory Skills Score is 40%. Your Proficiency level for elf Improvement or Motivation is 2');

    var comptable = document.getElementById('execcomptable');

    comptable.rows[6].cells[3].innerHTML = '2';
    comptable.rows[6].cells[5].innerHTML = '40%';

}

function computeprojectmgmtExec(){
    alert('Your Project Management Score is 60%. Your Proficiency level for elf Improvement or Motivation is 3');

    var comptable = document.getElementById('execcomptable');

    comptable.rows[7].cells[3].innerHTML = '3';
    comptable.rows[7].cells[5].innerHTML = '60%';

}

/*End Computing score Executive*/



function computeCMgmtMgr(){
    alert('Your Conflict Management Score is 60%. Your Proficiency level for Conflict Management is 3');

    var comptable = document.getElementById('managercomptable');

    comptable.rows[1].cells[3].innerHTML = '3';
    comptable.rows[1].cells[5].innerHTML = '60%';

}

function computedelegationMgr(){
    alert('Your Delegation Score is 100%. Your Proficiency level for Delegation is 5');

    var comptable = document.getElementById('managercomptable');

    comptable.rows[2].cells[3].innerHTML = '5';
    comptable.rows[2].cells[5].innerHTML = '100%';

}

function computepplmgmtMgr(){
    alert('Your Conflict Management Score is 80%. Your Proficiency level for Conflict Management is 4');

    var comptable = document.getElementById('managercomptable');

    comptable.rows[3].cells[3].innerHTML = '4';
    comptable.rows[3].cells[5].innerHTML = '80%';

}

function computeselfimprovementMgr(){
    alert('Your Self & Team Motivation Score is 60%. Your Proficiency level for Self & Team Motivation is 3');

    var comptable = document.getElementById('managercomptable');

    comptable.rows[4].cells[3].innerHTML = '3';
    comptable.rows[4].cells[5].innerHTML = '60%';

}

function computeteamworkMgr(){
    alert('Your Teamwork Score is 60%. Your Proficiency level for Teamwork is 3');

    var comptable = document.getElementById('managercomptable');

    comptable.rows[5].cells[3].innerHTML = '3';
    comptable.rows[5].cells[5].innerHTML = '60%';

}

function computeinterpcommMgr(){
    alert('Your Interpersonal Communication Score is 100%. Your Proficiency level for Interpersonal Communication is 5');

    var comptable = document.getElementById('managercomptable');

    comptable.rows[6].cells[3].innerHTML = '5';
    comptable.rows[6].cells[5].innerHTML = '100%';

}


function computeassertiveMgr(){
    alert('Your Assertiveness Score is 100%. Your Proficiency level for Assertiveness is 5');

    var comptable = document.getElementById('managercomptable');

    comptable.rows[7].cells[3].innerHTML = '5';
    comptable.rows[7].cells[5].innerHTML = '100%';

}

function computecoachMgr(){
    alert('Your Coaching & Mentoring Score is 60%. Your Proficiency level for Coaching & Mentoring is 3');

    var comptable = document.getElementById('managercomptable');

    comptable.rows[8].cells[3].innerHTML = '3';
    comptable.rows[8].cells[5].innerHTML = '60%';

}

function computemanagerialMgr(){
    alert('Your Managerial Skills Score is 80%. Your Proficiency level for Managerial Skills is 4');

    var comptable = document.getElementById('managercomptable');

    comptable.rows[9].cells[3].innerHTML = '4';
    comptable.rows[9].cells[5].innerHTML = '80%';

}

function computeprojectmgmtMgr(){
    alert('Your Project Management Score is 60%. Your Proficiency level for Project Management is 3');

    var comptable = document.getElementById('managercomptable');

    comptable.rows[10].cells[3].innerHTML = '3';
    comptable.rows[10].cells[5].innerHTML = '60%';

}


