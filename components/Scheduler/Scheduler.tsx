import React, { useEffect, useRef } from "react";
import { registerComponent } from "@plasmicapp/host";
import "dhtmlx-scheduler/codebase/dhtmlxscheduler.css";

interface SchedulerProps {
  events: Event[];
  className: string;
}

interface Event {
  start_date: string;
  end_date: string;
  text: string;
  id: number;
}

export function Scheduler(props: SchedulerProps) {
  const { events, className } = props;
  const schedulerContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function loadScheduler() {
      const { scheduler } = await import("dhtmlx-scheduler");
      if (schedulerContainer.current) {
        scheduler.config.header = [
          "day",
          "week",
          "month",
          "date",
          "prev",
          "today",
          "next",
        ];
        scheduler.config.hour_date = "%g:%i %A";
        scheduler.xy.scale_width = 70;
        scheduler.init(schedulerContainer.current, new Date(2023, 4, 26));
        scheduler.clearAll();
        scheduler.parse(events);
      }
    }
    loadScheduler();
  }, []);

  return <div ref={schedulerContainer} className={className} />;
}

export function registerScheduler() {
  registerComponent(Scheduler, {
    name: "Scheduler",
    props: {
      events: {
        type: "array",
      },
    },
    importPath: "@/components/Scheduler",
  });
}
