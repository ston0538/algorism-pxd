class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self, first_node):
      self.first_node = first_node


    def read(self, index):
        current_node = self.first_node
        current_index = 0

        while current_index < index:
            current_node = current_node.next
            current_index += 1 

            if current_index is None:
              return None 

        return current_node.data


def test_fibonacci():
  node1 = Node('once')
  node2 = Node('upon')
  node1.next = node2
  list = LinkedList(node1)
  node3 = Node('a')
  node4 = Node('time')
  node2.next = node3
  node3.next = node4
  expected = 'upon' 
  actual = list.read(1) 
  assert expected == actual
