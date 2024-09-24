mat=[
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

let x_turn=1;
let moves=0;

let score_x=0;
let score_o=0;

sx=document.getElementById("x");
so=document.getElementById("o");

sx.innerText=0;
so.innerText=0;

function win_x(){
    sx.innerText=++score_x;
    refresh();
}

function win_o(){
    so.innerText=++score_o;
    refresh();
}

function draw(){
    
}

function turn(b_id) 
{
    if(mat[b_id[0]-'0'][b_id[1]-'0']!=0)return 0;
    mat[b_id[0]-'0'][b_id[1]-'0']=x_turn;
    
    if(x_turn==1){
        // document.getElementById(b_id).innerText="X";
        // document.getElementById(b_id).firstElementChild.innerHTML="X";
        document.getElementById(b_id).firstElementChild.classList.add("cross");
    }
    else{
        // document.getElementById(b_id).innerText="O";
        // document.getElementById(b_id).classList.add("circle");
        // document.getElementById(b_id).firstElementChild.innerHTML="O";
        document.getElementById(b_id).firstElementChild.classList.add("circle");
    }
    x_turn*=-1;
    moves++;

    let win=Check();
    if(win==1){
        win_x();
    }
    else if(win==-1){
        win_o();
    }
    else if(moves==9){
        console.log("its a draw");
        refresh();
    }
}        

function Check()
{
    let count;
    for(let i=0;i<3;i++){
        count=0;
        for(let j=0;j<3;j++){
            count+=mat[i][j];
        }
        if(count==3)return 1;
        else if(count==-3)return -1;
    }
    for(let i=0;i<3;i++){
        count=0;
        for(let j=0;j<3;j++){
            count+=mat[j][i];
        }
        if(count==3)return 1;
        else if(count==-3)return -1;
    }
    
    count=0;
    for(let i=0;i<3;i++){
        count+=mat[i][i];
    }
    if(count==3)return 1;
    else if(count==-3)return -1;

    count=0;
    for(let i=0;i<3;i++){
        count+=mat[i][2-i];
    }
    if(count==3)return 1;
    else if(count==-3)return -1;

    return 0;
}

function refresh(){
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            mat[i][j]=0;
            let str=((i+1)*10+j).toString();
            // document.getElementById((str[0]-1)+(str[1])).innerText=" ";
            document.getElementById((str[0]-1)+(str[1])).firstElementChild.classList.remove("circle","cross");
        }
    }
    x_turn=1;
    moves=0;
}
