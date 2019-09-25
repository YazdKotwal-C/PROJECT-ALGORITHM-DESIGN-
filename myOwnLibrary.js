function isTouching (ob1,ob2){
    // if(movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2
    //   && fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2
    //   && movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2
    //   && fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2){
     if(ob1.x - ob2.x < ob2.width/2 + ob1.width/2
       && ob2.x - ob1.x < ob2.width/2 + ob1.width/2
       && ob1.y - ob2.y < ob2.height/2 + ob1.height/2
       && ob2.y - ob1.y < ob2.height/2 + ob1.height/2)
       // ob3 ob4 of the above
       {
    return true;
       }
       else{
         return false;
       }
   }
   function bounceOff(ob1,ob2){
     if(ob1.x - ob2.x < ob2.width/2 + ob1.width/2
       && ob2.x - ob1.x < ob2.width/2 + ob1.width/2){
         ob1.velocityX = ob1.velocityX * (-1);
         ob2.velocityX = ob2.velocityX * (-1);
       }
       if(ob1.y - ob2.y < ob2.height/2 + ob1.height/2
         && ob2.y - ob1.y < ob2.height/2 + ob1.height/2){
           ob1.velocityY = ob1.velocityY * (-1);
           ob2.velocityY = ob2.velocityY * (-1);  
         }
   }
   