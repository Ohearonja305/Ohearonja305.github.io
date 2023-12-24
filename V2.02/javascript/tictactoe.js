// Functions to Call
// ----------Reset Button
// Reset Data
var game = false;                                                   //Affects game playability, (if game playable, true)
var moveCount = 0;
var squares = [true,true,true,true,true,true,true,true,true];
var player  = [9,9,9,9,9,9,9,9,9];
var cpu     = [9,9,9,9,9,9,9,9,9];
var det = false;                                                    //Whether game has been determined yet or not


var resetData = function()
{
    //var radio = document.querySelector('input[type=radio][name=difficulty]:checked'); Useful for when you add the difficulties
    document.getElementById("regular").checked = true;

    //Set icons back to normal
    document.getElementById('topLeft').src="images/icon.gif";
    document.getElementById('topMiddle').src="images/icon.gif";
    document.getElementById('topRight').src="images/icon.gif";
    document.getElementById('middleLeft').src="images/icon.gif";
    document.getElementById('middle').src="images/icon.gif";
    document.getElementById('middleRight').src="images/icon.gif";
    document.getElementById('bottomLeft').src="images/icon.gif";
    document.getElementById('bottomMiddle').src="images/icon.gif";
    document.getElementById('bottomRight').src="images/icon.gif";

    //Set Variables back to normal
    moveCount = 0;
    squares = [true,true,true,true,true,true,true,true,true];
    player  = [9,9,9,9,9,9,9,9,9];
    cpu     = [9,9,9,9,9,9,9,9,9];
    det=false;

    //Set html elements back to normal
    document.getElementById('update').textContent = "";
}



//Tic Tac Toe
//Each fuckin button
var topLeft = function()
{
    if(game==true && squares[0]==true)
    {
        document.getElementById('topLeft').src="images/KelPog.png";
        squares[0]=false;
        moveCount++;
        player[0] = 0;
        if(moveCount < 5)
        {
            ttt();
        }
        else
        {
            checkWin();
            if(det==false)
            {
                game=false;
                document.getElementById('update').textContent = "How the fuck'd you tie?"
            }
        }
    }
}

var topMiddle = function()
{
    if(game==true && squares[1]==true)
    {
        document.getElementById('topMiddle').src="images/KelPog.png";
        squares[1]=false;
        moveCount++;
        player[1] = 1;
        if(moveCount < 5)
        {
            ttt();
        }
        else
        {
            checkWin();
            if(det==false)
            {
                game=false;
                document.getElementById('update').textContent = "How the fuck'd you tie?"
            }
        }
    }
}

var topRight = function()
{
    if(game==true && squares[2]==true)
    {
        document.getElementById('topRight').src="images/KelPog.png";
        squares[2]=false;
        moveCount++;
        player[2] = 2;
        if(moveCount < 5)
        {
            ttt();
        }
        else
        {
            checkWin();
            if(det==false)
            {
                game=false;
                document.getElementById('update').textContent = "How the fuck'd you tie?"
            }
        }
    }
}

var middleLeft = function()
{
    if(game==true && squares[3]==true)
    {
        document.getElementById('middleLeft').src="images/KelPog.png";
        squares[3]=false;
        moveCount++;
        player[3] = 3;
        if(moveCount < 5)
        {
            ttt();
        }
        else
        {
            checkWin();
            if(det==false)
            {
                game=false;
                document.getElementById('update').textContent = "How the fuck'd you tie?"
            }
        }
    }
}

var middle = function()
{
    if(game==true && squares[4]==true)
    {
        document.getElementById('middle').src="images/KelPog.png";
        squares[4]=false;
        moveCount++;
        player[4] = 4;
        if(moveCount < 5)
        {
            ttt();
        }
        else
        {
            checkWin();
            if(det==false)
            {
                game=false;
                document.getElementById('update').textContent = "How the fuck'd you tie?"
            }
        }
    }
}

