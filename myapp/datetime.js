require.config({
    paths:{
       'moment':'node_modules/moment/moment.js',
    },
 });
 require(['moment'], function (moment) {
    var a = moment().format("LLLL");
    document.getElementById("datedisplay").innerHTML = a;
 });