
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    if (word.length === 1) {
        return true;
    }

    const ascii_a = 97;
    const ascii_A = 65;
    const alphabet_zeroBased = 25;

    const size = word.length;
    const lastCharacter = word.codePointAt(size - 1) >= ascii_a ? ascii_a : ascii_A;

    for (let i = size - 2; i >= 1; i--) {
        if (word.codePointAt(i) - lastCharacter < 0 || word.codePointAt(i) - lastCharacter > alphabet_zeroBased) {
            return false;
        }
    }
    return lastCharacter >= ascii_a || word.codePointAt(0) < ascii_a;
};
