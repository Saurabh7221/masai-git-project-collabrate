function checkprime(num) {
  for (let i = 1; i <= num; i++) {
    
    if (num % i == 0 ) {
      count =1;
    }
  }
  if (count==2){
    console.log(prime number)
  }else{
    console.log("not a prime number")
  }
}
checkprime(6);