import { Box, Skeleton, SkeletonText, VStack, HStack } from "@chakra-ui/react";

export const LineChartSkeleton = () => {
  return (
    <VStack
      gap={4}
      p={6}
      border="1px solid"
      borderColor="gray.200"
      borderRadius="md"
      w="1000px"
      maxW="1800px"
      h="400px"
      align="stretch"
    >
      <SkeletonText noOfLines={1} width="200px" />

      <Box flex="1" position="relative">
        <Skeleton height="100%" borderRadius="md" />

        <Box
          position="absolute"
          top="10%"
          left="5%"
          right="5%"
          bottom="15%"
          display="flex"
          alignItems="flex-end"
          justifyContent="space-between"
          px={4}
        >
          {Array.from({ length: 7 }).map((_, i) => (
            <Box key={i} w="6%">
              <Skeleton
                height={`${40 + Math.random() * 180}px`}
                borderRadius="full"
              />
            </Box>
          ))}
        </Box>
      </Box>

      <HStack justify="space-between" px={6}>
        {Array.from({ length: 7 }).map((_, i) => (
          <Skeleton key={i} width="10%" height="14px" />
        ))}
      </HStack>
    </VStack>
  );
};
