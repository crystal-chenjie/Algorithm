// 算法：五步教你消除递归
/**
函数的调用过程
函数的调用是基于栈，每次调用都涉及如下操作：

调用开始时：将返回地址和局部变量入栈。
调用结束时：出栈并将返回到入栈时的返回地址。
 */

function Triangle( n)
        {if (n == 1)
        {
        return n;
        }
        return n + Triangle(n - 1);
        }
        Triangle(10);