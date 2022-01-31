$(document).ready(function(){
        $("#intro").show();
        $("#results").hide();

        for(var i=1; i<=5; i++) 
        {
            $("#question"+i).hide();
            $(".mybtn").attr('disabled',true);
        }
        
        $("#startAgain").attr('disabled',false);

        $("#introbtn").click(function(){
            $("#intro").slideToggle(1000);
            $("#question1").slideToggle(1000);
        });

    });

function toggleVisibility(question1,question2)
{
    $(question1).slideToggle(1000);
    $(question2).slideToggle(1000);
}

// Hide and display different divs when respective buttons are clicked
$(".mybtn").click(function(){
    var parentID=this.parentNode.parentNode.id;

    if(parentID=="question1")
        toggleVisibility("#question1","#question2");
    else if(parentID=="question2")
        toggleVisibility("#question2","#question3");
    else if(parentID=="question3")
        toggleVisibility("#question3","#question4");
    else if(parentID=="question4")
        toggleVisibility("#question4","#question5");
    else if(parentID=="question5")
        toggleVisibility("#question5","#results");
    else if(parentID=="results")
        toggleVisibility("#intro","#results");
});

// Save data in key-value pair and enable button when radio button is selected.
$('input[name^="question"]').click(function(){
   $("div").data($(this).attr('name'),$(this).val());
   var prtID=$(this).parents(".QueContainer").attr('id');
   $("#"+prtID).find(".mybtn").attr('disabled',false);
});

// Calculate Result
$("#finishBtn").click(function(){

    var key=[2,3,2,4,3];
    var count=0;

    for(i in key)
    {
        if(key[i]==$("div").data("question"+(parseInt(i)+1)))
            count++;
    }

    $("#quizScore").html("Your score is "+count+" out of 5.");
});

// Reset all radio buttons before starting quiz again.
$("#introbtn").click(function(){
    $(":radio").prop('checked',false);
});