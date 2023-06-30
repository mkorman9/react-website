import './Button.css';

export interface ButtonProps {
    text: string;
    onClick?: () => void;
}

const Button = (props: ButtonProps) => {
    const onClick = (e: React.MouseEvent<HTMLElement>) => {
        e.currentTarget.blur();
        props.onClick && props.onClick();
    };

    return (
        <button type='button' className='button' onClick={onClick}>
            { props.text }
        </button>
    );
};

export default Button;
