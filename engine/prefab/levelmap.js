class LevelMap {
    
    constructor(obj) {
        this.legend = obj.legend;
        this.level = obj.level;
        this.tileWidth = obj.tileWidth;
        this.tileHeight = obj.tileHeight;
        this.x = obj.x;
        this.y = obj.y;
        this.layer = obj.layer;
    }

    build() {
        const rows = this.level.split('R');
        let x = this.x;
        let y = this.y;
        for (let row of rows) {
            const tiles = row.split('');
            for (let tile of tiles) {
                if (tile !== '0') {
                    const prefab = this.legend[tile];
                    if (prefab) {
                        prefab.addToScene({
                            id: `prefab_${tile}_${x}-${y}`,
                            scene: currentScene,
                            x: x,
                            y: y,
                            layer: this.layer
                        });
                    }
                }
                x += this.tileWidth;
            }
            y += this.tileHeight;
            x = this.x;
        }
    }

}