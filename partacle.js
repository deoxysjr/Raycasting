class Particle {
    constructor() {
        this.pos = createVector(width / 2, height / 2);
        this.rays = [];

        for(let i = 0; i < 360; i += 1) {
            this.rays.push(new Ray(this.pos, radians(i)));
        }
    }

    update(x, y) {
        this.pos.set(x, y);
    }

    look(walls) {
        for (let ray of this.rays) {
            let closestpt = null;
            let closestwall = null;
            let record = Infinity;
            for (let wall of walls) {
                const pt = ray.cast(wall);
                if (pt){
                    const d = p5.Vector.dist(this.pos, pt);
                    if(d < record) {
                        record = d;
                        closestpt = pt;
                        closestwall = wall;
                    }
                }
            }
            if (closestpt && closestwall.color == ray.color) {
                stroke(ray.color);
                line(this.pos.x, this.pos.y, closestpt.x, closestpt.y);
            }
        }
    }

    show() {
        for (let ray of this.rays){
            ray.show();
        }
    }
}