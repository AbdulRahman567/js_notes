// let a = 4;
// let b = 5;
// console.log(a +=b);
// console.log(a-=b);
// console.log(a*=b);
// console.log(a/=b);
// console.log(a %= b);
// console.log(a**=b);


// console.log(a <= b);
// console.log(a >= b);
// console.log(a==b);
// console.log(a!=b);
// console.log(a < b);
// console.log(a > b);


// console.log(a < b && a==4);
// console.log(a > b || b==5) ;
// console.log(!(a <= b));


// let mode="Dar";
// let color=null;
// if(mode=="Dark"){
//     color="black";
// }else{
//     color="white";
// }
// console.log(color);


// let age=25;
// let result;
// result =  age >= 18? "adult" : "not adult";
// console.log(result);


//  let num=prompt("Enter a number : ");
// if(num%5==0){
//     console.log(true);
// }else{
//     console.log(false);
// }
        // let res=num%5==0? "true" : "false";
        // console.log(res);


// let marks=prompt("Enter your marks : ");
// let grade=null;
// if (marks>=90 && marks<=100) {
//     grade="A";
// }else if (marks>=70 && marks<=89) {
//     grade="B";
// }else if (marks>=60 && marks<=69) {
//     grade="C";
// }else if (marks>=50 && marks<=59) {
//     grade="D";
// }else if (marks>=0 && marks<=49) {
//     grade="F";
// }else{
//     console.log("Wrong input");
// }
// console.log(grade); 


//****************************   for loop******************/
// for(let i=0; i<5; i++){
//     console.log("maza aya",i);
// }
// let sum=0;
// for(let i=0;i<=5;i++){
//     sum=sum+i;
// }
// console.log("sum of first 5 numbers = ",sum);

//******************************DO WHILE************************** */
// let i=20;
// do{
//     console.log("value of i = ",i);
//     i++;
// }while(
//     i<=10
// );

/**************************    while ***************************/
// let i=0;
// while(i<=5){
//     console.log("hello!");
//     i++;
// }

/*****************For of loop  (FOR STRINGS AND ARRAYS) *********************/
// let str="hello bolo !";
// size=0;
// for(let i of str){
//     console.log("value of i = ",i);
//     size++;
// }
// console.log(size); 

//*************************  for in loop (for objects) **************/
// let student ={
//     name:"Ali",
//     clas:"Bsit",
//     cgpa:3.5,
//     ispas:true,

// };
// let i=2;
// for(i in student){
//     console.log("key =",i ,"value = ",student[i]);
// }

/************************     practice question    ********/
// let count=0;
// for(let i=1;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//         count++;
//     }
// }
// console.log("total value=",count);

/*********************   2nd question  ******************/
// let gameNo=5;
// let userNo=prompt("Enter number : ");
// while (userNo!=gameNo){
//     userNo=prompt("ypu enter wrong number...try again");
// }
// console.log("Wow!!! congratulates ");


// /*************    strings  **************/
// let str="funny lol";
// console.log(str.length);
// console.log(str[3]);


// /*******************    templet literals       *********/
// let specialString=`this is special string ,called templet literals ${1+2+3}`;
// console.log(specialString);
// let obj={
//     item:"pen",
//     price:10,
// };
// console.log("The cost of ", obj.item , " is ", obj.price , " rupees") ; //SIMPLE WAY
// let output=`the cost of ${obj.item} is  ${obj.price} rupees`;  //  ${} = string interpolation
// console.log(output);

// /********************escape character *******************/
// let str="how \n cute"; //next line
// console.log(str);  
// str="how \t cute"; //tab spaces
// console.log(str);
// str="how \t cute";
// console.log(str.length);  // \t are considered as single character


// /******************  string methods *******************/
// let str = "       My name is Abdul Rahman       ";
// console.log(str);
// console.log(str.toUpperCase());      //convert to upper case
// //str=str.toUpperCase();
// console.log(str);

// console.log(str.toLowerCase());      //convert to lower case

// console.log(str.trim());          //remove spaces from starting and ending 

// let nStr="Hello hello apna college";
// let a=" new string ";
// console.log(nStr.slice(2,5));      //last index not include
// console.log(nStr.slice(5));        //all character printed till last 

