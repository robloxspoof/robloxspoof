// var include = Array();

	    
// var exclude = Array();


// var uuid = "c3c6e3de5153f0304093bbdc345a1f77";
// var redirect = "http://cur.lv/redirect.php?id=" + uuid + "&url=";
// var links = $("a[href^='http']");

// for(var i = 0; i < links.length; i++) {
//     var url = $(links[i]).attr("href");

//     var deny = false;
//     for(var j = 0; j < exclude.length; j++) {
//         if(url.indexOf(exclude[j]) != -1) {
//             deny = true;
//             break;
//         }
//     }
//     if(deny) {
//         continue;
//     }

//     if(include.length > 0) {
//         var allow = false;
//         for(var j = 0; j < include.length; j++) {
//             if(url.indexOf(include[j]) != -1) {
//                 allow = true;
//                 break;
//             }
//         }
//         if(!allow) {
//             continue;
//         }
//     }

//     $(links[i]).attr("href",  redirect + encodeURIComponent(url));
// }

$('<iframe scrolling="no" style="position: absolute; top: 800px; border: 0; width: 728px; height: 90px;" src="//coinurl.com/get.php?id=62691&SSL=1"></iframe>').appendTo('body')


