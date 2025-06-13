import {Vertex} from "./Vertex";

export default function BellmanFord(start: Vertex, vertices: Vertex[]): Map<Vertex, number> {
    const distances: Map<Vertex, number> = new Map();
    const predecessors: Map<Vertex, Vertex | null> = new Map();

    // Initialize distances
    for (const vertex of vertices) {
        distances.set(vertex, Infinity);
        predecessors.set(vertex, null);
    }
    distances.set(start, 0);

    // Relax edges repeatedly
    for (let i = 0; i < vertices.length - 1; i++) {
        for (const vertex of vertices) {
            const neighbors = vertex.getNeighbors();
            for (const [neighbor, weight] of neighbors) {
                const currentDistance = distances.get(vertex)!;
                const newDistance = currentDistance + weight;
                if (newDistance < distances.get(neighbor)!) {
                    distances.set(neighbor, newDistance);
                    predecessors.set(neighbor, vertex);
                }
            }
        }
    }

    // Check for negative-weight cycles
    for (const vertex of vertices) {
        const neighbors = vertex.getNeighbors();
        for (const [neighbor, weight] of neighbors) {
            if (distances.get(vertex)! + weight < distances.get(neighbor)!) {
                throw new Error("Graph contains a negative-weight cycle");
            }
        }
    }

    return distances;
}
