from python_code_examples.two_sum_two_pointers import TwoSumTwoPointerSolution


def test_two_sum_two_pointers():

    solution = TwoSumTwoPointerSolution()

    # Note: input must be sorted
    x, y = solution.findIndex([1, 1, 2, 3], 5)
    assert x == 2
    assert y == 3

    x, y = solution.findIndex([3, 4, 5, 6], 7)
    assert x == 0
    assert y == 1

    x, y = solution.findIndex([1, 1, 2, 4, 5, 6], 6)
    assert x == 0
    assert y == 4

    x, y = solution.findIndex([4, 5, 6], 10)
    assert x == 0
    assert y == 2
