/**
 * @return {string}
 */
function GetUrlPath() {
    var urlPath;
    urlPath = window.location.pathname.split(".")[0].substring(1).split("/")[1];
    if (urlPath == "humidity") {
        return "humid"
    } else {
        return "temperature"
    }
}
urlPath = GetUrlPath();

// return everything after the question mark
/**
 * @return {string}
 */
function GetUrlParameter() {
    var idx = window.location.href.indexOf("?");
    if (idx < 0) return "";
    return window.location.href.substring(idx + 1);
}
urlParameter = GetUrlParameter();

/**
 * @return {string}
 */
function GetChartXml() {
    switch (urlParameter) {
        case "3h":
        case "48h":
        case "1w":
        case "1m":
        case "3m":
        case "1y":
        case "1yminmax":
            return "data/" + urlPath + urlParameter + ".xml";
    }
    return "data/" + urlPath + "24h.xml";
}

/**
 * @return {string}
 */
function GetChartTitle() {

    var type = "Temperatures";
    if (urlPath == "humid") {
        type = "Humidity"
    }
    switch (urlParameter) {
        case "3h":
            return type + " of the last 3 hours";
        case "48h":
            return type + " of the last 48 hours";
        case "1w":
            return type + " of the last week";
        case "1m":
            return type + " of the last month";
        case "3m":
            return type + " of the last 3 month";
        case "1y":
            return type + " of the last year";
        case "1yminmax":
            return "Min-Max " + type + " of the last year";
    }
    return type + " of the last 24 hours";
}
