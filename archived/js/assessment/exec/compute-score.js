/*Validate Table Value*/



document.getElementById("proceed").addEventListener("click", function(event){
    if ($('input[type=radio]:checked').length < 19) {
        event.preventDefault();
        alert("Please answer all question to get your score by clicking the quiz button for each skillset")
    }
    if ($('input[type=radio]:checked').length == 19) {
        document.getElementById("proceed").setAttribute("formaction","current-assessment-exec2.html");
    }

});




/*
$("#proceed").click(function(){
    $("#execcomptable tr").not(':first').each(function()
    {        
        var prolevel = $(this).children('.c3');
        prolevel.each(function(){
            if($(this).html() == '-')
            {
                window.location.href="html2.html";
            }
            else{
                window.location.href="html2.html";
            }
        });

    });
});
*/


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

        document.getElementById("answerCMgmt").setAttribute("data-dismiss","modal");
        alert('Your Conflict Management Score is 40%. Your Proficiency level for Conflict Management is 2');

        var comptable = document.getElementById('execcomptable');

        comptable.rows[1].cells[3].innerHTML = '2';
        comptable.rows[1].cells[5].innerHTML = '40%';
    }else{
        document.getElementById("answerCMgmt").setAttribute("data-dismiss","#");
        alert("Please answer all the question provided to get your score. Thank you.");
        return false;
    }

}

function computepsdmExec(){

    /*Group each of the question possible answers*/

    var question1 = document.getElementsByName("psdmQ1");
    var answer1 = 0;
    for(i=0;i<question1.length;i++){
        if(question1[i].checked){
            answer1++;
            break;
        }
    }

    var question2 = document.getElementsByName("psdmQ2");
    var answer2 = 0;
    for(i=0;i<question2.length;i++){
        if(question2[i].checked){
            answer2++;
            break;
        }
    }

    if(answer1 && answer2){

        /*When any of the question is lacking answer, prompt for answer, if answered display score an proficiency level*/

        document.getElementById("answerpsdm").setAttribute("data-dismiss","modal");
        alert('Your Problem Solving & Decision Making Score is 60%. Your Proficiency level for Problem Solving & Decision Making is 3');

        var comptable = document.getElementById('execcomptable');

        comptable.rows[2].cells[3].innerHTML = '3';
        comptable.rows[2].cells[5].innerHTML = '60%';
    }else{
        document.getElementById("answerpsdm").setAttribute("data-dismiss","#");
        alert("Please answer all the question provided to get your score. Thank you.");
        return false;
    }


}

function computeteamworkExec(){

    /*Group each of the question possible answers*/

    var question1 = document.getElementsByName("twQ1");
    var answer1 = 0;
    for(i=0;i<question1.length;i++){
        if(question1[i].checked){
            answer1++;
            break;
        }
    }

    var question2 = document.getElementsByName("twQ2");
    var answer2 = 0;
    for(i=0;i<question2.length;i++){
        if(question2[i].checked){
            answer2++;
            break;
        }
    }

    if(answer1 && answer2){

        /*When any of the question is lacking answer, prompt for answer, if answered display score an proficiency level*/

        document.getElementById("answertw").setAttribute("data-dismiss","modal");
        alert('Your Teamwork Score is 20%. Your Proficiency level for Teamwork is 1');

        var comptable = document.getElementById('execcomptable');

        comptable.rows[3].cells[3].innerHTML = '1';
        comptable.rows[3].cells[5].innerHTML = '20%';
    }else{
        document.getElementById("answertw").setAttribute("data-dismiss","#");
        alert("Please answer all the question provided to get your score. Thank you.");
        return false;
    }


}

function computeinterpcommExec(){

    /*Group each of the question possible answers*/

    var question1 = document.getElementsByName("comQ1");
    var answer1 = 0;
    for(i=0;i<question1.length;i++){
        if(question1[i].checked){
            answer1++;
            break;
        }
    }

    var question2 = document.getElementsByName("comQ2");
    var answer2 = 0;
    for(i=0;i<question2.length;i++){
        if(question2[i].checked){
            answer2++;
            break;
        }
    }

    var question3 = document.getElementsByName("comQ3");
    var answer3 = 0;
    for(i=0;i<question3.length;i++){
        if(question3[i].checked){
            answer3++;
            break;
        }
    }

    if(answer1 && answer2 && answer3){

        /*When any of the question is lacking answer, prompt for answer, if answered display score an proficiency level*/

        document.getElementById("answercom").setAttribute("data-dismiss","modal");
        alert('Your Interpersonal Communication Score is 80%. Your Proficiency level for Teamwork is 4');

        var comptable = document.getElementById('execcomptable');

        comptable.rows[4].cells[3].innerHTML = '4';
        comptable.rows[4].cells[5].innerHTML = '80%';
    }else{
        document.getElementById("answercom").setAttribute("data-dismiss","#");
        alert("Please answer all the question provided to get your score. Thank you.");
        return false;
    }

}

