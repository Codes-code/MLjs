  //var dpos;var bnce;var size;var BktLbl;
  const outputs=[];

function onScoreUpdate(dropPosition, bounciness, size, bucketLabel) {
  // Ran every time a balls drops into a bucket
  //document.write(dropPosition,"--",bounciness,"--", size,"--", bucketLabel)
  const temp=[dropPosition, bounciness, size, bucketLabel];
  outputs.push(temp);
  //console.log(dropPosition+"-"+bounciness+"-"+size+"-"+bucketLabel);
  //console.log(outputs);
}

function runAnalysis() {
  
  // Write code here to analyze stuff
  //console.log(outputs[0]);
  /*const values=[];

  for(var i=0; i<outputs.length; i++)
  {
    var a=outputs[i][0];
    var b=outputs[i][1];
    var c=outputs[i][2];
    var d=outputs[i][3];

    a=a/794;
    c=c/30;
    a=(a+b+c)/3;
//found everything in %age. then averaged it all.
//then took the ratio of this average with the final box.
//and put it in k.
    var k=a/d;
    values.push(k);

}
//took average of all the k values. now i have a ratio. i need a big dataset. 

var sum=0;
for(var i=0; i<values.length; i++){
sum=sum+values[i];
}
var avg=sum/(values.length);
  
//console.log(avg);
//PREDICTION BEGINS 
//if i use these values of 
//a,b,c 
//and i found out this avgk value. 
/then d prediction is the value i'llg et of the box whcih it lands in. 

console.log("---");
var a=492;a=a/794
 var b=0.53;
 var c=16;c=c/30;
 a=(a+b+c)/3;
 var avgk=1.28364;
var dprediction=a/avgk; 
console.log(dprediction);

*/

}
