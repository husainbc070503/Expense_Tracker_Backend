import { z } from 'zod';

const ValidateTransaction = z.object({
    name: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(1, { message: 'Name should not be empty' }),

    category: z
        .string({ required_error: "Category is required" })
        .min(1, { message: 'Category should be chosen' }),

    amount: z
        .string({ required_error: "Amount is required" })
        .min(1, { message: 'Amount should not be empty' }),
})

export default ValidateTransaction;