import { NgModule } from "@angular/core";
import { FeatherModule } from "angular-feather";
import {
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Film,
  Smile,
  Globe,
  Truck,
  Send,
  Volume2,
  VolumeX,
  ArrowRight
} from "angular-feather/icons";

const icons = {
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Film,
  Smile,
  Globe,
  Truck,
  Send,
  Volume2,
  VolumeX,
  ArrowRight
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule]
})
export class IconsModule {}
