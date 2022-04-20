import style from './Button.module.scss'

interface ButtonProps {
    type?: 'submit' | 'disabled' | 'default'
    title: string
    onClick?: any
    className?: string
    pressed?: boolean
    form?: string
}

const Button = (props: ButtonProps) => {
    const {
        className = '',
        type = 'default',
        title,
        pressed = false,
        onClick = () => {},
        form = undefined
    } = props

    const btnClassName = `${style.button} ${
        type === 'submit' ? style['submit'] : style['default']
    } ${pressed ? style['pressed'] : ''} ${className}`

    return (
        <button
            className={btnClassName}
            disabled={type === 'disabled'}
            onClick={onClick}
            type={form ? 'submit' : 'button'}
            form={form ? form : ''}
        >
            {title}
        </button>
    )
}

export default Button
