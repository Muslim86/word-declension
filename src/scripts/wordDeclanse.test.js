import wordDeclanse from "./wordDeclanse";
import * as assert from "assert";

describe('wordDeclanse', () => {
    it('склоняет существительное', () => {
        assert.equal(wordDeclanse('Петя', 2), 'Пети')
        assert.equal(wordDeclanse('Индеец', 3), 'Индейцу')
        assert.equal(wordDeclanse('Мама', 2), 'Мамы')
        assert.equal(wordDeclanse('Ворона', 4), 'Ворону')
        assert.equal(wordDeclanse('Страх', 2), 'Страха')
        assert.equal(wordDeclanse('Верблюд', 5), 'Верблюдом')
        assert.equal(wordDeclanse('Армия', 5), 'Армией')
        assert.equal(wordDeclanse('Въезд', 6), 'Въезде')
        assert.equal(wordDeclanse('Панда', 2), 'Панды')
    })

})