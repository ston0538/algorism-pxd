// 기본 노드
class TreeNode {

  constructor(value, leftNode = null, rightNode = null) {
    this.value = value
    this.leftNode = leftNode
    this.rightNode = rightNode
  }

  search(node) {
    if (node.value === null || node.value === this.value) {
      return node
    }
    if (node.value < this.value) {
      return this.leftNode.search(node)
    }
    if (node.value > this.value) {
      return this.rightNode.search(node)
    }
  }

  insert(node) {
    if (node.value < this.value) {
      if (this.leftNode === null) {
        this.leftNode = node
      } else {
        this.leftNode.insert(node)
      }
    }
    if (node.value > this.value) {
      if (this.rightNode === null) {
        this.rightNode = node
      } else {
        this.rightNode.insert(node)
      }
    }
  }

  delete(value) {
    if (this.value > value) {
      if (this.leftNode !== null) {
        console.log('before left node', this.leftNode)
        this.leftNode = this.leftNode.delete(value);
        console.log('after left node', this.leftNode)
      }
    } else if (this.value < value) {
      if (this.rightNode !== null) {
        this.rightNode = this.rightNode.delete(value);
      }
    } else {
      if (this.leftNode === null && this.rightNode === null) {
        return null;
      } else if (this.leftNode === null) {
        return this.rightNode;
      } else if (this.rightNode === null) {
        return this.leftNode;
      } else {
        let minValue = this.rightNode.findMinValue();
        this.value = minValue;
        this.rightNode = this.rightNode.delete(minValue);
      }
    }
    return this;
  }

  findMinValue() {
    if (this.leftNode !== null) {
      return this.leftNode.findMinValue();
    } else {
      return this.value;
    }
  }
}



describe('linked list', () => {
  const node1 = new TreeNode(1)
  const node2 = new TreeNode(10)
  const newNode1 = new TreeNode(3)
  const newNode2 = new TreeNode(7)
  const root = new TreeNode(5, node1, node2)

  it('search', () => {
    expect(root.search(node2)).toEqual(node2)
  })

  it('insert', () => {
    root.insert(newNode1)
    root.insert(newNode2)
    expect(root.search(newNode1)).toEqual(newNode1)
    expect(root.search(newNode2)).toEqual(newNode2)
  })

  it('delete', () => {
    const node4 = new TreeNode(4)
    const node11 = new TreeNode(11)
    const node10 = new TreeNode(10, node4, node11)
    const node30 = new TreeNode(30)
    const node40 = new TreeNode(40)
    const node33 = new TreeNode(33, node30, node40)
    const node25 = new TreeNode(25, node10, node33)
    const node52 = new TreeNode(52)
    const node61 = new TreeNode(61)
    const node82 = new TreeNode(82)
    const node95 = new TreeNode(95)
    const node56 = new TreeNode(56, node52, node61)
    const node89 = new TreeNode(89, node82, node95)
    const node75 = new TreeNode(75, node56, node89)
    const root = new TreeNode(50, node25, node75)

    root.delete(4)
    console.log('deleted root', root.leftNode.leftNode)
  })
});