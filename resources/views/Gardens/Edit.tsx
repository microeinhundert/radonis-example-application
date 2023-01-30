import { HydrationRoot, useI18n } from "@microeinhundert/radonis";
import type Garden from "App/Models/Garden";
import GardenForm from "Components/Gardens/GardenForm.island";
import Header from "Components/Header.island";
import { BaseLayout } from "Layouts/Base";

interface EditProps {
  garden: Garden;
}

function Edit({ garden }: EditProps) {
  const { formatMessage$ } = useI18n();

  const messages = {
    title: formatMessage$("gardens.edit.title", { name: garden.name }),
  };

  return (
    <BaseLayout>
      <Header title={messages.title} />
      <HydrationRoot>
        <GardenForm garden={garden} />
      </HydrationRoot>
    </BaseLayout>
  );
}

export { Edit };
