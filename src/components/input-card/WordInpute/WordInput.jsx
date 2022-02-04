import style from './WordInput.module.css'

const WordInput = (props) => {

    const inputChangeHandler = (value) => {
        props.setInputWord(value.target.value);
    }

    const clearHandler = () => {
        props.setInputWord('');
        props.setError('');
    }

    const validateInput = (value) => {
        const word = value.target.value;
        if (!word) {
            props.setError('');
            return;
        }
        const errors = [];
        if (!word.match(/^[а-яА-ЯёЁ]+$/)) errors.push('Только русские буквы!');
        props.setError(errors.join(''));
    }

    return (
        <div className={props.error.length < 1 ? style.Input__body : style.Input__body__invalid}>
            <input
                ref={props.inputRef}
                onChange={(e) => {
                    inputChangeHandler(e);
                    validateInput(e)
                }}
                type="text"
                value={props.inputWord}
                pattern="^[а-яА-ЯёЁ]+$"
                placeholder="Введите слово..."
            />
            <div onClick={clearHandler} className={style.clear} title="Очистить поле ввода">x</div>
        </div>
    )
}

export default WordInput;