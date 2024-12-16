package ValidParentheses;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;
import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {
    private Solution solution = new Solution();

    @Test
    @DisplayName("Test empty string")
    void testEmptyString() {
        assertTrue(solution.isValid(""),
                "Empty string should be valid");
    }

    @Test
    @DisplayName("Test single pair of matching brackets")
    void testSinglePair() {
        assertTrue(solution.isValid("()"), "Single parentheses pair");
        assertTrue(solution.isValid("[]"), "Single square brackets pair");
        assertTrue(solution.isValid("{}"), "Single curly braces pair");
    }

    @Test
    @DisplayName("Test single unmatched brackets")
    void testSingleUnmatched() {
        assertFalse(solution.isValid("("), "Single opening parenthesis");
        assertFalse(solution.isValid(")"), "Single closing parenthesis");
        assertFalse(solution.isValid("["), "Single opening square bracket");
        assertFalse(solution.isValid("]"), "Single closing square bracket");
        assertFalse(solution.isValid("{"), "Single opening curly brace");
        assertFalse(solution.isValid("}"), "Single closing curly brace");
    }

    @Test
    @DisplayName("Test nested brackets")
    void testNestedBrackets() {
        assertTrue(solution.isValid("({})"), "Nested different brackets");
        assertTrue(solution.isValid("(){}[]"), "Multiple pairs in sequence");
        assertTrue(solution.isValid("({[]})"), "Multiple nested pairs");
    }

    @Test
    @DisplayName("Test mismatched brackets")
    void testMismatchedBrackets() {
        assertFalse(solution.isValid("(]"), "Mismatched closing bracket");
        assertFalse(solution.isValid("{)"), "Mismatched closing bracket");
        assertFalse(solution.isValid("[}"), "Mismatched closing bracket");
    }

    @Test
    @DisplayName("Test incorrect order")
    void testIncorrectOrder() {
        assertFalse(solution.isValid("([)]"), "Incorrectly ordered brackets");
        assertFalse(solution.isValid("{[}]"), "Incorrectly ordered brackets");
        assertFalse(solution.isValid("((])"), "Incorrectly ordered brackets");
    }

    @Test
    @DisplayName("Test multiple layers of nesting")
    void testMultipleLayers() {
        assertTrue(solution.isValid("{{[]()}()}"), "Complex nested structure");
        assertTrue(solution.isValid("()[]{}"), "Multiple pairs in sequence");
        assertTrue(solution.isValid("[{()}]"), "Mixed nested brackets");
    }

    @Test
    @DisplayName("Test unbalanced brackets")
    void testUnbalancedBrackets() {
        assertFalse(solution.isValid("((()"), "More opening brackets");
        assertFalse(solution.isValid("()))"), "More closing brackets");
        assertFalse(solution.isValid("{{{}}"), "Unbalanced curly braces");
    }

    @Test
    @DisplayName("Test mixed valid and invalid cases")
    void testMixedCases() {
        assertFalse(solution.isValid("({)}"), "Valid pairs but wrong order");
        assertFalse(solution.isValid("[(])"), "Valid pairs but wrong order");
        assertTrue(solution.isValid("({})[]"), "Valid nested and sequential");
    }

    @Test
    @DisplayName("Test longer sequences")
    void testLongerSequences() {
        assertTrue(solution.isValid("([{}])({[]}){}[]"),
                "Long valid sequence");
        assertFalse(solution.isValid("([{}])({[]}){[]"),
                "Long sequence with missing closure");
    }
}