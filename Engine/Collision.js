class Collision {
    static checkColision(entity1, entity2) {
        var minimumX1 = entity1.positionX - entity1.width/2;
        var minimumY1 = entity1.positionY - entity1.height/2;
        var maximumX1 = entity1.positionX + entity1.width/2;
        var maximumY1 = entity1.positionY + entity1.height/2;

        var minimumX2 = entity2.positionX - entity2.width/2;
        var minimumY2 = entity2.positionY - entity2.height/2;
        var maximumX2 = entity2.positionX + entity2.width/2;
        var maximumY2 = entity2.positionY + entity2.height/2;


        if(maximumX1 > minimumX2 &&
            minimumX1 < maximumX2 &&
            maximumY1 > minimumY2 &&
            minimumY1 < maximumY2) {
            
            if(!entity1.isColliding) {
                entity1.isColliding = true;
                entity1.onCollisionEnter(entity2);
            }

            if(!entity2.isColliding) {
                entity2.isColliding = true;
                entity2.onCollisionEnter(entity1);
            }
        }
        else {
            entity1.isColliding = false;
            entity2.isColliding = false;
        }
    }
}