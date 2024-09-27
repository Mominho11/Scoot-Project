// Exercice 1 ---------------------------------------------------------------------------------------------------------------------------------

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (Math.random > 0.5) {
//             resolve('Success')
//         }
//         else {
//             reject("Failed")
//         }
//     }, 2000);
// });

// promise1
//     .then((success) => {
//         console.log(success);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// Exercice 2 ---------------------------------------------------------------------------------------------------------------------------------

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Success');
//     }, 2000);
// });

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('Failed');
//     }, 2000);
// });

// promise2
//     .then((promesse1) => {
//         console.log(promesse1);
//         return promise3;
//     })
//     .then((promesse2) => {
//         console.log(promesse2);
//     })
//     .catch((errPromesse2) => {
//         console.log(errPromesse2);
//     });

// Exercice 3 ---------------------------------------------------------------------------------------------------------------------------------

// const promise4 = Promise.resolve('Success1');
// const promise5 = Promise.reject('Failed1');
// const promise6 = Promise.resolve('Success2');

// Promise.all([promise4,promise5,promise6])
//     .then((reussite) => {
//         console.log(reussite); // si promise5 est réussi, ce message va s'afficher
//     })
//     .catch((echec) => {
//         console.log(echec); // s'affiche dés qu'une promesse est reject, en l'occurrence promise5
//     });

// Exercice 4 ---------------------------------------------------------------------------------------------------------------------------------

// const promise7 = Promise.resolve('Success 1');
// const promise8 = Promise.reject('Failed 1');

// async function checked(){
//     try{ // le try ne va gérer que les resolve, donc le cas echec1 dans le try ne sera pas executé (pas de consolelog echec1)
//         const reponse1 = await promise7; // reponse1 va reprendre la réponse du resolve donc Success1
//         console.log(reponse1);

//         const echec1 = await promise8;
//         console.log(echec1);
//     }
//     catch(erreur) {
//         console.error(erreur); // erreur va reprendre la reponse du reject, donc Failed 1
//     }
// }
// checked();

// Exercice 5 ---------------------------------------------------------------------------------------------------------------------------------

// const promise9 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (Math.random() > 0.5) {
//             resolve('Success')
//         }
//         else {
//             reject("Failed")
//         }
//     }, 2000);
// });

// const promise10 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (Math.random() > 0.5) {
//             resolve('Success')
//         }
//         else {
//             reject("Failed")
//         }
//     }, 2000);
// });

// async function Checked(){
//     try {
//         const reponse9 = await promise9;
//         console.log(reponse9);

//         const reponse10 = await promise10;
//         console.log(reponse10);
//     }
//     catch (erreur){
//         console.log(erreur);
//     }
// }

// Checked();


// Exercice 6 ---------------------------------------------------------------------------------------------------------------------------------

// const promise11 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (Math.random() > 0.5) {
//             resolve('Success')
//         }
//         else {
//             reject("Failed")
//         }
//     }, 2000);
// });

// const promise12 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (Math.random() > 0.5) {
//             resolve('Success')
//         }
//         else {
//             reject("Failed")
//         }
//     }, 2000);
// });

// async function chronoawait(){
    
//     console.time('Temps await');

//     try {
//         const result1 = await promise11;
//         console.log(result1);

//         const result2 = await promise12;
//         console.log(result2);
//     }
//     catch(erreur){
//         console.log(erreur);
//     }
//     console.timeEnd('Temps await');
// }

// async function chronoAll(){
//     console.time('Temps Promise All');

//     try {
//         const resultat = await Promise.all([promise11, promise12]); // Utilise await pour la promesse
//         console.log(resultat);
//     } catch (echec) {
//         console.log(echec);
//     }

//     console.timeEnd("Temps Promise All");
// }

// chronoawait();
// chronoAll();

// Exercice 7 ---------------------------------------------------------------------------------------------------------------

// const promise13 = new Promise ((resolve, reject) => {
//     setTimeout (() => {
//         resolve('Success');
//     }, 3000)
// });

// const promise14 = new Promise((resolve, reject) => {
//     setTimeout (() => {
//         reject('Failed');
//     }, 4000)
// });

// // -------- AUTRE POSSIBILITE --------------------------
// // Promise.race([promise13, promise14])
// //     .then((checked) => {
// //         console.log(checked)
// //     })
// //     .catch((noChecked) => {
// //         console.log(noChecked)
// //     });

// async function race(){
//     try {
//         const result1 = await Promise.race([promise13, promise14]);
//         console.log(result1);
//     }
//     catch (erreur){
//         console.log(erreur);
//     }
// }

// race();

// Exercice 8 ---------------------------------------------------------------------------------------------------------------------

// https://api.agify.io/?name=nicolas

// async function fetchAPI(){

//     try{
//         const request = await fetch("https://api.agify.io/?name=nicolas");
//         const resultat = await request.json();
//         console.log(resultat);
//     }
//     catch (erreur){
//         console.log(erreur);
//     }
// }

// fetchAPI();

// Exercice 9 -----------------------------------------------------------------------------------------------------------------------

// https://apilist.fun/collection/free-apis

