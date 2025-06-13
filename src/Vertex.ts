export class Vertex{
    name: string;
    neighbors: Map<Vertex, number> = new Map(); // neighbors with weights

    constructor(name: string = "", neighbors: Map<Vertex, number>) {
        this.name = name;
        this.neighbors = neighbors;
    }
    getNeighbors(): Map<Vertex, number> {
        return this.neighbors;
    }
    addNeighbor(vertex: Vertex, weight: number): void {
        this.neighbors.set(vertex, weight);
    }
    getName(): string {
        return this.name;
    }
}
