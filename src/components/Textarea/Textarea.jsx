import { Button, Stack, Textarea } from '@chakra-ui/react';
import { Field } from '../ui/field';
import { useForm } from 'react-hook-form';

import style from './Textarea.module.css';

const ChakraTextarea = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form className={style['textarea-form']} onSubmit={onSubmit}>
      <Stack gap="4" align="flex-end">
        <Field
          label="Movie Comment"
          invalid={!!errors.review}
          errorText={errors.review?.message}
        >
          <Textarea
            size="lg"
            variant="outline"
            placeholder="이 작품에 대한 의견을 자유롭게 남겨주세요."
            {...register('review', { required: '작품 리뷰를 작성해주세요' })}
          />
        </Field>
        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  );
};

export default ChakraTextarea;
