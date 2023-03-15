//Contoh Loopig For
for(let j = 0; j<5; j++){
    console.log(`Ini Indeks ke ${j}`);
}

//Contoh looping do-while
let i=1;
do{
    console.log(`Ini urutan ke ${i}`);
    i+=1;
}while(i<5);

//Contoh Looping While
let k = 0;

while(k<5){
    console.log(`Iterasi ke ${k}`);
    k++;
}

//Contoh Loop Control Break
for(let l = 0; l<5; l++){
    if(l==3){
        break;
    }
    console.log(`Ini Indeks ke ${l}`);
}

//Contoh Loop Control Continue
for(let m = 0; m<5; m++){
    if(m==3){
        continue;
    }
    console.log(`Ini Indeks ke ${m}`);
}