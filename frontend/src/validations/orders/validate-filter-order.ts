import { FilterByCreatedAtValues } from "@/models/order";
import * as yup from "yup";

export const filterOrderSchema = yup.object().shape({
  isOpened: yup
    .boolean(),
  attendantId: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : Number(value))),
  createdAt: yup.string().oneOf(Object.values(FilterByCreatedAtValues)),
});
