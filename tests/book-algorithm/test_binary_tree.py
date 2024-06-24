class TreeNode:
    def __init__(self, value, left_node=None, right_node=None):
        self.value = value
        self.left_node = left_node
        self.right_node = right_node

    def search(self, node):
        # 기저 조건: 노드가 없거나 찾고 있던 값이면
        if node is None or node.value == self.value:
            return node

        # 찾고 있던 값이 노드의 값보다 작으면 왼쪽으로 검색
        elif node.value < self.value:
            return self.left_node.search(node)

        # 찾고 있던 값이 노드의 값보다 크면 오른쪽으로 검색
        else:
            return self.right_node.search(node)

    def insert(self, node):
        if node.value < self.value:
            if self.left_node is None:
                self.left_node = node
            else:
                self.left_node.insert(node)
        if node.value > self.value:
            if self.right_node is None:
                self.right_node = node
            else:
                self.right_node.insert(node)


def test_search():
    node = TreeNode(1)
    node2 = TreeNode(10)
    root = TreeNode(5, node, node2)
    assert root.search(node) == node


def test_insert():
    node = TreeNode(1)
    node = TreeNode(1)
    node2 = TreeNode(10)
    new_node1 = TreeNode(3)
    new_node2 = TreeNode(7)
    root = TreeNode(5, node, node2)
    root.insert(new_node1)
    root.insert(new_node2)
    assert root.search(new_node1) == new_node1
    assert root.search(new_node2) == new_node2
