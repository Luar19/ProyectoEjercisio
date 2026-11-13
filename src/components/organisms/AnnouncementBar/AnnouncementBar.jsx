import { Bar } from "@/components/organisms/AnnouncementBar/AnnouncementBar.styles.js";
import { ANNOUNCEMENT_TEXT } from "@/components/organisms/AnnouncementBar/AnnouncementBar.constants.js";

export default function AnnouncementBar() {
  return <Bar>{ANNOUNCEMENT_TEXT}</Bar>;
}