var middleRight = function()
{
    if(game==true && squares[5]==true)
    {
        document.getElementById('middleRight').src="images/KelPog.png";
        squares[5]=false;
        moveCount++;
        player[5] = 5;
        if(moveCount < 5)
        {
            ttt();
        }
        else
        {
            checkWin();
            if(det==false)
            {
                game=false;
                document.getElementById('update').textContent = "How the fuck'd you tie?"
            }
        }
    }
}

var bottomLeft = function()
{
    if(game==true && squares[6]==true)
    {
        document.getElementById('bottomLeft').src="images/KelPog.png";
        squares[6]=false;
        moveCount++;
        player[6] = 6;
        if(moveCount < 5)
        {
            ttt();
        }
        else
        {
            checkWin();
            if(det==false)
            {
                game=false;
                document.getElementById('update').textContent = "How the fuck'd you tie?"
            }
        }
    }
}

var bottomMiddle = function()
{
    if(game==true && squares[7]==true)
    {
        document.getElementById('bottomMiddle').src="images/KelPog.png";
        squares[7]=false;
        moveCount++;
        player[7] = 7;
        if(moveCount < 5)
        {
            ttt();
        }
        else
        {
            checkWin();
            if(det==false)
            {
                game=false;
                document.getElementById('update').textContent = "How the fuck'd you tie?"
            }
        }
    }
}

var bottomRight = function()
{
    if(game==true && squares[8]==true)
    {
        document.getElementById('bottomRight').src="images/KelPog.png";
        squares[8]=false;
        moveCount++;
        player[8] = 8;
        if(moveCount < 5)
        {
            ttt();
        }
        else
        {
            checkWin();
            if(det==false)
            {
                game=false;
                document.getElementById('update').textContent = "How the fuck'd you tie?"
            }
        }
    }
}



//The AI thing
var ttt = function()
{   
    checkWin();

    //GENERATE RANDOM NUMBER, THAT CHECKS TO SEE IF IT CAN PLACE A CPU TILE ONTO THE GRID AND PASS MOVEMENT
    var unset = false;
    while(unset == false)
    {
        if(det==true)
        {
            break;
        }

        var rng = Math.floor(Math.random() * 9);
        if(squares[rng]==true)
        {
            if(squares[rng]==true && rng==0)
            {
                document.getElementById('topLeft').src = "images/FunnyManDance.gif";
                squares[0] = false;
                unset = true;
                cpu[0] = 0;
                break;
            }
            else if(squares[rng]==true && rng==1)
            {
                document.getElementById('topMiddle').src = "images/FunnyManDance.gif";
                squares[1] = false;
                unset = true;
                cpu[1] = 1;
                break;
            }
            else if(squares[rng]==true && rng==2)
            {
                document.getElementById('topRight').src = "images/FunnyManDance.gif";
                squares[2] = false;
                unset = true;
                cpu[2] = 2;
                break;
            }
            else if(squares[rng]==true && rng==3)
            {
                document.getElementById('middleLeft').src = "images/FunnyManDance.gif";
                squares[3] = false;
                unset = true;
                cpu[3] = 3;
                break;
            }
            else if(squares[rng]==true && rng==4)
            {
                document.getElementById('middle').src = "images/FunnyManDance.gif";
                squares[4] = false;
                unset = true;
                cpu[4] = 4;
                break;
            }
            else if(squares[rng]==true && rng==5)
            {
                document.getElementById('middleRight').src = "images/FunnyManDance.gif";
                squares[5] = false;
                unset = true;
                cpu[5] = 5;
                break;
            }
            else if(squares[rng]==true && rng==6)
            {
                document.getElementById('bottomLeft').src = "images/FunnyManDance.gif";
                squares[6] = false;
                unset = true;
                cpu[6] = 6;
                break;
            }
            else if(squares[rng]==true && rng==7)
            {
                document.getElementById('bottomMiddle').src = "images/FunnyManDance.gif";
                squares[7] = false;
                unset = true;
                cpu[7] = 7;
                break;
            }
            else if(squares[rng]==true && rng==8)
            {
                document.getElementById('bottomRight').src = "images/FunnyManDance.gif";
                squares[8] = false;
                unset = true;
                cpu[8] = 8;
                break;
            }            
        } 
    }

    if(det==false)
    {
        checkWin();
    }
}



