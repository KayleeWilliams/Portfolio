"use client";

import { BentoItem } from "@/types/bento";
import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import SortableItem from "@/components/base/SortableItem";
import BentoCard from "./BentoCard";

interface BentoGridProps {
  items: BentoItem[];
  setItems: React.Dispatch<React.SetStateAction<BentoItem[]>>;
}

export default function BentoGrid({ setItems, items }: BentoGridProps) {
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over?.id);

        const newItems = [...items];
        const [removed] = newItems.splice(oldIndex, 1);
        newItems.splice(newIndex, 0, removed);

        return newItems;
      });
    }
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <SortableContext items={items} strategy={rectSortingStrategy}>
          {items.map((item) => (
            <SortableItem id={item.id} key={item.id}>
              <BentoCard item={item} />
            </SortableItem>
          ))}
        </SortableContext>
      </div>
    </DndContext>
  );
}
