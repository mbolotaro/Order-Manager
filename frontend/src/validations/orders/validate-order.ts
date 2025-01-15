import * as yup from 'yup'

export const MAX_NAME_LENGTH = 50;
export const MIN_NAME_LENGTH = 5;

export const orderSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome deve ser definido!")
    .min(
      MIN_NAME_LENGTH,
      `Nome deve ter no mínimo ${MIN_NAME_LENGTH} carácteres!`
    )
    .max(
      MAX_NAME_LENGTH,
      `Nome deve ter no máximo ${MAX_NAME_LENGTH} carácteres!`
    ),
  isOpened: yup.boolean().required("Status é obrigatório!"),
  attendantId: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : Number(value)))
    .when(["isOpened"], {
      is: (value: boolean) => value === false,
      then: (schema) =>
        schema.required(
          "É obrigatório que haja um atendente em um pedido fechado!"
        ),
      otherwise: (schema) => schema.notRequired(),
    }),
});
