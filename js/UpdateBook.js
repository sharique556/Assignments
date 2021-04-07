function bookUpdate(){
    if($("#bookname").val() != null && 
       $("#bookname").val() != ''){
           //Add book to Table
           bookAddToTable();

           //Clear form fields
           formClear();

           //Focus to book name field
           $("#bookname").focus();
       }
}

//Add book to <table>
function bookToTbale() {
    //First check if a <tbody> tag exists , add one if not
    if ($("#BookTable tbody").length == 0) {
        $("#BookTable").append("<tbody></tbody>");
      }

      //Append book to the table
      $("#BookTable tbody").append(
          "<tr>" +
           "<td>" + $("#bookname").val() + "</td>" +
           "<td>" + $("#authorname").val() + "</td>" +
           "<td>" + $("#bookdetails").val() + "</td>" +
           "<td>" + $("#deletebutton").val() + "</td>" +
          "</tr>"
      );
}

//Clear from data
function formClear(){
    $("#bookname").val("");
    $("#authorname").val("");
    $("#bookdetails").val("");
    $("#deletebutton").val("");
}