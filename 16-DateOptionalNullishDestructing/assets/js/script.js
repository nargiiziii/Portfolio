
// 1.Date obyektindən istifadə etməklə elə bir şərt yazın ki istifadəçi sayta daxil olanda daxil olduğu saata uyğun ona mesaj çıxarsın


// let rightNow = new Date();
// hour = rightNow.getHours();

// if (hour >= 5 && hour <= 12) {
//     console.log(`Sabahiniz xeyir, saat ${hour}dir`);
// } else if (hour >= 12 && hour <= 17) {
//     console.log(`Gununuz xeyir, saat ${hour}dir`);
// } else if (hour >= 12 && hour <= 17) {
//     console.log(`Axsaminiz xeyir, saat ${hour}dir`);
// } else {
//     console.log(`Geceniz xeyir, saat ${hour}dir`);
// }












// 2.Object Destructing istifadə edərək employee obyektindən name, department və contact (email, phone, emergencyContact sahələri daxil olmaqla) məlumatlarını əldə edin. 
// Həmçinin emergencyContact-də name və relation məlumatı əldə edin.



// const employee = {
//   name: "Farid Ali",
//   department: "Engineering",
//   contact: {
//     email: "farid.ali@example.com",
//     phone: "555-1234",
//     emergencyContact: {
//       name: "Far For",
//       relation: "Spouse"
//     }
//   }
// };


// const {name, department, contact} = employee;
// console.log(`name: "${name}", department: "${department}", email: "${contact.email}"`);

// const {email, phone, emergencyContact} = contact;
// console.log(`phone: "${phone}", emergencyContactName: "${emergencyContact.name}", emergencyRelation: "${emergencyContact.relation}"`);













// 3.Bu API-dən alınan məlumatları təmsil edir





// const apiResponse = [
//   {
//     id: 1,
//     title: "JavaScript əsasları",
//     author: "Səid Məmmədov",
//     stats: [2500, 150, 30]      // [oxunma, bəyənmə, şərhlər]
//   },
//   {
//     id: 2,
//     title: "Array Destructuring",
//     author: "Leyla Əliyeva",
//     stats: [1800, 220, 45]
//   },
//   {
//     id: 3,
//     title: "Müasir JavaScript",
//     author: "Tural Həsənli",
//     stats: [3200, 380, 70]
//   }
// ];


// // 1. Destructuring istifadə edərək ikinci məqalənin məlumatlarını çıxarın

// const [user1, user2, user3] = apiResponse;

// const {id, title, author, stats} = user2;
// console.log(id, title, author, stats); //konkret olaraq melumatlarini cixardim


// // 2. stats array-ini də destructuring edin (oxunma, bəyənmə, şərhlər)

// const [oxunma, beyenme, serhler] = user2.stats;
// console.log(oxunma, beyenme, serhler);


// // 3. Aşağıdakı formatda nəticəni console-a çıxarın:
// // "Məqalə: Array Destructuring, Müəllif: Leyla Əliyeva, 1800 oxunma, 220 bəyənmə, 45 şərh"

// console.log(`Meqale: ${user2.title}, Muellif: ${user2.author}, ${oxunma} oxunma, ${beyenme} beyenme, ${serhler} serh`);















// 4.Bu tapşırıqda hər iki operatoru birlikdə istifadə edin





// function renderUserProfile(userData) {

//   return {  
//     username: userData.user?.username ?? "qonaq",
//     avatar: userData.user?.profile?.avatar ?? "/default-avatar.png",
//     bio: userData.user?.profile?.bio ?? "melumat yoxdur",
//     email: userData.user?.contact?.email ?? "teyin edilmeyib",
//     premium: userData.user?.account?.premium ?? false
//   };
// }


// console.log(renderUserProfile({
//   user: {
//     username: "tahir2023",
//     profile: {
//       avatar: "/users/tahir.jpg",
//       bio: "JavaScript developer",
//     },
//     contact: {
//       email: "tahir@example.com"
//     },
//     account: {
//       premium: true
//     }
//   }
// }));


// console.log(renderUserProfile({
//   user: {
//     username: "aynur",
//     profile: {
//       bio: ""
//     },
//     contact: {}
//   }
// }));

// console.log(renderUserProfile({
//   user: {
//     username: null
//   }
// }));


// console.log(renderUserProfile({}));





