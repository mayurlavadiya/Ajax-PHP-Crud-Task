$(document).ready(function () {
    // Ajax request for insert data
    function showdata() {
        output = "";
        $.ajax({
            url: "display.php",
            method: "GET", // you can select GET or POST
            dataType: 'json',
            success: function (data) {
                // console.log(data); 

                if (data) {
                    x = data;
                } else {
                    x = "";
                }
                for (i = 0; i < x.length; i++) {
                    output += "<tr><td>" + x[i].id + "</td><td>" + x[i].name +
                        "</td><td>" + x[i].email + "</td><td>" + x[i].password +
                        "</td><td> <button class ='btn btn-primary btn-sm btn-edit'data-dd="
                        + x[i].id + ">Edit</button>&nbsp<button class ='btn btn-danger btn-sm btn-dlt' data-dd="
                        + x[i].id + ">Delete</button></td></tr>";
                }
                $("#tbody").html(output);
            },
        });
    }
    showdata();


    // Ajax request for insert data

    $('#btnadd').on('click', function (e) {
        e.preventDefault();
        // console.log("Hello");

        //----- declare variable -----
        let stdname = $("#nameid").val();
        let email = $("#emailid").val();
        let pwd = $("#passwordid").val();
        // console.log(stdname);

        //----- send data to server -----
        mydata = { name: stdname, email: email, password: pwd }; // create javascript object mydata
        // console.log(mydata);

        //----- call ajax -----
        $.ajax({
            url: "insert.php", // where we want to perfom
            method: "POST", // which method used for get data GET OR POST
            data: JSON.stringify(mydata), // convert text to string using this JSON function
            success: function (data) {
                // console.log(data);
                msg = "<div class='alert alert-dark mt-3'>" + data + "</div>"; // create target for msg 
                $("#msg").html(msg);
                $("#testform")[0].reset(); // for clear form after submitting once 
                showdata();
            },
        });
    });


    // Ajax Request for Delete

    $("#tbody").on("click", ".btn-dlt", function () {
        let id = $(this).attr("data-dd");
        // console.log(id);
        mydata = { dd: id };
        mythis = this;
        $.ajax({
            url: "delete.php",
            method: "POST",
            data: JSON.stringify(mydata),
            success: function (data) {
                if (data == 1) {
                    msg = "<div class='alert alert-dark mt-3'>Student data deleted successfully !</div>"; // create target for msg 
                    $(mythis).closest("tr").fadeOut(); //it easy method to reload the page without function call in earlier
                } else if (data == 0) {
                    msg = "<div class='alert alert-dark mt-3'>Student data unable to delete !</div>"; // create target for msg 
                }
                $("#msg").html(msg);

                // showdata(); 
                // when it is call it run whole the function, take the data from db and then run req part
            },
        });
    });


    // Ajax Request for Update Data
   
    $("#tbody").on("click", ".btn-edit", function (){
        let id = $(this).attr("data-dd");
        console.log(id);
        mydata
        
    });



});