import {Vertex} from "./Vertex";
import BellmanFord from "./BellmanFordAlg";

// Create a simple graph with vertices and edges
const A: Vertex = new Vertex("A", new Map());
const B: Vertex = new Vertex("B", new Map());
const C: Vertex = new Vertex("C", new Map());
const D: Vertex = new Vertex("D", new Map());
const E: Vertex = new Vertex("E", new Map());
const F: Vertex = new Vertex("F", new Map());

/*
First example graph with negative weights (from graph.png):
A.addNeighbor(B, 1);
A.addNeighbor(C, 2);
A.addNeighbor(E, -2);
B.addNeighbor(D, 4);
C.addNeighbor(E, 1);
D.addNeighbor(C, 3);
E.addNeighbor(D,5);*/

/*Second example graph (from teams): */
A.addNeighbor(B, 10);
A.addNeighbor(C, 3);
B.addNeighbor(D, 2);
B.addNeighbor(E, 8);
C.addNeighbor(E, 3);
E.addNeighbor(F, 1);
E.addNeighbor(D, 4);
F.addNeighbor(D, 4);


BellmanFord(A, [A, B, C, D, E, F]).forEach((distance, vertex) => {
    console.log(`Distance from A to ${vertex.getName()}: ${distance}`);
});