# Graph Theory and Shortest Path Search

## Graph Definition

A **graph** is a collection of:

- **Vertices (nodes):** Represent entities (e.g., cities, users).
- **Edges (connections):** Represent relationships or paths between entities.

### Types of Graphs

- **Directed (oriented):** Edges have a direction (e.g., `A → B`).
- **Undirected:** Edges have no direction (e.g., `A — B`).
- **Weighted:** Each edge has a cost (weight), such as distance, time, or price.

## Graph Skeleton

The **graph skeleton** is the basic structure of the graph, showing all nodes and edges, optionally with directions and weights.

## Neighborhood Matrix vs. Neighbor List

### Adjacency Matrix
- A 2D matrix where `matrix[i][j]` stores the weight of the edge from node `i` to node `j`.
- Provides fast edge lookups.
- Memory-intensive, especially for sparse graphs.

### Adjacency List
- Each node stores a list of its neighbors and their edge weights.
- More memory-efficient and better suited for sparse graphs.

## Real-World Applications

- **Navigation systems** (e.g., GPS): Finding the shortest or fastest route.
- **Computer networks:** Data routing between servers and devices.
- **Task scheduling:** Managing dependencies in project planning.
- **Social networks:** Modeling user connections, influence, or friend suggestions.

---

## 2. The Shortest Path Search Problem

### What is the Shortest Path?

The **shortest path** is the path between two nodes (or a node and all others) that minimizes the total edge weight along the route.

### Negative Edges

- Some graphs include **edges with negative weights** (e.g., profit/loss scenarios).
- Algorithms like **Dijkstra's** fail on graphs with negative weights.
- **Negative-weight cycles** (where a path loops infinitely with decreasing cost) can lead to undefined results and must be handled carefully.
- Use algorithms like **Bellman-Ford** to support negative weights and detect such cycles.

---

## 3. How the Bellman-Ford Algorithm Works

The **Bellman-Ford algorithm** is a single-source shortest path algorithm that works on graphs with **positive and negative edge weights**. Unlike Dijkstra’s algorithm, it can handle **negative-weight edges** and **detect negative-weight cycles**.

### Key Idea

The algorithm repeatedly **relaxes edges** — it tries to improve the shortest known distance to each vertex by checking all edges.

### Steps of the Algorithm

1. **Initialization:**
   - Set the distance to the **source vertex** as `0`.
   - Set the distance to all **other vertices** as `∞` (infinity).

2. **Edge Relaxation:**
   - Repeat **(V - 1)** times (where `V` is the number of vertices):
      - For every edge `(u, v)` with weight `w`, check:
        ```
        if distance[u] + w < distance[v]:
            distance[v] = distance[u] + w
        ```
      - This step updates the shortest path to each vertex if a better one is found.

3. **Negative Cycle Detection:**
   - Perform one more iteration over all edges.
   - If any distance is still improving, it means a **negative-weight cycle** exists:
     ```
     if distance[u] + w < distance[v]:
         → Negative-weight cycle detected
     ```

### Time Complexity

- **O(V × E)** where:
   - `V` is the number of vertices
   - `E` is the number of edges

### Advantages

- Works on graphs with **negative edge weights**.
- Can **detect negative-weight cycles**.

### Limitations

- Slower than Dijkstra’s algorithm on graphs without negative weights.
- Not suitable for very large dense graphs unless necessary.

