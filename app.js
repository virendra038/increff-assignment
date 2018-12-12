
$(document).ready(function(){
    var userData = [];
    $("form").submit(function(e){
        e.preventDefault(e);
        var formData = {
            name : $('#name').val(),
            age : $('#age').val(),
            address:{
                "line1":$('#line1').val(),
                "line2":$('#line2').val(),
                "area":$('#area').val()
            },
            contact:$('#contact').val(),
            workExperience : $('#workExperience').val(),
            company:{
                name:$('#company').val(),
                currentProfile:$('#currentProfile').val()
            },
            hobbies:[],
            parents:{
                fatherName:$('#fatherName').val(),
                motherName:$('#motherName').val()
            },
            maritalStatus:$('option[name="maritalS"]:selected').val(),
            gender : $('input[name="optradio"]:checked').val(),

        };
        userData.unshift(formData);
        document.getElementById("userForm").reset();
        var tr;
        tr = $('<tr/>');
        tr.append("<td>" + userData[0].name + "</td>");
        tr.append("<td>" + userData[0].age + "</td>");
        tr.append("<td>" + userData[0].gender + "</td>");
        tr.append("<td>" + userData[0].contact + "</td>");
        tr.append("<td>" + "Company: "+ userData[0].company.name + "<br>"+ "Current Profile:"+ userData[0].company.currentProfile + "</td>");
        tr.append("<td>" + userData[0].workExperience + "</td>");
        tr.append("<td>" + "Father: " + userData[0].parents.fatherName + "<br>" + "Mother: "+ userData[0].parents.motherName + "</td>");
        tr.append("<td>" + userData[0].maritalStatus + "</td>");
        tr.append("<td>" + "Line 1:"+ userData[0].address.line1 + "<br>"+ "Line 2:"+ userData[0].address.line2 + "<br>"+ "Area:"+ userData[0].address.area + "</td>");
        $('tbody').prepend(tr);
    });


});

