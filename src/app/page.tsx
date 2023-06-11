"use client";

import {
  Button,
  ContentLayout,
  Modal,
  PageTitle,
} from "@/components";

export default function Home() {

  return (
    <>
      <div className="flex justify-between items-center flex-wrap gap-4">
        <PageTitle>TAREFAS PENDENTES</PageTitle>
        <Button
          inputValue="+ Nova tarefa"
          handleClick={() => console.log('')
          }
        />
      </div>
      <ContentLayout>Content</ContentLayout>
    </>
  );
}
