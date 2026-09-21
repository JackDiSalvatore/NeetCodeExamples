from python_code_examples.two_sum_hashmap import TwoSumHashMapSolution


def test_two_sum_hashmap():

    solution = TwoSumHashMapSolution()

    # Note: input must be sorted
    x, y = solution.findIndex(
        [1, 1, 2, 3], 5
    )  # solution [complement of 3, complement of 4]
    assert x == 2
    assert y == 3

    x, y = solution.findIndex([3, 4, 5, 6], 7)  # solution [comp of 0, comp of 2]
    assert x == 0
    assert y == 1

    x, y = solution.findIndex([1, 1, 2, 4, 5, 6], 6)  # solution = [[2,3], [0,4], [1,4]]
    assert x == 2
    assert y == 3

    x, y = solution.findIndex([4, 5, 6], 10)
    assert x == 0
    assert y == 2
