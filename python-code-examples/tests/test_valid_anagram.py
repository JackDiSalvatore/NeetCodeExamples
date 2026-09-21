from python_code_examples.valid_anagram import ValidAnagramSolution


def test_valid_anagram():
    solution = ValidAnagramSolution()

    assert solution.isValid("racecar", "carrace") == True
    assert solution.isValid("rabbit", "tibbar") == True
    assert solution.isValid("thsfr", "frhst") == True
