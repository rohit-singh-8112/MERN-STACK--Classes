function step1(callback){
  // console.log("Step 1.1 completed");
    setTimeout(() => {
        console.log("Step 1 completed");
       callback();
    }, 3000);
     
}
function step2(callback){
  // console.log("Step 2.1 completed");
    setTimeout(() => {
        console.log("Step 2 completed");
       callback();
    }, 2000); 
     
}
function step3(callback){
  // console.log("Step 3.1 completed");
    setTimeout(() => {
        console.log("Step 3 completed");
      callback();
    }, 1000);
    
}
step1(() => {
    step2(() => {
        step3(() => { 
            console.log("All steps completed");
        });
    });     
}); 