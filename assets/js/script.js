var month={
    01:'JAN',
    02:'FEB',
    03:'MAR',
    04:'APR',
    05:'MAY',
    06:'JUN',
    07:'JUL',
    08:'AUG',
    09:'SEP',
    10:'OCT',
    11:'NOV',
    12:'DEC'
}

var color={
    Personal:"lightblue",
    work:"purple",
    school:"green",
    cleaning:"pink",
    other:"orange"
}

var category=document.getElementsByClassName('category');
function changeBackground()
{
    for(let i =0;i<category.length;i++)
    {
        if(category[i].innerText!="")
            category[i].style.background=color[category[i].innerText];
        else{
            category[i].style.display="none";
        }    
    }
}
changeBackground();

function arrangeDates()
{
    var dates=document.getElementsByClassName('date');
    var todays_date_string=new Date();
    var today_date=month[todays_date_string.getMonth()+1]+" "+String(todays_date_string.getDate()).padStart(2,'0')+","+todays_date_string.getFullYear();
    console.log(today_date);
    for(let i=0;i<dates.length;i++)
    {
        if(today_date==dates[i].innerText)
        {
            console.log('hello');
            console.log($('#TodaysTask').append($('.tasks').eq(i-dates.length).remove()));

                }
    }
}
arrangeDates();


var nightMode=$('#night-mode');
var bool=true;
nightMode.click(function(){
    if(bool)
    {
        $('#to-do-app').css("background","black");
        nightMode.html("<i class='far fa-sun'></i>");
        bool=!bool;
    }else{
        $('#to-do-app').css("background","white");
        bool=!bool;
        nightMode.html("<i class='fas fa-moon'></i>");
    }
});