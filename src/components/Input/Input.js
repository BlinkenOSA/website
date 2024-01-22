import Form from 'react-bootstrap/Form';
import style from "./Input.module.scss";
import {useState} from "react";
import {InputGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Input = ({id, type='input', disabled=false, placeholder}) => {
    const [showPassword, setShowPassword] = useState(false)

    const getType = () => {
        switch (type) {
            case 'password':
                return showPassword ? "text" : "password"
            default:
                return type
        }
    }

    switch (type) {
        case 'search':
            return (
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    <Form.Control
                        type={getType()}
                        id={id}
                        disabled={disabled}
                        placeholder={placeholder}
                    />
                </InputGroup>
            )
        case 'input':
            return (
                <div className={style.Input}>
                    <Form.Control
                        type={getType()}
                        id={id}
                        disabled={disabled}
                        placeholder={placeholder}
                    />
                </div>
            )
        case 'password': {
            return (
                <InputGroup className="mb-3">
                    <Form.Control
                        type={'password'}
                        id={id}
                        disabled={disabled}
                        placeholder={placeholder}
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                        Button
                    </Button>
                </InputGroup>
            )
        }
    }
}

export default Input