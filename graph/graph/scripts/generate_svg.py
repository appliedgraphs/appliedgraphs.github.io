from graph.data import graph
import networkx as nx
# import pylab as plt
from pathlib import Path


SVG_FILE_PATH = Path(__file__).parent.parent.parent.parent / "public" / "img" / "services-graph.svg"

def main():
    # Incantation from nx_pydot.py in networkx
    graph.graph["node"] = {"fontsize": "16.00"}
    p = nx.drawing.nx_pydot.to_pydot(graph)
    p.set_bgcolor("transparent")
    # p.set_rankdir("LR")  # Render from left to right
    p.write_svg(SVG_FILE_PATH)
    # nx.draw(graph, nx.spring_layout())
    # plt.savefig(SVG_FILE_PATH, format="svg", transparent=True)

