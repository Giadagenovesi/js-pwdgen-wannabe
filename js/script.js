// Chiedere all'utente il suo nome, il suo cognome e il suo colore preferito e generare una password sicura


// Chiedere il nome dell'utente
const userName = prompt ("Come ti chiami?");
console.log(userName, typeof userName);

// Chiedere il cognome dell'utente
const userSurname = prompt ("Qual è il tuo cognome?");
console.log(userSurname, typeof userSurname);

// Chiedere il colore preferito dell'utente
const userFavoriteColor = prompt ("Qual è il tuo colore preferito?");
console.log(userFavoriteColor, typeof userFavoriteColor);

// Generare la password: unire nome, cognome, colore preferito dell'utente e numero 21
const password = `${userName}${userSurname}${userFavoriteColor}21`;
console.log(password, typeof password);


// Preparare il messaggio con il risultato
const message = `La tua password è ${password}`;
console.log(message, typeof message);

// Stampare il messaggio
document.getElementById('generated-pw').innerHTML = message;
