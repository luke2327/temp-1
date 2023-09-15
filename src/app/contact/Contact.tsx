'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Textarea,
  useDisclosure,
} from '@nextui-org/react';
import ModalThanks from './ModalThanks';
import { handleConfetti } from '@/config/handleConfetti';
import { EmailForm } from '@/types/Contact';
import { validations } from '@/config/validations';

export default function Contact() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  return (
    <div className="w-full max-w-[78rem] p-2 md:p-6 flex flex-col justify-center items-center min-w-[50%] rounded-2xl">
      <Card className="w-full">
        <CardHeader className="flex flex-col items-center justify-center">
          <h1 className="text-xl font-bold mb-4">찬조 신청</h1>
          <p className="text-sm opacity-50 mx-4">
            찬조, 공연 신청을 위해 아래 정보를 작성해주세요.
          </p>
        </CardHeader>
        <CardBody className="w-full">
          <form
            className="min-w-full flex flex-col gap-4"
            onSubmit={handleSubmit((data) =>
              sendContactEmail(data as EmailForm)
                .then((res) => {
                  reset();
                  handleConfetti();
                  setIsSuccess(true);
                })
                .catch((err) => {})
                .finally(() => onOpen())
            )}
          >
            <Input
              {...register('name', { pattern: validations.name.pattern })}
              isRequired
              isClearable
              type="text"
              label="단체 or 성함"
              labelPlacement="outside"
              placeholder="수원하이텍고 홍길동"
              color={errors.name && 'danger'}
              errorMessage={errors.name && validations.name.errorMessage}
              maxLength={20}
            />
            <Input
              {...register('phone', { pattern: validations.phone.pattern })}
              color={errors.phone && 'danger'}
              errorMessage={errors.phone && validations.phone.errorMessage}
              isRequired
              isClearable
              type="phone"
              label="전화번호"
              labelPlacement="outside"
              placeholder="010-xxxx-xxxx"
            />
            <Input
              {...register('location', {
                pattern: validations.location.pattern,
              })}
              color={errors.location && 'danger'}
              errorMessage={
                errors.location && validations.location.errorMessage
              }
              isRequired
              isClearable
              type="text"
              label="지역"
              labelPlacement="outside"
              placeholder="서울시 강남구"
            />
            <Input
              {...register('date')}
              type="datetime-local"
              label="date"
              labelPlacement="outside"
              placeholder=" "
            />
            <Textarea
              {...register('etc', { pattern: validations.etc.pattern })}
              color={errors.etc && 'danger'}
              errorMessage={errors.etc && validations.etc.errorMessage}
              label="요청사항"
              labelPlacement="outside"
              placeholder="요청사항을 적어주세요."
              className="w-full"
              rows={3}
            />

            <Button
              type="submit"
              className="bg-gradient-to-tr from-purple-500 to-blue-500"
              color="primary"
              variant="shadow"
              isDisabled={isSubmitting}
            >
              이메일 전송
            </Button>
          </form>
        </CardBody>
      </Card>
      <ModalThanks
        isSuccess={isSuccess}
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
      ></ModalThanks>
    </div>
  );
}

export async function sendContactEmail(emailForm: EmailForm) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(emailForm),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || '서버 요청에 실패함');
  }

  return data;
}
