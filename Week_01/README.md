## 新 API 改写 Deque
Deque<String> deque = new LinkedList<String>();

deque.addFirst("a");
deque.addFirst("b");
deque.addFirst("c");
...

String str = deque.peekFirst();
...

while (deque.size() > 0) {
  System.out.println(deque.removeFirst());
}
...

## 分析 Java Priority Queue 的源码
- PriorityQueue 继承自 AbtractQueue 抽象类，实现了 Queue 接口。
- PriorityQueue 的特别之处（根据优先级规则存取数据）主要体现在 offer 和 poll 方法中。
- 以 offer 方法为例，它实现了往 PriorityQueue 中添加新元素。PQ 的数据是纯在数组 queue 中的，offer 方法中首先通过 grow 方法确保数组足够大可以添加进新元素。其次，siftUp 方法把新元素插在数组 queue 的最后一个位置。
- 在 siftUp 的实现（和注释）中，可以看到数组 queue 实现了一个二叉堆的数据结构，它满足父节点的值小于其左右字节点，queue[n] 的两个字节点分别是 queue[2n + 1] 和 queue[2n + 2]。所以整个数组 queue 中优先级最高（值最小）的元素是 queue[0]。比较两个元素间大小关系的依据是传入的 comparator，如果没传的话就按照元素的默认顺序排序。
- 回到 siftUp 的实现，它首先会把新元素插入到数组的末尾，然后迭代比较它和父节点的大小，如果小于父节点，就交换两个节点的值，然后继续和上一级的父节点比较，直到它的值大于父节点的值，或者一直交换到了 queue[0] 节点为止。
- poll 会把 queue[0] 作为结果值返回（因为二叉堆的数据结构确保了 queue[0] 是最小值），然后把数组最后一个元素的值放到 queue[0] 再进行 siftDown 调用，让这个值通过和 siftUp 相反的迭代过程，最终使更新后的数组再次满足二叉堆数据结构。

## 学习笔记
我把视频中学到的东西记在了 Notion 中，把其中印象深刻的点摘录在下面。
- 自顶向下的编程方法
- 一维的数据结构要想加速，一个通常的方式是升维到二维（跳表），空间换时间。
- 解题没思路的时候：暴力破解；考虑简单（基本）情况；找最近【重复】子问题。
- 算法（面试）解题四件套：
1. 和面试官确认清楚需求；
2. 快速想出所有可能解，比较各个解法的时间复杂度和空间复杂度，结合选出最优解法；
3. 解题；
4. 构造测试数据集。
- 跳表：只适用于有序链表。