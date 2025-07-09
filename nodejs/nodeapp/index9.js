import bcrypt from 'bcrypt';


// we need to use await as it returns a promise
const hasedpw= await bcrypt.hash(Password , 10);
const hasspawd2 = bcrypt.hashSync(Password, 10);



// compare the password
compareSync(password,hashpw);

const rounds = bcrypt.getRounds(hashedPwd);
console.log(rounds); // 10

const salt = await bcrypt.genSalt(10);
const hash = await bcrypt.hash("pass1234", salt);

