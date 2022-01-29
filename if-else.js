var dirary = 1000;
var laptop = 500;
var mobile = 300;
var pc = 1000;
var handCash = 1500;

// if( dirary > handCash){
//     console.log("ami diary akhn kinbo na");
// }else{
//     console.log("ami akhn kinbo");
// }
// if(laptop > mobile){
//     console.log("ami kinbo na");
// }else if(mobile < pc){
//     console.log("ami mobile kinbo");
// }else if(laptop < handCash){
//     console.log("ami laptop kinbo");
// }else{
//     console.log('ami gorib kinar taka nai');
// }

if((pc < handCash && mobile < dirary) || (pc > handCash && mobile > dirary)){
    console.log("nice ami sob kinte parbo");
}else{
    console.log("shit kisui kinte parlam na");
}