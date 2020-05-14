/*
// Original code
var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js';
document.getElementsByTagName('head')[0].appendChild(script);
var docereeJq = jQuery;
*/

/*
//Varun's suggestion
var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

var noConflict = document.createElement('script');
noConflict.innerText = 'var docjq = jQuery.noConflict();';
document.getElementsByTagName('head')[0].appendChild(noConflict);*/

var script = document.createElement('script');
var docereeJq;
if (!jQuery) {
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js';
    document.getElementsByTagName('head')[0].appendChild(script);
    var noConflict = document.createElement('script');
    noConflict.innerText = 'docereeJq = jQuery.noConflict();';
    document.getElementsByTagName('head')[0].appendChild(noConflict);    
} else {
    docereeJq = jQuery;
}

console.log(jQuery.fn.jquery); 
console.log(docereeJq.fn.jquery); 
var DocereeAdCode = "DOC_";
var banCode = "_D0(banner";
var listOfDocereeAdIds = [];
var requestedAdIds = [];
var orginalRequestedAdIds = [];
(function() {
    try {
        var id = docCont.contet_id;
        var element = document.getElementById(id);
        var type = docCont.content_type;
        var pAssetSizeDim = docCont.content_sizes;

        if (document.cookie.split(';').filter((item) => item.trim().startsWith('D0CIDS_=')).length) {
            var existed = document.cookie.replace(/(?:(?:^|.*;\s*)D0CIDS_\s*\=\s*([^;]*).*$)|^.*$/, "$1");
            var arr = JSON.parse(existed);
            requestedAdIds = [];
            requestedAdIds = arr;
            requestedAdIds.push({
                'Id': id,
                'Dimension': pAssetSizeDim
            });
            requestedAdIds = requestedAdIds.filter((v,i,a)=>a.findIndex(t=>(t.Id === v.Id))===i)
            var json_str = JSON.stringify(requestedAdIds);
            document.cookie = 'D0CIDS_=' + json_str;
        } else {
            var arr = [{
                'Id': id,
                'Dimension': pAssetSizeDim
            }];
            var json_str = JSON.stringify(arr);
            requestedAdIds = [];
            requestedAdIds = arr;
            document.cookie = "D0CIDS_=" + json_str;
        }
        docereeJq(document).ready(function() {

            var ids = document.querySelectorAll('[id]');
            listOfDocereeAdIds = [];
            Array.prototype.forEach.call(ids, function(el, i) {
                // "el" is your element
                if ((listOfDocereeAdIds.indexOf((el.id).split(DocereeAdCode)[0]) === -1) && (el.id).includes(DocereeAdCode))
                    listOfDocereeAdIds.push((el.id));
            });
            if (requestedAdIds.length != listOfDocereeAdIds.length)
                return;
            else if (requestedAdIds.length == listOfDocereeAdIds.length) {
                orginalRequestedAdIds = requestedAdIds;
                requestedAdIds = [];
                /*To get HCP details Dynamic script will ADD and then it will trigger for AD request*/
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        var JS = document.createElement('script');
                        JS.text = xhttp.responseText;
                        document.body.appendChild(JS);
                        if (type == "img")
                            getDynamicImage(id, pAssetSizeDim);
                    }
                };
                xhttp.open("GET", baseURl + "/render/getHCPScript?id=" + id, true);
                xhttp.send();
                /*End of HCP Dynamic script insertion */
            }
        });
        
        if (element) {
            var currentTarElementId = ((type == "img") ? id + banCode : id + vidCode);
            var clickCount = 0;
            element.addEventListener("click", function() {
                typeOfAction("CPC", id, document.getElementById(currentTarElementId).getAttribute('name'), (++clickCount));
            });
        }
    } catch (err) {
        logging(err.message);
    }
})();
function getDynamicImage(elementId, contentSize) {
    document.cookie = "D0CIDS_=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    if (typeof getHCPFromPublisherPage === "function") {
        try {
            getHCPFromPublisherPage(function(hcpUser) {
                var hcpLoggedInUser = hcpUser;
                Array.prototype.forEach.call(orginalRequestedAdIds, function(el, i) {
                    elementId = el.Id;
                    contentSize = el.Dimension;
                    var query = 'id=' + elementId + '&size=' + contentSize + '&publisherDomain=' + document.domain + '&pubRequestedURL=' + encodeURIComponent(document.URL) + '&loggedInUser=' + hcpLoggedInUser;
                    var xhttp = new XMLHttpRequest();
                    docereeJq('[id]').each(function() {
                        var ids = docereeJq('[id="' + this.id + '"]');
                        if (elementId === this.id && ids.length == 1) { //It will check duplicate HTML Id's exist or not		   
                            xhttp.onreadystatechange = function() {
                                if (this.readyState == 4) { //It will checck duplicate scripts with same Id's && !$('#'+elementId)[0].hasChildNodes()
                                    if (this.status == 200) {  
                                        var responseJSONObj = JSON.parse(xhttp.responseText);
                                        if (responseJSONObj && responseJSONObj.newPlatformUid) {
                                            var cookieContent = {platformUid: responseJSONObj.newPlatformUid, version: responseJSONObj.version};
                                            document.cookie = "_docereeId=" + JSON.stringify(cookieContent) + ';path=/';
                                        } else {
                                            //$('#'+elementId).append("<a id='"+elementId+banCode+"' name='"+responseJSONObj.CBID+"'  href='"+responseJSONObj.ctaLink+"'  target='blank'><img onload='tracking("+idForImage+")' src='data:image/gif;base64, "+responseJSONObj.sourceURL+"'></a>"); 
                                            var navigationCustomURL = (responseJSONObj.ctaLink.includes("http:") || responseJSONObj.ctaLink.includes("https:")) ? responseJSONObj.ctaLink : ('//' + responseJSONObj.ctaLink);
                                            document.getElementById(responseJSONObj.DIVID).innerHTML = "<a id='" + responseJSONObj.DIVID + banCode + "' name='" + responseJSONObj.CBID + "'  href='" + navigationCustomURL + "'  target='blank'><img onload='tracking(" + responseJSONObj.DIVID + ")' src='" + responseJSONObj.sourceURL + "'></a>";
                                        }
                                    } else{
                                        logging("Exception : getImage API,  "+ xhttp.responseText);
                                    }
                                }
                            };
                            xhttp.open("GET", baseURl + "/render/getImage?" + query, true);
                            xhttp.send();
                        }
                    });
                });
            });
        } catch (error) {
            logging(error);
        }
    } else {
        logging('getHCPFromPublisherPage function is not yet defined for ' + elementId);
    }
}