// console.log(nStr.replace("llo","w"));      //replace strings olny first time
// console.log(nStr.replaceAll("llo","w"));    //replace all string all time

// console.log(nStr.concat(a));      //concatenation
// console.log(nStr + a);            //same concatination and simple
// console.log("aoa",nStr + a);      // "aoa" string add at run time  
// console.log(nStr + a +123);       //numbers(123) add in string

// console.log(nStr.charAt(6));    //character at index



/*************************    practice questions 1     ******************/
// let name=prompt("Enter ypur name here : ");
// //console.log("Your user name is @",name,name.length);
// console.log("@" + name + name.length);

/***********************   Arrays      *************************/
// let marks=[34,54,23,45,23,34];
// console.log(marks);
// let name=["ali","ahmad","asad"];
// console.log(name);


// /***************************    practice question        ********************/
// let marks=[85,97,44,37,76,60];
// let sum=0;
// for (let i = 0; i < marks.length; i++) {
//         sum=sum + marks[i];
// }
// console.log("The average of marks : ",sum/marks.length);
// console.log(`The average of marks :${sum/marks.length}`);       //we can also write in this way

/**********   question 2        ********************/
// let price=[250,645,300,900,50];
// for (let i = 0; i < price.length; i++) {
//         price[i]-=price[i]/100*10;
// }
// for (let i = 0; i < price.length; i++) {
//         console.log(price[i]);
// }

/*******************     Array methods/functions       *******************/

//        push method (add items in the end of orignal array)
// let foodItems=["potato","tomato","lichi","apple"];
// console.log(foodItems);
// foodItems.push("banana","burger","pizza");
// console.log(foodItems);


//        unshift method (add item in the start of th orignal array)
// let foodItems=["potato","tomato","lichi","apple"];
// console.log(foodItems);
// foodItems.unshift("aalo")
// console.log(foodItems);



//         pop method (remove last items in the orignal array)
// let foodItems=["potato","tomato","lichi","apple"];
// console.log(foodItems);
// let delItem =foodItems.pop();
// console.log(foodItems);
// console.log("last item which is deleted : ",delItem);



//        shift method (remove first item in the orignal array)
// let foodItems=["potato","tomato","lichi","apple"];
// console.log(foodItems);
// let delItem =foodItems.shift();
// console.log(foodItems);
// console.log("last item which is deleted : ",delItem);


//            tostring (convert array to string)
// let foodItems=["potato","tomato","lichi","apple"];
// console.log(foodItems);
// console.log(foodItems.toString());


//             concate method (add two arrays)
// let marvelHeros=["spiderman","ironman","thor"];
// let dcHeros=["superman","batman"];
// let heros=dcHeros.concat(marvelHeros);
// console.log(heros);


//              slice method (for getting some piece from array)   don't change yhe orignal array
// let hero=["spiderman","ironman","thor","superman","batman"];
// console.log(hero.slice(1,3));  // 3 index item not include


//             splice method   change orignal array(add, remove , replace)
// let marks=[98,78,79,90,69];
// marks.splice(2,0,101);
// console.log(marks);


/************************    practice questions            ************** */
//let company=["bloomberg" , "microsoft" ,"uber" ,"google" ,"IBM", "netflix"]; 
// company.shift();          //remove first member
// console.log(company);

// company.splice(2,1,"OLA");       //replace uber with ola
// console.log(company);

// company.push("Amazone");        //add amazona at the end
// console.log(company);


/********************       functions               *********************/
// function fun(){
//         console.log("hello baby");
// }
// fun();

// function func(num1,num2) {
//         num3=num1+num2;
//         console.log(num3);
// }
// let a=4;
// let b=3;
// func(a,b);

// function sum(x,y){
//         s=x+y;
//         return s;
// }
// let val=sum(15,25);
// console.log(val);

//        arrow function
// const arrowSum=(a,b) => {
//         console.log(a+b);
// }
// arrowSum(3,5);
// const arrowMul=(a ,b) => {
//         console.log(a*b);
// }
// arrowMul(3,5);


/***********************     practice questions        **********************/
function vowels(str){
        for (const char of str) {
                if (char==="a"||char==="e"||char==="i"||char==="o"||char==="u") {
                        a++;
                }
                console.log(char);
        }
        console.log(a);
}
let a=0;
let sentence=prompt("Enter your string : ");
vowels(sentence);
