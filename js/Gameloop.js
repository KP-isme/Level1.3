var canvas;
var context;
var player;
var timer;
var interval = 1000/60; //this means the animation is going to play in 60 milliseconds


var frictionX = 1;
var frictionY = 1;
var gravity = 0;


canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

// player = new GameObject(0,0,100,100, "#00ff00");
player = new GameObject(50, canvas.height/2, 100, 100, "#ffff00");
player.vx = 1;
player.vy = 0;





/*
npc1 = new GameObject(300, canvas.height/2, 100, 100, "#00ff00");
npc2 = new GameObject(600, canvas.height/2, 100, 100, "#0000ff");
npc3 = new GameObject(900, canvas.height/2, 100, 100, "#ff00ff");
*/


timer = setInterval(animate, interval);

function animate()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    
/*
    if (d)
    {
        player.x += 4
    }

    if (a)
    {
        player.x -= 4
    }
  */  

    doHandleAcceleration();
    doHandleFriction();
    doHandleGravity();
    doHandlePosition();
    doCheckBottomBounds();



    player.move();
    if (player.x > canvas.width + player.width/2)
    {
        player.x = player-width/2
    }

/*//npc collition
    if (npc1.collisionCheck(player))
    {
        npc1.color = "yellow";
        npc1.width = 125;
    }
    else
    {
        npc1.color = "green";
        npc1.width = 100;
    }

    

    if (npc2.collisionCheck(player))
    {
        context.strokeRect(npc2.x-npc2.width/2, npc2.y-npc2.height/2, npc2.width, npc2.height);
    }

    if (npc3.collisionCheck(player))
    {
        player.x = player.preX
    }
    else 
    {
        player.preX = player.x;
    }
*/ 

    //all the things under would have made it bounce off walls and move (if you change the player.vx value)

    // if (player.x > canvas.width - player.width/2) 
    // {
    //     //player.x = +player.width/2;  //whats this do? This make sure that all of the player is spawned behind the left side.
    //     player.vx = -0;
    // }
    // if (player.x < 0 + player.width/2) 
    // {
    //     //player.x = +player.width/2;  //whats this do? This make sure that all of the player is spawned behind the left side.
    //     player.vx = 0;
    // }
    // if (player.y > canvas.height + player.hight/2) 
    // {
    //     //player.x = +player.width/2;  //whats this do? This make sure that all of the player is spawned behind the left side.
    //     player.vy = 10;
    // }
    // if (player.y < 0 - player.height/2) 
    // {
    //     //player.x = +player.width/2;  //whats this do? This make sure that all of the player is spawned behind the left side.
    //     player.vy = -10;
    // }
    player.drawCircle();
    npc1.drawCircle();
    npc2.drawCircle();
    npc3.drawRect();
}



//new funciton for the functions we called (doHandleAcceleration)
function doHandleAcceleration ()
{
    if (d) 
        {
            player.vx += player.ax * player.force;
        }
    if (a) 
        {
            player.vx += player.ax * -player.force;
        }

}


//the friction is math out by multiplying the player's current speed to the value of frition (friction needs to be lower than 1 and higher than 0)
function doHandleFriction () 
{

    player.vx *= frictionX;

}

function doHandleGravity () 
{
    player.vy += gravity;
}

function doHandlePosition () 
{
    player.x += player.vx;
    player.y += player.vy;
}


function doCheckBottomBounds ()
{
    if (player.y > canvas.height - player.height/2)
    {
        player.y = canvas.height - player.height/2;
        player.vy = 0;
        doJump();
    }
}
function doJump()
{
    if (w)
    {
        player.vy = -20;
    }
    if (release(w))
    {
        player.vy = 20;
    }
}