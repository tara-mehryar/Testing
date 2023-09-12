import { capitalize,createObj,reverseNum } from "../functions.js"

describe('Testing for capitalize function',() => {
    let hello = capitalize('hello world')
    test('Capitalize returns a string', () => {
        expect(typeof hello).toBe('string')
    })

    test('Capitalizes first letter in string', () => {
        expect(hello[0]).toEqual('H')
    })

    
})