function computeselfimprovementExec(){
    /*Group each of the question possible answers*/

    var question1 = document.getElementsByName("selfQ1");
    var answer1 = 0;
    for(i=0;i<question1.length;i++){
        if(question1[i].checked){
            answer1++;
            break;
        }
    }

    var question2 = document.getElementsByName("selfQ2");
    var answer2 = 0;
    for(i=0;i<question2.length;i++){
        if(question2[i].checked){
            answer2++;
            break;
        }
    }

    var question3 = document.getElementsByName("selfQ3");
    var answer3 = 0;
    for(i=0;i<question3.length;i++){
        if(question3[i].checked){
            answer3++;
            break;
        }
    }

    if(answer1 && answer2 && answer3){

        /*When any of the question is lacking answer, prompt for answer, if answered display score an proficiency level*/

        document.getElementById("answerself").setAttribute("data-dismiss","modal");
        alert('Your Self Improvement or Motivation Score is 80%. Your Proficiency level for elf Improvement or Motivation is 4');

        var comptable = document.getElementById('execcomptable');

        comptable.rows[5].cells[3].innerHTML = '4';
        comptable.rows[5].cells[5].innerHTML = '80%';
    }else{
        document.getElementById("answerself").setAttribute("data-dismiss","#");
        alert("Please answer all the question provided to get your score. Thank you.");
        return false;
    }

}

function computesupervisoryExec(){

    /*Group each of the question possible answers*/

    var question1 = document.getElementsByName("superQ1");
    var answer1 = 0;
    for(i=0;i<question1.length;i++){
        if(question1[i].checked){
            answer1++;
            break;
        }
    }

    var question2 = document.getElementsByName("superQ2");
    var answer2 = 0;
    for(i=0;i<question2.length;i++){
        if(question2[i].checked){
            answer2++;
            break;
        }
    }

    var question3 = document.getElementsByName("superQ3");
    var answer3 = 0;
    for(i=0;i<question3.length;i++){
        if(question3[i].checked){
            answer3++;
            break;
        }
    }


    if(answer1 && answer2 && answer3){

        /*When any of the question is lacking answer, prompt for answer, if answered display score an proficiency level*/

        document.getElementById("answersuper").setAttribute("data-dismiss","modal");
        alert('Your Supervisory Skills Score is 40%. Your Proficiency level for elf Improvement or Motivation is 2');

        var comptable = document.getElementById('execcomptable');

        comptable.rows[6].cells[3].innerHTML = '2';
        comptable.rows[6].cells[5].innerHTML = '40%';
    }else{
        document.getElementById("answersuper").setAttribute("data-dismiss","#");
        alert("Please answer all the question provided to get your score. Thank you.");
        return false;
    }

}

function computeprojectmgmtExec(){

    /*Group each of the question possible answers*/

    var question1 = document.getElementsByName("proQ1");
    var answer1 = 0;
    for(i=0;i<question1.length;i++){
        if(question1[i].checked){
            answer1++;
            break;
        }
    }

    var question2 = document.getElementsByName("proQ2");
    var answer2 = 0;
    for(i=0;i<question2.length;i++){
        if(question2[i].checked){
            answer2++;
            break;
        }
    }

    var question3 = document.getElementsByName("proQ3");
    var answer3 = 0;
    for(i=0;i<question3.length;i++){
        if(question3[i].checked){
            answer3++;
            break;
        }
    }

    if(answer1 && answer2 && answer3){

        /*When any of the question is lacking answer, prompt for answer, if answered display score an proficiency level*/

        document.getElementById("answerpro").setAttribute("data-dismiss","modal");
        alert('Your Project Management Score is 60%. Your Proficiency level for elf Improvement or Motivation is 3');

        var comptable = document.getElementById('execcomptable');

        comptable.rows[7].cells[3].innerHTML = '3';
        comptable.rows[7].cells[5].innerHTML = '60%';
    }else{
        document.getElementById("answerpro").setAttribute("data-dismiss","#");
        alert("Please answer all the question provided to get your score. Thank you.");
        return false;
    }



}

/*End Computing score Executive*/