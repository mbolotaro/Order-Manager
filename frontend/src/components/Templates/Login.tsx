import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import styled from "styled-components"
import * as yup from 'yup'

type Inputs = {
    email: string;
    password: string;
}

const schema = yup.object().shape({
    email: yup
    .string()
    .email('O e-mail deve ser válido!')
    .required('O e-mail deve ser definido!'),
    password: yup
    .string()
    .min(8, 'A senha deve ter no mínimo 8 carácteres!')
    .max(32, 'A senha deve ter no máximo 32 carácteres!')
    .required('A senha deve ser definida!'),
})

export default function Login() {
    const { 
        register, 
        handleSubmit, 
        formState: { errors }, 
        reset
    } = useForm<Inputs>({ resolver: yupResolver(schema)})

    const onSubmitHandler = (data: Inputs) => {
        console.log(data)
        reset()
    }

    return <div>
        <FormTitle>LOGIN</FormTitle>
        <Form onSubmit={handleSubmit(onSubmitHandler)}>
            <FormItem>
                <label htmlFor="email-input">Email: </label>
                <input id="email-input" type="email" {...register('email')}/>
                <FormItemError>{errors.email?.message}</FormItemError>
            </FormItem>
            <FormItem>
                <label htmlFor="password-input">Senha: </label>
                <input id="password" type="password" {...register('password')}/>
                <FormItemError>{errors.password?.message}</FormItemError>
            </FormItem>
            <FormSubmit>Entrar</FormSubmit>
        </Form>
    </div>
}

const FormTitle = styled.h2`
`;

const Form = styled.form`
    width: 80%;
    display: flex;
    flex-direction: column;
`;

const FormItem = styled.div`
    margin-top: 8px;
    flex-direction: column;
    display: flex;
    input {
        border: 0;
        padding: 2px
    };
`;

const FormItemError = styled.span`
    color: red;
    font-size: 12px;
    text-wrap: nowrap;
`

const FormSubmit = styled.button`
    margin-top: 16px;
    padding: 4px;
    background-color: blue;
    border: 0;
    cursor: pointer;
`;