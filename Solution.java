
public class Solution {

    public boolean detectCapitalUse(String word) {
        if (word.length() == 1) {
            return true;
        }

        final int ascii_a = 97;
        final int ascii_A = 65;
        final int alphabet_zeroBased = 25;

        final int size = word.length();
        final int lastCharacter = word.codePointAt(size - 1) >= ascii_a ? ascii_a : ascii_A;

        for (int i = size - 2; i >= 1; i--) {
            if (word.codePointAt(i) - lastCharacter < 0 || word.codePointAt(i) - lastCharacter > alphabet_zeroBased) {
                return false;
            }
        }
        return lastCharacter >= ascii_a || word.codePointAt(0) < ascii_a;
    }
}
