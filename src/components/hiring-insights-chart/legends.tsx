import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { Info } from "lucide-react";
import { chartConfig } from "./config";

export const DesktopLegend = () => {
  return (
    <div
      className="flex flex-wrap gap-6 justify-start mt-2"
      role="img"
      aria-label="Chart legend"
    >
      {Object.entries(chartConfig).map(([key, config]) => (
        <div key={key} className="flex items-center gap-2">
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: config.color }}
            aria-hidden="true"
          />
          <span className="text-sm text-muted-foreground font-medium">
            {config.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export const MobileLegendPopover = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="h-8 w-8 p-0"
          aria-label="Show chart legend"
        >
          <Info className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-3" align="end">
        <div className="space-y-2">
          <h4 className="font-medium text-sm mb-2">Legend</h4>
          {Object.entries(chartConfig).map(([key, config]) => (
            <div key={key} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: config.color }}
                aria-hidden="true"
              />
              <span className="text-xs text-muted-foreground">
                {config.label}
              </span>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};