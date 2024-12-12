import networkx as nx

class Nodes:
    COMPETENCY_QUESTIONS = "Competency questions"
    DATA_GATHERING = "Data gathering"
    DATA_INTEGRATION = "Data integration"
    GRAPH_RAG = "GraphRAG"
    GRAPH_STORAGE = "Graph storage"
    KNOWLEDGE_ENGINEERING = "Knowledge engineering"
    ONTOLOGY_ENGINEERING = "Ontology engineering"
    QUESTION_ANSWERING = "Question answering"
    SEMANTIC_ARCHITECTURE = "Semantic architecture"
    TECHNICAL_ROADMAP = "Technical roadmap"
    USE_CASES = "Use cases"
    WAYFINDING = "Wayfinding"

graph = nx.DiGraph()
# graph.add_edge(dependency, node)
graph.add_edge(Nodes.COMPETENCY_QUESTIONS, Nodes.TECHNICAL_ROADMAP)
graph.add_edge(Nodes.COMPETENCY_QUESTIONS, Nodes.ONTOLOGY_ENGINEERING)
graph.add_edge(Nodes.DATA_GATHERING, Nodes.KNOWLEDGE_ENGINEERING)
graph.add_edge(Nodes.TECHNICAL_ROADMAP, Nodes.SEMANTIC_ARCHITECTURE)
graph.add_edge(Nodes.GRAPH_STORAGE, Nodes.GRAPH_RAG)
graph.add_edge(Nodes.GRAPH_STORAGE, Nodes.DATA_INTEGRATION)
graph.add_edge(Nodes.GRAPH_STORAGE, Nodes.QUESTION_ANSWERING)
# Knowledge engineering depends on ontology engineering
graph.add_edge(Nodes.ONTOLOGY_ENGINEERING, Nodes.KNOWLEDGE_ENGINEERING)
graph.add_edge(Nodes.KNOWLEDGE_ENGINEERING, Nodes.GRAPH_STORAGE)
graph.add_edge(Nodes.KNOWLEDGE_ENGINEERING, Nodes.DATA_INTEGRATION)
graph.add_edge(Nodes.SEMANTIC_ARCHITECTURE, Nodes.ONTOLOGY_ENGINEERING)
graph.add_edge(Nodes.USE_CASES, Nodes.ONTOLOGY_ENGINEERING)
graph.add_edge(Nodes.USE_CASES, Nodes.TECHNICAL_ROADMAP)
graph.add_edge(Nodes.WAYFINDING, Nodes.COMPETENCY_QUESTIONS)
graph.add_edge(Nodes.WAYFINDING, Nodes.USE_CASES)