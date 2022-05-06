const bcrypt = require("bcrypt");
const { logger } = require("./LoggerUtil");
const saltRounds = 10;

async function saltPw(password) {
  const pwHash = await  bcrypt.genSalt(saltRounds).then(salt => bcrypt.hash(password,salt)).then(hash=>hash).catch(err => logger(err));

return pwHash;
//   bcrypt.genSalt(saltRounds, (err, salt) => {
//     try {
//         bcrypt.hash(password,salt, (err,hash)=>{

//         });
//     } catch (err) {
//       logger(err);
//     }
//   });
}

module.exports = {
  saltPw,
};
