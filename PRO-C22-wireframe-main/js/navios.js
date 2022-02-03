class Navio{
        constructor(x,y,w,h,navioPos,naviosAnimacao){
            this.body = Bodies.rectangle(x,y,w,h);
            this.w = w;
            this.h = h;
            this.animation = naviosAnimacao;
            this.speed = 0.5;
            this.image = loadImage("./assets/boat.png");
            this.navioP = navioPos;
            World.add(world,this.body);
        }

        remove(index){
            setTimeout(()=>{
                Matter.World.remove(world,navios[index].body);
                delete navios[index];
            },2000);
            

        }

        animate(){
            this.speed = this.speed + 0.5;
        }

        display(){
            var index = floor(this.speed % this.animation.length);
            push();
            translate(this.body.position.x,this.body.position.y);
            rotate(this.body.angle);
            imageMode(CENTER);
            image(this.animation[index],0,this.navioP,this.w,this.h);
            pop();

        }

        
}