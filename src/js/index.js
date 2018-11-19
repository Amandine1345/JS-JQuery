import moment from "moment";
console.log("Bienvenue dans WebPack!");
console.log(moment().startOf('day').fromNow());
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));