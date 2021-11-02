let args = process.argv.slice(2);

for(time of args){
   
  setTimeout(() => {
    if(time < 0){
      return;
    }
    if(isNaN(time)){
      return;
    }
    process.stdout.write('\x07');
  }, time * 1000);
  
};




