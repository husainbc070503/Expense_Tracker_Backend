import { z } from 'zod';

const ValidateCategory = z.object({
    type: z
        .string({ required_error: "Category type is required" })
        .trim()
        .min(1, { message: 'Category type should not be empty' }),

    color: z
        .string({ required_error: "Color is required" })
        .min(1, { message: 'Color should not be empty' }),
})

export default ValidateCategory;