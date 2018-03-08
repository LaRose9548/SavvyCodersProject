let companyName = "";
let companyAddress = "";
let companyNumber = "";

const addSubjectSpecificHTML = (subject) => {
  let resultStr = "";

  switch (subject) {
    case "professional":
      resultStr +=
        '<table>\
          <tr>\
            <td align="left">Company Name: </td>\
            <td align="right">\
            <input id="companyName" type="text" name="company"\
             placeholder="Company Name" value="' + companyName + '"\
             size="52" required>\
            </td>\
          </tr>\
          <tr>\
            <td align="left">Mailing Address: </td>\
            <td align="right">\
            <input id="companyAddress" type="text" name="address"\
             placeholder="Mailing Address" value="' + companyAddress + '"\
             size="52" required>\
            </td>\
          </tr>\
          <tr>\
            <td align="left">Phone Number: </td>\
            <td align="right">\
            <input id="companyNumber" type="text" name="number"\
             placeholder="Phone Number" value="' + companyNumber + '"\
             size="52" required>\
            </td>\
          </tr>\
        </table>';
      break;
    case "personal":
      // Saving current values for company name and Address
      // in case of switching back to Professional
      let coName = $("#companyName");
      let coAddress = $("#companyAddress");
      let coNumber = $("#companyNumber");
      companyName = coName[0].value;
      companyAddress = coAddress[0].value;
      companyNumber = coNumber[0].value;
      break;
    default:
      console.log("Nothing selected.");
  }

  // Outputs the resultStr for data requesting/capturing
  $("#subjectSpecific").html(resultStr);
}

// Clicking Submit starts it all off :D
$( "#radioSelector" ).on( "click", function ( event ) {
  var data = $( event.target ).serializeArray(); // Parsing form info to data obj

console.log(data[0].value);

  addSubjectSpecificHTML (data[0].value);
});
