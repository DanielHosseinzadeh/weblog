'use client'
import Image from "next/image";
import { Button,Input, Textarea } from "@nextui-org/react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the validation schema
const formSchema = z.object({
  FullName: z
    .string({ required_error: 'نام و نام خانوادگی نمیتواند خالی باشد' })
    .min(3, { message: "نام و نام خانوادگی باید بیشتر از 3 حرف باشند" }),
  Email: z
    .string({ required_error: 'ایمیل نمیتواند خالی باشد' })
    .email({ message: 'ایمیل وارد شده معتبر نیست' }),
    Mobile: z
    .string()
    .optional()
    .refine((val) => !val || /^[0-9]{10,15}$/.test(val), {
      message: "شماره موبایل باید بین 10 تا 15 رقم باشد",
    }),
  Message: z
    .string({ required_error: 'پیام نمیتواند خالی باشد' })
    .min(3, { message: 'پیام شما باید بیشتر از 3 حرف باشد ' }),
});

type IFormInputs = z.infer<typeof formSchema>;

function Contact() {
  // Initialize useForm with zodResolver
  const { control, handleSubmit, formState: { errors }, } = useForm<IFormInputs>({
    resolver: zodResolver(formSchema),
  });

  // Define onSubmit handler
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log("Form data:", data);
  };

  return (
    <section className="grid gap-10 md:grid-cols-2 sm:grid-cols-1">
      <div className="grid items-center" dir="rtl">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          {/* FullName */}
          <Controller
            name="FullName"
            control={control}
            defaultValue="" // Ensure default value for controlled inputs
            render={({ field }) => (
              <Input
                {...field}
                isInvalid={!!errors.FullName}
                errorMessage={errors?.FullName?.message}
                variant="flat"
                size="lg"
                label="نام و نام خانوادگی"
                isRequired
              />
            )}
          />

          {/* Email */}
          <Controller
            name="Email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                isInvalid={!!errors.Email}
                errorMessage={errors?.Email?.message}
                variant="flat"
                size="lg"
                label="ایمیل"
                isRequired
              />
            )}
          />

          {/* Mobile */}
          <Controller
            name="Mobile"
            control={control}
            defaultValue="" // Optional field, so it's safe to default to empty
            render={({ field }) => (
              <Input
                {...field}
                isInvalid={!!errors.Mobile}
                errorMessage={errors?.Mobile?.message}
                variant="flat"
                size="lg"
                label="موبایل"
              />
            )}
          />

          {/* Message */}
          <Controller
            name="Message"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Textarea
                {...field}
                isInvalid={!!errors.Message}
                errorMessage={errors?.Message?.message}
                variant="flat"
                size="lg"
                label="پیام"
                isRequired
              />
            )}
          />

          {/* Submit Button */}
          <Button type="submit" variant="solid" color="secondary" className="text-xl">
            ارسال
          </Button>
        </form>
        
        
      </div>

      {/* Image Section */}
      <div className="relative w-full h-96 md:h-auto">
        <Image
          src='/pexels-negativespace-33999.jpg'
          className="object-contain"
          alt="contact pic"
          fill
        />
      </div>
    </section>
  );
}

export default Contact;
