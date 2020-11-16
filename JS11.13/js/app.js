	
// let pazadas = new Promise(function(resolve, reject) {
//     kompoKaina = 20000;
//     santaupos = 10000;
//     if (santaupos > kompoKaina) {
//         resolve({
//             brand: "MacBook",
//             model: "Pro"
//         });
//     } else {
//         reject("Neturi pakankamai pinigu. Dirbk toliau");
//     }
// });pazadas.then(function(value) {
//     console.log("Pagaliau nusipirkau nauja kompa ", JSON.stringify(value));
// });pazadas.catch(function(reason) {
//     console.log("Negaliu nusipirkti kompo, nes ", reason);
// });pazadas.finally(function() {
//     console.log(
//         "Vistiek tapsiu geru programuotoju"
//     );
// });


function Data(email,userName,phone,userId){
   this.email=email,
   this.userName=userName,
   this.phone=phone,
   this.userId=userId,
   this.showData = function(){
       console.log("Data: "+email+" "+userName+" "+phone+" "+userId);
   };
}

info = new Data("asdas@email.com","Vardenis Nevardenis", 81212412,"IDjdnf51542");

info.showData();