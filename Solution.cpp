
using namespace std;

class Solution {
    
public:

    bool detectCapitalUse(string word) {
        if (word.length() == 1) {
            return true;
        }

        const int ascii_a = 97;
        const int ascii_A = 65;
        const int alphabet_zeroBased = 25;

        const size_t size = word.length();
        const int lastCharacter = word[size - 1] >= ascii_a ? ascii_a : ascii_A;

        for (int i = size - 2; i >= 1; i--) {
            if (word[i] - lastCharacter < 0 || word[i] - lastCharacter > alphabet_zeroBased) {
                return false;
            }
        }
        return lastCharacter >= ascii_a || word[0] < ascii_a;
    }
};
