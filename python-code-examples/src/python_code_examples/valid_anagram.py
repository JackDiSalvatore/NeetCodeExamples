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


class ValidAnagramSolution:

    def buildMap(self, letters: list[str]) -> dict[str, int]:
        new_map: dict[str, int] = {}

        for i in range(0, len(letters)):
            new_map[letters[i]] = (
                new_map[letters[i]] + 1 if new_map.get(letters[i]) else 1
            )

        return new_map

    def isValid(self, s: str, t: str) -> bool:

        if len(s) != len(t):
            return False

        s_map = self.buildMap(list(s))
        t_map = self.buildMap(list(t))

        # ex: {'r': 1, 'a': 2, 'c': 2, 'e': 1}

        # print(s_map)
        # print(t_map)

        # Compare maps
        for letter, count in s_map.items():
            # print(letter, count)
            if t_map.get(letter) != count:
                return False

        return True
