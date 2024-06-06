// definig a function for finding the grade of the student
function getResult()
{
    let hm,cm,jm,bm,tot,avg,grd;  //local vars
    //data coll
    hm=+html.value
    cm=+css.value
    jm=+js.value
    bm=+bs.value
    //callculation
    tot = hm+cm+jm+bm
    avg = tot/4
    //grade
    if (hm>33 && cm>33 && jm>33 && bm>33)
        {
            //passed
            grd = avg>=90?"A+":avg>=80?"A":avg>=70?"B+":avg>=60?"B":avg>=50?"C+": "C"  
        }
    else{
            grd = "Fail"
    }
    //displaying result
    total.value = "Total Marks  :"+tot;
    average.value = "Average  :"+avg;
    grade.value = "Grade  :"+grd; 
}