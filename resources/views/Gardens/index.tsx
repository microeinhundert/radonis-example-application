import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { HydrationRoot, useI18n } from "@microeinhundert/radonis";
import type Garden from "App/Models/Garden";
import Button, { ButtonColor } from "Components/Button.island";
import GardensList from "Components/Gardens/GardensList.island";
import Header from "Components/Header.island";
import { BaseLayout } from "Layouts/Base";

interface IndexProps {
  gardens: Garden[];
}

function Index({ gardens }: IndexProps) {
  const { formatMessage$ } = useI18n();

  const messages = {
    title: formatMessage$("gardens.index.title"),
    actions: {
      create: formatMessage$("gardens.index.actions.create"),
    },
  };

  return (
    <BaseLayout>
      <Header
        actions={
          <>
            <Button.Link color={ButtonColor.Emerald} icon={PlusIcon} to$="gardens.create">
              {messages.actions.create}
            </Button.Link>
          </>
        }
        title={messages.title}
      />
      <HydrationRoot>
        <GardensList gardens={gardens} />
      </HydrationRoot>
    </BaseLayout>
  );
}

export { Index };
export { Create } from "./Create";
export { Edit } from "./Edit";
export { Show } from "./Show";
