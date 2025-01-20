import { Stack } from '@chakra-ui/react';
import { Rating } from './rating';

const RatingCustom = () => {
  return (
    <Stack>
      <Rating
        readOnly
        allowHalf
        defaultValue={3.5}
        size="lg"
        colorPalette="yellow"
      />
    </Stack>
  );
};

export default RatingCustom;