function typeOfAction(listenerType, adName, campId, nofClicks) {
    try {
        if (listenerType == "CPC" && nofClicks <= 1)
            UserAction(listenerType, adName, campId);
        else if (listenerType != "CPC")
            UserAction(listenerType, adName, campId);
    } catch (error) {
        logging(error)
    }
}

function UserAction(listenerType, adName, campId) {
    try {
        var xhttp = new XMLHttpRequest();
        var currentDataTime = new Date();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
            }
        };
        xhttp.open("POST", baseURl + "/render/saveDetail", true);
        //xhttp.setRequestHeader("Content-type", "JSON(application/json)");
        xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhttp.send(JSON.stringify({
            "publisherDomain": document.domain,
            "publisherACSID": adName,
            "advertiserCampID": campId,
            "typeOfEvent": listenerType,
            "dateInUTC": currentDataTime.toUTCString()
        }));
    } catch (error) {
        logging(error);
    }
}

function logging(details) {
    var xhttp = new XMLHttpRequest();
    var currentDataTime = new Date();
    xhttp.open("POST", baseURl + "/render/logExceptions", true);
    //xhttp.setRequestHeader("Content-type", "JSON(application/json)");
    xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhttp.send(JSON.stringify({
        "excDetails": currentDataTime.toUTCString() + ' : Path :' + window.location.origin + ' , ERROR : ' + details
    }));
}
var windowPrototype = {
    wdHeight: function() {
        try {
            var myHeight;
            if (typeof(window.innerWidth) == 'number') {
                //Non-IE
                myHeight = window.innerHeight;
            } else if (document.documentElement && (document.documentElement.clientHeight)) {
                //IE 6+ in 'standards compliant mode'
                myHeight = document.documentElement.clientHeight;
            } else if (document.body && (document.body.clientHeight)) {
                //IE 4 compatible
                myHeight = document.body.clientHeight;
            }
            return myHeight;
        } catch (error) {
            return 0;
        }
    },
    wdWidth: function() {
        try {
            var myWidth;
            if (typeof(window.innerWidth) == 'number') {
                //Non-IE
                myWidth = window.innerWidth;

            } else if (document.documentElement && (document.documentElement.clientWidth)) {
                //IE 6+ in 'standards compliant mode'
                myWidth = document.documentElement.clientWidth;

            } else if (document.body && (document.body.clientWidth)) {
                //IE 4 compatible
                myWidth = document.body.clientWidth;

            }
            return myWidth;
        } catch (error) {
            return 0;
        }
    }
}

function getScrollTop() {
    try {
        var ScrollTop = document.body.scrollTop;
        if (ScrollTop == 0) {
            if (window.pageYOffset)
                ScrollTop = window.pageYOffset;
            else
                ScrollTop = (document.body.parentElement) ? document.body.parentElement.scrollTop : 0;
        }
        return ScrollTop;
    } catch (error) {
        logging(error);
    }
}

function getElementTop(Elem) {
    try {
        if (document.getElementById) {
            var elem = document.getElementById(Elem);
        } else if (document.all) {
            var elem = document.all[Elem];
        }
        if (elem != null) {
            yPos = elem.offsetTop;
            tempEl = elem.offsetParent;
            while (tempEl != null) {
                yPos += tempEl.offsetTop;
                tempEl = tempEl.offsetParent;
            }
            return yPos;
        } else {
            return 0;
        }
    } catch (error) {
        logging(error);
    }
}

function tracking(elementId) {
    try {
        if (elementId) {
            var scrolltop = getScrollTop();
            var advZoneTop = getElementTop(elementId.id);
            if (advZoneTop > 0 && scrolltop + windowPrototype.wdHeight() > 1 && (scrolltop + windowPrototype.wdHeight()) > advZoneTop) {
                //send code tracking.
                UserAction('CPM', elementId.id, document.getElementById(elementId.id + banCode).getAttribute('name'));
            } else {
                setTimeout("tracking(" + elementId.id + ")", 1000);
            }
        }
    } catch (err) {
        logging(err);
    }
}