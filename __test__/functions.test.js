import { capitalize, createObj, reverseNum } from "../functions.js"

describe('Testing for capitalize function',() => {
    let hello = capitalize('hello world')
    test('Capitalize returns a string', () => {
        expect(typeof hello).toBe('string')
    })

    test('Capitalizes first letter in string', () => {
        expect(hello[0]).toEqual('H')
    })

    test('returns a string with the same length', () => {
        expect(hello).toHaveLength('hello world'.length)
    })
})

describe('testing for createObj function', () => {
    let obj = createObj('Tara', 26, 'Texas', true)
    test('function returns an object', () => {
        expect(typeof obj).toBe('object')
    })

    test('values of keys are correct', () => {
        expect(obj.name).toEqual('Tara')
        expect(obj.age).toEqual(26)
        expect(obj.state).toEqual('Texas')
        expect(obj.lovesCode).not.toBeFalsy()
    })
})

describe('Testing for reverseNum function', () => {
    let num = reverseNum(1234)
    test('function returns a number', () => {
        expect(typeof num).toBe('number')
    })

    test('function returns the reversed number', () => {
        expect(num).toEqual(4321)
    })
})