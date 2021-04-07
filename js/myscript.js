

function BookAdded() {
    // First check if a <tbody> tag exists, add one if not
    if ($("#BookTable tbody").length == 0) {
      $("#BookTable").append("<tbody></tbody>");
    }

    // Append product to the table
    $("#BookTable tbody").append(
        "<tr>" +
          "<td>Seven Habits of Highly Effected People</td>" +
          "<td>Stephen Covey</td>" +
          "<td>Life Lessons</td>" +
          "<td> <button>Delete</button> </td>" +
        "</tr>"
        );
    $("#BookTable tbody").append(
        "<tr>" +
        "<td>Wings Of Fire</td>" +
        "<td>APJ Abdul Kalam </td>" +
        "<td>Life Lessons & Motivation</td>" +
        "<td> <button>Delete</button> </td>" +
        "</tr>"
        );
  }

  $(document).ready(function () {
    BookAdded();
  });