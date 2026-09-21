# Given two strings `s` and `t`, return `true` if the two strings are anagrams of eachother
# otherwise return `false`

# ex:
# s = rabbit
# t = tibbar

# anagramMap

# `s`    `t`
# r - 1  t - 1
# a - 1  i - 1
# b - 2  b - 2
# i - 1  a - 1
# t - 1  r - 1


class Solution:

    def __init__(self):
        pass

    def buildMap(self, letters):
        new_map = {}

        for i in range(0, len(letters)):
            new_map[letters[i]] = (
                new_map[letters[i]] + 1 if new_map.get(letters[i]) else 1
            )

        return new_map

    def isValid(self, s: str, t: str):
        s_letters = list(s)
        t_letters = list(t)

        s_map = self.buildMap(s_letters)
        t_map = self.buildMap(t_letters)

        # ex: {'r': 1, 'a': 2, 'c': 2, 'e': 1}

        # print(s_map)
        # print(t_map)

        # Compare maps
        for letter, count in s_map.items():
            # print(letter, count)
            if t_map.get(letter) != count:
                return False

        return True


def testSolution(s: str, t: str):
    solution = Solution()

    if solution.isValid(s, t):
        print(f"'{s} and '{t}' are anagrams")
    else:
        print(f"'{s} and '{t}' are not anagrams")

    del solution


def main():
    print("Start...\r\n")

    testSolution("racecar", "carrace")
    testSolution("rabbit", "tibbar")
    testSolution("thsfr", "frhst")

    print("\r\nDone!")


if __name__ == "__main__":
    main()
