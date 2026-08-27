# Given two strings `s` and `t`, return `true` if the two strings are anagrams of eachother
# otherwise return `false`

# s = rabbit
# t = tibbar

# anagramMap

# `s`    `t`
# r - 1  t - 1
# a - 1  i - 1
# b - 2  b - 2
# i - 1  a - 1
# t - 1  r - 1


class Solution():

    def __init__(self, s, t):
        self.s_letters = list(s)
        self.t_letters = list(t)

    def buildMap(self, letters):
        new_map = {}

        for i in range(0, len(letters)):
            new_map[letters[i]] = new_map[letters[i]] + 1 if new_map.get(letters[i]) else 1

        return new_map

    def isValid(self):
        s_map = self.buildMap(self.s_letters)
        t_map = self.buildMap(self.t_letters)

        # ex: {'r': 1, 'a': 2, 'c': 2, 'e': 1}

        # print(s_map)
        # print(t_map)

        # Compare maps
        for letter, count in s_map.items():
            # print(letter, count)
            if t_map.get(letter) != count:
                return False

        return True


def testSolution(solution):
    if (solution.isValid()):
        print("is an anagram")
    else:
        print("not an anagram")


def main():
    print('done!')

    testSolution(Solution("racecar", "carrace"))
    testSolution(Solution("rabbit", "tibbar"))
    testSolution(Solution("thsfr", "rfhst"))


if __name__ == "__main__":
    main()
