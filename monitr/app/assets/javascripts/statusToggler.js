/**
 * Created by cecilbag on 09.03.16.
 */


function toggleOnOff(item) {
    var newStatus = "";
    if (item.className.match(/ on/)) {
        newStatus = "off";
        item.className =
            item.className.replace
            ( / (off|on)/ , ' ' + newStatus);
    } else {
        newStatus = "on";
        item.className =
            item.className.replace
            ( / (off|on)/ , ' ' + newStatus);
    }
    var JSONPayload = {};
    JSONPayload[item.id] = newStatus;
    console.log("Updating " + item.id + " to new status: " + newStatus);
    $.ajax({
        type: 'POST',
        url: "pages/" + item.id,
        data: JSON.stringify(JSONPayload),
        dataType: "json",
        contentType: "application/json" // not 100% sure here might need to google
    });
}