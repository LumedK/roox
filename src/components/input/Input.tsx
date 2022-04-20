import { HTMLInputTypeAttribute, memo, useState } from 'react'
import style from './Input.module.scss'

interface Props {
    type?: HTMLInputTypeAttribute
    title: string
    value: any
    required?: boolean
    isTextarea?: boolean
    readonly?: boolean
    setValue?: Function
}

const Input = (props: Props) => {
    const {
        type = 'text',
        title,
        value,
        required = false,
        isTextarea = false,
        readonly = false,
        setValue = () => {}
    } = props
    const [inputValue, setInputValue] = useState(value)
    const onChangeHandler: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (
        event
    ) => {
        setInputValue(event.target.value)
        setValue(event.target.value)
    }

    let inputTag
    if (isTextarea) {
        inputTag = (
            <textarea
                className={style['input-element']}
                required={required}
                value={inputValue}
                onChange={onChangeHandler}
                readOnly={readonly}
                disabled={readonly}
                rows={3}
            />
        )
    } else {
        inputTag = (
            <input
                className={style['input-element']}
                required={required}
                type={type}
                value={inputValue}
                readOnly={readonly}
                disabled={readonly}
                onChange={onChangeHandler}
            />
        )
    }

    return (
        <label className={style.input}>
            <span>{title}</span>
            {inputTag}
        </label>
    )
}

export default memo(Input)
