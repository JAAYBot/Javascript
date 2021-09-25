
/*

This will swap every pair 

*/
function swapPairs(h) {
    return swap(h);

    function swap(head) {
        if (!head || !head.next) return head;

        let node1 = head;
        let node2 = node1.next;

        node1.next = node2.next;
        node2.next = node1;
        head = node2;

        node2.next = swap(node1);

        return head;
    }

};