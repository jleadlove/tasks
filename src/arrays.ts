/* eslint-disable @typescript-eslint/no-unused-vars */
import { parseConfigFileTextToJson } from "typescript";
import { inflateSync } from "zlib";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const endList: number[] = [numbers[0], numbers[numbers.length - 1]];
    if (numbers.length === 0) {
        return numbers;
    }
    return endList;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((numbers: number): number => numbers * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((string: string): number =>
        isNaN(parseInt(string, 10)) ? 0 : parseInt(string, 10)
    );
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const noDollars = amounts.map((element: string): string =>
        element.startsWith("$") ? element.slice(1, element.length) : element
    );
    const toNumbers = noDollars.map((element: string): number =>
        isNaN(parseInt(element, 10)) ? 0 : parseInt(element, 10)
    );
    return toNumbers;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const shout = messages.map((message: string): string =>
        message.endsWith("!") ? message.toUpperCase() : message
    );
    const questions = shout.filter(
        (message: string): boolean => !message.endsWith("?")
    );
    return questions;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const lessThanFour = words.filter(
        (word: string): boolean => word.length < 4
    );
    return lessThanFour.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    return colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    } else {
        const expression = [...addends].join("+");
        const sum = [...addends].reduce((a: number, b: number) => a + b, 0);
        return sum + "=" + expression;
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    if (values.some((num: number): boolean => num < 0)) {
        const valuesCopy = [...values];
        const index = [...values].findIndex((num: number): boolean => num < 0);
        const valuesCopy2 = [...values];
        valuesCopy2.splice(index, valuesCopy.length);
        const total = valuesCopy2.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        valuesCopy.splice(index + 1, 0, total);
        return valuesCopy;
    } else {
        const numCopy = [...values];
        const total = numCopy.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        numCopy.splice(values.length, 0, total);
        return numCopy;
    }
}
