class Ray {
    constructor(pos, angle) {
        this.pos = pos;
        this.dir = p5.Vector.fromAngle(angle);
        this.color = this.setRandColor();
    }

    setRandColor() {
        const num = Math.round(random(6));
        switch (num){
            case 0:
                return "#ffffff";
            case 1:
                return '#0000ff';
            case 2:
                return "#00ff00";
            case 3:
                return "#ff0000";
            case 4:
                return "#ff00ff";
            case 5:
                return "#00ffff";
            case 6:
                return "#ffff00";
        }
    }

    lookAt(x, y) {
        this.dir.x = x - this.pos.x;
        this.dir.y = y - this.pos.y;
        this.dir.normalize();
    }

    show() {
        stroke(255);
        push();
        translate(this.pos.x, this.pos.y);
        pop();
    }

    cast(wall) {
        const x1 = wall.x.x;
        const y1 = wall.x.y;
        const x2 = wall.y.x;
        const y2 = wall.y.y;

        const x3 = this.pos.x;
        const y3 = this.pos.y;
        const x4 = this.pos.x + this.dir.x;
        const y4 = this.pos.y + this.dir.y;

        const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

        if (den == 0) { return; }

        const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
        const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;

        if (t > 0 && t < 1 && u > 0) {
            const pt = createVector();
            pt.x = x1 + t * (x2 - x1);
            pt.y = y1 + t * (y2 - y1);
            return pt;
        }
        else {
            return;
        }
    }
}