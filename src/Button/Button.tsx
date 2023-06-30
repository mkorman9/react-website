import './Button.css';
import AddIcon from '../icons/add.svg';

export type ButtonIntent = 'none' | 'add';

export interface ButtonProps {
    text: string;
    intent?: ButtonIntent;
    onClick?: () => void;
}

const Button = (props: ButtonProps) => {
    const onClick = (e: React.MouseEvent<HTMLElement>) => {
        e.currentTarget.blur();
        props.onClick && props.onClick();
    };

    const icon = (() => {
        if (props.intent === 'add') {
            return AddIcon;
        }
    })();

    return (
        <button type='button' className='button' onClick={onClick}>
            <div className='button-content'>
                {(props.intent && props.intent != 'none') &&
                    <img className='button-icon' src={icon} alt='' />
                }
                <span>{ props.text }</span>
            </div>
        </button>
    );
};

export default Button;
