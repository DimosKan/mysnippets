function merge(L1, L2) {
    let dummy = new ListNode(0);
    let current = dummy;
    
    while (L1 && L2) {
      if (L1.val < L2.val) {
        current.next = L1;
        L1 = L1.next;
      } else {
        current.next = L2;
        L2 = L2.next;
      }
      current = current.next;
    }
    
    if (L1) {
      current.next = L1;
    } else if (L2) {
      current.next = L2;
    }
    
    return dummy.next;
  }


  // για τεστινγκ.

  class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  const L1 = new ListNode(1);
  L1.next = new ListNode(3);
  L1.next.next = new ListNode(10);
  
  const L2 = new ListNode(5);
  L2.next = new ListNode(6);
  L2.next.next = new ListNode(9);
  
  //const mergedList = merge(L1, L2);
  let currentNode = merge(L1, L2); //mergedList;
  
  while (currentNode) {
    console.log(currentNode.val);
    currentNode = currentNode.next;
  }
  