//CHECK TO SEE IF ANYONE'S WON YET
var checkWin = function()
{
    //Check Player Side
    //Horizontal Wins
    if(player[0]==0&&player[1]==1&&player[2]==2)
    {
        document.getElementById("update").textContent = "Hey ya won!";
        det = true;
    }
    else if(player[3]==3&&player[4]==4&&player[5]==5)
    {
        document.getElementById("update").textContent = "Hey ya won!";
        det = true;
    }
    else if(player[6]==6&&player[7]==7&&player[8]==8)
    {
        document.getElementById("update").textContent = "Hey ya won!";
        det = true;
    }

    //Verticle Wins
    if(player[0]==0&&player[3]==3&&player[6]==6)
    {
        document.getElementById("update").textContent = "Hey ya won!";
        det = true;
    }
    else if(player[1]==1&&player[4]==4&&player[7]==7)
    {
        document.getElementById("update").textContent = "Hey ya won!";
        det = true;
    }
    else if(player[2]==2&&player[5]==5&&player[8]==8)
    {
        document.getElementById("update").textContent = "Hey ya won!";
        det = true;
    }

    //Diagonal Wins
    if(player[0]==0&&player[4]==4&&player[8]==8)
    {
        document.getElementById("update").textContent = "Hey ya won!";
        det = true;
    }
    else if(player[6]==6&&player[4]==4&&player[2]==2)
    {
        document.getElementById("update").textContent = "Hey ya won!";
        det = true;
    }

    //Check CPU Side
    //Horizontal Wins
    if(cpu[0]==0&&cpu[1]==1&&cpu[2]==2)
    {
        document.getElementById("update").textContent = "Wow, you suck!";
        det = true;
    }
    else if(cpu[3]==3&&cpu[4]==4&&cpu[5]==5)
    {
        document.getElementById("update").textContent = "Wow, you suck!";
        det = true;
    }
    else if(cpu[6]==6&&cpu[7]==7&&cpu[8]==8)
    {
        document.getElementById("update").textContent = "Wow, you suck!";
        det = true;
    }

    //Verticle Wins
    if(cpu[0]==0&&cpu[3]==3&&cpu[6]==6)
    {
        document.getElementById("update").textContent = "Wow, you suck!";
        det = true;
    }
    else if(cpu[1]==1&&cpu[4]==4&&cpu[7]==7)
    {
        document.getElementById("update").textContent = "Wow, you suck!";
        det = true;
    }
    else if(cpu[2]==2&&cpu[5]==5&&cpu[8]==8)
    {
        document.getElementById("update").textContent = "Wow, you suck!";
        det = true;
    }

    //Diagonal Wins
    if(cpu[0]==0&&cpu[4]==4&&cpu[8]==8)
    {
        document.getElementById("update").textContent = "Wow, you suck!";
        det = true;
    }
    else if(cpu[6]==6&&cpu[4]==4&&cpu[2]==2)
    {
        document.getElementById("update").textContent = "Wow, you suck!";
        det = true;
    }

    if(det==true)
    {
        game=false;
    }
}



// ----------Onload Functions
window.onload = function()
{
    // Variables
    var resetButton = document.getElementById("reset");
    var submitButton = document.getElementById("submit");

    // Do things
    // Start off by making reset invisible
    resetButton.style.display = "none";


    //Runs when submit is clicked
    document.getElementById('submit').onclick = function()
    {
        //Sets game to true
        game = true;

        //Hides submit button
        submitButton.style.display = "none";

        //Shows reset button
        resetButton.style.display = 'block';
    }


    //Runs when reset is clicked
    document.getElementById('reset').onclick = function()
    {
        game=false;

        //Hides reset button
        resetButton.style.display = "none";

        //Shows submit button
        submitButton.style.display = "block";

        //Resets data
        resetData();
    }
}