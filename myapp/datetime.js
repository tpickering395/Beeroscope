require.config({
    paths:{
       'moment':'node_modules/moment',
    },
 });
 require(['moment'], function (moment) {
    moment.locale('fr');
    var a = moment().format("LLLL");
    document.getElementById("datedisplay").innerHTML = a;
 });