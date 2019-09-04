class Boundary {
    constructor(x1, y1, x2, y2) {
        this.x = createVector(x1, y1);
        this.y = createVector(x2, y2);
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

    show() {
        stroke(this.color);
        line(this.x.x, this.x.y, this.y.x, this.y.y);
    }
}