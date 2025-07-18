import { Text } from "@mantine/core";
import { format } from "date-fns";

interface Props {
  dateOfCreation: Date;
}

export const TaskCreationDate = (props: Props) => {
  return (
    <Text size="sm" mb="sm" c={"dimmed"} ta={"right"}>
      {`created at ${format(props.dateOfCreation, "HH:mm - dd MMM yyyy")}`}
    </Text>
  );
};
