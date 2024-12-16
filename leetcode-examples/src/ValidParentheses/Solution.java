package ValidParentheses;

import java.util.HashMap;
import java.util.Stack;

/*
* You are given a string `s` consisting of the following characters:
* '(', ')', '{', '}', '[', ']'
*
*  The string is only valid if:
*  1. Every open bracket is closed by the same type of closing bracket
*  2. Open brackets are closed in the correct order
*  3. Every close bracket has a corresponding open bracket of the same type
* */
public class Solution {
    public boolean isValid(String s) {
        Stack<Character> myStack = new Stack<>();
        HashMap<Character, Character> closingToOpenBracket = new HashMap<>();
        closingToOpenBracket.put('}', '{');
        closingToOpenBracket.put(']', '[');
        closingToOpenBracket.put(')', '(');

        for (int i = 0; i < s.length(); i++) {
            if (!myStack.isEmpty() && myStack.peek() == closingToOpenBracket.get(s.charAt(i)) ) {
                myStack.pop();
            } else {
                myStack.push(s.charAt(i));
            }
        }

        return myStack.isEmpty();
    }
}
