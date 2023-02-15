
var courseName=document.getElementById('courseName');
var courseCategory=document.getElementById('courseCategory');
var coursePrice=document.getElementById('coursePrice');
var courseDescription=document.getElementById('courseDescription');
var courseCapacity=document.getElementById('courseCapacity');
var addbtn=document.getElementById('click');
var data=document.getElementById('data')
var courses=[]

addbtn.onclick=function(event){
event.preventDefault();
    var course = {
//key : value //Attributes for object course
courseName:courseName.value,
courseCategory:courseCategory.value,
coursePrice:coursePrice.value,
courseDescription:courseDescription.value,
courseCapacity:courseCapacity.value
    }
    courses.push(course)
    clearInputs()
}

function clearInputs(){
    courseName.value=''
    courseCategory.value=''
    coursePrice.value=''
    courseDescription.value=''
    courseCapacity.value=''
}


function displayData(){

var result=''
for(i=0;i<courses.length;i++){
    result+=
    `
    <tr>
        <td>${i}</td>
        <td>${courses[i].courseName}</td>
        <td>${courses[i].courseCategory}</td>
        <td>${courses[i].coursePrice}</td>
        <td>${courses[i].courseDescription}</td>
        <td>${courses[i].courseCapacity}</td>
        <td>${courses[i].}</td>
        <td>${courses[i].}</td>
                    </tr>
                    `
}



}