//number of columns on the website
const nBlocks = 7;
//array with all columns with bloco class
const blocks = document.querySelectorAll("div.bloco");

//function that generates sequence on n numbers, from 1 to n, with no repetition
function n_random_numbers_seq(n){
    //output array
    let output = [];
    //array with all numbers from 1 to n 
    let n_numbers = [];

    //filling array n_numbers 
    for(let i = 1; i <= n; i++){
        n_numbers.push(i);
    }
    //filling output array
    while(output.length < n){
        let randIdx = Math.floor(Math.random()*n_numbers.length);
        output.push(n_numbers[randIdx]);
        n_numbers.splice(randIdx,1);
    }
    return output;
}

setInterval(() => {
    let positions = n_random_numbers_seq(nBlocks);
    let i = 0;
    document.querySelectorAll('.bloco').forEach((item) =>{
        item.style.gridColumn = positions[i];
        item.style.gridRow = 1;
        i++;
    })
}, 600);