/**
 * Created by cecilbag on 09.03.16.
 */
function toggleHeater(item) {
    if (item.className.match(/(?:^|\s)on(?!\S)/)) {
        item.className =
            item.className.replace
            ( /(?:^|\s)on(?!\S)/g , ' off');
        $.ajax({
            type: 'POST',
            url: "pages/heater",
            data: JSON.stringify({
                "heater":"off"
                }),
            dataType: "json",
            contentType: "application/json" // not 100% sure here might need to google
        });
    } else {
        item.className =
            item.className.replace
            ( /(?:^|\s)off(?!\S)/g , ' on');
        $.ajax({
            type: 'POST',
            url: "pages/heater",
            data: JSON.stringify({
                "heater":"on"
            }),
            dataType: "json",
            contentType: "application/json" // not 100% sure here might need to google
        });
    }
}