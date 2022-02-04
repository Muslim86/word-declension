import style from './InputCard.module.css'
import WordInput from "./WordInpute/WordInput";
import {useRef, useState} from "react";
import declensionOfNouns from "../../scripts/wordDeclanse";

const InputCard = () => {
    const [inputWord, setInputWord] = useState('');
    const [error, setError] = useState('');
    const inputRef = useRef();
    const textAreaRef = useRef();
    const selectRef = useRef();

    const onClickHandler = () => {
        textAreaRef.current.value = '...';
        if (inputWord.length < 1 || error.length > 0) {
            setInputWord('');
            inputRef.current.focus();
            return;
        }
        const word = declensionOfNouns(inputWord, selectRef.current.value);
        if (word === 'Error') {
            setError('Введите слово в именительном падеже!');
            return;
        }
        textAreaRef.current.value = word;
        textAreaRef.current.focus();
    }

    return (
        <div className={style.Card}>
            <div className={style.Card__header}>
                <h2>Склонение существительных</h2>
            </div>
            <div className={style.Card__body}>
                <div className={style.leftSide}>
                    <p>Сначала впишите в поле ввода одно слово.
                        Оно должно быть:</p>
                    <ul>
                        <li>Существительным;</li>
                        <li>В единственном числе;</li>
                        <li>Именительном падеже;</li>
                    </ul>
                    <p>Нажмите на кнопку Склонить. Результат появится полем ниже.</p>
                </div>
                <div className={style.Card__rightSide}>
                    <div className={style.Card__rightSide__error}>
                        {error && <span>{error}</span>}
                    </div>
                    <div className={style.Card__rightSide__content}>
                        <WordInput
                            inputRef={inputRef}
                            inputWord={inputWord} setInputWord={setInputWord}
                            error={error} setError={setError}
                        />
                        <select ref={selectRef} title='Выбрать падеж' name="" id="">
                            <option value="Выберите падеж" disabled>Выберите падеж</option>
                            <option value="2">Родительный</option>
                            <option value="3">Дательный</option>
                            <option value="4">Винительный</option>
                            <option value="5">Творительный</option>
                            <option value="6">Предложный</option>
                        </select>
                    </div>
                    <button onClick={onClickHandler}
                            title="Получить склонение слова по выбранному падежу"
                    >Склонить
                    </button>
                    <textarea ref={textAreaRef} title='Результат склонения' cols="30" rows="1" readOnly
                              defaultValue='...'/>
                </div>
            </div>
        </div>
    )
}

export default InputCard;