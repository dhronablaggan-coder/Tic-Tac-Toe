let ground = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let dabba = document.querySelector(".dabba");
let para = document.querySelector("#para");
let new_game = document.querySelector("#new_game");
let draw = document.querySelector("#draw");


let turn = true; //player turn - playerX or playerO
let count = 0 ; // count draw 

let win_patterns = [[0,1,2] , [3,4,5] , [6,7,8] , [0,3,6] , [1,4,7] , [2,5,8] , [0,4,8] , [2,4,6]];


let resetbtn =  () => {
    turn = true;
    count = 0;
    enablegrounds();
    dabba.classList.add("hide");
    // draw.classList.add("visible");


}


ground.forEach((box) => {
    box.addEventListener("click" , () => {
        if(turn){
            box.innerText ="O" //playerO chal dega to playerX ki baari aa jae gi 
            

            box.disabled = true;
        turn = false;
        }else{
            box.innerText="X" //playerX jab chal dega to baari playerO ki aa jae gi 
            box.disabled = true;
            turn = true;
        }

        count++;

        let iswinner = checkwinner();
        if(count === 9 && !iswinner) {
            gamedraw();
        }
    });
});


const gamedraw = () => {  //draw ki condition 
    para.innerText ="This Match is DRAW";
    dabba.classList.remove("hide");
    disablegrounds();
};




let disablegrounds = () => {
    for(let grounds of ground) {
        grounds.disabled = true;
    }
};

let enablegrounds = () => {
    for(let grounds of ground) {
        grounds.disabled= false;
        grounds.innerText = ""; 
    }
};



let endwin = (winner) => {
    para.innerText = `congrats '${winner}' you are a winner `
    dabba.classList.remove("hide");
    disablegrounds();

}       





let checkwinner = () => {
    for( let patterns of win_patterns ) {
        
            let position1 = ground[patterns[0]].innerText;
            let position2 = ground[patterns[1]].innerText;
            let position3 = ground[patterns[2]].innerText;


            if(position1!= "" && position2!= "" && position3!= "") {
                if(position1===position2 && position2===position3) {
                    endwin( position1);
                    }
                }
            }
    }

    // let filled_box = true;
    // for(let box of ground) {
    //     if(box.innerText === "") {
    //         filled_box = false;  
    //     }
    // }
    // if(filled_box && !iswinner) {
    //     draw.classList.remove("visible");
    //     draw.innerText = "Match is DRAW";
    // };



    new_game.addEventListener("click", resetbtn ); 
    reset.addEventListener("click", resetbtn );