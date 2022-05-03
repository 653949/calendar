'use strict'

const date=new Date(); // 現在の日時を取得
const year=date.getFullYear(); // dateから'年'の情報を'yaer'に代入
const month=date.getMonth()+1; // 同じく'月'の情報を'month'に代入 javaは0から数字を数えるので、+1
const firstDate=new Date(year,month -1,1); // 先ほど'month'+1したので'month'-1する
const firstDay=firstDate.getDay();
const lastDate=new Date(year,month,0);
const lastDayCount=lastDate.getDate();

let dayCount=1;
let createHtml='';

createHtml='<h2>' + year + '/' + month + '</h2>'
createHtml+='<table border="2">'+'<tr>'; // +=で足し合わせる

const weeks=['日','月','火','水','木','金','土'];
for(let i=0;i<weeks.length;i++){ // 'weeks.length'で変数'weeks'の要素の量を表す
    createHtml+='<td>'+weeks[i]+'</td>';
} // 'i'に日,月,火...と代入し、テーブルに表示
createHtml+='</tr>';

for(let n=0;n<6;n++){
    createHtml+='<tr>';
        for(let d=0;d<7;d++){
            if(n==0 && d<firstDay){
                createHtml+='<td></td>'
            }else if(dayCount>lastDayCount){
                createHtml+='<td></td>'
            }else{
                createHtml+='<td>'+dayCount+'</td>';
                dayCount++
            }
        }
    createHtml+='</tr>';
}
createHtml+='</table>'

document.querySelector('#calendar').innerHTML=createHtml;
console.log(createHtml);
